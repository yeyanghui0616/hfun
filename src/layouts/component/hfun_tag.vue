<!--
 * @Description: 
 * @Author: yeyanghui
 * @Date: 2021-11-08 15:39:25
 * @LastEditTime: 2021-11-09 20:00:31
-->
<template>
    <div id="main" class="main">
        <el-tabs
            v-model="$store.state.hfun_tag.mTabActivePath"
            type="card"
            class="tabs-content"
            @tab-click="handleTabClick"
            @tab-remove="handleTabRemove"
        >
            <el-tab-pane
                v-for="item in $store.state.hfun_tag.mTabSelections"
                :key="item.path"
                :label="item.title"
                :name="item.path"
                :closable="item.path != '/'"
            ></el-tab-pane>
        </el-tabs>

        <el-dropdown placement="bottom">
            <span class="el-dropdown-link">
            更多操作
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <el-icon :size="12"><circle-close-filled /></el-icon>
                        <span>关闭其他</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-icon :size="12"><caret-left /></el-icon>
                        <span>关闭左侧</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-icon :size="12"><caret-right /></el-icon>
                        <span>关闭右侧</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-icon :size="12"><remove-filled /></el-icon>
                        <span>关闭全部</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
    import { 
        ArrowDown, 
        CircleCloseFilled, 
        CaretLeft, 
        CaretRight, 
        RemoveFilled
    } from '@element-plus/icons'
    import { ref, reactive, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from "vuex";

    const $router = useRouter()
    const $store = useStore()

    /**
     * @Description: tab 被选中时触发
     * @Author: yeyanghui
     * @param {*} tab tab 被点击的标签
     */    
    function handleTabClick(tab) {
        $store.dispatch('hfun_tag/handleTabClick',tab)
        $router.push($store.state.hfun_tag.mTabActivePath)
    }

    /**
     * @Description: 点击 tab 移除按钮后触发	
     * @Author: yeyanghui
     * @param {*} name name，被删除的标签的名字
     */    
    const handleTabRemove = (name) => {
        $store.dispatch('hfun_tag/handleTabRemove',name)
        $router.push($store.state.hfun_tag.mTabActivePath)
    }
</script>

<style scoped lang='scss'>
 .main {
    position: relative;
    box-sizing: border-box;
    box-shadow: 10px 10px 5px #ededed;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    line-height: 55px;
    padding-right: 30px;
    padding-left: 20px;
    user-select: none;
    background: #fff;
    border-top: 1px solid #f6f6f6;
    ::v-deep {
      .fold-unfold {
        margin-right: 20px;
      }
    }
    .tabs-content {
      width: calc(100% - 90px);
      height: 55px;
      ::v-deep {
        .el-tabs__nav-next,
        .el-tabs__nav-prev {
          height: 34px;
          line-height: 34px;
        }

        .el-tabs__header {
          border-bottom: 0;

          .el-tabs__nav {
            border: 0;
          }

          .el-tabs__item {
            box-sizing: border-box;
            height: 34px;
            margin-right: 5px;
            line-height: 34px;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

            &.is-active {
              border: 1px solid #41b584;
            }
          }
        }
      }
    }
  }
</style>