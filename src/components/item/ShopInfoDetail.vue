<template>
    <div class="card border-primary m-2"> 
        <div class="card-header">
            <!-- CURRY WU 日式咖哩飯
            <small class="text-primary">[午晚餐]</small> -->
            基本資料
        </div>
        <div class="card-body">
            <ul class="base-info list-unstyled align-middle">
                <li class="text-truncate">
                    <i class="material-icons align-middle mr-2">home</i> 台北市內湖區江南街113號
                </li>
                <li class="text-truncate">
                    <i class="material-icons align-middle mr-2">phone</i> 02-26597126
                </li>
                <li class="text-truncate">
                    <i class="material-icons align-middle mr-2" title="網站">print</i>  02-26597127
                </li>
                <li class="text-truncate">
                    <i class="material-icons align-middle mr-2" title="網站">web</i> 
                    <a href="https://m.facebook.com/currywu.20120811/?locale2=zh_TW" >
                      https://m.facebook.com/currywu.20120811/?locale2=zh_TW 
                    </a>
                </li>
          

                <li class="text-truncate">
                    <i class="material-icons align-middle mr-2">access_time</i> 11:00-15:00，17:00-20:00
                </li>

                <li class="text-truncate">
                        <i class="material-icons align-middle mr-2">monetization_on</i>
                        <span class="text-success font-weight-bold"> 
                                500
                        </span> 可外送
                </li>


                <li class="text-truncate">
                        <i class="material-icons align-middle mr-2">assignment_turned_in</i>
                        <span class="text-success font-weight-bold"> 
                                10:30 AM
                        </span> 前可接單
                </li>
                <li class="text-truncate">
                    <span class="font-weight-bold mr-2"> Line ID </span> 
                    <span class="text-success font-weight-bold">  @xxx</span>
                </li> 
                <li>
                    <div class="row">
                        <div class="font-weight-bold col-3">備註</div>
                        <div class="col-8">
                            這家不錯吃這家不錯吃這家不錯吃
                            這家不錯吃這家不錯吃這家不錯吃
                            這家不錯吃這家不錯
                        </div>
                    </div>
                    <div>

                    </div>
                </li> 

                <li>
                    <hr>
                </li>

                <li class="text-truncate">
                        <i class="material-icons align-middle mr-2">sentiment_very_satisfied</i>
                        <span class="text-success font-weight-bold"> 
                                20
                        </span> 人喜歡這家店
                </li>
                <li class="text-truncate">
                        <i class="material-icons align-middle mr-2">sentiment_very_dissatisfied</i>
                        <span class="text-info font-weight-bold"> 
                                5
                        </span> 人不喜歡這家店
                </li>
                <li>
                    <hr>
                </li>
                <li>
                    <span class="title mr-2 text-secondary">
                          最近更新者
                    </span>
                    <span>
                         Miya Tang
                    </span>
                </li>

                <li>
                    <span class="title mr-2 text-secondary">
                          最近更新
                    </span>
                    <span>
                         2019-01-30 17:00
                    </span>
                </li>


            </ul>
        </div>

    </div>
</template>
<style lang="scss" scoped>
    .card-body{
        position: relative;
        .base-info{
            li{
                margin-bottom:10px;
            }
        }
        .total-amount{
            font-size: 1rem;
            position: absolute;
            bottom: 0;
            right: 0;
            border-bottom: 1px dashed var(--info);
            .money{
                font-size: 1.5rem;
                margin:3px 6px;
            }
        }
    }

</style>

<script>
//  商家資訊 
export default {
    name:'ShopInfoDetail',
    
}
</script>



