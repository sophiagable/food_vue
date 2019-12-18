<template>
    <header class="bg-dark">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark  justify-content-start">
        
                <logo></logo>

                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
        
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item dropdown mx-4">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             菜單
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#"  v-for="c in category" @click.stop="selectMenu(c.id)" :key="c.id" >{{c.name}}</a>
                            </div>
                        </li>                  
        
                        <li class="nav-item mx-4">
                            <a class="nav-link" href="#" @click.stop="goToOrdering">開團中
                               <span class="badge badge-secondary align-top" :title="'【'+group+'】 個團購'" v-if="group">{{group}}</span>
                            </a>
                        </li>

        
                        <li class="nav-item mx-4">

                            <a class="nav-link" href="#" @click.stop="goToMyOrder()">
                                <i class="material-icons right" title="我的訂單">shopping_basket</i>
                                <span class="badge badge-secondary align-top" :title="'您有 【'+order+'】 份訂單'" v-if="order">{{order}}</span>
                            </a>
                        </li>
                        <li>
                            <a class="nav-link" href="#" @click.stop="closeFloat" title="常用功能"><i class="material-icons">face</i></a>
                        </li>

                    </ul>
        

        
                </div>
        
        
        
            </nav>
        </div>
    

    
    </header>
</template>

<script>


import Logo from '@/components/item/Logo'

    export default {
        name: "AppHeader",
        props:["category"],
        components:{
            Logo
        },
        data() {
            return {
                msg: "header",
                order:2,
                group:1
            };
        },
        methods:{
            selectMenu(id){
                var vs = this;
                vs.$router.push({
                    path:'/category/'+id
                })
            },
            closeFloat(){
                this.$emit('close');

            },
            goToMyOrder(){
                this.$router.push({
                    path:'/myOrder/'
                })
            },
            goToOrdering(){
                this.$router.push({
                    path:'/ordering/'
                })       
            }
        }
    
    };
</script>


