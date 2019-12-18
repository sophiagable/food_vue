<template>
    <div class="card"> 
            <div class="card-body">
                <h5 class="card-title font-weight-bold text-primary">
                    CURRY Wu 日式咖哩屋 
                    <div class="float-right text-primary font-weight-bolder align-middle">
                        <small class="text-primary mr-2 font-weight-normal align-middle">
                            TEL: 
                        </small> 
                        02-123456789
                    </div>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">地址:台北市內湖區江南街113號 </h6>
                <h6 class="card-subtitle mb-2 text-muted">營業時間:06:30–18:00 </h6>
                <div class="total-amount m-3 px-2">
                    共訂購了<span class="font-weight-bolder text-primary money">620</span>元
                </div>
            </div>

    </div>
</template>
<style lang="scss" scoped>
    .card-body{
        position: relative;
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
    name:'ShopSimple',
    
}
</script>



