<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">類別</th>
                    <th scope="col">餐廳名稱</th>
                    <th scope="col">編輯</th>
                </tr>
            </thead>
            <tbody>
                <my-favorite-td v-for="n in 4" :key="n"></my-favorite-td>
            </tbody>
        </table>
    </div>
</template>

<script>

import  MyFavoriteTd from '@/components/pages/MyFavoriteTd'

    export default {
        name: 'MyFavoriteList',        
        components:{
            MyFavoriteTd
        },
    }
</script>


