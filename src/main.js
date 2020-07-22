/*
 * @Author: Tan Jieying
 * @Date: 2020-07-21 17:52:12
 * @LastEditors: Tan Jieying
 * @LastEditTime: 2020-07-21 18:08:07
 * @FilePath: \vue-echarts-demo\src\main.js
 * @Description: 程序主入口
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
