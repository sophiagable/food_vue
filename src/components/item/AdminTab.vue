<template>
   
    <div class="my-3">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" >
                        <a class="nav-link border-bottom-0" :class="{'active show bg-white  text-info': admin_tab == 1 }"  @click.stop="selectNav(1)">
                            <i class="material-icons align-middle">developer_board</i>
                            分類設定
                        </a>
                    </li>
                    <li class="nav-item" :class="{'bg-wihte': admin_tab == 2 }">
                        <a class="nav-link border-bottom-0" :class="{'active show bg-white  text-info': admin_tab == 2 }"  @click.stop="selectNav(2)">
                            <i class="material-icons align-middle">group_add</i>
                            設定系統管理者
                        </a>
                    </li>
                </ul>
                <div class="tab-content py-3 px-3 bg-white border border-grey border-top-0" id="myTabContent">
                    <div class="tab-pane fade" :class="{'show active': admin_tab == 1}">
                        <setting-category></setting-category>
                    </div>
                    <div class="tab-pane fade" :class="{'show active': admin_tab == 2}">
                       <add-admin></add-admin>
                    </div>

                        
                </div>


    </div>

</template>
<style lang="scss" scoped>
    .nav-tabs{
        .nav-item{
            a.nav-link{
                cursor: pointer;
            }
        }

    }

</style>
<script>
import SettingCategory from '@/components/item/SettingCategory'
import AddAdmin from '@/components/item/AddAdmin'

    export default {
        name: "AdminTab",
        components:{
            SettingCategory,
            AddAdmin
        },
        data() {
            return {
                admin_tab:1

            };
        },
        methods:{
            selectNav(item){
                this.admin_tab = item;
            }
        }
    
    };
</script>


