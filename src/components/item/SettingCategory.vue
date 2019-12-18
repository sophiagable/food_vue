

<template>
        <ul class="category-tree m-3 p-2">
            <cate-tree
                class="item"
                :model="treeData">
            </cate-tree>
        </ul>
</template>

<style lang="scss" scoped>
.category-tree{
  list-style-type: none;

}
</style>


<script>
import CateTree from '@/components/item/CateTree'
// demo data
var data = {
  name: '店家分類設定',
  edit:0,
  children: [
    { name: '午晚餐',
      edit:0,
      children: [
        {
          name: '飯類',
          edit:0,
        },
        {
          name: '麵類',
          edit:0,
        },

      ]    
    },
    { name: '飲料',edit:0, },
    {
      name: '點心',edit:0,
    }
  ]
}

    export default {
        name: 'SettingCategory',
        components:{
          CateTree
        },
        data(){
            return{
                treeData:data
            }
        },

    }

</script>


