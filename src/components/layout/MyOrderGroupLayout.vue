<template>
    <div>
            <order-steps></order-steps>
            <order-setting></order-setting>

    </div>
</template>

<script>
import OrderSteps from '@/components/item/OrderSteps'
import OrderSetting from '@/components/item/OrderStepSetting'

    export default {
        name: 'OrderStepSetting',
        props:["category"],
        components:{
            OrderSetting,
            OrderSteps,
        },
    }
    
</script>


