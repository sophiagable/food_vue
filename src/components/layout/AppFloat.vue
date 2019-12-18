<template>
  <div class="position-fixed border border-dark bg-secondary  food-float rounded p-3" v-if="!floatClose">
  
    <h5 class="food-float-title text-dark">常用功能
  
      <span class="float-right close-float">
        <i class="material-icons" @click.stop="closeFloat()">close</i>
      </span>
    </h5>
  
    <ul class="list-group  text-dark">
          <li class="list-group-item">
              <router-link tag="button" class="btn btn-secondary" to="/eat-what">吃什麼？大轉盤 </router-link>
          </li>
      
          <li class="list-group-item align-center">
              
              <router-link tag="button" class="btn btn-secondary" to="/calendar">訂餐月曆 </router-link>
          </li>
      
      

          <li class="list-group-item">
            <add-new-shop></add-new-shop>
          </li>
          <li class="list-group-item">
              <change-theme :theme="theme"></change-theme>
          </li>
          <li class="list-group-item">
            <enter-admin></enter-admin>
          </li>
  
    </ul>
    <div class="my-msg  alert-warm my-5">
      <img title="我是訂餐小祕書" class="img-girl" src="@/assets/images/secretary/girl01.png" width="160" alt="小祕書"
      >
      <span class="msg">
        <p>您還有 <i class="font-weight-bold text-danger">100 </i>元還沒繳清</p>
      </span>

    </div>
  
  </div>
</template>

<style lang="scss" scoped>
.food-float{
    position: fixed;
    top:88px;
    left:50px;
    font-size: 16px;
    z-index: 1999;
    max-width: 300px;
    .close-float{
        cursor: pointer;
        i{
            font-size: 14px;
        }
        &:hover{
            color:white;
        }
    }
    // 小於992就hide
    @media(max-width: 992px) {
        display: none;
    }

}


  .my-msg{
    position: relative;
    .img-girl{

    }
    .msg {
            background: #fff;
            display: block;
            position: absolute;
            right: 5px;
            top:80px;
            padding: 10px;
            border-radius: 4px;
            margin-top: 20px;
            text-decoration: none;
            border: 1px solid #ccc;
            max-width: 110px;
            font-size: 14px;
            color:#888;
            &:before   {
                content: "";
                position: absolute;
                /* 設定箭頭的位置 */
                top: 10px;
                display: block;
                /* 設定箭頭的大小與顏色 */
                border-top: 10px solid transparent;
                border-left: 10px solid #FFF;
                border-right: 0 solid #FFF;
                border-bottom: 10px solid transparent;
                border-left-width: 0;
                border-right-width: 10px;
                /* 設定右排箭頭的位置 */
                left: -10px;
                right: auto;
            }

    }

  }
  .list-group{
    overflow: initial;
      .btn-group{
        .btn{
          display: inline-block;
          width:100% !important;
        }
    }
  }



  .list-group-item{
    .dropdown-menu{
      z-index: 9999;
      .dropdown-item{
        cursor: pointer;
      }
    }
  }

</style>


<script>
  
  import ChangeTheme from '@/components/item/ChangeTheme'
  import AddNewShop from '@/components/item/AddNewShop'
  import EnterAdmin from '@/components/item/EnterAdmin'

  export default {  
    name: 'AppFloat',
    props:["floatClose","theme"],
    components:{
        ChangeTheme,
        AddNewShop,
        EnterAdmin
    },
    data() {
      return {
        thisYear: 2018,
        close: 0,
      }
  
    },
    methods: {
      closeFloat() {
        this.close = !this.close;
        this.$emit('close');
      },
    },
    mounted(){
      $('.dropdown-toggle').dropdown();
    }


  

  
  }
</script>


