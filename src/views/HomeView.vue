<script setup>
import { h, onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { DashboardOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons-vue'

const collapsed = ref(false)
const route = useRoute()
const router = useRouter()
const breadcrumb = {
    routes: [
        {
            path: 'home',
            breadcrumbName: '首页'
        },
        {
            path: 'dashboard',
            breadcrumbName: '仪表盘'
        },
        {
            path: 'workbench',
            breadcrumbName: '工作台'
        }
    ],
    itemRender(route, paths) {
        console.log(route, paths)
        console.log(breadcrumb.routes.indexOf(route))
        console.log('routes', breadcrumb.routes)
    }
}

onMounted(() => {
    console.log(route.fullPath)
    console.log(router.getRoutes())
})
</script>

<template>
    <a-config-provider>
        <a-layout>
            <a-layout-sider v-model:collapsed="collapsed" theme="light" breakpoint="lg" collapsed-width="0" :trigger="null"
                collapsible>
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
                    </a-sub-menu>

                </a-menu>
            </a-layout-sider>
            <a-layout>
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
                                    <a-avatar></a-avatar>
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
                <a-layout-content>
                    <a-page-header :ghost="false" :title="route.meta.title" :breadcrumb="breadcrumb">

                    </a-page-header>
                    <RouterView />
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

.ant-dropdown-trigger :hover {
    background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}
</style>