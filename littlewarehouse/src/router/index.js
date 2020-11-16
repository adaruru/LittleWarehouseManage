import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import AccountManage from '../components/AccountManage.vue'
import ProductManage from '../components/ProductManage.vue'
import ShipManage from '../components/ShipManage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/try import with callback function',
    component: () => import('../views/About.vue')
  },
  {
    path: "/about",
    name: "About",
    component: About,
    children: [ // 將會把對應到 path 的 component 放到 shop 的 <router-view />
      {
        path: '出貨', // url= about/出貨
        component: ShipManage,
        meta: { requiresAuth: false },
      },
      {
        path: '帳號管理', // url= about/帳號管理
        component: AccountManage,
        meta: { requiresAuth: false },
      },
      {
        path: '商品管理', // url= about/商品管理
        component: ProductManage,
        meta: { requiresAuth: false },
      }
    ]
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
