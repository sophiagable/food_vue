

<template>
    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    選擇人員, 新增系統管理者
                </div>
                <div class="card-body">
                    <search-item></search-item>
                    <div class="people-list rounded m-3 p-3 border border-grey">
                        <ul class="user-list">
                            <li class="p-2 m-1  border border-grey border-top-0 border-right-0 border-left-0"  v-for="u in notAdminList" :key="u.name_en">
                                <div class="row">
                                    <span class="col-8">{{u.name_en}} {{u.name_tw}}</span>
                                    <span class="col-4"><span class="badge badge-info icon add-icon">新增</span></span>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-1 d-flex justify-content-center flex-wrap align-items-center">
            <div class="mid-arrow">
                <div class="p-2">
                         <i class="material-icons">chevron_right</i>
                </div>

            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    系統管理者
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(p,pi) in adminList" :key="pi">
                            <i class="material-icons align-middle left">account_circle</i>
                                 {{p.name_en}} {{p.name_tw}}
                            <span class="badge badge-danger icon del-icon">刪除</span>
                            </li>
                    </ul>
                </div>

            </div>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>

    .card-body{
        min-height: 220px;
    }
    .people-list{
        min-height: 200px;
        max-height: 500px;
        overflow: auto;
    }
    .icon{
        cursor: pointer;
    }
    .user-list{
        list-style-type: none;

    }
    .mid-arrow{
        i{
            font-size: 42px;
        }
    }
</style>



<script>
import SearchItem from '@/components/item/SearchItem'

var userlist = [
    {
        id:1,
        name_tw:'陳小明',
        name_en:'Alan Cheng',
        Is_Admin:0,
    },
    {
        id:2,
        name_tw:'蘇小慧',
        name_en:'Sue Su',
        Is_Admin:1,   
    },
    {
        id:3,
        name_tw:'張美麗',
        name_en:'Shelly Chang',
        Is_Admin:0,   
    },
    {
        id:4,
        name_tw:'林貝兒',
        name_en:'Belle Ling',
        Is_Admin:1,   
    },
    {
        id:5,
        name_tw:'蘇菲亞',
        name_en:'Sophia Tai',
        Is_Admin:1,   
    },


];
    export default {
        name: 'AddAdmin',
        components:{
            SearchItem
        },
        data(){
            return{
              userlist,

            }
        },
        computed:{
            notAdminList(){
                var vs = this;
                var NotAdmin = vs.userlist.filter(function(p){
                    return p.Is_Admin !== 1;
                });
                return NotAdmin;
            },
            adminList(){
                var vs = this;
                var admin = vs.userlist.filter(function(p){
                    return p.Is_Admin == 1;
                });
                return admin;
            },

        }

    }

</script>


