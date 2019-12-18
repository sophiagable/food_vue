 <!--
 link:localhost/shopOrder/shop-1/001/status/
 -->
<template>

    <div class="container bg-light pb-5 p-3">
    
        <div class="row mt-3">
            <div class="col-12 col-sm-12 col-xl-6">
                <h4 class="text-primary">店家：<small class="text-dark">{{groupInfo.shop_name}}</small></h4>
            </div>
            <div class="col-12 col-sm-12 col-xl-6 text-right">
                <h4 class="text-primary">團長：<small class="text-dark">{{groupInfo.group_leader}}</small></h4>
            </div>
        </div>
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
        <div class="row m-2 p-2 bg-light border border-grey">
            <span class="col-6">Total:</span>
            <span class="col-6 text-right text-dark font-weight-bold">{{groupInfo.total}}</span>
        </div>
        
        <!-- 團長功能 -->
        <div class="m-5 d-flex justify-content-center leader-btn">
            <!-- <div class="btn btn-info p-2 m-1">統計總數</div> -->
            <div class="btn btn-info p-2 m-1" @click.stop="closeThisGroup()">立即結團</div>
        </div>
    
    </div>
</template>
<style lang="scss" scoped>
    .leader-btn{
        .btn{
            cursor: pointer;
        }
    }

</style>

<script>

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
    }

];

var groupInfo={
  shop_name:'日式咖哩屋',
  group_leader:'Miya Tang',
  order_person: orderPersen,
  total:330,
};

    export default {
        name: 'OrderPeople',
        data(){
            return{
                groupInfo,
            }
        },
        methods:{
            closeThisGroup(){
                var vs = this;

                var vs = this;
                var sweetWord = {
                    title:'確定要結團了？',
                    text:'確認沒有人要再訂了喔？',
                    type:'warning',
                    showCancelButton: true,
                    cancelButtonText: '取消',
                    confirmButtonText: '確定結團',
                    reverseButtons: true
                };
                vs.$swal(sweetWord).then((result)=>{
                    if(result.value){
                        vs.$router.push({
                            path:'/shopOrder/shop-1/001/close/'
                        });
                    }else{
                        console.log('取消結團');
                    }
                })


            }
        }
    }

</script>


