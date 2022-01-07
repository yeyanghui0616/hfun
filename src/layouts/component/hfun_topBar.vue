<!--
 * @Description: 顶部导航栏（横向）
 * @Author: yeyanghui
 * @Date: 2021-11-16 09:07:35
 * @LastEditTime: 2021-11-18 15:38:14
-->

<template>
    <div class="main">
      <el-row>
        <el-col :xl="9" :lg="7" :md="7" :sm="7" :xs="7">
            <hfunLogo/>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
            <hfunMenuBar mode='horizontal'/>
        </el-col>
        <el-col :xl="3" :lg="5" :md="5" :sm="5" :xs="5">
          <div class="mainRight">
              <hfunScreenfull/>
              <hfunTheme/>
              <hfunReflesh/>
              <hfunAvatar/>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script setup>
    import layoutScss from '@/styles/layout.scss'
    import { ref } from 'vue'
    import hfunSideBarItem from '@/layouts/component/hfun_sideBarItem.vue'
    import hfunAvatar from '@/layouts/component/hfun_avatar.vue'
    import hfunScreenfull from '@/layouts/component/hfun_screenfull.vue'
    import hfunTheme from '@/layouts/component/hfun_theme.vue'
    import hfunReflesh from '@/layouts/component/hfun_refresh.vue'
    import hfunMenuBar from '@/layouts/component/hfun_menuBar.vue'
    import hfunLogo from '@/layouts/component/hfun_logo.vue'
    import { routes } from '@/router/index'
    import { useStore } from "vuex";

    const $store = useStore()
    const onSelectMenu = (index,indexPath,item,routeResult)=>{
        $store.dispatch('hfun_layout/handleAddTab',indexPath)
    }
</script>
<style lang="scss" scoped>
    @import '@/styles/layout.scss';

    .main {
        background: $hfun-topbar-background-color;
        border-bottom: none;
        height: $hfun-topbar-height;
    }
    .mainRight {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: $hfun-topbar-height;
        ::v-deep {
            svg {
                width: 1.2em;
                height: 1.2em;
                margin-right: 1.2em;
                font-size: 12px;
                color: $hfun-navbar-right-icon-color;
                cursor: pointer;
                fill: $hfun-navbar-right-icon-color;
            }
        }
    }
</style>