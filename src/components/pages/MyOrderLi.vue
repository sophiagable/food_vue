<template>
    <tr class="my-order-li">
      <td>午晚餐 - 飯類</td>
      <td>
          <!-- <a title="訂購連結" class="shop-link text-info  p-1" @click.stop="gotoShopOrder()">
              日式咖哩</a> -->
              <Router-link to="/shopOrder/shop-1/001" tag="a" title="訂購連結" class="shop-link text-info  p-1">
                    日式咖哩
              </Router-link>
      </td>
      <td>

          韓式泡菜丼(牛肉)
          <div><small class="text-secondary">不要香菜</small></div>
      </td>
      <td>1</td>
      <td>
          130
           <div class="m-0 p-2 text-primary border border-primary form-check">
              <input type="checkbox" class="ml-3 mr-2"> <span>已付</span>
          </div>

            <!-- another type -->
            <!-- <div class="input-group  input-group-sm form-inline">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input">
                         <small class="ml-2 text-secondary">已付</small class="ml-2 text-primary">    
                        </div>
                    </div>
                    <input type="text" class="form-control" maxlength="5" aria-label="Text input with checkbox">
            </div> -->


     </td>
      <td>10 人已訂</td>

      
      <td>
          <i class="material-icons align-middle mx-2">perm_identity</i>Miya
      </td
      >
      <td>  <i title="編輯" class="delete-icon material-icons align-middle mx-2">edit</i></td>
      <td>  <i title="刪除" class="delete-icon material-icons align-middle mx-2">delete_forever</i></td>
    
    </tr>
</template>
<style lang="scss" scoped>
.my-order-li{
    .shop-link{
        cursor: pointer;
        border:0;
    }
    .delete-icon{
        cursor: pointer;
        &:hover{
            color:var(--primary);
        }
    }
}
</style>

<script>

    export default {
        name: 'MyOrderLi',
        methods:{
            gotoShopOrder(){
                var vs = this;
                vs.$router.push({
                    path:'/shopOrder/shop-1/001'
                })
            }
        }
    }
</script>


