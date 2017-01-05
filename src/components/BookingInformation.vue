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
                          <Breadcrumb-item href="/components/breadcrumb">购票信息</Breadcrumb-item>
                    </Breadcrumb>               
            </p>
            <p class="Book-title01">                
                    预定信息        
            </p>
            <div class="Reserve">
                    <p>产品名称：<strong>华夏票联测试票</strong></p>
                    <p>产品价格：<strong>0.01</strong><span>元</span></p>
                    <p>游玩日期：</p>
                    <p>产品数量：</p>
                    <p>订单金额：<strong>0.01</strong><span>元</span></p>
            </div>
            <p class="Book-title01">                
                    取票人信息        
            </p>
            <div class="Thetickets">
                    <p>姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：<i-input :value.sync="value1" placeholder="请输入..." style="width: 300px"></i-input></p>
                    <p>身份证号：<i-input :value.sync="value2" placeholder="请输入..." style="width: 300px"></i-input></p>
                    <p>手 机 &nbsp号：<i-input :value.sync="value3" placeholder="请输入..." style="width: 300px"></i-input></p>
            </div>
            <div class="Submit">
                <i-button type="success" long>确认提交</i-button>
            </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
       mySwipe: {},
       slideNum: {},
    }
    },
    props: [''],
    ready: function() {
        
    },
    methods: {
        
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
.Book-title01{
  width: 1200px;
  padding-left: 20px;
  height: 40px;
  line-height: 40px;
  margin: 10px auto;
   background:  #ff9900;
   color:#fff;
   font-size: 18px;
}
.Reserve , .Thetickets{
    width: 1200px;
  padding-left: 20px;
  margin: 0px auto;
}
.Reserve p, .Thetickets p{
    height: 40px;
  line-height: 40px;
   font-size: 14px;
}
.Submit{
    width: 500px;
  margin: 50px auto;
}

</style>