<template>
    <el-tooltip content="刷新" effect="dark" placement="bottom">
        <el-icon @click="onRefresh"><refresh-right  color="#fff"/></el-icon>
    </el-tooltip>
</template>

<script setup>
    import { ElMessage } from 'element-plus'
    import {
        RefreshRight
    } from '@element-plus/icons'
    let onRefresh = () =>{
        ElMessage({
            message: '刷新成功',
            type: 'success',
        })
    }
</script>

<style scoped>
</style>