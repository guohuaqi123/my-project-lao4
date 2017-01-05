import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import AwesomeSwiper from 'vue-awesome-swiper'


import Navigationbar from './components/Navigationbar';//顶部导航栏
import bottombar from './components/Bottombar';//底部尾栏
import Banner from './components/Banner';//banner
import News from './components/News';//新闻内容板块
import Newsdp from './components/NewsDp';//新闻详情页
import Newslist from './components/Newslist';//新闻列表页
import Onlinebooking from './components/Onlinebooking';//门票列表页
import Ticketdetails from './components/Ticketdetails';//门票详情页
import Introduce from './components/Introduce';//景区简介页
import Dintroduce from './components/Dintroduce';//景区简介详情页Famousscenicspot
import Famousscenicspot from './components/Famousscenicspot';//著名景区简介详情页Famousscenicspot  
import Raiders from './components/Raiders';//攻略
import More from './components/More';//攻略更多页面
import Moredetails from './components/Moredetails';//攻略更多页面Chizhuhang
import Chizhuhang from './components/Chizhuhang';//攻略更多页面Eat food
import Eatfood from './components/Eatfood';//攻略更多页面Eatmoredetails
import Eatmoredetails from './components/Eatmoredetails';//攻略更多页面Eatmoredetails
import Login from './components/Login';
import Register from './components/Register';
import Personalcenter from './components/PersonalCenter';
import Bookinginformation from './components/BookingInformation'




export default {
  components: {
    Navigationbar,
    bottombar,
    Banner,
    News,
    Newsdp,
    Newslist,
    Onlinebooking,
    Ticketdetails,
    More,
    Chizhuhang,
    Eatfood,
    Eatmoredetails,
    Login,
    Register,
    Personalcenter,
    Bookinginformation
  }
}

new Vue({
  el: 'body',
  components: { App }
})


//注册插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(AwesomeSwiper);

const router = new VueRouter()

// 路由map
router.map({
    '/Banner': {
        component: Banner
    },
    '/News': {
    component: News,     
   },
   '/Newslist': {
        component: Newslist,
  },
  '/Newsdp': {
        component: Newsdp,
  },
  '/Onlinebooking': {
    component: Onlinebooking,   
  },
  '/Ticketdetails': {
        component: Ticketdetails
    },
    '/Introduce': {
        component: Introduce
    },
    '/Dintroduce': {
        component: Dintroduce
    },
    '/Famousscenicspot': {
        component: Famousscenicspot
    },
    '/Raiders': {
        component: Raiders
    },
     '/More': {
        component: More
    },
    '/Moredetails': {
        component: Moredetails
    },
    '/Chizhuhang': {
        component: Chizhuhang
    },
     '/Eatfood': {
        component: Eatfood
    },
     '/Eatmoredetails': {
        component: Eatmoredetails
    },
     '/Login': {
        component: Login
    },
     '/Register': {
        component: Register
    },
    '/Personalcenter': {
        component: Personalcenter
    },
    '/Bookinginformation': {
        component: Bookinginformation
    }
})

router.redirect({//此乃重定向页面
  '*': '/Introduce'
})

router.start(App, '#app')//启动路由