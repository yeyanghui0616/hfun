<!--
 * @Description: 顶部导航栏（纵向）
 * @Author: yeyanghui
 * @Date: 2021-11-16 09:07:35
 * @LastEditTime: 2021-11-18 15:38:14
-->

<template>
    <div class="main">
        <el-row :gutter="15">
            <el-col :xs="4" :sm="12" :md="12" :lg="12" :xl="12">
                <div class="mainLeft">
                    <hfunHamburger/>
                    <hfunBreadcrumd/>
                </div>
            </el-col>
            <el-col :xs="20" :sm="12" :md="12" :lg="12" :xl="12">
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
    import hfunHamburger from "@/layouts/component/hfun_hamburger.vue";
    import hfunBreadcrumd from "@/layouts/component/hfun_breadcrumd.vue";
    import hfunScreenfull from "@/layouts/component/hfun_screenfull.vue";
    import hfunTheme from "@/layouts/component/hfun_theme.vue";
    import hfunReflesh from '@/layouts/component/hfun_refresh.vue'
    import hfunAvatar from "@/layouts/component/hfun_avatar.vue";
</script>

<style scoped lang='scss'>
@import '@/styles/layout';

.main {
    position: relative;
    height: 50px;
    padding-right: 20px;
    padding-left: 20px;
    overflow: hidden;
    user-select: none;
    background: $hfun-navbar-background;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .mainLeft {
      display: flex;
      align-items: center;
      justify-items: center;
      height: 50px;
    }

    .mainRight {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: 50px;
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
}
</style>