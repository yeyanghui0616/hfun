<!--
 * @Description: 无layout组件
 * @Author: yeyanghui
 * @Date: 2021-11-16 09:07:35
 * @LastEditTime: 2021-11-18 15:38:14
-->

<template>
    <router-view/>
</template>

<script setup>
    import { ref } from 'vue'
    const count = ref(0)
</script>

<style scoped>
</style>