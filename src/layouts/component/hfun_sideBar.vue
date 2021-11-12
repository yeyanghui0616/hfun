<!--
 * @Description: 侧边栏
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-08 16:29:58
-->
<template>
    <el-scrollbar>
        <!-- <hfunLogo /> -->
        <hfunMenuBar mode='vertical'/>
    </el-scrollbar>
</template>

<script setup>
    import { routes } from '@/router/index'
    import hfunLogo from '@/layouts/component/hfun_logo.vue'
    import hfunSideBarItem from '@/layouts/component/hfun_sideBarItem.vue'
    import hfunMenuBar from '@/layouts/component/hfun_menuBar.vue'
    import { useStore } from "vuex";

    const $store = useStore()
    const onSelectMenu = (index,indexPath,item,routeResult)=>{
        $store.dispatch('hfun_tag/handleAddTab',indexPath)
    }
</script> 
