<!-- layout整体布局 -->
<template>
    <el-container v-if="$store.state.hfun_tag.mSystemTheme.mLayoutMode == 'horizontal'" class="mainHorizontal">
        <el-header
            :class="{
                'fixed-header': $store.state.hfun_tag.mSystemTheme.mIsFixHeader == 'true'
            }"
        >
            <!-- 顶部导航栏 -->
            <hfunTopBar/>
            <!-- 标签页 -->
            <hfunTag v-if="$store.state.hfun_tag.mSystemTheme.mIsShowTabsBar == 'true'"/>
        </el-header>
        <el-main 
            :class="{
                'fixed-main': $store.state.hfun_tag.mSystemTheme.mIsFixHeader == 'true',
                'fixed-main-no-tag': $store.state.hfun_tag.mSystemTheme.mIsShowTabsBar == 'false',
            }"
        >
            <hfunAppMain/>
        </el-main>
    </el-container>
    <el-container v-else class="mainVertical"
        :class="{
            'fixed': $store.state.hfun_tag.mSystemTheme.mIsFixHeader == 'true',
            'no-tabs-bar':  $store.state.hfun_tag.mSystemTheme.mIsShowTabsBar == 'false',
        }"
    >
        <el-aside class="mainAside" :class="{ 'is-collapse': $store.state.hfun_tag.mIsOpenSideBar == 'true' }">
            <!-- 侧边导航栏 -->
            <hfunSideBar/>
        </el-aside>
        <el-container class="mainContain" :class="{ 'is-collapse': $store.state.hfun_tag.mIsOpenSideBar == 'true'}">
            <el-header
                :class="{
                    'fixed-header': $store.state.hfun_tag.mSystemTheme.mIsFixHeader == 'true'
                }"
            >
                <!-- 顶部导航栏 -->
                <hfunNavBar/>
                <!-- 标签页 -->
                <hfunTag v-if="$store.state.hfun_tag.mSystemTheme.mIsShowTabsBar  == 'true'"/>
            </el-header>
            <el-main>
                <hfunAppMain/>
            </el-main>
        </el-container>
    </el-container>
    <el-backtop />
</template>
<script setup>
    // 顶部导航栏（横向）
    import hfunTopBar from './component/hfun_topBar.vue'
    // 顶部导航栏（纵向）
    import hfunNavBar from './component/hfun_navBar.vue'
    // 侧边导航栏
    import hfunSideBar from './component/hfun_sideBar.vue'
    // 标签页
    import hfunTag from './component/hfun_tag.vue'
    // 页面主体页
    import hfunAppMain from './component/hfun_appMain.vue'
    import { useStore } from "vuex";
    const $store = useStore()
</script>
<style scoped lang='scss'>
    @mixin fix-header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 990;
        width: 100%;
        overflow: hidden;
    }
    @mixin active {
        &:hover {
            color: #fff;
            background-color:#41b584 !important;
        }
        &.is-active {
            color: #fff;
            background-color: #41b584 !important;
        }
    }
    
    .mainHorizontal{
        .fixed-header{
            position: fixed;
            top: 0;
            right: 0;
            z-index: 900;
            width: 100%;
            overflow: hidden;
        }
        .fixed-main {
            padding-top: 120px;
        }
        .fixed-main.fixed-main-no-tag {
            padding-top: 65px;
        }
    }
    .mainVertical{
        &.fixed {
            padding-top: 105px;
        }
        &.fixed.no-tabs-bar {
            padding-top: 50px;
        }
        .mainContain {
            position: relative;
            min-height: 100%;
            margin-left: 256px;;
            background: #f6f8f9;
            &.is-collapse {
                margin-left:65px;  
                .fixed-header {
                    @include fix-header;
                    left: 65px;
                    width: calc(100% - 65px);
                }       
            }
            .fixed-header {
                @include fix-header;
                left: 256px;
                width: calc(100% - 256px);
                box-shadow: 2px 0 6px rgba(210, 213, 216, 0.35);
                transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
                            background 0s, color 0s, font-size 0s;
            }
        }
        .mainAside {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 999;
            width: 256px;
            height: 100vh;
            overflow: hidden;
            box-shadow: 2px 0 6px rgba(210, 213, 216, 0.35);
            transition: width 0.3s;
            &.is-collapse {
                width: 65px;
                border-right: 0;
                ::v-deep {
                    .el-menu {
                        transition: width 0.3s;
                    }
                    .el-menu--collapse {
                        border-right: 0;
                        .el-submenu__icon-arrow {
                            right: 10px;
                            margin-top: -3px;
                        }
                    }
                }
            }
            ::v-deep {
                .el-scrollbar__wrap {
                    overflow-x: hidden;
                }
                .el-menu {
                    border: 0;
                }
                .el-menu-item,
                .el-submenu__title {
                    height: 50px;
                    overflow: hidden;
                    line-height: 50px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    vertical-align: middle;
                }
                .el-menu-item {
                    @include active;
                }
            }
        }
    }
    
</style>
<style scoped>
    .el-header{
        height: 2*var(--el-header-height);
        color: var(--el-text-color-primary);
        text-align: center;
        padding: 0
    }
    .el-main {
        color: var(--el-text-color-primary);
        text-align: center;
    }
</style>
<style>
    html,body{
        margin:0
    }
</style>

