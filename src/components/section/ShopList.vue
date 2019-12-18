<template>
    <div>
        <app-banner></app-banner>   
        <app-cate-menu :category="category"></app-cate-menu>
        <div class="container">
            <!-- {{$route.params}} -->
            <page></page>
            <div class="row shop-list">
                <div class="col-sm-12 col-md-6 col-log-6 shop-item" v-for="(n ,i ) in shopList" :key="'shop_'+i">
                    <shop-card :cate-number="cateNumber"></shop-card>
                </div>
            </div>
            <page></page>
        </div>


    </div>


</template>

<script>

import AppBanner from '@/components/layout/AppBanner'
import AppCateMenu from '@/components/layout/AppCateMenu'

import ShopCard from '@/components/item/ShopCard'
import Page from '@/components/item/Pagination'
    export default {
        name: "ShopList",
        props:["category","theme"],
        components:{
            AppBanner,
            AppCateMenu,
            ShopCard,
            Page
        },
        data() {
            let vm = this;
            return {
                shopList:8,
                cateNumber:vm.$route.params.cateNumber
            };
        },
        mounted() {
            var vm = this;
        },
    
    };
</script>


