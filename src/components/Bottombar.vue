<template>
  <div class="hello">
        <div class="Bottombar">
            <div class="Bottombar-box">
                <div class="Bottombar-box01">
                    <p>全国统一服务热销<br><span>0415-8126042</span></p>
                </div>
                <div class="Bottombar-box02">
                    <p>凤凰山风景名胜区管理局版权所有Copyright   2016All Reserved. <br>联系电话：0415-8126042</p>
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
.Bottombar{
  width: 100%;
  height: 100px;
  background: #707070;
}
.Bottombar-box{
  width: 1200px;
  height: 100px;
  margin:0 auto;
  color: #fff;

}
.Bottombar-box01{
  width: 30%;
  height: 60px;
  background: url(../assets/dianhua-tb.png) no-repeat;
  float: left;
  margin-top: 20px;
  font-size: 16px;
  font-weight:bold;
  padding-left: 70px;
}
.Bottombar-box01 span{
  font-size: 18px;
  font-weight:bold;
  color: #f7b03f;
}
.Bottombar-box p{
  
  line-height: 30px;
 
}
.Bottombar-box02{
  width: 35%;
  height: 60px;
 font-size: 12px;
  float: left;
  margin-top: 18px;
}

  
</style>
