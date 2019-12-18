<template>

    <div class="my-order-block card border-primary m-2" :class="{'myorder-fixed':overBottom}">
        <div class="card-header">
            我的訂單
        </div>
        <div class="card-body">
            <div class="empty-box bg-light p-3 text-center" v-if="myOrder && myOrder.length ==0 ">
                 <p>空無一物</p>
            </div>
            <ul class="order-list" v-if="myOrder && myOrder.length !==0 ">
                <li v-for="(item,index) in myOrder" :key="item.name">
                    <div class="row ordered-item">
                        <div class="col-12 ordered-name">
                            <small>
                                {{index+1}}.
                            </small>
                             {{item.name}} X <i class="number">{{item.number}}</i>
                             <span>
                                 <i class="delete-icon material-icons" @click.stop="deleteThisItem(index)">delete_forever</i>
                             </span>
                        </div>
                        <div class="col-8 ml-3">
                            <span class="order-note bg-light text-info" v-if="item.note">{{item.note}}</span>
                        </div>
                        <div class="col-3 text-dark text-right">
                             {{item.price * item.number}}
                        </div>

                    </div>
                </li>
            </ul>

            <div class="row border-danger p-3 ">
                <div class="col-8 text-danger">
                    Total
                </div>
                <div class="col-4 text-right total-price">
                    {{totalPrice}}
                </div>

            </div>
            <div class="row">
                <div class="col-12 text-right">
                    <button class="btn btn-info" @click.stop="orderNow()">確認訂購</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .myorder-fixed{
        position: fixed;
        top: 200px;
        min-width: 300px;
    }
    .empty-box{
        margin: 0 auto;
    }
    .order-list{
        list-style: none;
        margin: 0;
        padding:0;
        li{
            border-bottom: 1px dashed var(--gray);
            padding:5px 0 8px 0;
            i.number{
                color:var(--info);
                font-weight: bold;
                font-style: normal;
            }
        }
        .ordered-item{
            .ordered-name{
                position: relative;
                .delete-icon{
                    position: absolute;
                    right:15px;
                    top:0;
                    cursor: pointer;
                    font-size: 18px;
                    &:hover{
                        color:var(--warning);
                        background-color: var(--light);
                    }
                }
            }
            .order-note{
                font-size: 12px;
            }
        }
    }
    .total-price{
        color:var(--primary);
        font-size: 20px;
    }
</style>


<script>
    export default {
        name: 'MyOrder',
        props:["myOrder"],
        data(){
            return{
                totalPrice:0,
                overBottom:0
            }
        },
        computed:{
            getWindowHeight() {
                return document.documentElement.clientHeight;
            },
            getDocumentHeight() {
                var body = document.body,
                html = document.documentElement;

                return Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );
            }

        },
        watch:{
            myOrder:{
                handler(){
                    var vs = this,total=0;
                    var list = vs.myOrder;
                    if(vs.myOrder && vs.myOrder.length == 0){
                        vs.totalPrice = 0;
                    }else{
                        for(var i in list){
                            total += (list[i].price * list[i].number);
                        }
                        vs.totalPrice = total;
                    }
                },
                deep:true
            }

        },
        methods:{
            handleScroll(event){
                var vs = this;
                var height = $(window).scrollTop();
                var myBlock = $('.my-order-block');
                var windoHeight = vs.getWindowHeight ;
                if(height >= windoHeight ){
                    myBlock.addClass('myorder-fixed');
                }else{
                    myBlock.removeClass('myorder-fixed');
                }

            },
            deleteThisItem(index){
                var vs = this ;
                vs.$emit('delete',index)
            },
            orderNow(){
                var vs = this;
                var sweetWord = {
                    title:'確定訂購嗎？',
                    text:'您點了好多東西喔',
                    type:'info',
                    showCancelButton: true,
                    cancelButtonText: '取消，我再想想…',
                    confirmButtonText: '訂了',
                    reverseButtons: true
                };
                vs.$swal(sweetWord).then((result)=>{
                    if(result.value){
                        console.log('yes order it');
                    }else{
                        console.log('cancle');
                    }
                })
            }
        },
        created(){
             window.addEventListener('scroll', this.handleScroll);
        },
        destroyed(){
             window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>


