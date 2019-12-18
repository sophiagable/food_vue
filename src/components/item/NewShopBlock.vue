

<template>
        <div class="p-5">

             <div class="card new-shop-block">
                 <div class="card-header text-center">
                     Step {{shopStep}} 
                     <span v-if="shopStep==1">選擇店家分類</span>
                     <span v-if="shopStep==2">上傳店家示意圖</span>
                      <span v-if="shopStep==3">上傳已編輯完成之菜單EXCEL檔</span>
                 </div>
                 <div class="card-body">

                     <!-- step1 -->

                    <div class="row"  v-if="shopStep==1">
                        <div class="input-group m-1 col-5">
                                <div class="input-group-prepend">
                                    <label class="input-group-text">分類</label>
                                </div>
                                <select class="custom-select"  v-model="shopCategory">
                                    <option selected>請選擇分類</option>
                                    <option v-for="(c,ci) in category" :value="c.id" :key="ci"> {{c.name}}</option>
                                </select>
                        </div>
                        <!-- 如果有次選單，出現次選單  -->
                        <div class="input-group m-1 col-5" v-if="hasSub">
                                <div class="input-group-prepend">
                                    <label class="input-group-text">次分類</label>
                                </div>
                                <select class="custom-select"  v-model="subCategory">
                                    <option selected>請選擇分類</option>
                                    <option v-for="(sub,si) in subList" :value="sub.id" :key="si"> {{sub.name}}</option>
                                </select>

                        </div>
                        <div class="col-3 offset-8 mt-3">
                            <button class="btn btn-info" @click.stop="goToStep(2)">下一步驟 Next Step</button>
                        </div>
                    </div>

                    <div class="row p-4" v-if="shopStep==2">
                            <div class="d-flex justify-content-center">
                                <p class="text-info">
                                    請上傳 200x250 尺寸圖檔為最佳
                                </p>
                            </div>
                            <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">上傳</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                                        <label class="custom-file-label" for="inputGroupFile01">選擇...</label>
                                    </div>
                            </div>
                            <div class="col-3 offset-8 mt-3">
                                <button class="btn btn-info" @click.stop="goToStep(3)">下一步驟 Next Step</button>
                            </div>
                    </div>

                    <div class="row p-4" v-if="shopStep==3">
                            <div class="d-flex justify-content-center">
                                <p class="text-info">
                                    請上傳xls檔
                                </p>
                            </div>
                            <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">上傳</span>
                                    </div>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="inputGroupFile01">
                                        <label class="custom-file-label" for="inputGroupFile01">選擇xls檔...</label>
                                    </div>
                            </div>
                            <div class="col-3 offset-8 mt-3">
                                <button class="btn btn-info" @click.stop="goToShop">前往已編輯完成之店家</button>
                            </div>
                    </div>

                 </div>
             </div>

        </div>
</template>

<style lang="scss" scoped>
    .new-shop-block{
        width:90%;
        margin:0 auto;
    }
</style>


<script>

    export default {
        name: 'NewShopBlock',
        props:["category"],
        data(){
            return{
              shopStep:1,
              shopCategory:'',
              subCategory:'',
              subList:[],
              hasSub:false
            }
        },
        watch: {
            $route:{
                handler(){
                    var vs = this;
                    var num = Number(vs.$route.params.newStepId);
                    vs.shopStep = num;
                },
                deep:true
            },
            shopCategory:{
                handler(){
                    var vs = this;
                    var list = vs.category;
                    vs.hasSub= false;
                    if(vs.shopCategory){
                        for(var i in list){
                            if(list[i].id == vs.shopCategory){
                                if(list[i].sub && list[i].sub.length !==0 ){
                                    vs.subList = list[i].sub
                                    vs.hasSub = true;
                                }else{
                                     vs.subList = [];
                                     vs.hasSub = false;
                                }
                            }
                        }
                    };
                },
                deep:true

            }
        },
        methods:{
            goToStep(step){
                this.$router.push({
                    path:'/newShop/step'+step
                })
            },
            goToShop(){
                this.$router.push({
                    path:'/shop/1'
                })             
            }
        }
    }

</script>


