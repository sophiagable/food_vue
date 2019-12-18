<template>

   <div class="container-fluid bg-light">
        <div class="container order-setting">
            <div class="d-flex  justify-content-center flex-wrap align-content-stretch pb-5">
                    
                    <div class="card border-dark m-2">
                        <img src="@/assets/images/shop_img/rice_200X250.png" alt="" class="card-img-top">
                        <div class="card-header">日式咖哩飯</div>
                        <div class="card-body">
                            <h6><small class="text-primary">[午晚餐]</small></h6>
                        </div>
                    </div>
              
                    <div class="card border-info m-2" v-if="orderStep==2" style="max-width: 100rem;min-width:30rem">
                        <div class="card-header">設置</div>
                        <div class="card-body">
                                <div class="form-group row">
                                    <label  class="col-sm-4 col-form-label">限時團訂<i class="text-warning">*</i></label>
                                    <div class="col-sm-8">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="timeLimited1" v-model.number="timeLimited" value="1">
                                                <label class="form-check-label" for="timeLimited1">是</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="timeLimited2" v-model.number="timeLimited" value="0">
                                                <label class="form-check-label" for="timeLimited2">否</label>
                                            </div>
                                    </div>
                                </div>
                                <div class="form-group row" v-if="timeLimited">
                                    <label  class="col-sm-4 col-form-label" for="input_starttime">設定截止時間</label>
                                    <div class="col-sm-8">
                                        <!-- <datetime v-model="dateTime" type="datetime" input-class="form-control"></datetime> -->
                                        <VueCtkDateTimePicker v-model="dateTime"  formatted="YYYY-MM-DD HH:mm " label="結單時間"/>
                                        <!-- <input placeholder="Selected time" type="text" id="input_starttime" class="form-control timepicker"> -->
                                    </div>
                                </div>
                                <!-- <div class="form-group row">
                                    <label for="groupPwd" class="col-sm-4 col-form-label">團長密碼<i class="text-warning">*</i></label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" id="groupPwd" placeholder="請填密碼" v-model="leaderPassword">
                                    </div>
                                </div> -->
                                <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">備註</label>
                                    <div class="col-sm-8">
                                        <textarea name="" id="" class="form-control" cols="30" rows="4">
                                        </textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4"></div>
                                    <div  class="col-sm-8">
                                            <button type="button" class="btn btn-light" @click="$router.go(-1)">取消</button>
                                            <button type="button" class="btn btn-primary" @click.stop="NextStep()">下一步</button>
                                    </div>
                                
                                </div>
                        </div>
                    </div>

                    <div class="card border-info m-2" v-if="orderStep==3" style="max-width: 100rem;min-width:30rem">
                            <div class="card-header">開團成功</div>
                            <div class="card-body">
                                <p class="text-warning">請牢記以下資訊</p>

                                <table class="table table-bordered">
                                    <tbody>
                                        <!-- <tr>
                                            <th>團長密碼 </th>
                                            <td>
                                                {{leaderPassword}}
                                            </td>
                                        </tr> -->
                                        
                                        <tr>
                                            <th>網址</th>
                                            <td>
                                                http://root/shopId-1/20190123001
                                            </td>
                                        </tr>
                                        <tr v-if="dateTime">
                                            <th>結單時間</th>
                                            <td>
                                                {{dateTime}}
                                            </td>
                                        </tr>                                      
                                    </tbody>
                                </table>

                                <div class="row">
                                   <div class="col-sm-4"></div>
                                   <div  class="col-sm-8"><button @click.stop="OrderNow()" type="button" class="btn btn-primary">開始訂購</button></div>
                                </div>
                            </div>
                    </div>



            </div>
        </div>
   </div>

</template>

<style lang="scss" scoped>


    .order-setting{
        .card-img-top{
            // max-height:150px;
            width:auto;
            max-height:200px;
        }
    }
</style>


<script>
import Datetime from 'vue-datetime';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
// Vue.component('datetime', Datetime);

    export default {
        name: "OrderStepSetting",
        data() {
            return {
                orderStep:2,
                timeLimited:0,
                dateTime:'',
                leaderPassword:'',
                theShopId:''
            };
        },
        watch: {
            $route:{
                handler(){
                    var vs = this;
                    vs.orderStep = Number(vs.$route.params.stepId);
                    vs.theShopId = Number(vs.$route.params.shopId)
                },
                deep:true
            }
        },
        methods: {
            NextStep(){
                var vs = this;
                vs.orderStep = 3;
                vs.$router.push({
                    path:'/myOrderGroup/step'+3+'/shop'+ Number(vs.$route.params.shopId)
                })
            },
            OrderNow(){
                var vs = this;
                var shopId = Number(vs.$route.params.shopId);
                vs.$router.push({
                    path:'/shopOrder/shop-'+shopId+'/'+ '001'
                })
            }
        },
        created() {
            var vs = this;
        },
    };

</script>


