<template>
  <div class="hello">
      <div class="banner">
          <img src="../assets/News-d.jpg" alt="">

      </div>
      <p class="Book-title">                
                   <Breadcrumb>
                          <Breadcrumb-item href="/">首页</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">吃住行</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">美食</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">美食详情</Breadcrumb-item>
                    </Breadcrumb>               
        </p>
      <!--景点-->
     
      <div class="Admissionticket">
          <div class="Admissionticket-l">
              

                <p class="p1">美食美食美食</p>
                <p class="p2"> 预览数：1203次</p>
               
          </div>        
         <div  class="Admissionticket-r">
                <div class="xieyouji">立刻预定</div>
         </div>
      </div>
      <!--景点-->
          <div class="Nd-box">
         <div class="Nd-l">
            <div>
                <h1>推荐美食</h1>
                <ul>
                    <li><a>
                          <img src="../assets/gonglxiangguan.jpg" height="59" width="85" alt=""> 
                          <div class="lis-div">
                              <p class="p3">玻璃栈道</p>
                              <p class="p4"> 预览数：1203次</p>
                          </div>
                    </a></li>
                    <li><a>
                        <img src="../assets/gonglxiangguan.jpg" height="59" width="85" alt=""> 
                          <div class="lis-div">
                              <p class="p3">玻璃栈道</p>
                              <p class="p4">  预览数：1203次</p>

                          </div>
                    </a></li>
                    <li><a>
                        <img src="../assets/gonglxiangguan.jpg" height="59" width="85" alt=""> 
                          <div class="lis-div">
                              <p class="p3">玻璃栈道</p>
                              <p class="p4"> 预览数：1203次</p>
                          </div>
                    </a></li>
                    <li><a>
                        <img src="../assets/gonglxiangguan.jpg" height="59" width="85" alt=""> 
                          <div class="lis-div">
                              <p class="p3">玻璃栈道</p>
                              <p class="p4"> 预览数：1203次</p>
                          </div>
                    </a></li>
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
      <!--美食-->
     
      <!--美食-->
      <!--住宿-->
     
      <!--住宿-->
      <!--特产-->
     
      <!--特产-->
     
     

    

     
      
            
         
         
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
  border-bottom: 1px solid #C5C0C0
}

.Book-title p{
  color: #07b592;
}
.Book-title02{
  width: 1200px;
  height: 40px;
  line-height: 40px;
  margin: 10px auto;
  border-bottom: 4px solid #99dc74
}
.Book-title02 h1{
  float: left;
  font-size: 21px;
  font-weight: bold;
}
.Book-title02 h2{
  float: right;
  font-size: 16px;
  font-weight: bold;
}

.Admissionticket{
  width: 1200px;
  height: 81px;
  margin:20px auto;
  box-shadow: 0px 4px 5px #E8E8E8;
}
.Admissionticket .Admissionticket-l{
  float: left;
  background: url(../assets/gonglxiangqing.png) no-repeat;
  padding-left: 90px;
  width: 70%;
  height: 61px
}
.Admissionticket .Admissionticket-r{
  float: right;
  width:10%;
  height: 61px;
}
.Admissionticket .Admissionticket-r div{
  color: #fff;
  width:100%;
  text-align: center;
  line-height: 30px;
  background: url(../assets/xieyouji.png) no-repeat #ff8800;
  background-position: 10px 5px;
  border-radius: 3px;
  margin-top: 15px;
} 
.p1{
  line-height: 35px;
  font-size: 16px;
  }
 .p2{
  line-height: 25px;
  font-size: 14px;
  color: #58afb0;
  }
  .xieyouji{

  }
.subject{
  float: left;
  margin-right: 27px;
  height:344px;
  width:298px; 
  border:1px solid #e8e6e6;
  -webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
}
.subject01{
  margin-right: 0;
}
.subject-box{
  height:119px;
  width:286px; 
  padding:5px;
}
.subject-box h5{
  font-size: 21px;
  line-height: 40px;
  font-weight: bold;
}


.Nd-box{
  width: 1200px;
  overflow: hidden;
  margin:15px auto;
}
.Nd-l{
  float: right;
  width: 24%;
  overflow: hidden;
  
}
.Nd-l>div{
 border:1px solid #c9c9c9;
  box-sizing: border-box;
  background-size: 100% 350px;
  width: 100%;
  height: 350px;
  margin-bottom: 10px;
 
}
.Nd-l div h1{
  line-height: 40px;
  color: #000;
  width: 96%;
  margin-left: 2%;
  text-align: center;
  padding-top: 10px;
  border-bottom: 1px solid #c9c9c9;
  font-size: 24px;
  font-weight: bold;

}

.Nd-l div ul li{
  line-height: 59px;
  color: #000;
  width: 96%;
  margin:8px auto;
  font-size: 14px;
  background: -webkit-linear-gradient(#efefef, #efefef); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#efefef, #efefef); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#efefef, #efefef); /* Firefox 3.6 - 15 */
  background: linear-gradient(#efefef, #efefef); /* 标准的语法（必须放在最后） */
 
}
.lis-div{
  float: right;
  height: 59px;
  width: 65%;
}
.lis-div .p3{
  color: #6fb058;
  line-height: 30px;
  width: 65%;
}
.lis-div .p4{
  font-size: 12px;
  line-height: 29px;
  width: 65%;
}
.Nd-r{
  float: left;
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
</style>