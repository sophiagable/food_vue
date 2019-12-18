
<template>

    <div class="container pb-5 p-3">

         <search-item></search-item>

        <table class="order-person-table table  table-striped m-0 mt-3 ">
            <thead>
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>應收帳款</th>
                    <th>已付帳款</th>
                    <th>品項/金額</th>
                    <th>數量</th>
                </tr>
            </thead>
            <tbody>
      
                    <tr v-for="(p,index) in groupInfo.person_list" :key="p.name">
                        <th scope="row">{{index+1}}</th>
                        <td>{{p.name}}</td>
                        <td>{{p.money_AR}}</td>
                        <td>
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                    <input type="checkbox"  v-model="p.received" aria-label="Checkbox for following text input">
                                    </div>
                                </div>
                                <input type="number" v-model="p.received_money" class="form-control" placeholder="請輸入已付金額" style="width:80px" aria-label="Text input with checkbox">
                            </div>
                            <div>
                                <small class="text-info" v-if="p.money_AR==p.received_money">已付清</small>
                                <small class="text-info" v-if="p.received_money > p.money_AR">需找錢：{{p.received_money - p.money_AR}}</small>
                                <small class="text-danger" v-if="p.received_money < p.money_AR">需繳：{{p.money_AR - p.received_money}}</small>
                            </div>
                        </td>
                        
                        <td v-for="order in p.order" :key="order.product" v-if="p.order && p.order.length == 1" >
                            {{order.product}}  <span>X {{order.quantity}}</span>
                            <div class="text-info"><small>{{order.detail}}</small></div>
                        </td>
                        <td  v-if="p.order && p.order.length > 1 " >
                            
                            <div v-for="(order,ix) in p.order" :key="order.product">
                                {{order.product}} <span>X {{order.quantity}}</span>
                                <div class="text-info"><small>{{order.detail}}</small></div>
                            </div>
                        </td>

                        <td>
                            {{p.order.length}}
                        </td>


                    </tr>

            


            </tbody>
        </table>

        <div class="d-flex justify-content-center my-3">
            <button type="button" class="btn btn-info btn-lg">匯出 EXCEL</button>
        </div>
    
    </div>
</template>
<style lang="scss" scoped>


</style>

<script>
import SearchItem from '@/components/item/SearchItem'

//依人員
var personList=[
    {
        id:1,
        name:'Castle Cheng',
        money_AR:'120',//應收
        received:0,//收到錢否
        received_money:0,//收到費用
        order:[
            {
                product:'牛奶豬排咖哩飯(限量) ',
                detail:'不加菜',
                unitPrice:'120',
                quantity:'1',
                p_total:'120'
            }
        ]
    },{
        id:2,
        name:'Eric Lin',
        money_AR:'120',//應收
        received:0,//收到錢否
        received_money:0,//收到費用
        order:[
            {
                product:'牛奶豬排咖哩飯(限量) ',
                detail:'加很多菜',
                unitPrice:'120',
                quantity:'1',
                p_total:'120'
            }
        ]

    },
    {
        id:3,
        name:'Miya Tang',
        money_AR:'90',
        received:0,
        received_money:0,//收到費用
        order:[
            {
                product:'肉丸子咖哩飯(豬肉)',
                detail:'',
                unitPrice:'90',
                quantity:'1',
                p_total:'90'
            }
        ]
    },   
    {
        id:4,
        name:'Kevin Chu',
        money_AR:'90',
        received:0,
        received_money:0,//收到費用
        order:[
            {
                product:'肉丸子咖哩飯(豬肉)',
                detail:'',
                unitPrice:'90',
                quantity:'1',
                p_total:'90'
            }
        ]
    },  
    {
        id:5,
        name:'Shin Lin',
        money_AR:'200',
        received:0,
        received_money:0,//收到費用
        order:[
            {
                product:'韓式泡菜丼(牛肉)',
                detail:'',
                unitPrice:'90',
                quantity:'1',
                p_total:'90'
            },
            {
                product:'黑胡椒豬滷肉咖哩飯 ',
                detail:'',
                unitPrice:'110',
                quantity:'1',
                p_total:'110'
            },

        ]
    },  
];



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
  person_list:personList,
  total:620,
};

    export default {
        name: 'ClosePersonList',
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


