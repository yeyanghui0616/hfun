<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const count = ref(0)
</script>


<style scoped>
</style>