<template>
    <div class="card" style="width:100%;">
       
            <div class="card-header">
                <div class="float-left">
                     團長：Miya
                </div>
                <div class="float-right time">
                    <time-left></time-left>
                </div>

            </div>
            <div class="card-body m-0 p-0 ">
                <div class="row">
                        <div class="col-3 mr-1">
                            <img class="shop-img" :src="rootUrl+shop.shopImage">
                        </div>
                        <div class="col-8">
                            <div class="card-block p-3 pl-4">
                                <h4 class="card-title align-text-top mb-3 text-truncate">
                                    <div class="float-left"> 
                                        {{shop.shopTitle}} <small class="sub-category text-secondary">-{{shop.shopCate_name}}</small>
                                    </div>
                                    <div class="float-right">
                                        <span v-if="shop.pickTime" class="text-danger"> 
                                                {{shop.pickTime}}
                                        </span> 前可接單
                                    </div>
                                   


                                </h4>
                                
                                    
                                <div class="shop-detail">

                                    <ul class="list-unstyled align-middle">
                                        <li class="text-truncate">
                                            <i class="material-icons align-middle mr-2">home</i> {{shop.shopAddr}}
                                        </li>
                                        <li class="text-truncate">
                                            <i class="material-icons mr-2">phone</i>
                                            <span class="text-success font-weight-bold">{{shop.shopTel}}</span>
                                        </li>
                                        <li class="text-truncate">
                                            <i class="material-icons align-middle mr-2">access_time</i>
                                            <span class="text-truncate" :title="shop.shopTime">營業時間： {{shop.shopTime}}</span>
                                        </li>
                                        <li class="text-truncate" v-if="shop.minMoney">
                                            <i class="material-icons align-middle mr-2">monetization_on</i>
                                            <span class="text-success font-weight-bold"> 
                                                {{shop.minMoney}}
                                            </span> 可外送
                                        </li>
                                        <li>
                                            <hr>
                                        </li>
                                        <li class="text-truncate">
                                            <i class="material-icons align-middle mr-2">person</i>
                                            <span class="text-primary font-weight-bolder ">{{shop.ordered}}</span> 人已訂購
                                        </li>
                                        <li class="text-truncate">
                                            <i class="material-icons align-middle mr-2">person</i> 已訂購人員：
                                            <span class="text-primary mx-2" v-for="p in shop.ordered_person" :key="p">{{p}},</span>
                                        </li>

                                    </ul>

                                </div>
                                <div class="row">
                                    <div class="col-4 offset-6 mb-2">
                                        <a href="#" class="btn btn-primary" @click.stop="openThisGroup(shop.shop_id)">
                                            我也要點餐
                                        </a>
                                        <!-- 已訂過的修改訂單 -->
                                        <!-- <a href="#" class="btn btn-primary" @click.stop="openThisGroup(shop.shop_id)">
                                            我要修改訂單
                                        </a>                                        -->
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>



            </div>

    </div>
</template>

<style lang="scss" scoped>
.card{
    .card-header{
        .time{
            h4{
              font-size: 1rem;
            }
        }
    }
    .card-title{
        .sub-category {
            font-size: 14px
        }
    }
    .card-body{
        .shop-img{
            border-radius: 0;
            height: 100%;
        }
    }
    .shop-detail{
        li{
            margin-bottom:5px;
        }
    }

}
</style>


<script>
import TimeLeft from '@/components/item/TimeLeft'


//   var root_url ='/sophia/rv_food/static/';
  var root_url='/static/';

    export default {
        name: "OrderingShop",
        components:{
            TimeLeft
        },
        data() {
            return {
                shop:{
                    "shop_id":1,
                    "shopTitle":"日式咖哩屋",
                    "ordering_url":'xxx/xxx/xxx', // 團購url
                    "shopTel":"02-26597126",
                    "shopCate_id":1,
                    "shopCate_name":"午晚餐[飯類]",
                    "shopAddr":"內湖區江南街113號",
                    "shopTime":"11:00-15:00，17:00-20:00",
                    "minMoney":300,
                    "shopLove":10,
                    "shopBad":5,
                    "favorite":0,
                    "pickTime":"10:30",
                    "shopImage":root_url+"images/shop_img/rice_200X250.png",
                    "ordered":5,
                    "ordered_person":['Caslte Cheng ','Bryan Lin','Sophia Tai','Carmen Yeh','Miya Tang']
                },
                rootUrl:''
            };
        },

        methods:{
            changeFav(){
                this.shop.favorite = !this.shop.favorite;
            },
            openThisGroup(id){
                var vs = this;
                vs.$router.push({
                    path:'/shopOrder/shop-1/001'
                })

            }


        },
        created() {
            var vs = this;
        },
    
    };
</script>


