<template>
  <div class="hello">
      <div class="banner">
          <img src="../assets/News-d.jpg" alt="">
      </div>
       <div class="Book-title">
               <Breadcrumb>
                          <Breadcrumb-item href="/">首页</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">新闻</Breadcrumb-item>
              </Breadcrumb>
      </div>
      <div class="News-top">
           
            <swiper :options="swiperOption2" ref="mySwiperA">
                        <swiper-slide><div class="News-top-l">凤凰山开辟“天空之路” 游客体验“凌空之感”</div> </swiper-slide>
                        <swiper-slide><div class="News-top-l">凤凰山开辟“天空之路” 游客体验“凌空之感”</div></swiper-slide>
                        <swiper-slide><div class="News-top-l">凤凰山开辟“天空之路” 游客体验“凌空之感”</div> </swiper-slide>              
            </swiper>
      </div>
      <div class="News-box">
          <Row :gutter="16">
              <i-col span="10">
                  <div class="News-box01">
                      <div class="News-box01-top">最新动态</div>
                      
                      <swiper :options="swiperOption1" ref="mySwiperA">
                        <swiper-slide><img class="News-box01-content" src="../assets/runbotp.jpg" /> </swiper-slide>
                        <swiper-slide><img class="News-box01-content" src="../assets/runbotp.jpg" /> </swiper-slide>
                        <swiper-slide><img class="News-box01-content" src="../assets/runbotp.jpg" /> </swiper-slide>              
                      </swiper>
                  </div>
              </i-col>
              <i-col span="10">
                
                        <div class="News-box02">
                              <div class="News-box02-top">景区动态</div>
                              <ul>
                                <li><a  v-link="'/Newslist'">▎凤凰山开辟“天空之路” 游客体验“...                       <span>[2016-01-01]</span>  </a></li>
                                <li><a>▎{{ message }}                       <span>[2016-01-01]</span> </a></li>
                                <li><a>▎凤凰山开辟“天空之路” 游客体验“...                       <span>[2016-01-01]</span> </a></li>
                                <li><a>▎凤凰山开辟“天空之路” 游客体验“...                       <span>[2016-01-01]</span> </a></li>
                                <li><a>▎凤凰山开辟“天空之路” 游客体验“...                       <span>[2016-01-01]</span> </a></li>
                                <li><a>▎凤凰山开辟“天空之路” 游客体验“...                       <span>[2016-01-01]</span> </a></li>
                                <li><a>▎凤凰山开辟“天空之路” 游客体验“...                       <span>[2016-01-01]</span> </a></li>
                                <li><a>▎凤凰山开辟“天空之路” 游客体验“...                       <span>[2016-01-01]</span> </a></li>
                              </ul>
                          </div>
                       
              </i-col>
              <i-col span="4">
                  <div class="News-box03">
                      <div class="News-box03-top"></div>
                      
                  </div>
              </i-col>
          </Row>
      </div>
      <div class="News-banner">
          <img src="../assets/News-banner.jpg" height="240" width="1200" alt="">
      </div>
      <div class="dynamic-box"> 
              <Row>
                  <i-col span="8"><div class="dynamic-box01">景区简介</div></i-col>
                  <i-col span="8"> <div class="dynamic-box02">行业动态</div></i-col>
                  <i-col span="8"><div class="dynamic-box03">媒体报道</div></i-col>
              </Row> 
              <Row>
                  <i-col span="8">
                            <div class="dynamic-box04">
                                <img src="../assets/jianjie-tp.jpg" height="205" width="387" alt="">
                                <p>凤凰山位于辽宁省凤城市，由东山和西山两大景区组成，最高峰“攒云峰”海拔836米，面积182平方公里，被誉为“国门名山”、“万里长城第一山”、“中国历险第一名山”。唐太宗李世民御驾东巡，游览此山时，有“凤凰拜祖”的传说，遂赐此山名为“凤凰山”【<span><a>详情</a></span>】</p>
                            </div>
                  </i-col>
                  <i-col span="8">
                          <div class="dynamic-box05">
                              <div class="dynamic-box05-01">
                                  <img src="../assets/dongtai-tp.jpg"  alt="">
                                  <div>
                                      <h3>美丽的凤凰山</h3>
                                      <p>凤凰山位于辽宁省凤城市，由东山和西山两大景区组成，最高峰“攒云峰”海拔836米，面积182平方公里，被誉为“国门...</p>
                                  </div>
                              </div>
                              <ul>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                  <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                              </ul>
                          </div>
                  </i-col>
                  <i-col span="8">
                          <div class="dynamic-box06">
                                <div class="dynamic-box06-01">
                                    <img src="../assets/dongtai-tp.jpg"  alt="">
                                    <div>
                                        <h3>美丽的凤凰山</h3>
                                        <p>凤凰山位于辽宁省凤城市，由东山和西山两大景区组成，最高峰“攒云峰”海拔836米，面积182平方公里，被誉为“国门...</p>
                                    </div>
                                </div>
                                <ul>
                                    <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                    <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                    <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                    <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                    <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                    <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                    <li><a>▎2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                    <li><a>▎<Icon type="ios-list"></Icon> 2016年“十一”长假凤凰山景区 游人如织 ...</a></li>
                                </ul>
                            </div>
                  </i-col>
              </Row>   
             
          
      </div>
  </div>
</template>

<script>


export default ({
  el: '#app01',
  data(){
    return {
      message: 'Hello Vue.js!',
      swiperOption1:{
        notNextTick: true,
        autoplay: 3000,
        effect :'cube',
      },
       swiperOption2:{
        notNextTick: true,
        autoplay: 4000,
        direction : 'vertical',
       // effect :'cube',
      }
    }
    
  },
   methods: {
          hello: function () {
                alert("message");
          },
        }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner img{
  width: 100%;
  height:auto;
}
.News-top{
  width: 1200px;
  height:73px;
  margin: 0 auto;
  /*margin-top: 73px;
  z-index: 2;*/
  background: url(../assets/News-tp.jpg) no-repeat;
}
 .News-top .News-top-l{
  float: left;
  color: #fff;
  font-size: 16px;
  width: 600px;
  line-height: 73px;
  margin-left: 210px;
 }
 .News-top .News-top-r{
  float: right;
  color: #fff;
  font-size: 16px;
  width: 380px;
  line-height: 73px;
  margin-right: 8px;
 }
  .News-top .News-top-r .News-inp01{
     height:34px;
    width: 280px;
    background: #33b2ad;
    border: 1px solid #fff;
    border-radius: 6px 0px 0px 6px;
    color: #fff;
    padding-left: 10px;
  }
  .News-top .News-top-r .News-inp02{
    height:36px;
    width: 60px;
    color: #fff;
    background:url(../assets/souzuo-tp.png) no-repeat center  #fff;
    border: 1px solid #fff;
    border-radius: 0px 6px 6px 0px
  }
  .News-box{
    width:1200px;
    overflow: hidden;
    margin:10px auto;
  }
  .News-box .News-box01{
    height: 296px;
    width:100%;
    border:1px solid #c9c9c9;
    float: left;
    margin-right: 0.75%;
  }
   .News-box .News-box01-top{
    height: 36px;
    width: 91%;
    border-bottom: 1px solid #c9c9c9;
    line-height: 36px;
    background: url(../assets/xiaolaba.png) no-repeat left center;
    background-position: 10px 7px;
    font-size: 16px;
    padding-left: 9%;
   }
    .News-box .News-box01-content{
    height: auto;
    width: 100%;  
   }

  .News-box .News-box02{
    height: 296px;
    width:100%;
    border:1px solid #c9c9c9;
    float: left;
    margin-right: 0.75%;
  }
    .News-box .News-box02-top{
    height: 36px;
    width: 91%;
    border-bottom: 1px solid #c9c9c9;
    line-height: 36px;
    background: url(../assets/dongtai-tb.png) no-repeat left center;
    background-position: 10px 7px;
    font-size: 16px;
    padding-left: 9%;
   }
   .News-box .News-box02 ul li{
    line-height: 32px;
    width:98%;
    margin-left: 2%;
    font-size: 14px
  }
  .News-box .News-box02 ul li a{
    display: block;
    line-height: 32px;
    width:100%;
  }
  .News-box .News-box02 ul li a span{
    display: inline-block;
    float: right;
    line-height: 32px;
    width:20%;
  }

  .News-box .News-box03{
    height: 296px;
    width:100%;
    border:1px solid #c9c9c9;
    float: left;
  }
 .News-box .News-box03-top{
      width: 100%;
      height:100px;
      background: #32b58b;
      margin-bottom: 7px;
  }
  .News-box .News-box03-content01{
      width: 100px;
      height:21px;
      background: url(../assets/menpiao-tb.png) no-repeat  #32b551;
      background-position: 18px 5px;
      margin-bottom: 7px;
      float: left;
      text-align: center;
      padding-top: 70px;
      color: #fff;
      font-weight: bold;
  }
  .News-box .News-box03-content02{
      width: 100px;
      height:21px;
      background: url(../assets/360-tb.png) no-repeat  #aab532;
      background-position:  18px 5px;
      margin-bottom: 7px;
      float: right;
      text-align: center;
      padding-top: 70px;
      color: #fff;
      font-weight: bold;
  }
   .News-box .News-box03-content03{
      width: 100px;
      height:21px;
      background: url(../assets/dingwei-tb.png) no-repeat  #3285b5;
      background-position: 18px 5px;
      margin-bottom: 7px;
      float: left;
      text-align: center;
      padding-top: 70px;
      color: #fff;
      font-weight: bold;
  }
  .News-box .News-box03-content04{
      width: 100px;
      height:91px;
      background:  #32b58b;
      background-position: 18px 5px;
      margin-bottom: 7px;
      float: right;
  }
.News-banner{
  width: 1200px;
  height:240px;
  margin:0 auto;
}
.dynamic-box{
  width: 1200px;
  overflow: hidden;
  margin:0 auto;
  margin-bottom:30px;
  background: url(../assets/News-1px.png) repeat-x;
}
.dynamic-box01{
  width: 100%;
  line-height: 40px;
  float: left;
  background: url(../assets/News-tb.png) no-repeat left center;
  background-position: 9px 9px;
  font-size: 24px;
  padding-left: 10%;
  color: #00599b;
}
.dynamic-box02{
  width: 100%;
  line-height: 40px;
  float: left;
  background: url(../assets/News-tb.png) no-repeat left center;
  background-position: 9px 9px;
  font-size: 24px;
  padding-left: 10%;
  color: #00599b;
}
.dynamic-box03{
  width: 100%;
  line-height: 40px;
  float: left;
  background: url(../assets/News-tb.png) no-repeat left center;
  background-position: 9px 9px;
  font-size: 24px;
  padding-left: 10%;
  color: #00599b;
}
.dynamic-box04{
  width: 100%;
  float: left;  
  border:1px solid #c9c9c9;
  border-top: none;
}
.dynamic-box04 img{
  width:98%;
  height: auto;
  margin:2% 1%;
}
.dynamic-box04 p{
  width:98%;
  line-height: 30px;
  margin:0 1%;
  font-size: 14px;
}
.dynamic-box05{
  width: 100%;
  height: 373px;
  float: left;  
  border:1px solid #c9c9c9;
  border-left: none;
  border-top: none;
}
.dynamic-box05-01{
  height:112px;
  width: 100%;
  margin:2% 1%;
}
.dynamic-box05-01 img{
  float:left;
}
.dynamic-box05-01 div{
  float: right;
  width: 55%;
  margin-right:1%;
  font-size: 14px
}
.dynamic-box05-01 div h3{
  font-size: 18px;
  font-weight: bold;
}
.dynamic-box05 ul li{
  width: 95%;
  line-height:30px;
  font-size: 14px;
  margin-left: 2%;
}
.dynamic-box06{
  width: 100%;
  height: 373px;
  float: left;  
  border:1px solid #c9c9c9;
  border-left: none;
  border-top: none;
}
.dynamic-box06-01{
  height:112px;
  width: 100%;
  margin:2% 1%;
}
.dynamic-box06-01 img{
  float:left;
}
.dynamic-box06-01 div{
  float: right;
  width: 55%;
  margin-right:1%;
  font-size: 14px
}
.dynamic-box06-01 div h3{
  font-size: 18px;
  font-weight: bold;
}
.dynamic-box06 ul li{
  width: 95%;
  line-height:30px;
  font-size: 14px;
  margin-left: 2%;
}
.Book-title{
  width: 1200px;
  height: 40px;
  line-height: 40px;
  margin: 10px auto;
  border-bottom:  1px solid #C5C0C0
}

</style>
