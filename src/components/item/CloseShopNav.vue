

<template>
   
    <div class="my-3">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" >
                        <a class="nav-link border-bottom-0" :class="{'active show bg-white  text-info': group_nav == 1 }"  @click.stop="selectNav(1)">
                            <i class="material-icons align-middle">assignment</i>
                            總覽
                        </a>
                    </li>
                    <li class="nav-item" :class="{'bg-wihte': group_nav == 2 }">
                        <a class="nav-link border-bottom-0" :class="{'active show bg-white  text-info': group_nav == 2 }"  @click.stop="selectNav(2)">
                            <i class="material-icons align-middle">attach_money</i>
                            收錢
                        </a>
                    </li>
                    <li class="nav-item" :class="{'bg-wihte': group_nav == 3 }">
                        <a class="nav-link border-bottom-0" :class="{'active show bg-white  text-info': group_nav == 3 }"  @click.stop="selectNav(3)">
                            <i class="material-icons align-middle">local_phone</i>
                            訂購
                        </a>
                    </li>
                </ul>
                <div class="tab-content py-3 px-3 bg-white border border-grey border-top-0" id="myTabContent">
                    <div class="tab-pane fade" :class="{'show active': group_nav == 1}">
                        <close-list></close-list>
                    </div>
                    <div class="tab-pane fade" :class="{'show active': group_nav == 2}">
                       <close-person-list></close-person-list>
                    </div>
                    <div class="tab-pane fade" :class="{'show active': group_nav == 3}">
                       <close-order-list></close-order-list>
                    </div>
                        
                </div>

                <div class="m-3">
                    <button class="btn btn-info btn-lg btn-block">收錢收貨完成，此團訂已結束</button>
                </div>
    </div>

</template>
<style lang="scss" scoped>
    .nav-tabs{
        .nav-item{
            a.nav-link{
                cursor: pointer;
            }
        }

    }

</style>
<script>
import CloseList from '@/components/item/CloseList'
import ClosePersonList from '@/components/item/ClosePersonList'
import CloseOrderList from '@/components/item/CloseOrderList'

    export default {
        name: "CloseShopNav",
        components:{
            CloseList,
            ClosePersonList,
            CloseOrderList
        },
        data() {
            return {
                group_nav:1

            };
        },
        methods:{
            selectNav(item){
                this.group_nav = item;
            }
        }
    
    };
</script>


