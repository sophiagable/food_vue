<template>
    <div>
            <p class="time-left p-2 m-0  text-primary">
                <i class="material-icons align-middle mx-1">alarm</i>
                結團時間 
                 <!-- 先放假時間 -->
                <small>{{new Date() | moment("YYYY-MM-DD")}} 下午 17:00</small>
            </p>
    </div>
</template>

<style lang="scss" scoped>
.time-left{

}
</style>

<script>
    export default {
        name: 'TimeLeft',
        data(){
            return{
             timeStop:"2019-01-28 12:00 am"
            }
        },
    }

</script>


