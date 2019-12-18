
<style lang='scss'>
  //  lib css
  @import './assets/css/material-icons.css'; // redesign bootstrap



  // bs4
  // 自訂的顏色 Sophia setting theme
  // @import '@/assets/scss/food_variables.scss'; // redesign bootstrap ,if change theme,hide this


  // theme change https://bootswatch.com/
  // theme: flatly,minty,solar,lux,united,sketchy,spacelab,journal
  // @import '../node_modules/bootswatch/dist/journal/variables'; // bootswatch theme
  @import '../node_modules/bootstrap/scss/bootstrap.scss'; 
  // @import '../node_modules/bootswatch/dist/journal/bootswatch';// bootswatch theme

 

  // 各項目的調整
  @import '@/assets/scss/main.scss'; // redesign bootstrap

</style>

<template>
  <div id="app">
    <link rel="stylesheet"  href="./static/css/default/bootstrap.min.css" ref="stylesheet" title="main">

    <link rel="stylesheet" :href="'./static/css/theme/'+theme+'/theme.css'" ref="stylesheet" title="main">
    <link rel="stylesheet" :href="'https://bootswatch.com/4/'+theme+'/bootstrap.min.css'" title="main" v-if="theme !=='default'">
    <!-- <link rel="stylesheet" href="https://bootswatch.com/4/united/bootstrap.min.css"> -->
    <router-view :category="category" :theme="theme" />
  </div>
</template>


<script src="https://www.gstatic.com/firebasejs/5.8.0/firebase.js"></script>
<script>
  // Initialize Firebase
  
  // var config = {
  //   apiKey: "AIzaSyCJzzu-9KUYph7WmCcylGOuMGg9VlvjL30",
  //   authDomain: "orderfood-1d749.firebaseapp.com",
  //   databaseURL: "https://orderfood-1d749.firebaseio.com",
  //   projectId: "orderfood-1d749",
  //   storageBucket: "orderfood-1d749.appspot.com",
  //   messagingSenderId: "977125220863"
  // };
  // firebase.initializeApp(config);
</script>


<script>
import $ from 'jquery'
window.$ = $
window.jQuery = $

import Datetime from 'vue-datetime';

  // Vue.component('datetime', Datetime);



var category = [
                        {
                            id:1,
                            name:'午晚餐',
                            sub:[{
                                id:11,
                                name:'飯類'
                            },{
                                id:12,
                                name:'麵類'             
                            },{
                                id:13,
                                name:'鍋類'             
                            },{
                                id:14,
                                name:'其他'             
                            },]
                        },
                        {
                            id:2,
                            name:'飲料'
                        },
                        {
                            id:3,
                            name:'點心'
                        }
];

  export default {
    name: 'App',
    data(){
      return {
        category:category,
        shoplist:[],
        theme:'default',
      }
    },
    methods:{

      changeTheme(name){
         this.theme = name;
      },
      dropdown(){
        $('.dropdown-toggle').dropdown();
      }
    },
    created(){
      // this.getCategory();
      // this.getShopList();
      // this.dropdown();
      $('.dropdown-toggle').dropdown();
    },
    mounted(){
      $('.dropdown-toggle').dropdown();
    }
  }
</script>



