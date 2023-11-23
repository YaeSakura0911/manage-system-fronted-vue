<script setup>
import { h, onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { CheckOutlined, DashboardOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ProjectOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons-vue'
import PageHeader from '@/components/PageHeader.vue'

const collapsed = ref(false)
const route = useRoute()
const router = useRouter()

const avatarUrl = 'https://www.antdv.com/assets/logo.1ef800a8.svg'
const name = '管理员'

onMounted(() => {
    console.log(route.fullPath)
    console.log(route.fullPath == '/dashboard/workbench')
    console.log(router.getRoutes())
})

watch(() => route.fullPath, (newPath) => {
    switch (newPath) {
        case '/task':
            break
        case '/project':
            break
    }
})
</script>

<template>
    <a-config-provider>
        <a-layout>
            <!-- 侧边栏 -->
            <a-layout-sider v-model:collapsed="collapsed" breakpoint="xs" collapsed-width="0" theme="light" :trigger="null" collapsible>
                <div class="logo"></div>
                <a-menu mode="inline">
                    <a-sub-menu key="dashboard">
                        <template #title>
                            <dashboard-outlined />
                            <span>仪表盘</span>
                        </template>

                        <a-menu-item key="workbench">
                            <router-link to="/dashboard/workbench">工作台</router-link>
                        </a-menu-item>
                        <a-menu-item key="analysis">
                            <router-link to="/dashboard/analysis">分析页</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="task">
                        <check-outlined />
                        <span>
                            <router-link to="/task">任务管理</router-link>
                        </span>
                    </a-menu-item>
                    <a-menu-item key="project">
                        <project-outlined />
                        <span>
                            <router-link to="/project">项目管理</router-link>
                        </span>
                    </a-menu-item>
                    <a-sub-menu key="setting">
                        <template #title>
                            <setting-outlined />
                            <span>基本设置</span>
                        </template>

                        <a-menu-item key="user">
                            <router-link to="/setting/user">用户管理</router-link>
                        </a-menu-item>
                        <a-menu-item key="role">
                            <router-link to="/setting/role">角色管理</router-link>
                        </a-menu-item>
                        <a-menu-item key="department">
                            <router-link to="/setting/department">部门管理</router-link>
                        </a-menu-item>
                        <a-menu-item key="job">
                            <router-link to="/setting/job">岗位管理</router-link>
                        </a-menu-item>
                    </a-sub-menu>

                </a-menu>
            </a-layout-sider>
            <a-layout>
                <!-- 顶栏 -->
                <a-layout-header style="background: #fff; padding: 0">
                    <a-row justify="space-between" align="center">
                        <a-col>
                            <div class="trigger">
                                <menu-unfold-outlined v-if="collapsed" class="" @click="() => (collapsed = !collapsed)" />
                                <menu-fold-outlined v-else class="" @click="() => (collapsed = !collapsed)" />
                            </div>
                        </a-col>

                        <a-col>
                            <a-dropdown>
                                <a-space>
                                    <a-avatar :src="avatarUrl">{{ name }}</a-avatar>
                                    <a-typography-text type="secondary">
                                        管理员
                                    </a-typography-text>
                                </a-space>

                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <user-outlined />
                                            个人中心
                                        </a-menu-item>
                                        <a-menu-divider />
                                        <a-menu-item>
                                            <logout-outlined />
                                            注销
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </a-col>
                    </a-row>
                </a-layout-header>

                <!-- 内容 -->
                <a-layout-content>
                    <a-page-header :ghost="false" :title="route.meta.title" :breadcrumb="breadcrumb">
                        <template #extra>
                            <slot name="extra"></slot>
                        </template>
                        <!-- TODO: 只有工作台会显示下面内容 -->
                        <!-- <a-row justify="space-between">
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
                        </a-row> -->
                    </a-page-header>

                    <a-layout :style="{padding: '24px', minHeight: '100%'}">
                        <RouterView />
                    </a-layout>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>


    </a-config-provider>
</template>

<style scoped>
.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger :hover {
    color: #1890ff;
}

.ant-dropdown-trigger {
    padding: 0 16px;
    transition: background-color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.ant-dropdown-trigger:hover {
    background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}
</style>