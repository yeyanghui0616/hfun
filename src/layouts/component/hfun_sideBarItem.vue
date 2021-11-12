<template>
    <template v-if="props.routeItem.children?.length > 0 && props.routeItem.path != '/'">
        <el-sub-menu :index="props.routeItem.path">
             
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>{{props.routeItem.meta.title}}</span>
            </template>
            <hfunSideBarItem
                v-for="route in props.routeItem.children"
                :routeItem="route"
            />
        </el-sub-menu>
    </template>
    
    <template v-else>
        <el-menu-item :index="props.routeItem.path">
            <el-icon><setting /></el-icon>
            <template #title>{{props.routeItem?.meta?.title || props.routeItem?.children[0]?.meta?.title}}</template>
        </el-menu-item>
    </template>
</template>

<script setup>
    import {
        Location,
        Document,
        Menu as IconMenu,
        Setting,
    } from '@element-plus/icons'
    import { ref } from 'vue'
    import hfunSideBarItem from '@/layouts/component/hfun_sideBarItem.vue'
    const props = defineProps({
        routeItem: Object
    })
</script>

<style scoped>
</style>