<template>
    <div class="p-3">

            <div class="d-flex justify-content-center  p-2" >
                <time-left></time-left>
            </div>
            <order-people></order-people>
    </div>
</template>

<script>

import TimeLeft from '@/components/item/TimeLeft'
import orderPeople from '@/components/item/orderPeople'
    export default {
        name: 'ShopStatus',
        components:{
            TimeLeft,
            orderPeople
        }

    }

</script>


