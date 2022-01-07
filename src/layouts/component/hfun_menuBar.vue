<!--
 * @Description: 侧边导航菜单栏组件
 * @Author: yeyanghui
 * @Date: 2021-11-11 17:51:41
 * @LastEditTime: 2021-11-12 17:37:15
-->

<template>
    <el-menu
        :default-active="$store.state.hfun_layout.mTabActivePath"
        :class="'main-'+$store.state.hfun_layout.mSystemTheme.mLayoutMode"
        :mode="props.mode"
        :collapse="$store.state.hfun_layout.mIsOpenSideBar == 'true' "
        menu-trigger="hover"
        router
        @select="onSelectMenu"
    >
        <template 
            v-for="route in routes"
            :key="route.path"
        >
            <hfunSideBarItem
                :routeItem="route"
            />
        </template>
    </el-menu>
</template>

<script setup>
    import layoutScss from '@/styles/layout.scss'
    import hfunSideBarItem from '@/layouts/component/hfun_sideBarItem.vue'
    import { routes } from '@/router/index'
    import { useStore } from "vuex";
    import { computed } from "vue";
    const props = defineProps({
        mode: {
            type: String,
            required: true
        },
    })
    const $store = useStore()
    const onSelectMenu = (index,indexPath,item,routeResult)=>{
        console.log('indexPath',indexPath)
        $store.dispatch('hfun_layout/handleAddTab',indexPath)
    }
</script>
<style lang="scss" scoped>
.main-vertical{
    height:calc(100% - 90px);
}
</style>