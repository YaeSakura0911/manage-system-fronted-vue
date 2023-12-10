import axios from 'axios'

// 创建 axios 实例
export const request = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
})