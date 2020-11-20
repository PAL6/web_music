import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引用全局样式
import './assets/css/base.css'

//使用vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)

//使用ElementUI库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


router.beforeEach((to,from,next)=>{
    if (to.path==='/myMusic'){
        if(!store.state.isLogin){
            next('/unLogin');
        }else {
            next();
        }
    }else{
        next();
    }
})