import {request} from '@/utils/request'

/**
 * 用户登录
 * @param {*} form 登录表单
 * @returns 
 */
export function login(form) {
    return request.post('/user/login', form)
}

export function logout() {

}