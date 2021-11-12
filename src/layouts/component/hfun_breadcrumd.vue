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
  .breadcrumb-container {
    height: 60px;
    font-size: 14px;
    line-height: 60px;
    margin-left:20px;
    ::v-deep {
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          a {
            display: flex;
            float: left;
            font-weight: normal;
            color: #515a6e;

            i {
              margin-right: 3px;
            }
          }
        }

        &:last-child {
          .el-breadcrumb__inner {
            a {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>