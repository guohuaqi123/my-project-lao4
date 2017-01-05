<template>
  <div class="hello">
      <div class="banner">
          <img src="../assets/News-d.jpg" alt="">
      </div>
      <p class="Book-title">                
                   <Breadcrumb>
                          <Breadcrumb-item href="/">首页</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">攻略</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">景点攻略</Breadcrumb-item>
                    </Breadcrumb>               
        </p>
     
      <!--景点-->
     <div class="Book-title02">
        <h1>景点</h1>
        <h2>更多>></h2>
      </div>
      <div class="Admissionticket">     
         <div  class="Admissionticket-r">
            <div class="subject" v-link="'/Moredetails'">
              <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
              <div class="subject-box">
                <h5>凤凰山黑风栈道</h5>
                <p class="p1">凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道</p>
                <p class="p2">来自123。133</p>
              </div>
            </div>

            <div class="subject">
              <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
              <div class="subject-box">
                <h5>凤凰山黑风栈道</h5>
                <p class="p1">凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道</p>
                <p class="p2">来自123。133</p>
              </div>
            </div>

            <div class="subject">
              <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
              <div class="subject-box">
                <h5>凤凰山黑风栈道</h5>
                <p class="p1">凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道</p>
                <p class="p2">来自123。133</p>
              </div>
            </div>

            <div class="subject subject01">
              <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
              <div class="subject-box">
                <h5>凤凰山黑风栈道</h5>
                <p class="p1">凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道凤凰山黑风栈道</p>
                <p class="p2">来自123。133</p>
              </div>
            </div>
         </div>
      </div>
      <!--景点-->
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
  height: 344px;
  margin:20px auto;
  box-shadow: 0px 4px 5px #E8E8E8;
}

.Admissionticket .Admissionticket-r{
  float: right;
  width:100%;
  height: 344px;
}
.subject{
  float: left;
  margin-right: 16px;
  height:344px;
  width:288px; 
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
.subject-box .p1{
  height: 60px;
  font-size: 16px;
  }
  .subject-box .p2{
  line-height: 19px;
  font-size: 14px;
  color: #58afb0;
  }


</style>