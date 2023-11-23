import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {
                title: '登录',
                permission: []
            },
            component: LoginView
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/HomeView.vue'),
            children: [
                {
                    path: '/home/',
                    redirect: '/home/dashboard/workbench'
                },
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    children: [
                        {
                            path: 'workbench',
                            name: 'Workbench',
                            component: () => import('@/views/WorkbenchView.vue'),
                            meta: {
                                title: '工作台',
                            },
                        },
                        {
                            path: 'analysis',
                            name: 'Analysis',
                            component: () => import('@/views/AnalysisView.vue'),
                            meta: {
                                title: '分析页',
                            },
                        }
                    ]
                },
                {
                    path: '/task',
                    name: 'Task',
                    component: () => import('@/views/TaskView.vue'),
                    meta: {
                        title: '任务管理'
                    }
                },
                {
                    path: '/task/detail/:id',
                    name: 'TaskDetail',
                    component: () => import('@/views/TaskDetailView.vue'),
                    meta: {
                        title: '任务详情'
                    }
                },
                {
                    path: '/project',
                    name: 'Project',
                    component: () => import('@/views/ProjectView.vue'),
                    meta: {
                        title: '项目管理'
                    }
                },
                {
                    path: '/setting',
                    name: 'Setting',
                    children: [
                        {
                            path: 'user',
                            name: 'User',
                            component: () => import('@/views/UserView.vue'),
                            meta: {
                                title: '用户管理'
                            }
                        },
                        {
                            path: 'role',
                            name: 'Role',
                            component: () => import('@/views/RoleView.vue'),
                            meta: {
                                title: '角色管理'
                            }
                        },
                        {
                            path: 'department',
                            name: 'Department',
                            component: () => import('@/views/DepartmentView.vue'),
                            meta: {
                                title: '部门管理'
                            }
                        },
                        {
                            path: 'job',
                            name: 'Job',
                            component: () => import('@/views/JobView.vue'),
                            meta: {
                                title: '岗位管理'
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

/**
 * 路由守卫
 */
router.beforeEach(async (to, from) => {
    // 如果匹配路径为空
    if (to.fullPath == '/') {
        // 如果name为空
        if (sessionStorage.getItem('name') != undefined) {
            // 跳转去登录
            return '/login'
        }
        else {
            // 跳转去工作台
            return '/dashboard/workbench'
        }
    }
})

export default router
