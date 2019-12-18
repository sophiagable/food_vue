<template>
    <div class="container">

        <div class="row shop-list p-4">
            <div class="col-sm-12 col-md-12 shop-item" v-for="(n ,i ) in shopList" :key="'shop_'+i">
                <ordering-shop></ordering-shop>
            </div>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
 .shop-list{
     margin:0 auto;
 }
</style>

<script>

import OrderingShop from '@/components/item/OrderingShop'

    export default {
        name: "ShopOrdering",
        components:{
            OrderingShop,
        },
        data() {
            let vm = this;
            return {
                shopList:1,
            };
        },
        mounted() {
            var vm = this;
        },
    
    };
</script>


