<!--
 * @Description: 系统logo，用于在顶部展示系统logo
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-08 16:30:07
-->

<template>
    <h1>{{ count }}</h1>
</template>

<script setup>
    import { ref } from 'vue'
    const count = ref('左侧logo')
</script>

<style scoped>
</style>