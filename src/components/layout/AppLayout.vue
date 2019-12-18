<template>
    <div id="appLayout">
        <!-- 浮動功能 -->
        <app-float :float-close="floatClose" @close="closeFloat" :theme="theme"></app-float>  
        <!-- header -->
        <app-header @close="closeFloat" :category="category"></app-header>
        <router-view :category="category" :theme="theme"></router-view>
        <!-- <router-view name="b"></router-view> -->
        <app-footer :theme="theme"></app-footer>
    </div>
</template>

<script>

import AppHeader from '@/components/layout/AppHeader'
import AppFooter from '@/components/layout/AppFooter'
import ShopList from '@/components/section/ShopList'
import AppFloat from '@/components/layout/AppFloat'

    export default {
        name: 'appLayout',
        props:["category","theme"],
        components:{
            AppHeader,
            AppFooter,
            ShopList,
            AppFloat,
        },
        data(){
            return{
                floatClose:0
            }
        },
        methods: {
            closeFloat(){
                this.floatClose = !this.floatClose;
            }
        },
    
    }
</script>


