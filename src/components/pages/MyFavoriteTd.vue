<template>
    <tr>
      <td>午晚餐 - 飯類</td>
      <td>
          <!-- <a href="">日式咖哩</a> -->
          <router-link to="/shop/1">
              日式咖哩
          </router-link>
      </td>
      <td>
        <div @click.stop="OpenGroup()">
            <a href=""><i class="material-icons align-middle mx-2" >local_dining</i>我要開團</a>
        </div>
         <div><a href=""><i class="material-icons align-middle mx-2">delete_forever</i>移除我的最愛</a></div>
      </td>
    </tr>
</template>

<script>

    export default {
        name: 'MyFavoriteTd',
        methods: {
            OpenGroup(){
                this.$router.push({
                    path:'/myOrderGroup/'
                })
            }
        },
    }
</script>


