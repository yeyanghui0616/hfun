import { createApp } from 'vue'
import App from './App.vue'

// 引入 ElementPlus
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/dist/index.css'
import router from './router'
import store from './store'

import svgIcon from './icons/index.vue'
import '@/utils/export'

createApp(App).component('svg-icon', svgIcon).use(store).use(router).use(ElementPlus).mount('#app')