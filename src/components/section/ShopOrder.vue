<template>
    <div>

        
        <div class="d-flex justify-content-center  p-3" >
            <time-left></time-left>
        </div>
        <group-info></group-info>
        <div class="row">
            <div class="col-8">
                <shop-menu @update="getMyOrder" @update-detail="getDetailOrder"></shop-menu>
            </div>
            <div class="col-4">
                <head-block></head-block>
                <my-order :my-order="myOrder" @delete="deleteMyOrder"></my-order>
            </div>
        </div>

    </div>
</template>

<script>

import ShopMenu from '@/components/item/ShopMenu'
import MyOrder from '@/components/item/MyOrder'
import TimeLeft from '@/components/item/TimeLeft'
import GroupInfo from '@/components/item/GroupInfo'
import HeadBlock from '@/components/item/HeadBlock'

    export default {
        name: 'ShopOrder',
        props:["category"],
        components:{
            ShopMenu,
            MyOrder,
            TimeLeft,
            GroupInfo,
            HeadBlock
        },
        data(){
            return{
                myOrder:[]
            }
        },
        methods:{
            checkTheSame(name){
                var vs = this,same = false;
                var list = vs.myOrder;
                for(var i in list){
                  if(list[i].name == name){
                      same = true;
                  }
                }
                return same;
            },
            getDetailOrder(item){
                var vs = this;
                var detailOrder ={
                    name:item.item_name,
                    price:item.item_price[0],
                    number:item.number,
                    note:item.note
                };
                if(vs.myOrder.length == 0){
                    vs.myOrder.push(detailOrder);
                }else if(vs.checkTheSame(item.item_name)){
                    vs.$toasted.show('已有重覆的餐點',{
                        theme: "bubble",
                        duration:1500
                    });
                }else{
                    vs.myOrder.push(detailOrder);
                }



            },
            
            getMyOrder(item){
                var vs = this;
                var order = {
                    name:item.item_name,
                    price:item.item_price[0],
                    number:1,
                    note:''
                };
                if(vs.myOrder.length == 0){
                    vs.myOrder.push(order);
                }else if(vs.checkTheSame(item.item_name)){
                    vs.$toasted.show('已有重覆的餐點',{
                        theme: "bubble",
                        duration:1500
                    });
                }else{
                    vs.myOrder.push(order);
                }


            },
            updateMyOrder(list){
                this.$set(this,'myOrder',list)
            },
            deleteMyOrder(index){
                var vs = this;
                vs.myOrder.splice(index,1);
            }
        }
    }

</script>


