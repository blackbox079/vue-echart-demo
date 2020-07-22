/*
 * @Author: Tan Jieying
 * @Date: 2020-07-22 11:09:35
 * @LastEditors: Tan Jieying
 * @LastEditTime: 2020-07-22 11:53:21
 * @FilePath: \vue-echarts-demo\src\utils\http.js
 * @Description: axios封装
 */
import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    timeout: 10000,
    baseURL: 'https://lab.isaaclin.cn/nCoV',
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        if (config.method === 'get') {
            config.params = config.params || {};
        } else {
            config.data = config.data || {};
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        console.log(response.data);
        return response;
    },
    (err) => {
        const data = err.response.data;
        return Promise.reject(data || err);
    }
);

export default axios;

/**
 * @description: get请求方法
 * @param {*} url
 * @param {*} params
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params })
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * @description: post请求方法，发送数据格式json
 * @param {*} url
 * @param {*} data
 */
export function post(
    url,
    data = {},
    config = {
        transformRequest: [
            function(fData, headers) {
                headers['Content-Type'] = 'application/json';
                return qs.stringify(fData);
            },
        ],
    }
) {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}
