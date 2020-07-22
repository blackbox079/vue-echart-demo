<!--
 * @Author: Tan Jieying
 * @Date: 2020-07-22 09:52:56
 * @LastEditors: Tan Jieying
 * @LastEditTime: 2020-07-22 10:02:18
 * @FilePath: \vue-echarts-demo\src\views\home\index.vue
 * @Description: 首页
--> 
<template>
    <div>
        <home-header></home-header>
    </div>
</template>
<script>
export default {
    name: 'Home',
    components: {
        HomeHeader: () => import('./HomeHeader')
    },
    data() {
        return {};
    }
};
</script>
<style lang='scss' scoped></style>