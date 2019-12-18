/*  Vue louter
**  這裏是路徑的設定
**  以及一些VUE套件
*/


import Vue from 'vue'
import Router from 'vue-router'
import Toasted from 'vue-toasted';
// https://shakee93.github.io/vue-toasted/

import VueMoment from 'vue-moment';

import AppLayout from  '@/components/layout/AppLayout'
import MyOrderLayout from  '@/components/layout/MyOrderLayout'
import MyOrderGroupLayout from  '@/components/layout/MyOrderGroupLayout'
import ShopOrderLayout from  '@/components/layout/ShopOrderLayout'

import ShopOrder from  '@/components/section/ShopOrder'
import ShopStatus from  '@/components/section/ShopStatus'
import ShopClose from  '@/components/section/ShopClose'
import ShopDetail from  '@/components/section/ShopDetail'

import NewShop from '@/components/section/NewShop'

import AdminPage from  '@/components/section/AdminPage'

import ShopList from  '@/components/section/ShopList'
import ShopOrdering from  '@/components/section/ShopOrdering'

import FoodCalendar from  '@/components/section/FoodCalendar'
import WhatToEat from  '@/components/section/WhatToEat'

import ShopCard from  '@/components/item/ShopCard'
import Error from  '@/components/pages/404'

Vue.use(Router)
Vue.use(Toasted)
Vue.use(VueMoment)

export default new Router({
  mode:'history', // remove #
  base:process.env.NODE_ENV ==='development'? __dirname : '/sophia/rv_food/', // 放在QA demo 網址的設定
  routes: [
    {
      path: '/',
      name: 'AppLayout', //首頁
      component: AppLayout,
      children:[
        {
          path:'', // 預設第一個類別
          name: 'ShopList',
          component :ShopList
        },
        {
          path:'admin/',//系統管理者頁面
          name:'AdminPage',
          component :AdminPage
        },
        {
          path:'eat-what/',//大轉盤
          name:'WhatToEat',
          component :WhatToEat
        },
        {
          path:'calendar/',// 月曆
          name:'FoodCalendar',
          component :FoodCalendar
        },
        {
          path: 'category/:cateNumber', //首頁分類列表
          name: 'ShopList',
          component :ShopList
        },
        {
          path:'newShop/step:newStepId', // 建立新店家
          name:'NewShop',
          component :NewShop
        },
        {
          path:'shop/:shopNumber', // 店家基本資訊
          name:'ShopDetail',
          component :ShopDetail
        },
        {
          path: 'ordering/', // 開團中的列表
          name: 'ShopOrdering',
          component :ShopOrdering,
        },
        {
          path: 'myOrder/', 
          name: 'MyOrderLayout',
          component: MyOrderLayout,
        },
        {
          path: 'myOrderGroup/step:stepId/shop:shopId', // 開團 step
          name: 'MyOrderGroupLayout',
          component: MyOrderGroupLayout,
        },
        {
          path:'shopOrder/', 
          name:'ShopOrderLayout',
          component: ShopOrderLayout,  
          children:[
            {
              path: 'shop-:shopId/:todayNumber', //開團的url
              name: 'ShopOrder',
              component: ShopOrder
            },
            {
              path: 'shop-:shopId/:todayNumber/status', // 目前團購狀況
              name: 'ShopStatus',
              component: ShopStatus
            },
            {
              path: 'shop-:shopId/:todayNumber/close', // 目前團購狀況
              name: 'ShopClose',
              component: ShopClose
            },
    
          ]  
        },

      ]
    },
    {
      path: '*', 
      name: 'ErrorPage', //404 
      component: Error,
    },
  ]
})
