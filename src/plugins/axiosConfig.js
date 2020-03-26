import axios from 'axios';

const http = axios.create({
  publicPath: 'http://115.236.28.77:10000',

  timeout: 1000 * 180,
  withCredentials: true,
});
http.defaults.headers.common['Content-Type'] = 'application/json';
// http.interceptors.request.use((config) => {
//   config.headers['Content-Type'] = 'application/json';
//   // config.headers['token'] = 'c42a7707c8fdbd4b4aec881f703c018d'
//   config.headers.token = sessionStorage.getItem('token');
//   // 在发送请求之前做些什么
//   return config;
// }, error =>
//   // 对请求错误做些什么
//   Promise.reject(error));
//
// // 添加响应拦截器
// http.interceptors.response.use((response) => {
//   if (response.data.code === 401) {
//     location.href = '/switch/sec/login';
//   }
//   return response;
// }, error =>
//   // 对响应错误做点什么
//   Promise.reject(error));

export default http;
