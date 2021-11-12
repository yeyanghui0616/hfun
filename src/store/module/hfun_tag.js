import { routes } from '@/router/index'
import { setStorage, getStorage } from '@/utils/hfun_session_storage'
const state = {
    mTabSelections:getStorage('mTabSelections') || [
        {
            title: "首页",
            path: "/"
        }
    ], // 全部的待选标签数组
    mTabActivePath:getStorage('mTabActivePath') || '/', // 当前活跃的tab标签
    mIsOpenSideBar:getStorage('mIsOpenSideBar') || 'true', // 当前是否展开左侧侧边栏
    mSystemTheme:{
        mLayoutMode:getStorage('mSystemTheme')?.mLayoutMode || 'vertical', // layout布局，默认水平
        mThemeName:getStorage('mSystemTheme')?.mThemeName || 'default', // 系统主题
        mIsFixHeader:getStorage('mSystemTheme')?.mIsFixHeader || 'true', // 是否固定头部
        mIsShowTabsBar:getStorage('mSystemTheme')?.mIsShowTabsBar || 'true', // 是否开启多标签
    }
}

const getters = {}

const mutations = {
    /**
     * @Description: 删除 tab 事件
     * @Author: yeyanghui
     * @param {*} name 被删除的tab名称，如'/home'
     */  
    handleTabRemove(state,name){
        let deleteItemIndex
        state.mTabSelections.forEach((element,index) => {
            if(element.path == name){
                deleteItemIndex = index
            }
        });

        state.mTabSelections.splice(deleteItemIndex,1)
        setStorage('mTabSelections',state.mTabSelections)
        if(name == state.mTabActivePath){
            if(deleteItemIndex == state.mTabSelections.length){
                state.mTabActivePath = state.mTabSelections[deleteItemIndex-1]?.path
                setStorage('mTabActivePath',state.mTabActivePath)
            }else{
                state.mTabActivePath = state.mTabSelections[deleteItemIndex]?.path
                setStorage('mTabActivePath',state.mTabActivePath)
            }
        }
    },

    /**
     * @Description: 点击 tab 事件
     * @Author: yeyanghui
     * @param {*} tab 被点击的tab名称，如'/home'
     */  
    handleTabClick(state,tab){
        state.mTabActivePath = state.mTabSelections[tab.index].path
        setStorage('mTabActivePath',state.mTabActivePath)
    },

    /**
     * @Description: 添加 tab 事件
     * @Author: yeyanghui
     * @param {*} indexPath 添加的tab对象的indexPath，如：['/Layout','/page1']
     */  
    handleAddTab(state,indexPath){
        indexPath.forEach((iPath,index)=>{
           getRouteName(state,indexPath,iPath,index,routes)
        })
    },

    /**
     * @Description: 添加 tab 事件
     * @Author: yeyanghui
     */  
     changeIsOpenSideBarState(state){
        if(state.mIsOpenSideBar == 'true'){
            state.mIsOpenSideBar = 'false'
        }else{
            state.mIsOpenSideBar = 'true'
        }
        setStorage('mIsOpenSideBar',state.mIsOpenSideBar)
    },

    /**
     * @Description: 添加 tab 事件
     * @Author: yeyanghui
     */  
     changeSystemTheme(state,theme){
         console.log('theme',theme)
        state.mSystemTheme = theme
        setStorage('mSystemTheme',state.mSystemTheme)
    },
}

const actions = {
    handleTabRemove(context,name) {
        context.commit('handleTabRemove',name)
    },
    handleTabClick(context,tab) {
        context.commit('handleTabClick',tab)
    },
    handleAddTab(context,indexPath) {
        context.commit('handleAddTab',indexPath)
    },
    changeIsOpenSideBarState(context) {
        context.commit('changeIsOpenSideBarState')
    },
    changeSystemTheme(context,theme) {
        context.commit('changeSystemTheme',theme)
    },
}

/**
 * @Description: 拿到对应路由的页面title
 * @Author: yeyanghui
 */ 
function getRouteName(state,indexPath,iPath,index,routes){
    routes.forEach(item=>{
        if(item.path == iPath){
            if(index < indexPath.length-1){
                getRouteName(state,indexPath,indexPath[index+1],index+1,item.children)
            }else{
                addRouteToTabSelection(state,item?.meta?.title,iPath)
            }
        }
    })
}

/**
 * @Description: 向tabSelections中添加tab
 * @Author: yeyanghui
 */ 
function addRouteToTabSelection(state,title,iPath){
    let isContainPath = state.mTabSelections.some((item)=>{
        return item.path == iPath 
    })
    if(!isContainPath){
        state.mTabSelections.push({title:title,path:iPath})
        setStorage('mTabSelections',state.mTabSelections)
    }
    state.mTabActivePath = iPath
    setStorage('mTabActivePath',state.mTabActivePath)
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
