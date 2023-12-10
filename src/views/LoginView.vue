<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { usePermissionStore } from '@/stores/permission';
import { login } from '@/api/user';

const router = useRouter()
const permission = usePermissionStore()
const loginForm = reactive({
    username: '',
    password: ''
})

/**
 * 
 */
function handleLogin() {

    login(loginForm).then(resp => {
        console.log('----- 用户登录 -----', resp)
        if (resp.status == 200) {
            sessionStorage.setItem('name', '管理员')

            // TODO: 查询权限列表
            permission.getPermissions()

            router.push({ path: '/dashboard' })
        }
    })
}
</script>

<template>
    <label for="username">用户名</label>
    <input id="username" name="username" v-model="loginForm.username" />
    <label for="password">密码</label>
    <input id="password" name="password" v-model="loginForm.password" />
    <label for="remember">记住我</label>
    <input for="remember" type="checkbox" name="remember" id="remember" />
    <button type="submit" @click="handleLogin">登录</button>

    {{ loginForm }}
</template>

<style scoped></style>
