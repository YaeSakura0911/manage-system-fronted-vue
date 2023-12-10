import { defineStore } from "pinia"
import { ref } from 'vue'
import { getPermissionList } from "@/api/permission"

export const usePermissionStore = defineStore('permission', () => {

    const permissions = ref([])

    /**
     * 获取权限列表
     */
    function getPermissions() {
        getPermissionList().then(resp => {
            console.log('----- 获取权限列表 -----', resp)
            if (resp.status === 200) {
                permissions.value = resp.data
            }
        })
    }

    /**
     * 判断是否有权限
     * @param {*} permission 
     */
    function hasPermission(permission) {
        return permissions.value.includes(permission)
    }

    return { getPermissions, hasPermission }
})