<template>
    <tr>
      <td>
          {{group.status}}
      </td>
      <td>{{group.category}}</td>
      <td>
          <!-- <a href="" @click.stop="openThisGroup()">{{group.shop_name}}</a> -->
          <router-link to="/shopOrder/shop-1/001">
                {{group.shop_name}}
          </router-link>
    </td>
      <td>10</td>
      <td v-if="group.status !=='已結束'">
         <div v-if="group.status !=='已結團'"><a href="#"><i class="material-icons align-middle mx-2">assignment_turned_in</i>結團</a></div> 
         <div v-if="group.status =='開團中'"><a href="#"><i class="material-icons align-middle mx-2">delete_forever</i>取消團訂</a></div>
          <div><a href="#"><i class="material-icons align-middle mx-2">assignment</i>人數統計表單</a></div>
      </td>
      <td v-else>
              ---
      </td>
      <td>{{group.update_time}}</td>
    </tr>
    
</template>

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

    export default {
        name: 'MyOrderTd',
        props:["group"],
        data(){
            return{
                // myOpenGroup
            }
        },
        methods:{
            openThisGroup(id){
                var vs = this;
                vs.$router.push({
                    path:'/shopOrder/shop-1/001'
                })
            }
        }
    }
</script>


