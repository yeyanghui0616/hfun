<!--
 * @Description: 页面全屏组件
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-12 17:20:25
-->

<template>
    <el-tooltip :content="!mIsScreenFull ? '全屏缩放' : '退出全屏'" effect="dark" placement="bottom">
        <svg-icon :name="!mIsScreenFull ?  'hfun-screenfull-in' : 'hfun-screenfull-out'" color="#fff" @click="toScreenFull"/>
    </el-tooltip>
</template>

<script setup>
    // 引入全屏插件
    import screenfull from "screenfull";
    import { ref } from 'vue'
    let mIsScreenFull = ref(false)
    // 全屏方法
    const toScreenFull = () => {
        // 需要注意的是 如果判断!screenfull.enabled 显示的是不支持全屏的话 是因为谷歌的版本问题  判断改为 !screenfull.isEnabled  就可以了

        if (!screenfull.isEnabled) {
            // 如果不支持进入全屏，发出不支持提示
            return false;
        }
        mIsScreenFull.value = !mIsScreenFull.value
        screenfull.toggle();
    }
</script>

<style scoped>
</style>
