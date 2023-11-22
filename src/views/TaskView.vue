<script setup>
import { ref } from 'vue'

const expand = ref(false)
const columns = [
    {
        title: '任务标题'
    },
    {
        title: '负责人'
    },
    {
        title: '状态'
    },
    {
        title: '截至时间'
    },
    {
        title: '操作'
    }
]
const dataSource = [

]
const pagination = {
    current: 1,
    pageSize: 10,
    total: 100
}
</script>

<template>
    <a-layout style="padding: 24px; background: #fff; border-radius: 4px;">
        <a-form>
            <a-row :gutter="16">
                <a-col :sm="24" :lg="6">
                    <a-form-item label="标题">
                        <a-input allow-clear />
                    </a-form-item>
                </a-col>
                <a-col :sm="24" :lg="6">
                    <a-form-item label="部门">
                        <a-tree-select allow-clear></a-tree-select>
                    </a-form-item>
                </a-col>
                <a-col :sm="24" :lg="6">
                    <a-form-item label="状态">
                        <a-select allow-clear>
                            <a-select-option :value="0">未发布</a-select-option>
                            <a-select-option :value="1">已发布</a-select-option>
                        </a-select>
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
                <a-button type="primary">新建任务</a-button>
            </a-col>
        </a-row>
        
        <br />

        <a-table :columns="columns" :dataSource="dataSource" :pagination="pagination">
            <template #bodyCell="{ column, record }">
            </template>
        </a-table>
    </a-layout>
</template>

<style scoped></style>