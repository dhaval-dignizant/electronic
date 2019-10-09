import Vue from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import  "../assets/css/style.css";
/* import  "../assets/css/fasthover.css"; */
/* import  "../assets/css/flexslider.css"; */
import  "../assets/css/popuo-box.css";
import 'vue-select/dist/vue-select.css';

//import "jquery/dist/jquery.js";
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
/* import "../assets/js/minicart.js"; */
/* import "../assets/js/easyResponsiveTabs.js"; */
/* import  "bootstrap/dist/js/bootstrap.min.js"; */
//import  "../assets/css/font-awesome.css";
require('../assets/css/font-awesome.css');
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import vSelect from 'vue-select';


Vue.use(VueAxios);
Vue.use(axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(vSelect);
//Vue.use(VueAxios, axios, VueRouter, BootstrapVue);

Vue.config.productionTip = false;
import HomeComponent from './components/Home.vue';
import About from './components/About.vue';
import product from './components/Product.vue';
import Product_details from "./components/Product_details.vue";

axios.defaults.baseURL = 'http://localhost/newele/public/api';

//import CreateComponent from './components/CreateComponent.vue';
const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'product',
    path: '/product',
    component: product
  }, 
  {
    name:'product_details',
    path: '/product_details/:id',
    component: Product_details
  } 
 
];

const router = new VueRouter({ mode: 'history', routes: routes });

//window.$ = window.jQuery = require('jquery');

window.axios = require('axios');


new Vue(Vue.util.extend({ router }, App)).$mount('#app');


