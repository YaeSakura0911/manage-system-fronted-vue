<script setup>
import { ref, reactive } from 'vue'
import { PlusOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { message, Modal } from 'ant-design-vue'

const showAddShortcutsModal = ref(false)
const showEditShortcutsModal = ref(false)

/**
 * 项目数据
 */
const projectData = ref([

])
/**
 * 快捷方式数据
 */
const shortcutsData = ref([
    {
        description: '用户管理',
        url: '/setting/user'
    },
    {
        description: '角色管理',
        url: '/setting/role'
    }
])
/**
 * 任务数据
 */
const taskData = ref([
    {
        title: '测试任务一',
        time: ''
    }
])
/**
 * 动态数据
 */
const trendsData = [
    {
        avatar: '',
        name: '管理员',
        type: 3,
        content: '任务一',
        time: '2023-11-20 15:36:42'
    },
    {
        avatar: '',
        name: '管理员',
        type: 1,
        content: '项目一',
        time: '2023-11-19 10:25:35',
    },
    {
        avatar: '',
        name: '管理员',
        type: 2,
        content: '项目一',
        time: '2023-11-18 09:35:46',
    },
    {
        avatar: '',
        name: '管理员',
        type: 0,
        content: '项目一',
        time: '2023-11-18 09:00:24'
    }
]

/**
 * 添加快捷方式表单
 */
const addShortcutsForm = reactive({
    description: '',
    url: ''
})


/**
 * 添加快捷方式确认按钮
 */
function handleAddShortcutsConfirm() {
    shortcutsData.value.push(addShortcutsForm)
    message.success('快捷方式添加成功')
    showAddShortcutsModal.value = false
    console.log(shortcutsData.value.length)
}
function handleDeleteShortcuts(index) {
    console.log(index)
    Modal.confirm({
        title: '确认删除'
    })
}
</script>

<template>
    <a-row :gutter="[16, 16]">
        <!-- 进行中的项目 -->
        <a-col :xs="24" :lg="16">
            <a-card title="进行中的项目">
                <template #extra>
                    <router-link to="/project">全部项目</router-link>
                </template>
                <a-card-grid>
                    <a-typography-text strong>项目名称</a-typography-text>
                    <a-typography-text type="secondary">2023-11-18</a-typography-text>
                </a-card-grid>
            </a-card>
        </a-col>

        <!-- 快捷方式 -->
        <a-col :xs="24" :lg="8">
            <a-card title="快捷方式" :bordered="false">
                <template #extra>
                    <a-typography-link @click="() => (showEditShortcutsModal = !showEditShortcutsModal)">管理</a-typography-link>
                </template>
                <a-card-grid v-for="shortcuts in shortcutsData">
                    <a-typography-link :href="shortcuts.url">{{ shortcuts.description }}</a-typography-link>
                </a-card-grid>
                <a-card-grid v-if="shortcutsData.length < 8" @click="() => (showAddShortcutsModal = !showAddShortcutsModal)">
                    <plus-outlined />
                    添加
                </a-card-grid>
            </a-card>
        </a-col>

        <!-- 进行中的任务 -->
        <a-col :xs="24" :lg="16">
            <a-card title="进行中的任务">
                <template #extra>
                    <router-link to="/task">全部任务</router-link>
                </template>
                <a-list :data-source="taskData">
                    <template #renderItem="{ item }">
                        <a-typography-text strong>{{ item.title }}</a-typography-text>
                    </template>
                </a-list>
            </a-card>
        </a-col>

        <!-- 动态 -->
        <a-col :xs="24" :lg="8">
            <a-card title="动态" :bordered="false">
                <a-list :data-source="trendsData">
                    <template #renderItem="{ item }">
                        <a-list-item>
                            <a-list-item-meta :description="item.time">
                                <template #avatar>
                                    <a-avatar></a-avatar>
                                </template>
                                <template #title>
                                    <a-typography-text>
                                        <a-typography-link>{{ item.name }}</a-typography-link>
                                        <span v-if="item.type == 0"> 创建</span>
                                        <span v-else-if="item.type == 1"> 删除</span>
                                        <span v-else-if="item.type == 2"> 更新</span>
                                        <span v-else-if="item.type == 3"> 提交</span>了
                                        <a-typography-link> {{ item.content }}</a-typography-link>
                                    </a-typography-text>
                                </template>
                            </a-list-item-meta>
                        </a-list-item>
                    </template>
                </a-list>
            </a-card>
        </a-col>

    </a-row>

    {{ shortcutsData }}

    <a-modal title="添加快捷方式" v-model:open="showAddShortcutsModal" @ok="handleAddShortcutsConfirm">
        <a-form v-model="addShortcutsForm">
            <a-form-item label="说明">
                <a-input v-model:value="addShortcutsForm.description" />
            </a-form-item>
            <a-form-item label="地址">
                <a-input v-model:value="addShortcutsForm.url" />
            </a-form-item>
        </a-form>
        {{ addShortcutsForm }}
    </a-modal>
    <a-modal title="管理快捷方式" v-model:open="showEditShortcutsModal">
        <a-list :data-source="shortcutsData">
            <template #renderItem="{ item, index }">
                <a-list-item>
                    {{ item.description }}
                    <template #actions>
                        <a-typography-link>编辑</a-typography-link>
                        <a-typography-link type="danger" @click="handleDeleteShortcuts(index)">删除</a-typography-link>
                    </template>
                </a-list-item>
            </template>
        </a-list>
    </a-modal>
</template>

<style scoped>
.ant-card-grid {
    width: 25%;
    text-align: center;
}

.ant-card-grid:hover {
    cursor: pointer;
}

.ant-list-item {
    padding: 12px
}
</style>