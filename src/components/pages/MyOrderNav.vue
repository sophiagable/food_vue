<template>
    <div  class="container my-3 py-4 px-4">
        
                <ul class="nav nav-tabs rounded-top" id="myTab" role="tablist">
                    <li class="nav-item" >
                        <a class="nav-link text-info border-bottom-0" href="#" :class="{'active show bg-light  text-info': my_nav == 1 }"  @click.stop="selectTab(1)">我的訂單</a>
                    </li>
                    <li class="nav-item" :class="{'bg-wihte': my_nav == 2 }">
                        <a class="nav-link text-info border-bottom-0" :class="{'active show bg-light  text-info': my_nav == 2 }"  @click.stop="selectTab(2)">我開的團</a>
                    </li>
                    <li class="nav-item" :class="{'bg-wihte': my_nav == 3 }">
                        <a class="nav-link text-info border-bottom-0" :class="{'active show bg-light  text-info': my_nav == 3 }"  @click.stop="selectTab(3)">我的最愛</a>
                    </li>
                </ul>

                <div class="tab-content py-3 px-3 bg-light" id="myTabContent">
                    <div class="tab-pane fade" :class="{'show active': my_nav == 1}">
                        <my-order-list></my-order-list>
                    </div>
                    <div class="tab-pane fade" :class="{'show active': my_nav == 2}">
                        <my-group-list></my-group-list>
                    </div>
                    <div class="tab-pane fade" :class="{'show active': my_nav == 3}">
                        <my-favorite-list></my-favorite-list>
                    </div>
                        
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


import  MyOrderList from '@/components/pages/MyOrderList'
import  MyGroupList from '@/components/pages/MyGroupList'
import  MyFavoriteList from '@/components/pages/MyFavoriteList'

    export default {
        name: 'MyOrderNav',
        components:{
            MyOrderList,
            MyGroupList,
            MyFavoriteList
        },
        data(){
            return{
                my_nav:1
            }
        },
        methods:{
            selectTab(id){
                this.my_nav = id;
            }
        }
    }
</script>


