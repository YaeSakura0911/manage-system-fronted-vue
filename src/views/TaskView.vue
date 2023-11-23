<script setup>
import { ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'

const expand = ref(false)
const showTaskModal = ref(false)
const columns = [
    {
        title: '任务标题',
        dataIndex: 'title'
    },
    {
        title: '负责人'
    },
    {
        title: '状态'
    },
    {
        title: '截止时间'
    },
    {
        key: 'action',
        title: '操作'
    }
]
const dataSource = [
    {
        id: '',
        title: '测试任务',
        responser: '',
        status: 0,
        deadline: '2023-12-30 23:59:59'
    }
]
const pagination = {
    current: 1,
    pageSize: 10,
    total: 100
}

function handleCreate() {
    showTaskModal.value = true
}
</script>

<template>
    <a-layout style="padding: 24px; background: #fff; border-radius: 4px;">
        <a-form>
            <a-row :gutter="16">
                <a-col :xs="24" :lg="6">
                    <a-form-item label="任务标题">
                        <a-input allow-clear />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :lg="6">
                    <a-form-item label="所属部门">
                        <a-tree-select allow-clear></a-tree-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :lg="6">
                    <a-form-item label="任务状态">
                        <a-select allow-clear>
                            <a-select-option :value="0">未发布</a-select-option>
                            <a-select-option :value="1">已发布</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :lg="6">
                    <a-form-item label="截止时间">
                        <a-date-picker show-time></a-date-picker>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24" style="text-align: right;">
                    <a-space>
                        <a-button type="primary">搜索</a-button>
                        <a-button>重置</a-button>
                    </a-space>
                </a-col>
            </a-row>
        </a-form>

        <br />

        <a-row>
            <a-col>
                <a-button type="primary" @click="handleCreate">新建任务</a-button>
            </a-col>
        </a-row>

        <br />

        <a-table :columns="columns" :dataSource="dataSource" :scroll="{ x: 'max-content' }" :pagination="pagination">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'action'">

                </template>
            </template>
        </a-table>
    </a-layout>

    <a-modal v-model:open="showTaskModal" title="新建任务" cancelText="取消" okText="保存" :maskClosable="false">
        <div style="padding: 24px;">
            <a-form :label-col="{style : {width: '72px'}}">
                <a-form-item label="任务标题">
                    <a-input />
                </a-form-item>
                <a-form-item label="负责人">
                    <a-tree-select>

                    </a-tree-select>
                </a-form-item>
                <a-form-item label="截止时间">
                    <a-date-picker show-time></a-date-picker>
                </a-form-item>
                <a-form-item label="任务内容">
                    <a-textarea>

                    </a-textarea>
                </a-form-item>

                <a-form-item label="附件">
                    <a-upload>
                        <a-button>
                            <upload-outlined />
                            点击上传
                        </a-button>
                    </a-upload>
                </a-form-item>
            </a-form>
        </div>

    </a-modal>
</template>

<style scoped>
.ant-picker {
    width: 100%;
}
</style>