<!--
 * @Description: 系统logo，用于在顶部展示系统logo
 * @Author: yeyh
 * @Date: 2021-07-21 10:07:26
 * @LastEditTime: 2021-11-12 17:43:22
-->

<template>
    <div :class="'logo-container-' + $store.state.hfun_layout.mSystemTheme.mLayoutMode" @click="goToHome">
        <router-link to="/">
            <!-- 这里是logo变更的位置 -->
            <svg-icon name="hfun-screenfull-in" color="#000"/>
            <span
                class="title"
                :title="title"
            >
                {{ title }}
            </span>
        </router-link>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const title = ref('HfunTeam')
    import { useStore } from "vuex";
    const $store = useStore()
    const goToHome = ()=>{
      $store.dispatch('hfun_layout/handleAddTab',['/'])
    }
</script>

<style lang="scss" scoped>
  @mixin container {
    position: relative;
    height: 55px;
    overflow: hidden;
    line-height: 55px;
  }

  @mixin logo {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin-right: 3px;
    vertical-align: middle;
  }

  @mixin title {
    display: inline-block;
    overflow: hidden;
    font-size: 18px;
    line-height: 55px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }

  .logo-container-horizontal {
    @include container;

    .logo {
      @include logo;
    }

    .title {
      @include title;
    }
  }

  .logo-container-vertical {
    @include container;

    height: 75px;
    line-height: 75px;
    text-align: center;

    .logo {
      @include logo;
    }

    .title {
      @include title;

      max-width: 196px;
    }
  }
</style>
