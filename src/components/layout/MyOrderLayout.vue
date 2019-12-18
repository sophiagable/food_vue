<template>
    <div>

        <my-order-nav></my-order-nav>

    </div>
</template>

<script>

import MyOrderNav from '@/components/pages/MyOrderNav'
    export default {
        name: 'MyOrderLayout',
        props:["category","floatClose"],
        components:{

            MyOrderNav
        },
    
    }
</script>


