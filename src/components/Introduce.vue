<template>
  <div class="hello">
   <div class="banner">
         <swiper :options="swiperOption" ref="mySwiperA">
            <!-- 幻灯内容 -->
            <swiper-slide><img src="../assets/banner.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/banner.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/banner.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/banner.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/banner.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/banner.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/banner.jpg" alt=""></swiper-slide>
            <!-- ... -->
            <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
          </swiper>
          
      </div>
     
     
      <div class="Admissionticket">
          <div class="Admissionticket-l">
              <img src="../assets/jingqujianjie.jpg" v-link="'/Dintroduce'">
          </div> 
      </div>
      
      <div class="Book-title02">
            <img src="../assets/jinfqujianjie-bt.jpg" height="48" width="1198" alt="" >
      </div>
       <div class="Book-title03">
         <img src="../assets/jianjie-01.jpg" height="384" width="291" alt="" style="margin-left:10px" v-link="'/Famousscenicspot'">
         <img src="../assets/jianjie-02.jpg" height="384" width="291" alt="">
         <img src="../assets/jianjie-03.jpg" height="384" width="291" alt="">
         <img src="../assets/jianjie-04.jpg" height="384" width="291" alt="">
       </div> 

       <div class="Book-title02">
        <h1>美图欣赏</h1>
      </div>
       <div class="Book-title03">
        
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
      msg: '凤凰山项目',
      swiperOption:{
        notNextTick: true,
        autoplay: 4000,
       // effect :'flip',
        //slidesPerView: 3,
        centeredSlides: true,
        pagination : '.swiper-pagination',
        paginationClickable: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        scrollbar:'.swiper-scrollbar',
      },
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


.Book-title p{
  
  color: #07b592;
}
.Admissionticket{
  width: 1200px;
  height: 423px;
  margin:20px auto;
  
}
.Admissionticket .Admissionticket-l{
  float: left;
  width: 1200px;
  height: 423px
}
.Admissionticket .Admissionticket-l .imgs{
  height:84px;
   width: 656px;
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
  margin: 30px auto;
  border-bottom: 1px dotted #000
}
.Book-title02 h1{
  float: left;
  font-size: 25px;
  font-weight: bold;
  border-bottom: 2px solid #009900;
}
.Book-title03{
  width: 1200px;
  overflow: hidden;
  line-height: 30px;
  margin: 10px auto;
   box-shadow: 0px 4px 5px #E8E8E8;
}
</style>