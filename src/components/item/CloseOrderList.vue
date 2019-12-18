
<template>

    <div class="container pb-5 p-3">

        <search-item></search-item>

        <table class="order-person-table table  table-striped m-0 mt-3 ">
            <thead>
                <tr>
                    <th>#</th>
                    <th>訂購勾選</th>
                    <th>品項</th>
                    <th>單價</th>
                    <th>數量</th>
                    <th>總金額</th>
                    <th>備註</th>
                </tr>
            </thead>
            <tbody>
      
                    <tr v-for="(p,index) in groupInfo.item_list" :key="p.name">
                        <th scope="row">{{index+1}}</th>
                        <th class="text-center">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" :id="'orderCheck'+p.id">
                                <label class="custom-control-label" :for="'orderCheck'+p.id"></label>
                            </div>
                        </th>
                        <td>{{p.product}}</td>
                        <td>{{p.unitPrice}}</td>
                        <td>{{p.quantity}}</td>
                        <td>{{p.unitPrice*p.quantity}}</td>
                        <td>
                            <div class="m-2" v-for="d in p.detail_array" :key="d.person" v-if="p.detail_array && p.detail_array.lenght !== 0 ">
                                     <small> {{d.person}} X {{d.number}} </small> 
                                     <span class="border border-info text-info p-1" v-if="d.detail">: {{d.detail}} </span>
                            </div>
                        </td>
                    </tr>

            


            </tbody>
        </table>
    
    </div>
</template>
<style lang="scss" scoped>


</style>

<script>
import SearchItem from '@/components/item/SearchItem'
var itemList =[
    {
        id:1,
        product:'牛奶豬排咖哩飯(限量) ',
        unitPrice:'120',
        quantity:'2',
        p_total:'240',
        detail_array:[
            {
                person:'Castle Cheng',
                detail:'不加菜',
                number:1
            },
            {
                person:'Eric Lin',
                detail:'加很多菜',
                number:1
            },         
        ]
    },
    {
        id:2,
        product:'肉丸子咖哩飯(豬肉) ',
        unitPrice:'90',
        quantity:'2',
        p_total:'180',
        detail_array:[
            {
                person:'Miya Tang',
                detail:'',
                number:1
            },
            {
                person:'Kevin Chu',
                detail:'',
                number:1
            },         
        ]
    },
    {
        id:3,
        product:'韓式泡菜丼(牛肉) ',
        unitPrice:'90',
        quantity:'1',
        p_total:'90',
        detail_array:[
            {
                person:'Shin Lin',
                detail:'',
                number:1
            },
        
        ]
    },
    {
        id:4,
        product:'黑胡椒豬滷肉咖哩飯',
        unitPrice:'110',
        quantity:'1',
        p_total:'110',
        detail_array:[
            {
                person:'Shin Lin',
                detail:'',
                number:1
            },
        
        ]
    },
];





var groupInfo={
  shop_name:'日式咖哩屋',
  group_leader:'Miya Tang',
  item_list:itemList,
  total:620,
};

    export default {
        name: 'CloseOrderList',
        components:{SearchItem},
        data(){
            return{
                groupInfo,
            }
        },
        methods:{

        }
    }

</script>


