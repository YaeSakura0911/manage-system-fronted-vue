<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const loginForm = reactive({
    username: '',
    password: ''
})

function handleLogin() {
    sessionStorage.setItem('id', 1)

    router.push({ path: '/dashboard' })
}
</script>

<template>
    <label for="username">用户名</label>
    <input id="username" name="username" v-model="loginForm.username" />
    <label for="password">密码</label>
    <input id="password" name="password" v-model="loginForm.password" />
    <button type="submit" @click="handleLogin">登录</button>

    {{ loginForm }}
</template>

<style scoped></style>
