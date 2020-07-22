<!--
 * @Author: Tan Jieying
 * @Date: 2020-07-22 12:00:53
 * @LastEditors: Tan Jieying
 * @LastEditTime: 2020-07-22 12:02:55
 * @FilePath: \vue-echarts-demo\src\views\home\HomeCovid.vue
 * @Description: 首页疫情防控
--> 
<template>
    <div></div>
</template>
<script>
import { covidOverall } from '@/api';
export default {
    name: 'HomeCovid',
    data() {
        return {};
    },
    created() {
        covidOverall();
    }
};
</script>
<style lang='scss' scoped></style>