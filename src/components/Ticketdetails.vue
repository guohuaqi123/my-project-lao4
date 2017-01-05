<template>
  <div class="hello">
      <div class="banner">
          <img src="../assets/News-d.jpg" alt="">
      </div>
      <p class="Book-title">                
                   <Breadcrumb>
                          <Breadcrumb-item href="/">首页</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">网上购票</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">购票详情</Breadcrumb-item>
                    </Breadcrumb>               
        </p>
      
      <div class="Admissionticket">
          <div class="Admissionticket-l">
              <img src="../assets/menpiao-tp01_03.jpg" >
              <div class="imgs">
                <img src="../assets/menpiao-imgs_06_03.jpg" height="84" width="159" alt="">
                <img src="../assets/menpiao-imgs_07_05.jpg" height="84" width="160" alt="">
                <img src="../assets/menpiao-imgs_08_07.jpg" height="84" width="160" alt="">
                <img src="../assets/menpiao-imgs_09.jpg" height="84" width="159" alt="">
              </div>
          </div>
         
         <div  class="Admissionticket-r">
           <p class="toubu">凤凰山全价票官方网络票</p>
           <p  class="jiage">价格：<span>80</span>元</p>
           <p>景区地址：<span>辽宁省朝阳市双塔区(朝阳凤凰山国家森林公园)</span></p>
           <p  class="cn">服务承诺：<span>入园保证</span></p>
           <p>预订限制：<span>本产品仅限成人预订。儿童票请自行前往景区购买。</span></p>
           <p>特色：<span>国门名山”!凤凰山由东山和西山两大景区组成，以秀美的自然山岳风光称绝，以独特的宗教人文景观为特色!游人进山一游便展现“壑岩丹青千尺画，海云仙阁一溪诗”的胜境!</span></p>
           <button class="btn-red" v-link="'/Bookinginformation'">立即购买</button>
         </div>
      </div>
      
      <div class="Book-title02">
        <h1>购票须知</h1>
      </div>
       <div class="Book-title03">
         <p>入园时间：4月1日-6月30日    早5点开园 晚6点闭园<br>
                                  7月1日-10月30日  早5点开园晚7点闭园<br>
                                  11月1日-3月30日  早6点开园 晚6点闭园<br>
                特惠政策: 景区统一售票，暂无优惠政策。<br>
                温馨提示: ①请勿挖土、攀枝、摘花，保护旅游资源，爱护景区设施；注意防火，严禁野外吸烟；保持景区卫生，禁止乱扔杂物；请您妥善保管门票，以备检查；<br>  请您遵守旅游秩序，注意安全。<br>
                ②每人一票，当日一次有效，出园需入园，请再次购买门票。<br>
                ③为保证取票、入园顺利，预订时请务必填写真实姓名、手机号码等信息。
                </p>
       </div> 

       <div class="Book-title02">
        <h1>退票说明</h1>
      </div>
       <div class="Book-title03">
         <p>拨打客服电话：0415-8126042统一退票；注:入园前   两小时可以退票。</p>
       </div>  

       <div class="Book-title02">
        <h1>退票说明</h1>
      </div>
       <div class="Book-title03">
          <img src="../assets/twjs_03.jpg" height="586" width="1197" alt="">
          <p>凤凰山的气温一般比沈阳高5~8度，险要的地段就是有个叫老牛背的地段，一侧是铁索，不知道改了没有，就这个地方危险，别的地方没什么太险的。凤凰山集雄、险、幽、奇、秀于一体，险峻尤为突出，故有"中国历险名山"之美誉。游览凤凰山，可谓步步高、步步险、步步紧、步步难，几步一层天。著名险景 "老牛背"、"天下绝"、"百步紧"、"峥嵘 岩"等使人望而生畏，走而怯步，过而叫绝，想而后怕。"凤凰洞"、"一品洞"、"通玄洞"、"教堂洞"等古洞引人入胜;"山云铺海"、"涧水飞涛"、"松径寻秋"、"斗母圣镜"等景观似入幻境;"圣源"、"丹 泉"、"凤泪泉"、"智慧泉"等山泉沁人心脾;"金龟求凰"、"碧海飞 舟"、"金蟾望月"、"石壁鹤影"等怪石形神兼备。</p>
          <img src="../assets/twjs_07.jpg" height="586" width="1197" alt="">
          <p>凤凰山的气温一般比沈阳高5~8度，险要的地段就是有个叫老牛背的地段，一侧是铁索，不知道改了没有，就这个地方危险，别的地方没什么太险的。凤凰山集雄、险、幽、奇、秀于一体，险峻尤为突出，故有"中国历险名山"之美誉。游览凤凰山，可谓步步高、步步险、步步紧、步步难，几步一层天。著名险景 "老牛背"、"天下绝"、"百步紧"、"峥嵘 岩"等使人望而生畏，走而怯步，过而叫绝，想而后怕。"凤凰洞"、"一品洞"、"通玄洞"、"教堂洞"等古洞引人入胜;"山云铺海"、"涧水飞涛"、"松径寻秋"、"斗母圣镜"等景观似入幻境;"圣源"、"丹 泉"、"凤泪泉"、"智慧泉"等山泉沁人心脾;"金龟求凰"、"碧海飞 舟"、"金蟾望月"、"石壁鹤影"等怪石形神兼备。</p>
       </div>     
            
         
         
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '凤凰山项目'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner img{
  width: 100%;
  height:auto;
}
.Book-title{
  width: 1200px;
  height: 40px;
  line-height: 40px;
  margin: 10px auto;
  border-bottom: 1px dotted #000
}
.Book-title h1{
  float: left;
  font-size: 25px;
  font-weight: bold;
  border-bottom: 2px solid #009900;
  background: url(../assets/yd-tb.png) no-repeat;
  padding-left: 40px;
}
.Book-title p{
  float: right;
  color: #07b592;
}
.Admissionticket{
  width: 1200px;
  height: 530px;
  margin:20px auto;
  box-shadow: 0px 4px 5px #E8E8E8;
}
.Admissionticket .Admissionticket-l{
  float: left;
  width: 656px;
  height: 530px
}
.Admissionticket .Admissionticket-l .imgs{
  height:84px;
   width: 656px;
}
.Admissionticket .Admissionticket-r{
  float: right;
  width: 521px;
  height: 564px;
}
.Admissionticket div p{
  font-size: 16px;
  font-weight: bold;
  width: 95%;
  line-height: 40px;
  margin:5px 0;
}
.Admissionticket div p span{
  font-size: 16px;
  font-weight: bold;
  width: 95%;
  line-height: 40px;
  margin:5px 0;
  color: #5f6160
}
.Admissionticket div .toubu{
  font-size: 25px;
  line-height: 40px;
  width: 95%;
  font-weight: bold;
  margin:5px 0;
}
.Admissionticket div .jiage{
  font-size: 25px;
  line-height: 40px;
  width: 95%;
  font-weight: bold;
  margin:5px 0;
}
.Admissionticket div .jiage span{
  color: red;
}
.Admissionticket div .cn span{
    background: #41c26f;
    color: #fff;
}
.Admissionticket div button{
  font-size: 25px;
  text-align: center;
  width: 220px;
  height: 40px;
  margin:20px auto;
  display: block;
  background: #62ade4;
  border: none;
  border-radius: 5px;
  color: #fff;
}
.Admissionticket div .btn-red{
  background: #f85863;
}

.Book-title02{
  width: 1200px;
  height: 40px;
  line-height: 40px;
  margin: 10px auto;
  border-bottom: 1px dotted #000
}
.Book-title02 h1{
  float: left;
  font-size: 25px;
  font-weight: bold;
}
.Book-title03{
  width: 1200px;
  overflow: hidden;
  line-height: 30px;
  margin: 10px auto;
   box-shadow: 0px 4px 5px #E8E8E8;
}
.Book-title{
    width: 1200px;
    height: 40px;
    line-height: 40px;
    margin: 10px auto;
    border-bottom: 1px solid #C5C0C0
}
</style>