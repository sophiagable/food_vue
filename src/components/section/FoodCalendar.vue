<template>
    <div class="container-fluid bg-light">

        <div class="container p-4">
             <h3 class="text-primary"> 
                 <i class="material-icons left">calendar_today</i>
                 訂餐月曆
            </h3>
            <vue-event-calendar :events="foodEvents" @monthChanged="" @dayChanged="">
                <template slot-scope="props">
                    <div v-for="(event, index) in props.showEvents" :key="event.id" class="event-item">
                    <!-- 这里拿到的是传入的单个event所有数据 -->
                        <div class="wrapper">
                             <h3 class="title">
                                 {{index+1}} . <router-link to="/shopOrder/shop-1/001/status/">{{event.title}}</router-link>
                                 <small class="badge badge-info" 
                                 :class="{'badge-info':event.status == '開團中','badge-dark':event.status == '已結團','badge-danger':event.status == '已刪除'}">
                                     {{event.status}}
                                 </small>
                            </h3>
                             <p class="time">{{event.date}}</p>
                             <p class="desc">團主：{{event.desc}}</p>
                        </div>
                    </div>
                </template>


            </vue-event-calendar>
        </div>




    </div>
</template>

<style lang="scss" scoped>
    .container-fluid{
        min-height:65vh;
    }
</style>



<script>

var foodEvents =  [
    {   
        id:20190214001,
        date: '2019/02/14', // 必填
        title: '日式咖哩屋', // 必填
        desc: 'Miya',
        status:'已結團'
    }, 
    {
        id:20190214002,
        date: '2019/02/14', // 必填
        title: '一芳水果茶', // 必填
        desc: 'Miya',
        status:'已刪除'
    }, 

    {
        id:20190215001,
        date: '2019/02/15',
        title: '65義大利麵',
        desc: 'Eric',
        status:'開團中',
        customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
    }
    ]

    export default {
        name: 'FoodCalendar',
        props:["category"],
        components:{
      
        },
        data(){
            return{
                foodEvents
            }
        }

    }

</script>


