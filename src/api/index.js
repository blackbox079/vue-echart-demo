/*
 * @Author: Tan Jieying
 * @Date: 2020-07-22 11:21:11
 * @LastEditors: Tan Jieying
 * @LastEditTime: 2020-07-22 12:02:16
 * @FilePath: \vue-echarts-demo\src\api\index.js
 * @Description: api封装
 */
import { get } from '@/utils/http';

export const covidOverall = (data) => get('/api/overall', data);
