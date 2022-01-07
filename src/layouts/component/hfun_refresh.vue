<!--
 * @Description: 页面刷新组件
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-12 17:20:25
-->

<template>
    <el-tooltip content="刷新" effect="dark" placement="bottom">
        <el-icon @click="onRefresh"><refresh-right  color="#fff"/></el-icon>
    </el-tooltip>
</template>

<script setup>
    import { ElMessage } from 'element-plus'
    import {
        RefreshRight
    } from '@element-plus/icons-vue'
    let onRefresh = () =>{
        ElMessage({
            message: '刷新成功',
            type: 'success',
        })
    }
</script>

<style scoped>
</style>