<template>
  <div id="app">
       
       <div class="top-box">
         <div class="LoginRegister-box">
            <div class="LoginRegister">
                <div class="LoginRegister-l">{{fenghuanshang}}</div>
                <div class="LoginRegister-r">
                    <span class="spanD" v-on:click="WhetTol">{{ this.wrld[0].WhetherToLogIn}}</span>  ▏<span class="spanZT" v-on:click="RegExi">{{this.wrld[1].RegistrationExit}}</span>
                </div>
            </div>  
         </div>
         <div class="top-box02">
            <div class="top-box01">
                <div class="top-box-l">
                    <img src="assets/logo2.png"  alt="">
                </div>
                <div class="top-box-r">
                    <ul id="app01">
                        <li v-for="item in items" v-bind:class="{lixz:item.isFinished}" v-on:click="classadd($index)" ><a>{{ item.li1 }}</a></li>
                    </ul>
                </div>
            </div>
          </div>
    </div>
     <router-view 
      v-bind:name="wrld[0].WhetherToLogIn"
      v-on:transformation="jump"
      v-on:sondata="loginStateF"
     
     ></router-view>

    <bottombar></bottombar>

 
  </div>
</template>
<script>
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
import Bookinginformation from './components/BookingInformation';

export default{
  el:"#app",
   components: {
    Navigationbar,
    bottombar,
    Banner,
    News,
    Newsdp,
    Newslist,
    Onlinebooking,
    Ticketdetails,
    Introduce,
    Dintroduce,
    Famousscenicspot,
    Bookinginformation,
  },
  data(){
    return {
      items:[
        {
            li1:"首页",
           path: '/Introduce',
           isFinished:true
        },
         {
           li1:"网上购票",
           path: '/Onlinebooking',
           isFinished:false 
        },
         {
           li1:"吃住行",
           path:'/Chizhuhang',
           isFinished:false
        },
         {
            li1:"新闻",
           path: '/News',
           isFinished:false
        },
         {
           li1:"攻略",
           path: '/Raiders',
           isFinished:false
        }
      ],
      //msg:"woooo",
      wrld:[//登入的数据
        {
          WhetherToLogIn:"请登入",
          path: '/Login',
          wtli:false
        },
        {
          RegistrationExit:"免费注册",
          path: '/Register',
          wtli:false
        }
      ],
      fenghuanshang:"华夏票联欢迎您！"
      
    }
  },
  methods: {
          loginStateF: function (data) {//接收登入组件传过来的数据及更改状态
                this.wrld[0].WhetherToLogIn=data;
                this.wrld[1].RegistrationExit="退出";
                this.wrld[0].wtli=true;
                this.wrld[1].wtli=true;
          },
          WhetTol:function(){//针对用户是否登入
                if( this.wrld[0].wtli==false){
                      this.$route.router.go({path: this.wrld[0].path})
                }else{
                      //this.$route.router.go({path: this.wrld[0].path})
                      //this.instance("以登入！")//跳到个人中心
                      this.$route.router.go({path: '/Personalcenter'})
                }
          },
          RegExi:function(){//针对用户是否注册和退出登入
                if( this.wrld[0].wtli==false){
                      this.$route.router.go({path: this.wrld[1].path})
                }else{
                      this.instance("退出成功！") ;//退出的ajax函数---------
                      this.wrld[0].WhetherToLogIn="请登入";
                      this.wrld[1].RegistrationExit="免费注册";
                      this.wrld[0].wtli=false;
                      this.wrld[1].wtli=false;
                      this.$route.router.go({path: this.wrld[0].path})
                }
          },
          classadd: function (index) {//导航栏的切换及样式的切换
            console.log(this.items.length);
            for (var i = 0 ; i <this.items.length ; i++) {
              console.log(this.items[i]);
              this.items[i].isFinished=false;
            };
             this.items[index].isFinished=true;
             this.$route.router.go({path: this.items[index].path})
          },
          instance:function(data) {
                const title = '信息提醒';
                const content = data;
                this.$Modal.info({
                            title: title,
                            content: content
                        });               
                setTimeout(() => {
                          this.$Modal.remove();
                        }, 2000);   
            },
            jump:function(val){//点击立即注册跳转到注册页面
                    if(val==1){
                            this.$route.router.go({path: this.wrld[1].path})
                    }else if(val==2){
                            this.$route.router.go({path: this.wrld[0].path})
                    }
                   
            }
         
  }
}


</script>

<style>
html {}
body {margin:0; padding:0; font:12px/1.5 \5b8b\4f53,Arial,sans-serif;}
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{padding:0; margin:0;}
table,td,tr,th{font-size:12px;}
a {color:#000;text-decoration:none}  /* 重置链接a标签 */
a:active, a:hover {text-decoration:none}   /* 重置链接a标签的鼠标滑动效果 */
ol,ul {list-style:none;}
li{list-style-type:none;}
img{vertical-align:top;border:0;}
h1,h2,h3,h4,h5,h6{font-size:inherit; font-weight:normal;}

.LoginRegister-box{height: 25px;width: 100%;background: #F5F3F3}
.LoginRegister{height: 25px;width: 1200px;margin:0 auto;font-size: 14px;color: #666}
.LoginRegister-l{float: left;line-height: 25px;width: 50%}
.LoginRegister-r{float: right;line-height: 25px;width: 50%;text-align: right;}
.LoginRegister-r .spanD{color:red;font-weight: 100 ;}
.spanD,.spanZT{cursor: pointer;}
.top-box{
  width:100%;
  height:71px;  
  position: fixed;
  z-index: 1000
} 
.top-box02{
    width:100%;
    height: 71px;
   background: url(assets/top-box-tp.png);
  }
.top-box01{
    width:1200px;
    height: 71px;
   background: url(assets/top-box-tp.png);
    margin:0 auto;
  }
  .top-box01 .top-box-r{
    float: right;
    width:70%;
    height:71px;
  }
   .top-box01 .top-box-l{
    float: left;
    width:30%;
    height:71px;
  }
   .top-box01 .top-box-l img{
    width:226px;
    height:67px;
    margin-top: 2px
  }
  .top-box01 .top-box-r ul .lixz{
    border-radius: 6px 6px 0 0;
    text-align: center;
    line-height: 61px;
    font-size: 24px;
    color: #fff;
    background: -webkit-linear-gradient(#4da619, #9bde76); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#4da619, #9bde76); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#4da619, #9bde76); /* Firefox 3.6 - 15 */
    background: linear-gradient(#4da619, #9bde76); /* 标准的语法（必须放在最后） */
    -moz-box-shadow: 0px -4px 5px #E8E8E8; /* 老的 Firefox */
    -webkit-box-shadow:0px -4px 5px #E8E8E8;
    box-shadow:0px -4px 5px #E8E8E8;
  }
  .top-box01 .top-box-r ul .lixz a{
    color: #fff;
  }
   .top-box01 .top-box-r ul li{
    float: left;
    width:127.5px;
    height:61px;
    margin-right: 6%;
    margin-top: 10px;
    text-align: center;
    line-height: 61px;
    font-size: 22px;
    color: #000;
    cursor: pointer;
  }
 .top-box-r ul li:last-child{
  margin-right: 0%;
}
  .top-box01 .top-box-r ul .no-margin
{ 
margin-right: 0;
}

</style>
