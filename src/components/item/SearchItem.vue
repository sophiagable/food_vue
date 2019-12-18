
<template>
    <div class="input-group p-3">
            <div class="input-group-prepend">
                <button class="btn btn-info" type="button">Search</button>
            </div>
            <input type="text"  v-model="keyword" class="form-control" placeholder="輸入關鍵字，快速搜尋" aria-label="Search List" aria-describedby="Search">
    </div>
</template>


<script>

    export default {
        name: 'SearchItem',
        data(){
            return{
                keyword:''
            }
          
        }
    }

</script>


