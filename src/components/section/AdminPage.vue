<template>
    <div class="container-fluid bg-light">

        <div class="container pt-3">
            <div class="row">
                <div class="col-7">
                    <h6 class="text-primary">Hi 系統管理者:</h6>
                    <p>請在此設定網站基本設定</p>
                </div>
            </div>
            <div>
               <admin-tab></admin-tab> 
            </div>
        </div>




    </div>
</template>

<style lang="scss" scoped>
    .container-fluid{
        min-height:65vh;
    }
</style>



<script>

import AdminTab from '@/components/item/AdminTab'
    export default {
        name: 'AdminPage',
        props:["category"],
        components:{
            AdminTab
        }

    }

</script>


