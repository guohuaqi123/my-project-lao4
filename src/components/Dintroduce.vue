<template>
  <div class="hello">
      <div class="banner">
          <img src="../assets/News-d.jpg" alt="">
      </div>
      <p class="Book-title">                
                   <Breadcrumb>
                          <Breadcrumb-item href="/">首页</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">景区简介</Breadcrumb-item>
                          <Breadcrumb-item href="/components/breadcrumb">凤凰山简介</Breadcrumb-item>
                    </Breadcrumb>               
        </p>
      <div class="Admissionticket">
          <div class="Admissionticket-l">
              <h1>凤凰山简介</h1>
              <img src="../assets/twjs_07.jpg">
          </div> 
      </div>
      
      
       <div class="Book-title03">
         丹东凤凰山风景名胜区位于凤城市郊，距市中心仅3公里，南与朝鲜妙香山相望，北与本溪水洞呼应，是国家级风景名胜区、国家AAAA级旅游景区。丹东凤凰山自古有“辽东第一山”的美誉。南北朝时期称“乌骨山”。贞观年间，唐太宗李世民游览此山，有凤凰飞来拜祖，太宗大悦，遂赐名“凤凰山”，迄今已有1300多年历史。<br>
         丹东凤凰山位于古城景区的丹东凤凰山山城，被国务院列为国家重点文物保护单位。丹东凤凰山最高峰为攒云峰，海拔836米。丹东凤凰山是以自然景观为主，历史文化古迹、边塞田园风光、风俗民情为辅的山岳型风景名胜区，融“泰山之雄伟，华山之险峻，庐山之幽静，黄山之奇特，峨眉之秀美”为一体，素以“雄伟险峻，泉洞清幽，花木奇异，四季景秀”的自然美著称于世。<br>
         唐贞观年间唐太宗李世民御驾东巡，游览此山时，有“凤凰拜祖”的传说，遂赐此山名为“凤凰山”。后“平辽王”薛仁贵为了威慑各附属国，使其永不背叛大唐，在距凤凰山四十里处的发箭岭，开震天弓，搭穿云箭，对准凤凰山方向震臂一射，神箭穿凤凰山而过，落入鸭绿江中，自此便有“神弓射箭眼，一箭定辽东”之说。<br>
         丹东凤凰山由东山和西山两大景区组成，以秀美的自然山岳风光称绝，以独特的宗教人文景观为特色。<br>
        丹东凤凰山以“绝”惊世，“天下绝”、“老牛背”、“百步紧”挺拔险峻，异美无比。“金蟾望月”、“石壁鹤影”、“龟猴朝圣”形神兼备，惟妙惟肖。<br>
        丹东凤凰山聚“仙”显名，“仙人座”、“聚仙台”翠叠丹崖，葱郁流丽；“佛池”、“丹泉”飞瀑流化，洒脱飘逸；“金龟求凰”、“罗汉脸”氤氲飘渺，浑然天成。<br>
        丹东凤凰山得“道”弥彰，明弘治初年以来，紫阳观等道教建筑，依山水走向，方圆数里，道风浓郁，道境昭然，玄谜隐奥。<br>
         朝阳寺等庙宇古刹，依山傍水。气势恢宏，三层殿内供奉着世界唯一一尊正法明如来佛，每日晨钟暮鼓，禅声悠悠。吸引着无数善男信女顶礼膜拜,千年香火不断。<br>
         丹东凤凰山景色宜人，是人们休闲旅游、品味自然、寻幽探险的最佳选择。<br>
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
.Admissionticket{
  width: 1200px;
  overflow: hidden;
  margin:20px auto;  
}
.Admissionticket .Admissionticket-l{
  float: left;
  width: 1200px;
  height: 423px
}
.Admissionticket .Admissionticket-l h1{
  text-align: center;
  font-size: 24px;
  margin:10px 0;
  font-weight: bold;
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