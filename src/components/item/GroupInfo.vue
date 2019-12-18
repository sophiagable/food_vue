<template>
    <div class="row group-info">
        <div class="col-8">
            <div class="row group-leader-info p-2">
                <div class="leader-icon col-2 text-center ml-3 border border-secondary">
                    {{gleader}} <br>
                    <small class="text-gray">團長的話</small>
                </div>
                <div class="col-8 mt-1">
                    <msg-box></msg-box>
                </div>
            </div>

        </div>
        <div class="col-4">
       
        </div>

        
    </div>
</template>

<style lang="scss" scoped>
    .group-info{
        .group-leader-info{
            .leader-icon{
                border-radius: 10px;
            }

        }

    }
</style>


<script>

import MsgBox from '@/components/item/MsgBox'


    export default {
        name: 'GroupInfo',
        components:{
            MsgBox,

        },
        data(){
            return{
                gleader:'Miya Tang'
            }
        }
    }

</script>


