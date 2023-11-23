<script setup>
import { ref } from 'vue'
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue'

const expand = ref(false)
const columns = [
    {
        title: '姓名'
    },
    {
        title: '性别'
    },
    {
        title: '部门'
    },
    {
        title: '角色'
    },
    {
        title: '状态'
    },
    {
        title: '操作'
    }
]
const dataSource = []
</script>

<template>
    <a-layout style="padding: 24px; background: #fff; border-radius: 4px;">
        <a-form>
            <a-row :gutter="16">
                <a-col :sm="24" :lg="6">
                    <a-form-item label="姓名">
                        <a-input allow-clear />
                    </a-form-item>
                </a-col>
                <a-col :sm="24" :lg="6">
                    <a-form-item label="性别">
                        <a-select allow-clear>
                            <a-select-option :value="0">男</a-select-option>
                            <a-select-option :value="1">女</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :sm="24" :lg="6">
                    <a-form-item label="部门">
                        <a-tree-select allow-clear></a-tree-select>
                    </a-form-item>
                </a-col>
                <a-col :sm="24" :lg="6">
                    <a-form-item label="角色">
                        <a-select allow-clear>

                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col v-show="expand" :sm="24" :lg="6">
                    <a-form-item label="状态">
                        <a-select allow-clear>
                            <a-select-option :value="0">停用</a-select-option>
                            <a-select-option :value="1">启用</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row>
                <a-col :span="24" style="text-align: right;">
                    <a-space>
                        <a-button type="primary">搜索</a-button>
                        <a-button>重置</a-button>
                        <a-typography-link @click="() => expand = !expand">
                            <template v-if="expand">
                                <UpOutlined /> 收回
                            </template>
                            <template v-else>
                                <DownOutlined /> 展开
                            </template>
                        </a-typography-link>
                    </a-space>
                </a-col>
            </a-row>
        </a-form>

        <br />

        <a-table :columns="columns" :data-source="dataSource">
            <template #bodyCell="{ column, record }">

            </template>
        </a-table>

    </a-layout>
</template>

<style scoped></style>