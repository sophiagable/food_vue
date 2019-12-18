<template>
    <div class="container-fluid bg-light">
        <div class="container p-4">
            <turn-table></turn-table>
        </div>
            

    </div>
</template>

<style lang="scss" scoped>
.container-fluid{
    min-height: 100vh;
}
</style>


<script>

import TurnTable from '@/components/item/TurnTable'

    export default {
        name: 'WhatToEat',
        components:{
            TurnTable
        }

    }

</script>


