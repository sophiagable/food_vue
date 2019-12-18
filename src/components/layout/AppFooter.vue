<template>
     <footer class="font-small">
       <div class="jumbotron jumbotron-fluid mb-0 pb-3">
          <div class="container">
            <div class="row">
             <div class="col-sm-8">

                <ad-banner></ad-banner>

              </div>
              <div class="col-sm-4">
                  <div class="mb-2">
                    <change-theme :theme="theme"></change-theme>
                  </div>
                  <div class="btn-group-vertical" role="group" aria-label="footer buttons">
                    <button type="button" class="btn btn-light"><a href="#">今天吃什麼</a></button>
                    <button type="button" class="btn btn-light"><menu-excel></menu-excel></button>
                    <button type="button" class="btn btn-light"><enter-admin></enter-admin></button>
                  </div>


              </div>
              <div class="col text-center">
                  <p class="text-center text-muted">
                          Copyright {{thisYear}} Revovision.
                  </p>
              </div>
            </div>


          </div> 
       </div>
    
     </footer>
</template>
<style lang="scss" scoped>
footer{
    .good-word{
        font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
        font-size: 30px;
        font-style: italic;
        line-height: 2rem;
        text-align: center;
        padding:20px 30px;
    }
}
</style>

<script>

import ChangeTheme from '@/components/item/ChangeTheme'
import AdBanner from '@/components/item/AdBanner'
import MenuExcel from '@/components/item/MenuExcel'
import EnterAdmin from '@/components/item/EnterAdmin'

export default {
  name: 'AppFooter',
  props:['theme'],
  components:{
    ChangeTheme,
    AdBanner,
    MenuExcel,
    EnterAdmin
  },
  data () {
    return {
      thisYear: 2018
    }
  },
  methods:{
    getYear:function(){
      var year = (new Date()).getFullYear();
      return year;
    }
  },
  created() {
    this.thisYear = this.getYear();
  },
  mounted(){
     $('.dropdown-toggle').dropdown();
  }
}
</script>


