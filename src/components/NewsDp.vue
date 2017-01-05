<template>
  <div class="hello">
      <div class="banner">
          <img src="../assets/News-d.jpg" alt="">
      </div>
      <div class="Nd-box">
          <p class="Book-title">                
                   <Breadcrumb>
                          <Breadcrumb-item href="/">首页</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">最新动态</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">动态详情</Breadcrumb-item>
                    </Breadcrumb>               
        </p>
         <div class="Nd-r">
            <div>
              <h1>凤凰山开辟“天空之路” 游客体验“凌空之感”</h1>
              <p class="p2">日期：2016-01-01            访问次数：375</p>
              <img src="../assets/Nd-tp.jpg"  alt="">
              <p class="p3">凤城市凤凰山景区近日开放了全新的旅游景点——玻璃栈道。该栈道立于悬崖峭壁之上，游客可以体验“凌空之感”的惊险。<br>
　　玻璃栈道位于景区海拔七百多米处的“百步紧”和“天下绝”之间，依悬崖峭壁凌空而建，整条栈道全都采用三厘米钢化玻璃铺设。游客走在上面有悬空之感。玻璃栈道是凤凰山景区继凌空栈道后打造的又一试胆力作。</p>
            </div>
            <p class="p4"><span class="span1">上一篇：没有</span><span class="span2">下一篇：凤凰山2016年景区公告</span></p>
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
    border-bottom: 1px solid #C5C0C0
}

.Nd-r{
  width: 1200px;
  margin:0 auto;
  overflow: hidden;
  }
.Nd-r div{
  width: 96%;
  overflow: hidden;
  margin:0 auto;
}
.Nd-r div .p1{
  width: 100%;
  line-height: 30px;
  color: #07b592;
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
  width: 20%;
  line-height:30px;  
  margin-left: 2%;
}
.Nd-r .p4 .span2{
  float: right;
  width: 20%;
  line-height:30px; 
  margin-right: 2%; 
}

</style>