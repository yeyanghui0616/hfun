<!--
 * @Description: 底部面包屑组件
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-08 16:29:20
-->

<template>
    <el-breadcrumb class="breadcrumb-container" separator=">">
        <el-breadcrumb-item v-for="item in mBreadcrumbList">
            {{ item.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
    import { reactive } from 'vue'
    import { onBeforeRouteUpdate, onBeforeRouteLeave  } from 'vue-router'
    import { setStorage, getStorage } from '@/utils/hfun_session_storage'

    let mBreadcrumbList = reactive(getStorage('mBreadcrumbList') || [{meta:{title:'首页'}}])
    const getBreadcrumb = (to) => {
        let list = to.matched.filter(
            (item) => item.name && item.meta.title
        )
        mBreadcrumbList.length = 0
        list.forEach(e => {
            mBreadcrumbList.push(e);
        });
        setStorage('mBreadcrumbList',mBreadcrumbList)
    }
    onBeforeRouteUpdate((to,from,next)=>{
        getBreadcrumb(to)
        next()
    })
    onBeforeRouteLeave((to,from,next)=>{
        getBreadcrumb(to)
        next()
    })
</script>

<style lang="scss" scoped>
  @import '@/styles/layout';

  .breadcrumb-container {
    height: 60px;
    font-size: 14px;
    line-height: 60px;
    margin-left:20px;
    ::v-deep {
      .el-breadcrumb__item {
        .el-breadcrumb__inner,
        .el-breadcrumb__separator {
          color: $hfun-breadcrumd-color;
        }

      }
    }
  }
</style>