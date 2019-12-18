
<template>

    <div class="container pb-5 p-3">
        
        <search-item></search-item>

        <table class="order-person-table table  table-striped m-0 mt-3 ">
            <thead>
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>品項</th>
                    <th>明細</th>
                    <th>單價</th>
                    <th>數量</th>
                    <th>總價</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(o,index) in groupInfo.order_person" :key="o.name">
                    <th scope="row">{{index+1}}</th>
                    <td>{{o.name}}</td>
                    <td>{{o.product}}</td>
                    <td>{{o.detail}}</td>
                    <td>{{o.unitPrice}}</td>
                    <td>{{o.quantity}}</td>
                    <td>{{o.p_total}}</td>
                </tr>
            </tbody>
        </table>
    
    </div>
</template>
<style lang="scss" scoped>


</style>

<script>
import SearchItem from '@/components/item/SearchItem'
// 菜名一樣(product)要排序在一起
var orderPersen = [
    {
        id:1,
        name:'Castle Cheng',
        product:'牛奶豬排咖哩飯(限量) ',
        detail:'不加菜',
        unitPrice:'120',
        quantity:'1',
        p_total:'120'
    },
    {
        id:2,
        name:'Eric Lin',
        product:'牛奶豬排咖哩飯(限量) ',
        detail:'加很多菜',
        unitPrice:'120',
        quantity:'1',
        p_total:'120'
    },
    {
        id:3,
        name:'Miya Tang',
        product:'肉丸子咖哩飯(豬肉)',
        detail:'',
        unitPrice:'90',
        quantity:'1',
        p_total:'90'
    },
    {
        id:4,
        name:'Kevin Chu',
        product:'肉丸子咖哩飯(豬肉)',
        detail:'',
        unitPrice:'90',
        quantity:'1',
        p_total:'90'
    },
    {
        id:5,
        name:'Shin Lin',
        product:'韓式泡菜丼(牛肉)',
        detail:'',
        unitPrice:'90',
        quantity:'1',
        p_total:'90'
    },
    {
        id:6,
        name:'Shin Lin',
        product:'黑胡椒豬滷肉咖哩飯 ',
        detail:'',
        unitPrice:'110',
        quantity:'1',
        p_total:'110'
    }

];

var groupInfo={
  shop_name:'日式咖哩屋',
  group_leader:'Miya Tang',
  order_person: orderPersen,
  total:620,
};

    export default {
        name: 'OrderPeople',
        components:{
            SearchItem
        },
        data(){
            return{
                groupInfo,
            }
        },
        methods:{

        }
    }

</script>


