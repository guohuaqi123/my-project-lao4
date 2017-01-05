<template>
  <div class="hello">
    <div id="tops"></div>
        <div class="login_bg">
          <div class="form">
              <div class="loginad">
                  <div class="loginadtitle">创新带动客户需求 创造引领行业发展</div>
                  <div class="loginaddes">旅游信息化行业引领者</div>
                  <div class="loginadbtn"><a  href="docs/api/id/59" target="_blank">马上查看</a></div>
                  <div class="loginadimg" ></div>
              </div>
              
              <form name="loginForm" id="login_form" method="post" action="login/ldo">
                  <h2 v-on:click="loginStateC">登录华夏票联</h2>
                  <div class="div_user">
                        <span class="spantb"></span>
                        <input   class="username" type="text" placeholder="用户名" v-model=" formInput[0].Data" v-on:input="FormInput(1)" />
                        <span v-if="formInput[0].YesAnNo" class="spanYesAnNo">
                                            <span v-if="formInput[0].dataFt">
                                                <Icon type="checkmark-circled"  size="16" color="green"></Icon>
                                            </span>
                                            <span v-else>
                                                <Icon type="close-circled"  size="16" color="red"></Icon>
                                            </span>         
                        </span> 
                  </div>
                  <div class="div_pw" >
                        <span  class="spantb"></span>
                        <input class="pw" type="password" placeholder="密码" v-model=" formInput[1].Data" v-on:input="FormInput(2)"  />
                        <span v-if="formInput[1].YesAnNo"  class="spanYesAnNo">
                                            <span v-if="formInput[1].dataFt">
                                                <Icon type="checkmark-circled"  size="16" color="green"></Icon>
                                            </span>
                                            <span v-else>
                                                <Icon type="close-circled"  size="16" color="red"></Icon>
                                            </span>         
                        </span>
                  </div>
                  <div class="div_box">
                      <label>
                          
                      </label>
                      <a class="forgetPw" href="forget">忘记密码?</a>
                  </div>
                  <div><input class="login_btn" id="loginBtn" type="button" value="登录" v-on:click="SonData"/></div>
                  <div style="line-height:30px; text-indent:5px;color:#F30" id="loginTips">&nbsp;</div>
                  <h4>没有账号？<a class="#" @click="transformation">立即注册</a></h4>
                  
              </form>
          </div>
      </div>
</template>

<script>

export default ({
  el: '#app01',
  data(){
        return {
          message: 'Hello Vue.js!',
          msg:"郭华旗",
           formInput:[
                {
                  Data:"",
                  YesAnNo:false,
                  dataFt:false
                },
                {
                  Data:"",
                  YesAnNo:false,
                  dataFt:false
                },
           ]
        }
    },
   methods: {
          SonData: function () {
               if(this.formInput[0].dataFt==true&&this.formInput[1].dataFt ==true){
                    $.ajax({
                          type : "post",
                          dataType : "json",
                          url : ctxPath+"/api/member/login",
                          async : false,
                          data : {
                            _method : "post",
                            memberName:this.formInput[0].Data,// 账户名
                            pwd :this.formInput[1].Data// 密码
                            
                          },
                          success : function(data) {
                            if(data.message=="登录成功"&&data.success==true){
                                          this.instance("登入成功！");
                                          this.$emit('sondata',this.formInput[0].Data)
                            }else{
                                          this.instance(data.message);
                            }

                            
                          },
                          error : function(jqXHR, textStatus, errorThrown) {this.instance("服务器错误，获取数据失败");}
                  });
               }else{
                    this.instance("用户名或密码错误请重新填写！")
               }
               
          },
           FormInput:function(type){
            //alert(this.InptVal[0].UseVal)
                   if(type==1){//对用户名的验证
                            this.formInput[0].YesAnNo=true;
                            if((/^[a-zA-z]\w{5,15}$/.test(this.formInput[0].Data))){//验证val值
                                  //alert("true")
                                  this.formInput[0].dataFt=true//对的
                            }else{
                                //alert("false")
                                this.formInput[0].dataFt=false//错的
                            }
                            if (this.formInput[0].Data=="") {//判断val是否为空，来显示对与错的标签
                              this.formInput[0].YesAnNo=false
                            };
                    }else if(type==2){//对手机号的验证
                        this.formInput[1].YesAnNo=true;
                            if((/^\d{6}$/.test(this.formInput[1].Data))){//验证val值
                                  //alert("true")
                                  this.formInput[1].dataFt=true//对的
                            }else{
                                //alert("false")
                                this.formInput[1].dataFt=false//错的
                            }
                            if (this.formInput[1].Data=="") {
                              this.formInput[1].YesAnNo=false//判断val是否为空，来显示对与错的标签
                            };
                    }
           },
          transformation:function(){//点击立即注册跳转到注册页面
                    this.$emit('transformation',1)
          },
         
        instance:function(data) {
                const title = '信息提醒';
                const content = data;
                this.$Modal.info({
                            title: title,
                            content: content
                        });
                   setTimeout(() => {
                          this.$Modal.remove();
                        }, 2000);   
            }
        }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tops{width: 100%;height: 96px}
.loginad{
    width:580px;
    height:595px;
    position: absolute;
  }
  .loginad .loginadtitle{
    width:100%;
    text-align:center;
    line-height:60px;
    font-size:32px;
    font-family:"幼圆",Microsoft Yahei;
    margin-top:70px;
    color:#FFF;
  }
  .loginad .loginaddes{
    line-height:30px;
    color:#FFF;
    font-family:Microsoft Yahei;
    font-size:16px;
    text-align:center
  }
  .loginad .loginadimg{
    width:100%; 
    height:320px;
    margin-top:40px;
    background:url('../assets/3275043504.png') center center no-repeat
    
  }
  .loginad .loginadbtn{ width:100%; height:40px; margin-top:30px; }
  .loginad .loginadbtn a{ display:block; width:190px; height:40px; margin:0 auto; text-align:center; line-height:40px; font-size:16px; color:#009fe3; font-weight:bold; background:url(../assets/btn.png) center center no-repeat;
    -moz-border-radius:6px;
    -khtml-border-radius:6px;
    -webkit-border-radius:6px;
    border-radius:6px;
  }

.login_bg{width:100%; min-width:1200px; height:600px; background:url(../assets/login_banner.png) center center no-repeat #00a0e9;}
.form{width:1200px; margin:0 auto;position:relative;}
#login_form{width:350px; position:absolute; top:130px; right:70px;}
#login_form h2{background:url(../assets/iPhone.png) left -452px no-repeat; padding-left:46px; color:#009fe3; font-size:16px; font-weight:bold; height:20px; line-height:20px; margin-bottom:24px;}

.username{width:315px; padding:10px 5px 10px 45px; border:1px solid #858685; height:45px; line-height:20px; margin-bottom:36px; border-radius:4px; color:#666;}
 .pw{width:315px; padding:10px 5px 10px 45px; border:1px solid #858685; height:45px; line-height:20px; margin-bottom:10px; border-radius:4px; color:#666;}
.activeA{border:1px solid #FF1308;}
.activeB{border:1px solid #02BB02;}
.div_user, .div_pw{position:relative;}
.div_user  .spantb, .div_pw .spantb{position:absolute; left:15px; top:12px; width:16px; height:18px; background:url(../assets/iPhone.png) 0 -480px no-repeat; z-index:1;}
.div_pw span{background-position:0 -506px;}
.spanYesAnNo{margin-left: 18px}

.div_box{margin-top:5px; height:20px; line-height:20px; position:relative;}
.div_box a, .login_reg{ right:5px; top:0; color:#009fe3;}
.login_reg{font-weight:bold;}
.div_box a:hover, .login_reg:hover{text-decoration:underline;}
.div_box input{position:absolute; top:4px; left:0;}

.login_btn{display:block; width:315px;box-shadow:0 2px 1px #999; margin-top:20px;    height: 60px;text-align: center; 
     font: bold 16px/60px '宋体';  border: 0 none;  border-radius: 4px; color: #fff;  cursor: pointer; background: #009fe3; letter-spacing: 6px;}
#login_form h4{height:40px; line-height:40px; position:relative;}
.lab{margin-left: 19px;font-size: 18px;}
</style>
