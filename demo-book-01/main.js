//导入css模块
import Vue from 'vue';
import App from './app.vue';
//引入jquery
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrapcss'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './src/css/main.css';
// require('bootstrap-loader');

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

// require('bootstrap/dist/css/bootstrap.css');


// import 'echarts'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/js/bootstrap.min.css'
// import compontent from './compontent.vue'

new Vue({
	el:'#app',
	render:h=>h(App)
});

// new Vue({
// 	el:'#app',
// 	render:h=>h(compontent)
// })
// require('./src/css/main.css');
// //导入show函数
// const show=require('./show.js');
// // 执行show函数
// show('Webpack123123123');

