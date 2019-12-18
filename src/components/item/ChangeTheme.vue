

<template>
        <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button"
                        class="btn btn-light dropdown-toggle"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                網站風格: <span class="mx-2">{{theme}}</span>
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item"  v-for="t in themeList" @click.stop="changeMyTheme(t)" :key="t">{{t}}</a>
                </div>
            </div>
</template>

<style lang="scss" scoped>
    .btn-group{
        .dropdown-item{
            cursor: pointer;
        }
    }
</style>


<script>
  // theme 設定
  var themeList = [
    'defalt',
    'flatly',
    'journal',
    'lux',
    'minty',
    'pulse',
    'sketchy',
    'solar',
    'spacelab',
    'united'
  ];
    export default {
        name: 'ChangeTheme',
        props:["theme"],
        data(){
            return{
                themeList
            }
        },
        methods: {
            changeMyTheme(theme){
                this.$parent.$parent.$parent.changeTheme(theme);
            }
        },
    }

</script>


