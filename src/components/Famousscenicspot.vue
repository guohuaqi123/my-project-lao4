<template>
  <div class="hello">
    <div class="banner">
          <img src="../assets/News-d.jpg" alt="">
    </div>
    <div class="Book-title">
        <p>你的位置:首页>>凤凰山简介</p>
    </div>
    <div class="Nd-box">
         <div class="Nd-l">
            <div>
                <h1>著名景点</h1>
                <ul>
                    <li><a>仙人湖   </a></li>
                    <li><a>老牛背   </a></li>
                    <li><a>玻璃栈道   </a></li>
                    <li><a>黑港口栈道   </a></li>
                </ul>
            </div>
            
            
          
         </div>
         <div class="Nd-r">
            <div>
              <img src="../assets/zhumignjingdian.jpg" height="389" width="873" alt="">
              <p class="p1">凤凰山玻璃栈道位于景区海拔七百多米处的“百步紧”和“天下绝”之间，依悬崖峭壁凌空而建，整条栈道全都采用三厘米钢化玻璃铺设。栈道长度有三十一米，游客走在上面有悬空之感。玻璃栈道是凤凰山景区继凌空栈道后打造的又一试胆力作。凌空栈道全长1068米，宽1.5米，游人在其上可观东山美景，看山峦起伏，绿野葱葱，秀美景色尽收眼底；也可赏凤城市区全貌，感受凤城市人文风情。伫立于悬崖峭壁之上，领略俯视大地，一望无垠的震撼感觉，心意悠然，意境浑然天成。 凌空栈道全长1068米，宽1.5米，游人在其上可观东山美景，看山峦起伏，绿野葱葱，秀美景色尽收眼底；也可赏凤城市区全貌，感受凤城市人文风情。伫立于悬崖峭壁之上，领略俯视大地，一望无垠的震撼感觉，心意悠然，意境浑然天成。</p>
         </div>
         
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

.Book-title p{
  
  color: #07b592;
}
.Nd-box{
  width: 1200px;
  overflow: hidden;
  margin:15px auto;
}
.Nd-l{
  float: left;
  width: 24%;
  overflow: hidden;
  margin-right: 1%;
}
.Nd-l div{
  background: url(../assets/Newslist-l.jpg);
  background-size: 100% 350px;
  width: 100%;
  height: 350px;
  margin-bottom: 10px;
 
}
.Nd-l div h1{
  line-height: 40px;
  color: #000;
  width: 100%;
  text-align: center;
  padding-top: 45px;
  font-size: 24px;
  font-weight: bold;

}

.Nd-l div ul li{
  line-height: 40px;
  color: #000;
  width: 90%;
  margin:15px auto;
  text-align: center;
  font-size: 14px;
  background: -webkit-linear-gradient(#f7f7f7, #efefef); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#f7f7f7, #efefef); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#f7f7f7, #efefef); /* Firefox 3.6 - 15 */
  background: linear-gradient(#f7f7f7, #efefef); /* 标准的语法（必须放在最后） */
}
.Nd-r{
  float: right;
  width: 74%;
  overflow: hidden;
  border:1px solid #c9c9c9;
}
.Nd-r div{
  width: 96%;
  overflow: hidden;
  margin:0 auto;
}
.Nd-r div .p1{
  width: 100%;
  font-size: 18px;
  line-height: 30px;
  margin:10px 0;
}
.Nd-r div h1{
  width: 100%;
  line-height: 80px;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}
.Nd-r div .p2{
  width: 100%;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
}
.Nd-r div img{
  width: 100%;
  height: auto;
  margin: 10px auto;
}
.Nd-r div .p3{
  width: 100%;
  line-height: 30px;
  font-size: 14px;
}
.Nd-r .p4{
  margin-top:15px;
  width: 100%;
  line-height:30px;  
}
.Nd-r .p4 .span1{
  float: left;
  width: 70%;
  line-height:30px;  
  margin-left: 0%;
}
.Nd-r .p4 .span2{
  float: right;
  width: 9%;
  line-height:30px; 
  margin-right: 0%; 
}
.switch-box{
  line-height: 40px;
  width:100%;
  text-align: center;
  padding: 10px 0;
}
.switch-box span{
  display: inline-block;
  width: 40px;
  height:40px;
  border:1px solid #07b592;
  margin:0 10px;
}
.Selected{
  background: #07b592;
}
</style>