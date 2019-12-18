<template>
   <div class="container-fluid bg-dark navbar-toggler">
       <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item mx-4" v-for="c in category" :key="c.id" :class="{'active':category_now==c.id,'dropdown':c.sub}">
                             <template v-if="c.sub">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#" @click.stop="selectCate(c.id)">
                                    {{c.name}}
                                </a>

                                <div class="cate-sub-menu dropdown-menu" v-if="subMenu">
                                    <a class="dropdown-item my-2" href="#"  v-for="sub in c.sub" :key="sub.name">{{sub.name}}</a>
                                </div>
                             </template>
                             <template  v-else>
                                <a class="nav-link" href="#" @click.stop="selectCate(c.id)">{{c.name}}</a>
                             </template>
                            <!-- <router-link class="nav-link"  @click.stop="selectCate(c.id)" 
                            :to="{name:'category',params:{cateId:c.id}}">{{c.name}} -->
                            <!-- </router-link> -->
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-info  my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
       </div>
    
   </div>   

</template>

<style lang="scss" scoped>

    .cate-sub-menu{
        display: block !important;
    }


</style>


<script>
        export default {
            name: "AppCateMenu",
            props:['category'],
            data() {
                return {
                    subMenu:0,
                    category_now:1,
                };
        
            },
            methods:{
                selectCate(id){
                    var vs = this;
                    vs.category_now = id;
                    vs.$router.push({
                        path:'/category/'+vs.category_now
                    })
                    if(id == 1){
                        vs.subMenu = !vs.subMenu;
                    }
                }
            },    
            mounted() {
                $('.dropdown-toggle').dropdown();
            },
        
        };
</script>


