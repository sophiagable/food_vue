<template>
    <div class="py-3">
        
        <!-- 商家資訊  -->
        <shop-simple></shop-simple>

        <!-- 訂購列表 -->
        <close-shop-nav></close-shop-nav>


    </div>
</template>

<script>
import ShopSimple from '@/components/item/ShopSimple'


import CloseShopNav from '@/components/item/CloseShopNav'
    export default {
        name: 'ShopClose',
        components:{
            ShopSimple,
            CloseShopNav
        }

    }

</script>


