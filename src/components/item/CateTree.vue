

<template>
    <li>
                <div
                :class="{'text-info':isFolder}"
                @click="toggle">
                <i class="material-icons edit-icon" @click.stop="editThis(model)">edit</i>
                     <span v-if="!model.edit">{{ model.name }}</span>
                     <span v-if="model.edit">
                        <input type="text" v-model="model.name">
                     </span>
                <span v-if="isFolder">
                    <i class="material-icons align-middle" v-if="!open">create_new_folder</i>
                    <i class="material-icons align-middle" v-else>folder_open</i>
                </span>
                </div>
                <ul v-show="open" v-if="isFolder">
                    <cate-tree
                        class="item"
                        v-for="(m, index) in model.children"
                        :key="index"
                        :model="m">
                    </cate-tree>
                    <li class="add">
                        <input  type="text" placeholder="新增分類" v-model="newName">
                        <i class="material-icons align-middle" @click="addChild">add_circle_outline</i>
                    </li>
                </ul>
    </li>
</template>

<style lang="scss" scoped>
    .edit-icon{
        font-size: 14px;
    }
    .item {
        cursor: pointer;
    }
    .bold {
    font-weight: bold;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
        li {
            font-size: 20px;
            margin-left: 1em;
            margin-bottom:0.5rem;
        }
    }
</style>

<script>


    export default {
        name: 'CateTree',
        props:["model"],
        data(){
            return{
               open: false,
               newName:''
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children &&
                    this.model.children.length
                }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            editThis(m){
                var vs = this;
                 console.log(vs)
                vs.$set(vs.model,'edit',!vs.m.edit);
            },
            changeType: function () {
                var vs = this;
                if (!vs.isFolder) {
                    vs.$set(vs.model, 'children', [{name:'new name'}])
                    vs.open = true
                }
            },
            addChild: function () {
                var vs = this;
                if(vs.newName){
                    vs.model.children.push({
                        name: vs.newName
                    })
                    vs.newName='';
                }else{
                    vs.$swal('沒有輸入內容');
                }

            }
        }



    }

</script>


