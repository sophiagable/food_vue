<template>
    <div class="container-fluid bg-light add-new-shop">

        <div class="container pt-3">
            <new-shop-title></new-shop-title>
            <add-new-step></add-new-step>
            <new-shop-block :category="category"></new-shop-block>
        </div>




    </div>
</template>

<style lang="scss" scoped>
    .add-new-shop{
        min-height:60vh;
    }
</style>


<script>

import AddNewStep from '@/components/item/AddNewStep'
import NewShopTitle from '@/components/item/NewShopTitle'
import NewShopBlock from '@/components/item/NewShopBlock'

    export default {
        name: 'NewShop',
        props:["category"],
        components:{
            AddNewStep,
            NewShopTitle,
            NewShopBlock
        }

    }

</script>


