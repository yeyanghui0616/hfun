<!--
 * @Description: 
 * @Author: yeyanghui
 * @Date: 2021-11-16 09:07:35
 * @LastEditTime: 2021-11-18 15:38:14
-->
<template>
    <template v-if="props.routeItem.children?.length > 0 && props.routeItem.meta != undefined ">
        <el-sub-menu :index="props.routeItem.redirect ||　props.routeItem.path">
            <template #title>
                <svg-icon v-if="props.routeItem?.meta?.icon" :name="props.routeItem?.meta?.icon" class="svg-icon"/>
                <span>{{props.routeItem.meta.title}}</span>
            </template>
            <hfunSideBarItem
                v-for="route in props.routeItem.children"
                :routeItem="route"
            />
        </el-sub-menu>
    </template>
    
    <template v-else>
         <el-menu-item :index="props.routeItem.redirect ||　props.routeItem.path">
            <svg-icon v-if="props.routeItem?.meta?.icon || props.routeItem?.children[0]?.meta?.icon" :name="props.routeItem?.meta?.icon || props.routeItem?.children[0]?.meta?.icon" class="svg-icon"/>
            <template #title>{{props.routeItem?.meta?.title || props.routeItem.children[0].meta.title}}</template>
        </el-menu-item>
    </template>
</template>

<script setup>
    import hfunSideBarItem from '@/layouts/component/hfun_sideBarItem.vue'
    const props = defineProps({
        routeItem: Object
    })
</script>

<style scoped lang='scss'>
@import '@/styles/layout';

.svg-icon{
    height:1.1rem !important;
    width:1.1rem !important;
    line-height:1.1rem;
    margin-right:0.4rem;
    color:$hfun-sidebar-item-svgicon-color
}
</style>