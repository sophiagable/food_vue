<template>
    <div class="card m-3" style="width:100%;">
        <div class="row">

            <div class="card-body col-sm-7">
                <div class="card-block px-2">
                    <h4 class="card-title align-text-top mb-0 text-truncate">
                        <router-link to="/shop/1" title="店家詳細資訊">{{shop.shopTitle}}</router-link>
                        <span class="ml-3 member-moon pull-right">
                            <span class="nice align-text-top"><i class="material-icons align-middle" @click.stop="goodShop()">sentiment_very_satisfied</i> <small class="text-primary">{{shop.shopLove}}</small></span>
                            <span class="bad ml-1 align-text-top"><i class="material-icons align-middle" @click.stop="badShop()">sentiment_very_dissatisfied</i> <small class="text-secondary">{{shop.shopBad}}</small></span>
                        </span>
                    </h4>
                    
                    <div class="ml-1"><small class="text-secondary">-{{shop.shopCate_name}}</small></div>
                        
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
                        </ul>

                    </div>
                    <div class="row shop-detail-footer">
                        <div class="col-sm-6"><a href="#" class="btn btn-primary" @click.stop="openThisGroup(shop.shop_id)">我要開團</a></div>
                        <div class="col-sm-6 pick-time text-right text-truncate align-middle pt-2"  v-if="shop.pickTime">
                            
                             <span v-if="shop.pickTime" class="text-danger"> 
                                    {{shop.pickTime}}
                             </span> 前可接單


                        </div>

                    </div>
                    
                </div>
            </div>
            <div class="col-sm-5 food-image">
                <img  class="card-img-top" :src="rootUrl+shop.shopImage">
                <span class="love">
                    <i title="移除我的最愛" class="material-icons"  @click.stop="changeFav()" v-if="shop.favorite">favorite</i> 
                    <i title="設為我的最愛" class="material-icons" @click.stop="changeFav()" v-else>favorite_border</i>
                </span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.shop-list{
    margin: 30px 0;
    .shop-item{
        margin-bottom: 30px;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .card{
        .card-body{
            .member-moon{
                small{
                    font-size: 12px;
                }
                .nice{
                    cursor: pointer;

                }
                .bad{
                    cursor: pointer;

                }

            }
            .shop-detail{
                font-size: 14px;
                ul{
                    list-style: none;
                    margin-top:8px;
                    li{
                        margin-left: 0;
                        i.material-icons{
                            font-size: 16px;
                            vertical-align: middle;
                        }
                    }
                }
            }
            .shop-detail-footer{
                .pick-time{
                    font-size: 14px;;
                }
            }
        }
        .food-image{
            position: relative;
            .love{
                color:#f50057; // my favorite
                position: absolute;
                top: 10px;
                right: 30px;
                i{
                    cursor: pointer;
                }
            }
        }

    }

}

</style>

<script>
//   var root_url ='/sophia/rv_food/static/';
  var root_url='/static/';

  var shopData =[{
                    "shop_id":1,
                    "shopTitle":"日式咖哩屋",
                    "shopTel":"02-26597126",
                    "shopCate_id":1,
                    "shopCate_name":"午晚餐 [飯類]",
                    "shopAddr":"內湖區江南街113號",
                    "shopTime":"11:00-15:00，17:00-20:00",
                    "minMoney":300,
                    "shopLove":10,
                    "shopBad":5,
                    "favorite":0,
                    "pickTime":"10:30",
                    "shopImage":root_url+"images/shop_img/rice_200X250.png"},
                    {
                    "shop_id":2,
                    "shopTitle":"后上清泉",
                    "shopTel":"0900-140-738",
                    "shopCate_name":"飲料",
                    "shopAddr":"內湖區內湖路一段615號",
                    "shopTime":"11:00-1800",
                    "minMoney":300,
                    "shopLove":1,
                    "shopBad":5,
                    "favorite":0,
                    "pickTime":"",
                    "shopImage":root_url+"images/shop_img/drink_200X250.png"},
                    {
                    "shop_id":3,
                    "shopTitle":"Banana Blue",
                    "shopTel":"02-85015638",
                    "shopCate_name":"點心",
                    "shopAddr":"內湖區瑞光路280號1樓",
                    "shopTime":"10:00-1800",
                    "minMoney":300,
                    "shopLove":1,
                    "shopBad":5,
                    "favorite":0,
                    "pickTime":"",
                    "shopImage":root_url+"images/shop_img/group_200X250.png"}
                    ];

    export default {
        name: "ShopCard",
        props:["cateNumber"],
        data() {
            return {
                shop:{
                    "shop_id":1,
                    "shopTitle":"日式咖哩屋",
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
                    "shopImage":root_url+"images/shop_img/rice_200X250.png"
                },
                shopData,
                rootUrl:''
            };
        },
        watch: {
            $route:{
                handler(){
                    var vs = this;
                    var num = vs.$route.params.cateNumber
                    if(num){
                            vs.changeShop(num);
                    }
                },
                deep:true
            }
        },
        methods:{
            changeFav(){
                this.shop.favorite = !this.shop.favorite;
            },
            goodShop(){
                this.shop.shopLove= this.shop.shopLove+1;
            },
            badShop(){
                this.shop.shopBad= this.shop.shopBad+1;
            },
            changeShop(num){
                var vs = this;
                    if(num){
                        var list = vs.shopData;
                        for(var i in list){ 
                            if(Number(num) == list[i].shop_id){
                                vs.$set(vs,'shop',list[i]);
                            }
                        }
                    }else{
                        var list = vs.shopData;
                        for(var i in list){ 
                            if(Number(vs.cateNumber) == list[i].shop_id){
                                vs.$set(vs,'shop',list[i]);
                            }
                        }   
                    }
            },
            openThisGroup(id){
                var vs = this;
                vs.$router.push({
                    path:'/myOrderGroup/step'+2+'/shop'+id
                })

            }
        },
        created() {
            var vs = this;
            if(vs.cateNumber){
                 this.changeShop();
            }
        },
    
    };
</script>


