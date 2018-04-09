
<template>
<div id="duty" class="duty">
    <!-- 顶部导航栏 -->
    <!-- <div class="top_navbar"></div> -->
    <itemtopnavbar></itemtopnavbar>
    <!-- <v-title title="题目Vue组件化"></v-title> -->
	<!-- <v-button @click="handleClick">点击按钮</v-button> -->
    <!-- 左侧菜单栏 -->
    <leftlistmenu></leftlistmenu>
    <!-- 中间部分 -->
    <div id="content" class="col-md-10">
        <!-- 日历插件
         -->
        <calendar></calendar>
        <operatemenu></operatemenu>
        <div class="duty_personlist"></div>
    </div>
</div>
</template>

<style scoped>
/* @import 'bootstrap/dist/css/bootstrap.css'; */
/* #duty{
    background: plum;
    border: 1px dashed red;
} */
.top_navbar {
  /* .navbar */
}
#duty{
    /* 注意需要设置最外侧的div的高度 */
    height: 100%;
}
#content{

}
</style>
<script>
import "bootstrap";
// 导入顶部导航栏的模块
import vItemTopNavbar from "./views/topnavbar.vue";
import vLeftListMenu from "./views/leftlistmenu.vue";
import vCalendar from "./views/calendar.vue";
import vOperateMenu from "./views/operatemenu.vue";

// import './src/css/main.css';

/*全局注册组件*/
// Vue.component('item_top_navbar',item_top_navbar);

// /*定义vue实例app1*/
// var app1 = new Vue({
//     el: '#duty'
// });
export default {
  //   el:'#duty',
  components: {
    // vTopnavbar,
    itemtopnavbar: vItemTopNavbar,
    leftlistmenu: vLeftListMenu,
    calendar:vCalendar,
    operatemenu:vOperateMenu
    // vButton
  }
};
</script>