

<template>
        <div class="d-flex justify-content-center">
            <p class="lead step-info">
                <span class="font-weight-bold title">Hi 感謝您建立新的店家資訊.</span> 
                <span class="d-block text-muted word">請先下載 
                    <menu-excel></menu-excel>並編輯完成後，依以下步驟建立店家完整資料.
                </span>
            </p>
        </div>
</template>

<style lang="scss" scoped>
.step-info{
    .title{
        font-size: 18px;
    }
    .word{
        font-size: 14px;
    }
}
</style>


<script>
import MenuExcel from '@/components/item/MenuExcel'
    export default {
        name: 'NewShopTitle',
        components:{
            MenuExcel
        },
        data(){
            return{
                themeList
            }
        },

    }

</script>


