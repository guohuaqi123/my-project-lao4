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
                    </Breadcrumb>               
        </p>
        
            
            
          
         </div>
         <div class="Nd-r">
            <div>          
            <p class="p4"><span class="span1"  v-link="'/Newsdp'">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            <p class="p4"><span class="span1">凤凰山风景区2016年“十一”假日旅游接待情况综述：金秋十月赏枫叶 最美丹东凤凰山</span><span class="span2">[2016-09-01]</span></p>
            
            <div class="Page">
                    <Page :total="50"></Page>
            </div>
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
.Nd-box{
  width: 1200px;
  overflow: hidden;
  margin:15px auto;
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
  height: 30px;
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
.Book-title{
    width: 1200px;
    height: 40px;
    line-height: 40px;
    margin: 10px auto;
    border-bottom: 1px solid #C5C0C0
}
.Nd-r .Page{
    width:256px;margin:20px auto;
  }
</style>