<template>
  <div class="hello">
    <div id="tops"></div>
    <div class="register_content">  
              <ul class="step_ul step1 clear">
                        <li class="li1">01、填写资料</li>
                        <li class="li2">02、完成注册</li>
              </ul>
              
               <form name="registerForm" id='registerForm' action="register/ldo" method="post" style="padding:60px 40px 88px 40px;font-family:Microsoft Yahei">
                    <div class="div_form clear ">
                          <label>账户名：</label>
                          <div class="input_div input_div1">
                                    <input id="username"  type="text" placeholder="字母、数字、下划线组成，字母开头，4-16位"  v-model="formInput[0].Data" v-on:input="FormInput(1)" >
                                    <span v-if="formInput[0].YesAnNo">
                                            <span v-if="formInput[0].dataFt">                                                
                                                <Icon type="checkmark-circled"  size="16" color="green"></Icon>
                                            </span>
                                            <span v-else>
                                                <Icon type="close-circled"  size="16" color="red"></Icon>
                                            </span>         
                                    </span>                       
                          </div>
                    </div>
                    <div class="div_form clear ">
                          <label>手机号：</label>
                          <div class="input_div input_div2" >
                                    <input id="mail"   type="text" placeholder="请输入手机号"  v-model="formInput[1].Data" v-on:input="FormInput(2)" >
                                    <span v-if="formInput[1].YesAnNo">
                                            <span v-if="formInput[1].dataFt">
                                                <Icon type="checkmark-circled"  size="16" color="green"></Icon>
                                            </span>
                                            <span v-else>
                                                <Icon type="close-circled"  size="16" color="red"></Icon>
                                            </span>         
                                    </span> 
                          </div>
                    </div>
                    <div class="div_form clear ">
                          <label>请创建一个密码：</label>
                          <div class="input_div input_div3">
                                    <input id="password1" type="password" placeholder="最少6个字符，区分大小写"  v-model="formInput[2].Data" v-on:input="FormInput(3)" >
                                    <span v-if="formInput[2].YesAnNo">
                                            <span v-if="formInput[2].dataFt">
                                                <Icon type="checkmark-circled"  size="16" color="green"></Icon>
                                            </span>
                                            <span v-else>
                                                <Icon type="close-circled"  size="16" color="red"></Icon>
                                            </span>         
                                    </span> 
                          </div>
                    </div>
                    <div class="div_form clear ">
                            <label>重新输入密码：</label>
                            <div class="input_div input_div4">
                                      <input id="password2"  type="password" placeholder="再次输入密码"  v-model="formInput[3].Data" v-on:input="FormInput(4)" >
                                      <span v-if="formInput[3].YesAnNo">
                                            <span v-if="formInput[3].dataFt">
                                                <Icon type="checkmark-circled"  size="16" color="green"></Icon>
                                            </span>
                                            <span v-else>
                                                <Icon type="close-circled"  size="16" color="red"></Icon>
                                            </span>         
                                    </span> 
                            </div>
                    </div>
                    <div class="clear Check-box">
                          
                          <div class="input_div check2 input_div6" data="0" id="agreement">
                           <Checkbox :checked.sync="checked" :disabled="disabled"><span >已阅读并接受《用户服务协议》</span></Checkbox>         
                          </div>
                    </div>
                          
                    <div class="div_form clear ">
                          <label></label>
                          <div class="input_div">
                                  <input id="btn" class="btn" type="button" value="注册" @click="SonData" />
                          </div>
                    </div>
                
              </form>
              
              <div class="reg_login">
                      <p>已有帐号？</p>
                      <a class="btn2" @click="transformation">登录</a>
              </div>
              <div class="bg"></div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      msg: '凤凰山项目',
      single:true,
      checked: false,
      disabled: false,
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
                {
                  Data:"",
                  YesAnNo:false,
                  dataFt:false
                },
                {
                  Data:"",
                  YesAnNo:false,
                  dataFt:false
                }
      ]
    }
  },
  methods:{
    FormInput:function(type){//对表单的验证，
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
                  if((/^1[34578]\d{9}$/.test(this.formInput[1].Data))){//验证val值
                        //alert("true")
                        this.formInput[1].dataFt=true//对的
                  }else{
                      //alert("false")
                      this.formInput[1].dataFt=false//错的
                  }
                  if (this.formInput[1].Data=="") {
                    this.formInput[1].YesAnNo=false//判断val是否为空，来显示对与错的标签
                  };
          }else if(type==3){//对第一次密码的验证
            this.formInput[2].YesAnNo=true;
                  if((/^\d{6}$/.test(this.formInput[2].Data))){
                    
                        //alert("true")
                        this.formInput[2].dataFt=true//对的
                  }else{
                      //alert("false")
                      this.formInput[2].dataFt=false//错的
                  }
                  if (this.formInput[2].Data=="") {
                    this.formInput[2].YesAnNo=false//判断val是否为空，来显示对与错的标签
                  };
          }else {//与第一次密码的比对
            this.formInput[3].YesAnNo=true;
                  if(this.formInput[2].Data==this.formInput[3].Data){
                        //alert("true")
                        this.formInput[3].dataFt=true//对的
                  }else{
                      //alert("false")
                      this.formInput[3].dataFt=false//错的
                  }
                  if (this.formInput[3].Data=="") {
                    this.formInput[3].YesAnNo=false//判断val是否为空，来显示对与错的标签
                  };
          }
    },
    SonData:function(){
      if (this.formInput[0].dataFt!=true) {
          alert("用户名格式错误！")
      }else if(this.formInput[1].dataFt!=true){
          alert("手机号格式错误！")
      }else if(this.formInput[2].dataFt!=true){
          alert("密码格式错误！")
      }else if(this.formInput[3].dataFt!=true){
          alert("两次密码不一致！")
      }else if(this.checked!=true){
          alert("您没有同意服务协议！")
      }else{
          $.ajax({
                    type : "post",
                    dataType : "json",
                    url : ctxPath+"/api/member/memberRegister",
                    async : false,
                    data : {
                      _method : "post",
                      memberCode:this.formInput[0].Data,// 账户名
                      pwd :this.formInput[2].Data,// 密码 
                      mobile:this.formInput[1].Data
                    },
                    success : function(data) {
                        console.log(data);
                        //$(".p1").html("data.ResCode:"+data.ResCode+"<br>data.ResMsg:"+data.ResMsg);
                        if(data.ResCode=="100"&&data.ResMsg=="注册成功"){
                                  this.inalert("注册成功");
                                  this.$emit('transformation',2)
                        }else if(data.ResCode=="200"&&data.ResMsg=="账号已存在"){
                                  this.inalert("账号已存在");
                        }else{
                                  this.inalert(data.ResMsg);
                        }
                    },
                    error : function(jqXHR, textStatus, errorThrown) {this.inalert("服务器错误，获取数据失败");}
                  });
      };
    },
    transformation:function(){//点击立即注册跳转到注册页面
                    this.$emit('transformation',2)
     },
    inalert:function(data) {
                const title = '信息提醒';
                const content = data;
                this.$Modal.info({
                            title: title,
                            content: content
                        });
                   setTimeout(() => {
                          this.$Modal.remove();
                        }, 2500);   
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tops{width: 100%;height: 96px}


input[type="text"]:focus,input[type="password"]:focus{
  outline:0;
  -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 4px rgba(82,168,236,0.8);
  -moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 4px rgba(82,168,236,0.8);
  box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 4px rgba(82,168,236,0.8)
}

.register_content{width:1200px; margin:0 auto; position:relative;}
.bg{height:34px;background:url(../assets/aaa.png) left 0 repeat-x;}
.step_ul{padding:0 40px; margin-top:32px; height:64px; background:url(../assets/iPhone.png) 0 -314px no-repeat;}
.step1{padding:0 40px; height:64px; background:url(../assets/iPhone.png) center -381px no-repeat;}
.step2{padding:0 40px; height:64px; background:url(../assets/iPhone.png) center -314px no-repeat;}
.step_ul li{float:left; width:540px; height:64px; text-align:center; font:bold 16px/64px '宋体'; color:#fff;}
.step1 .li1{background:#009fe3;}
.step1 .li2{background:#d1d1d1; margin-left:40px;}
.step2 .li1{background:#d1d1d1;}
.step2 .li2{background:#009fe3; margin-left:40px;}

#register_form{padding:60px 40px 88px 40px;}
.div_form{height:48px; margin-bottom:24px;}
.div_form label{float:left; width:146px; font-size:14px; color:#333; text-align:right; height:48px; line-height:48px;}
.Check-box{height:12px; margin-bottom:24px;}
.div_form .input_div{float:left; width:620px;}
#username,#mail,#password1,#password2,#varcode{width:308px; height:45px;line-height:26px;padding:10px 5px; border:1px solid #aeaeae; border-radius:4px; color:#666;}
.input_div span{ margin-left:6px;}
#btn, .btn2, .success_login, .login_btn{width:460px; height:60px; text-align:center; font:bold 16px/60px '宋体'; border:0 none; border-radius:4px; color:#fff; cursor:pointer; background:#009fe3;letter-spacing:6px;}
#btn{width:320px;}
#btn:hover, .btn2:hover, .success_login:hover,.login_btn:hover{background:#0697d5;}
.code_img{width:70px; height:48px;}
.change{color:#666; text-decoration:underline; margin-left:10px;}
.input_div span{padding-left:5px; padding-bottom:6px;}
.input_div5 span{background:0 none;}
.check2{ padding-left:145px; padding-bottom:4px;}
.check1{background:url(../assets/check1.png) no-repeat; padding-left:22px; padding-bottom:4px;}

.reg_login{width:270px; height:240px; border:2px solid #e1e1e1; border-top:2px solid #0089e1; position:absolute; top:190px; right:40px; background:url(../assets/smile.png) center 35px no-repeat;}
.btn2{position:absolute; left:50px; top:160px; width:170px; height:38px; line-height:38px;}
.reg_login p{text-align:center; margin-top:130px; line-height:20px;}

</style>
