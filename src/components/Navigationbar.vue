<template>
 <router-view></router-view>
  <div class="hello">
    <div class="top-box">
        <div class="top-box01">
            <div class="top-box-l">
                <img src="../assets/logo.png"  alt="">
            </div>
            <div class="top-box-r">
                <ul>
                    <li class="li-xz"><a v-link="'/News'">凤凰山政务</a></li>
                    <li><a v-link="'/Onlinebooking'">网上预订</a></li>
                    <li><a>凤凰山</a></li>
                    <li><a>凤凰山</a></li>
                    <li class="no-margin"><a>凤凰山</a></li>
                </ul>
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
.top-box{
  width:100%;
  height:71px;
  background: url(../assets/top-box-tp.png);
  position: fixed;
} 
.top-box01{
    width:1200px;
    height: 71px;
   
    margin:0 auto;
  }
  .top-box01 .top-box-r{
    float: right;
    width:70%;
    height:71px;
  }
   .top-box01 .top-box-l{
    float: left;
    width:30%;
    height:71px;
  }
   .top-box01 .top-box-l img{
    width:226px;
    height:67px;
    margin-top: 2px
  }
  .top-box01 .top-box-r ul .li-xz{
    width:130px;
    height:61px;
    margin-right: 5%;
    margin-top: 10px;
    border-radius: 6px 6px 0 0;
    text-align: center;
    line-height: 61px;
    font-size: 24px;
    color: #fff;
    background: -webkit-linear-gradient(#4da619, #9bde76); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#4da619, #9bde76); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#4da619, #9bde76); /* Firefox 3.6 - 15 */
    background: linear-gradient(#4da619, #9bde76); /* 标准的语法（必须放在最后） */
    -moz-box-shadow: 0px -4px 5px #E8E8E8; /* 老的 Firefox */
    -webkit-box-shadow:0px -4px 5px #E8E8E8;
    box-shadow:0px -4px 5px #E8E8E8;
  }
   .top-box01 .top-box-r ul li{
    float: left;
    width:130px;
    height:61px;
    margin-right: 5%;
    margin-top: 10px;
    text-align: center;
    line-height: 61px;
    font-size: 22px;
    color: #000;

  }
  .top-box01 .top-box-r ul .no-margin
{ 
margin-right: 0;
}
</style>
