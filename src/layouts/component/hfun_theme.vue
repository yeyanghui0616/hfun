<!--
 * @Description: 页面主题配置组件
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-12 17:20:25
-->

<template>
    <el-tooltip content="主题配置" effect="dark" placement="bottom">
        <svg-icon name="hfun-theme" color="#fff" @click="onShowThemeConfigPane"/>
    </el-tooltip>
    <el-drawer
        v-model="mIsShowDrawer"
        title="主题配置"
        append-to-body
        size="470px"
    >
        <el-scrollbar style="height: 94vh; overflow: hidden">
            <div class="mainDrawer">
            <el-form ref="form" :model="theme" label-position="top">
                <el-form-item label="主题">
                    <el-radio-group v-model="theme.mThemeName">
                        <el-radio-button label="default">默认</el-radio-button>
                        <el-radio-button label="green">主题一</el-radio-button>
                        <el-radio-button label="glory">主题二</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="布局">
                    <el-radio-group v-model="theme.mLayoutMode">
                        <el-radio-button label="vertical">纵向布局</el-radio-button>
                        <el-radio-button label="horizontal">横向布局</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="头部">
                    <el-radio-group v-model="theme.mIsFixHeader">
                        <el-radio-button label="true">固定头部</el-radio-button>
                        <el-radio-button label="false">不固定头部</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="多标签">
                    <el-radio-group v-model="theme.mIsShowTabsBar">
                        <el-radio-button label="true">开启</el-radio-button>
                        <el-radio-button label="false">不开启</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSaveTheme">
                        保存
                    </el-button>
                </el-form-item>
            </el-form>
            </div>
        </el-scrollbar>
    </el-drawer>
</template>

<script setup>
    import { ElMessage } from 'element-plus'
    import { ref ,reactive } from 'vue'
    import { useStore } from "vuex";

    const $store = useStore()
    let mIsShowDrawer = ref(false)
    const onShowThemeConfigPane = () => {
        mIsShowDrawer.value = true
    }

    let theme = reactive({
        mThemeName: 'default',
        mLayoutMode: 'horizontal',
        mIsFixHeader: 'true',
        mIsShowTabsBar: 'true',
    })
    // 重新赋值，是为了避免修改配置项时，还未保存，vuex就响应式的改变layout布局了
    theme.mThemeName = $store.state.hfun_layout.mSystemTheme.mThemeName
    theme.mLayoutMode = $store.state.hfun_layout.mSystemTheme.mLayoutMode
    theme.mIsFixHeader = $store.state.hfun_layout.mSystemTheme.mIsFixHeader
    theme.mIsShowTabsBar = $store.state.hfun_layout.mSystemTheme.mIsShowTabsBar

    const handleSaveTheme = () => {
        mIsShowDrawer.value = false
        $store.dispatch('hfun_layout/changeSystemTheme',theme)
        // document.getElementsByTagName(
        //   'body'
        // )[0].className = `hfun-admin-theme-default`
    }
</script>

<style scoped>
  .mainDrawer {
    padding: 20px;
  }
</style>