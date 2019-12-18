<template>
    <div class="header-block card border-primary m-2">
        <div class="card-header">
            團長功能 (only seen by head)
        </div>
        <div class="card-body">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info" @click.stop="groupStatus">訂單狀況</button>
                    <button type="button" class="btn btn-info" @click.stop="closeGroup">結團</button>
                    <button type="button" class="btn btn-danger" @click.stop="deleteGroup">刪除</button>
                </div>

        </div>
        
    </div>
</template>

<script>


    export default {
        name: 'HeadBlock',
        methods:{
            groupStatus(){
                var vs = this;
                vs.$router.push({
                    path:vs.$route.path+'/status/'
                })
            },
            closeGroup(){
                var vs = this;
                var sweetWord = {
                    title:'確定要結團了？',
                    text:'確認沒有人要再訂了喔？',
                    type:'warning',
                    showCancelButton: true,
                    cancelButtonText: '取消',
                    confirmButtonText: '確定結團',
                    reverseButtons: true
                };
                vs.$swal(sweetWord).then((result)=>{
                    if(result.value){
                            vs.$router.push({
                                path:vs.$route.path+'/close/'
                            })
                    }else{
                        // console.log('取消結團');
                    }
                })
            },
            deleteGroup(){
                var vs = this;
                var sweetWord = {
                    title:'確定要刪除此團訂嗎？',
                    text:'取消後會刪除此團的所有訂單',
                    type:'warning',
                    showCancelButton: true,
                    cancelButtonText: '取消刪除',
                    confirmButtonText: '確定刪除',
                    reverseButtons: true
                };
                vs.$swal(sweetWord).then((result)=>{
                    if(result.value){
                        console.log('刪除');
                    }else{
                        console.log('取消');
                    }
                })
            
            }
        }
    }

</script>


