<template>
    <div>
        <table class="table">
            <thead >
                <tr>
                    <th scope="col">狀態</th>
                    <th scope="col">類別</th>
                    <th scope="col">訂單</th>
                    <th scope="col">訂餐人數</th>
                    <th scope="col">編輯</th>
                    <th  scope="col">更新時間</th>
                </tr>
            </thead>
            <tbody>
                <my-group-td v-for="gg in myOpenGroup" :group="gg" :key="gg.id"></my-group-td>
            </tbody>
        </table>
        <div class="mt-3 p-2">
            <blockquote class="blockquote info text-grey">
                 <ul>
                     <li>開團中：可訂購</li>
                     <li>已結團：不可訂購，團長可修改</li>
                     <li>已結束：團購已結束，不可修改 (過了某段時間要自動刪除…Maybe 1 week...)</li>
                 </ul>
            </blockquote>
        </div>



    </div>
</template>
<style lang="scss" scoped>
.info{
    font-size: 14px;
}
.table{
    th{
        font-size: 14px;
    }

}
</style>

<script>

   var myOpenGroup = [
       {
           id:1,
           status:'開團中',
           category:'午晚餐 - 飯類',
           shop_name:'日式咖哩', 
           update_time:'2019-02-14 10:00'
        }, 
       {
           id:2,
           status:'已結團',
           category:'午晚餐 - 飯類',
           shop_name:'日式咖哩', 
           update_time:'2019-02-13 10:10' 
       },
       {
           id:3,
           status:'已結束',
           category:'午晚餐 - 飯類',
           shop_name:'日式咖哩', 
           update_time:'2019-02-12 10:10' 
       },
   ];

import  MyGroupTd from '@/components/pages/MyGroupTd'

    export default {
        name: 'MyGroupList',        
        components:{
            MyGroupTd
        },
        data(){
            return{
                myOpenGroup
            }
        }
    }
</script>


