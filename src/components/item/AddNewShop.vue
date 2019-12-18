

<template>
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-info"  @click.stop="addShop">
                 <i class="material-icons left align-middle mr-2">home</i> 新增店家
            </button>
        </div>
</template>

<style lang="scss" scoped>

</style>


<script>


    export default {
        name: 'AddNewShop',
        methods:{
            addShop(){
                this.$router.push({
                    path:'/newShop/step1'
                })
            }
        }
    }

</script>


