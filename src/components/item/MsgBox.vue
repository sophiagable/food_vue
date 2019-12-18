<template>
        <div class="message-box">
            <div class="arrow">
                <div class="outer"></div>
                <div class="inner"></div>
            </div>
            <div class="message-body">
                <p>  {{leaderMsg}}</p>
            </div>
        </div>

</template>

<style lang="scss" scoped>
$border-color: var(--primary);
$msg-bg-color: var(--light);
    .message-box{
        clear: both;
        position: relative;
        .message-body{
            float: left;
            min-width:400px;
            width: 95%;
            height: auto;
            background-color: $msg-bg-color;
            border: 1px solid $border-color;
            padding: 6px 8px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            -o-border-radius: 5px;
            border-radius: 5px; 
            p{
             margin: 0;     
            }
        }
        .arrow{
            width: 8px;
            height: 20px;
            overflow: hidden;
            position: relative;
            float: left;
            top: 6px;
            right: -1px;  
            .outer{
                width: 0;
                height: 0;
                border-right: 20px solid $border-color;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                position: absolute;
                top: 0;
                left: 0; 
            }
            .inner{
                width: 0;
                height: 0;
                border-right: 20px solid $msg-bg-color;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                position: absolute;
                top: 0;
                left: 2px;
            }
        }
    }

</style>


<script>
    export default {
        name: 'MsgBox',
        data(){
            return{
                leaderMsg:'趕快點餐喔!~'
            }
        }
    }

</script>


