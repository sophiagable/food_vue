<template>
    <div class="container">
        <div class="row p-2">
           <div class="col-8">
                <shop-title></shop-title>
           </div>
           <div class="col-4 text-center">
                <router-link tag="button" class="btn btn-primary btn-lg mt-2" to="/myOrderGroup/step2/shop1">
                     我要開團
                </router-link>
           </div>

        </div>

        <div class="row">
            <div class="col-8">
                <shop-menu-detail></shop-menu-detail>
            </div>
            <div class="col-4">
                <shop-info-detail></shop-info-detail>
                <shop-detail-edit></shop-detail-edit>

            </div>
        </div>
       
    </div>
</template>



<script>

import ShopTitle from '@/components/item/ShopTitle'
import ShopMenuDetail from '@/components/item/ShopMenuDetail'
import ShopInfoDetail from '@/components/item/ShopInfoDetail'
import ShopDetailEdit from '@/components/item/ShopDetailEdit'

    export default {
        name: "ShopDetail",
        components:{
            ShopMenuDetail,
            ShopInfoDetail,
            ShopDetailEdit,
            ShopTitle
        },


    
    };
</script>


