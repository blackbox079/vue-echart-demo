/*
 * @Author: Tan Jieying
 * @Date: 2020-07-22 09:51:17
 * @LastEditors: Tan Jieying
 * @LastEditTime: 2020-07-22 10:03:10
 * @FilePath: \vue-echarts-demo\src\router\routes.js
 * @Description: 路由表
 */
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
    },
];

export default routes;
