<template>
  <div class="hello">
      <div class="banner">
          <img src="../assets/News-d.jpg" alt="">
      </div>
      <div class="Book-title">
        <p>                 
                      <Breadcrumb>
                          <Breadcrumb-item href="/">首页</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">网上购票</Breadcrumb-item>
                         
                      </Breadcrumb>
                 
        </p>
      </div>
      <div class="Typesetting">
          <Row :gutter="16">
              <i-col span="6">
                  <div class="subject" v-link="'/Ticketdetails'">
                    <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
                    <div class="subject-box">
                      <h5><strong>华联测试票</strong></h5>
                      <p class="p1">这是来自华夏票联的测试票这是来自华夏票联的测试票这是来自华夏票联的测试票</p>
                      <p class="p2">销量：0</p>
                    </div>
                  </div>
              </i-col>
              <i-col span="6">
                  <div class="subject" v-link="'/Ticketdetails'">
                    <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
                    <div class="subject-box">
                      <h5><strong>华联测试票</strong></h5>
                      <p class="p1">这是来自华夏票联的测试票这是来自华夏票联的测试票这是来自华夏票联的测试票</p>
                      <p class="p2">销量：0</p>
                    </div>
                  </div>
              </i-col>
              <i-col span="6">
                  <div class="subject" v-link="'/Ticketdetails'">
                    <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
                    <div class="subject-box">
                      <h5><strong>华联测试票</strong></h5>
                      <p class="p1">这是来自华夏票联的测试票这是来自华夏票联的测试票这是来自华夏票联的测试票</p>
                      <p class="p2">销量：0</p>
                    </div>
                  </div>
              </i-col>
              <i-col span="6">
                  <div class="subject" v-link="'/Ticketdetails'">
                    <img src="../assets/gongl05.jpg" height="215" width="288" alt="">
                    <div class="subject-box">
                      <h5><strong>华联测试票</strong></h5>
                      <p class="p1">这是来自华夏票联的测试票这是来自华夏票联的测试票这是来自华夏票联的测试票</p>
                      <p class="p2">销量：0</p>
                    </div>
                  </div>
              </i-col>
          </Row>
         
      </div>
      <div class="Page">
            <Page :total="50"></Page>
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

.Book-title p{
  
  color: #07b592;
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
  height: 50px;
  font-size: 14px;
  color: #969595;
  }
  .subject-box .p2{
  line-height: 19px;
  font-size: 14px;
  color: #58afb0;
  }
  .Typesetting{
    width:1200px;margin:0 auto;margin-bottom:20px
  }
  .Page{
    width:256px;margin:0 auto;margin-bottom:50px
  }

</style>