<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumb = {
    routes: [
    {
        breadcrumbName: '首页',
    },
    {
        breadcrumbName: '仪表盘'
    }
]
}
</script>

<template>
    <a-page-header :ghost="false" :title="route.meta.title" :breadcrumb="breadcrumb">
        <template #extra>
            <slot name="extra"></slot>
        </template>
        <!-- TODO: 只有工作台会显示下面内容 -->
        <a-row justify="space-between">
            <a-col>
                <a-avatar :src="avatarUrl" :size="64"></a-avatar>
                <a-typography-text>早上好，管理员</a-typography-text>
            </a-col>

            <a-col>
                <a-space>
                    <template #split>
                        <a-divider type="vertical" />
                    </template>
                    <a-statistic title="项目数" :value="20"></a-statistic>
                    <a-statistic title="任务数" :value="58">
                        <template #suffix>
                            <span>/ 100</span>
                        </template>
                    </a-statistic>
                </a-space>
            </a-col>
        </a-row>
    </a-page-header>
</template>

<style scoped></style>