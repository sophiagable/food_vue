<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">類別</th>
                    <th scope="col">訂單</th>
                    <th scope="col">我點的餐</th>
                    <th scope="col">數量</th>
                    <th scope="col">費用</th>
                    <th scope="col">訂餐人數</th>
                    <th scope="col">團長</th>
                    <th scope="col">編輯</th> 
                    <th scope="col">不訂了</th> 
                </tr>
            </thead>
            <tbody>
                <my-order-li v-for="n in 2" :key="n"></my-order-li>
            </tbody>
        </table>
    </div>
</template>

<script>

import  MyOrderLi from '@/components/pages/MyOrderLi'

    export default {
        name: 'MyOrderList',        
        components:{
            MyOrderLi
        },
    }
</script>


