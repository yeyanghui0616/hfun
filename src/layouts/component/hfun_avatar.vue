<!--
 * @Description: 用户头像组件
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-08 16:29:20
-->

<template>
  <el-dropdown>
    <span class="main">
        <img class="mainAvator" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" />
        <div class="mainName">
            admin
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </div>
    </span>

        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </template>
  </el-dropdown>
</template>
<script setup>
    import { ArrowDown } from '@element-plus/icons-vue'
    import { ref } from 'vue'
</script>
<style lang="scss" scoped>
  .main {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding-left: 1em;
    padding-right: 1em;

    .mainAvator {
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
    }

    .mainName {
      position: relative;
      margin-left: 5px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
</style>
