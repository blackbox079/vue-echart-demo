/*
 * @Author: Tan Jieying
 * @Date: 2020-07-21 17:52:12
 * @LastEditors: Tan Jieying
 * @LastEditTime: 2020-07-22 10:00:48
 * @FilePath: \vue-echarts-demo\src\router\index.js
 * @Description: 路由主入口
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
