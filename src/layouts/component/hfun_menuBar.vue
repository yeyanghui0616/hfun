<template>
    <el-menu
        :default-active="$store.state.hfun_tag.mTabActivePath"
        :class="'main-'+$store.state.hfun_tag.mSystemTheme.mLayoutMode"
        :mode="props.mode"
        :collapse="$store.state.hfun_tag.mIsOpenSideBar == 'true' "
        :background-color="layoutScss2['menu-background-color']"
        :text-color="layoutScss2['menu-text-color']"
        :active-text-color="layoutScss2['menu-active-text-color']"
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
        $store.dispatch('hfun_tag/handleAddTab',indexPath)
    }
    let layoutScss2 = computed(()=>{
        return layoutScss
    })
</script>
<style lang="scss" scoped>
.main-vertical{
    height:100vh
}
</style>