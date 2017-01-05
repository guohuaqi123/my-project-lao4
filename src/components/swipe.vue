<template>
  <div class="hello">
     <div v-el:swipe class='swipe bar-slider'>
          <div class='swipe-wrap'>
              <div v-for="item in swipeinfo"><a :href="item.href"><img :src="item.imgSrc" /></a></div>
          </div>
          <!-- 分页 -->
          <div class="pagination">
              <span class="swipe-pagination-switch swipe-active-switch" @click="slideToCur(0)"></span>
              <span class="swipe-pagination-switch" @click="slideToCur($index+1)" v-for="item in slideNum"></span>
          </div>
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
    /*props: ['swipeinfo'],
    ready: function() {
        var self = this;
        //获取子组件中分页小圈圈
        var slides = self.$els.swipe.getElementsByClassName('swipe-pagination-switch');
        self.mySwipe = new Swipe(self.$els.swipe, {
            startSlide: 0,
            continuous: true,
            speed: 1000,
            auto: 4000,
            stopPropagation: false,
            callback: function(index, elem) {
                //渲染分页小圈圈
                for (var i = 0; i < slides.length; i++) {
                    if (i != index) {
                        slides[i].style.opacity = "0.2";
                        slides[i].style.background = "#000";
                    } else {
                        slides[index].style.opacity = "1";
                        slides[index].style.background = "#ee3a4a";
                    }
                }
            },
        });
        self.slideNum = self.mySwipe.getNumSlides() - 1;
    },
    methods: {
        //点击底部小圈圈，跳到其所对应页
        slideToCur: function(index) {
            var self = this;
            self.mySwipe.slide(index, 300);
        },
    }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swipe {
    overflow: hidden;
    visibility: hidden;
    position: relative;
    height: 200/@rem;   
}
 .swipe-wrap {
        position: relative;
        overflow: hidden;
        height: 100%;
       
    }
.swipe-wrap  div {
            float: left;
            width: 100%;
            position: relative;
            margin: 0;
            
        }
.swipe-wrap div a {
                width: 100%;
                height: 100%;
                background-position: center 0;
                background-repeat: no-repeat;
                background-color: transparent;
                display: block;
                
            }
.swipe-wrap div a img {
                    width: 100%;
                    height: 100%;
                }
.pagination {
        text-align: center;
        position: relative;
        bottom: 40/@rem;
        cursor: pointer;
    }
.swipe-pagination-switch {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: #000;
        opacity: 0.2;
        margin: 0 8px;
        z-index: 10;
        
    }
    .swipe-pagination-switch:first-child {
            background: #ee3a4a;
        }
    .swipe-active-switch {
        opacity: 1;
    }
</style>