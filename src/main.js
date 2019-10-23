import Home from "./home.vue";
import Login from "./pages/login.vue";
import Vue from "vue";
import VueRouter from "vue-router";

//为了使用router-view 和 router-link
Vue.use(VueRouter);
// 创建路由配置
var routes = [
  {
    path: "/login",
    component: Login
  }
];
// 创建路由实例
var router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  // 指定一个组件渲染根实例，这个组件可以成为最底层的组件
  render(creatElement) {
    // render函数使用固定的写法，只有App是可变；
    return creatElement(Home);
  }
});
