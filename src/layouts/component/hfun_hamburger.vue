<!--
 * @Description: 汉堡包组件，用于点击收起侧边栏
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-08 16:29:20
-->

<template>
    <el-icon class='hamburger' @click="changeIsOpenSideBarState" v-if="$store.state.hfun_tag.mIsOpenSideBar == 'true'"><expand /></el-icon>
    <el-icon class='hamburger' @click="changeIsOpenSideBarState" v-else><fold /></el-icon>
</template>

<script setup>
    import {
        Fold, 
        Expand
    } from '@element-plus/icons'
    import { useStore } from "vuex";

    const $store = useStore()
    const onSelectMenu = (index,indexPath,item,routeResult)=>{
        $store.dispatch('hfun_tag/handleAddTab',indexPath)
    }
    
    const changeIsOpenSideBarState = () => {
        $store.dispatch('hfun_tag/changeIsOpenSideBarState')
    }
</script>

<style scoped>
.hamburger{
    cursor:pointer
}
</style>