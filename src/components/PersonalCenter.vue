<template>
  <div class="hello">
    <div id="tops"></div>
    <div class="topbt">
      <div>个人中心</div>
    </div>
    <div class="Content">
      <div class="Content-L">
          <i-col span="8">
              <Menu :theme="theme2" @on-select="Key">
                  <Submenu key="1">
                      <template slot="title">
                          <Icon type="ios-paper"></Icon>
                          订单管理
                      </template>
                      <Menu-item key="1-1">我的订单</Menu-item>
                      
                  </Submenu>
                  <Submenu key="2">
                      <template slot="title">
                          <Icon type="social-yen"></Icon>
                          我的资产
                      </template>
                      <Menu-item key="2-1" >我的余额</Menu-item>
                      
                  </Submenu>
                  <Submenu key="3">
                      <template slot="title">
                          <Icon type="navicon"></Icon>
                          账户管理
                      </template>
                     
                          <Menu-item key="3-1">个人信息</Menu-item>
                          <Menu-item key="3-2">修改密码</Menu-item>
                  </Submenu>
              </Menu>
          </i-col>
      </div>
      <div class="Content-R">
          <div class="Content-R-bt">
                  <p class="Breadcrumb">个人中心 / {{position1}} / {{position2}}</p>
          </div>
        <span v-if="Box[0].Box01">
                <i-table border :content="self" :columns="columns7" :data="data6" :show-header="showHeader"></i-table>
        </span>
        <span v-if="Box[1].Box02">
                <div class="property">
                    <p class="p1"><span>可用余额：</span><span>0.00</span></p>
                    <p class="p2"><i-button type="success">充值</i-button></p>
                </div>
                <i-table border :columns="columns5" :data="data5"></i-table>
        </span>
        <span v-if="Box[2].Box03">
                <div class="ModifyPassword">
                      <p>用户帐号：<strong>{{name}}</strong></p>
                      <p>原始密码：<i-input :value.sync="value" placeholder="请输入..." style="width: 300px"></i-input></p>
                      <p>新设密码：<i-input :value.sync="value" placeholder="请输入..." style="width: 300px"></i-input></p>
                      <p>确认密码：<i-input :value.sync="value" placeholder="请输入..." style="width: 300px"></i-input></p>
                      <p><i-button type="success">提交</i-button></p>
                </div>
        </span>
      </div>
    </div>
              
              
              
        
  </div>  
</template>

<script>
export default {
  data () {
    return {
                position1:"订单管理",
                position2:"我的订单",
                self: this,
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        align: 'center',
                        render (row, column, index) {
                            return `<Icon type="card"></Icon> <strong>${row.name}</strong>`;
                        },
                        renderHeader(column,index){
                            return "订单名称。。"
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        align: 'center',
                        renderHeader(column,index){
                            return "支付状态。。"
                        }
                    },
                    {
                        title: '地址',
                        key: 'address',
                        align: 'center',
                        renderHeader(column,index){
                            return "是否出票。。"
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        /*render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        },*/
                        renderHeader(column,index){
                            return "交易状态。。"
                        }
                    },
                    {
                        title: '退订',
                        key: 'Unsubscribe',
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">退订</i-button> `;
                        },
                        renderHeader(column,index){
                            return "退订退订"
                        }
                    }
                ],
                data6: [
                    {
                        name: '华夏票联测试票',
                        age: "已支付",
                        address: '是',
                        action:"已完成",
                        //Unsubscribe:"退订"
                    },
                    {
                        name: '华夏票联测试票',
                        age: "未支付",
                        address: '否',
                        action:"未完成"
                    },
                    {
                        name: '华夏票联测试票',
                        age: "已支付",
                        address: '是',
                        action:"未完成"
                    },
                    {
                        name: '华夏票联测试票',
                        age: "未支付",
                        address: '否',
                        action:"未完成"
                    }
                ],
                columns5: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '收入',
                        key: 'name',
                        renderHeader(column,index){
                            return "收入。。"
                        }
                    },
                    {
                        title: '支出',
                        key: 'age',
                        renderHeader(column,index){
                            return "支出。。"
                        }
                    }
                ],
                data5: [
                    {
                        name: '0.01',
                        age: '0.01',
                        date: '2016-10-03'
                    },
                    {
                        name: '0.01',
                        age: '0.01',
                        date: '2016-10-01'
                    },
                    {
                        name: '0.01',
                        age:'0.01',
                        date: '2016-10-02'
                    },
                    {
                        name: '0.01',
                        age: '0.01',
                        date: '2016-10-04'
                    }
                ],
                Box:[
                    {
                      Box01:true
                    },
                    {
                      Box02:false
                    },
                    {
                      Box03:false
                    },
                ]
                
     
    }
  },
  props: ['name'],//用户的状态是否登入
  created:function(){
              
  },
  methods:{             
              Key:function(val){
                      if(val=="1-1"){
                                this.Box[0].Box01=true;
                                this.Box[1].Box02=false;
                                this.Box[2].Box03=false;
                                this.position1="订单管理"
                                this.position2="我的订单"
                      }else if(val=="2-1"){
                                this.Box[0].Box01=false;
                                this.Box[1].Box02=true;
                                this.Box[2].Box03=false;
                                this.position1="我的资产"
                                this.position2="我的余额"
                      }else if(val=="3-2"){
                                this.Box[0].Box01=false;
                                this.Box[1].Box02=false;
                                this.Box[2].Box03=true;
                                this.position1="账户管理"
                                this.position2="修改密码"
                      }
              }
  }
}
</script>

<style scoped>
#tops{width: 100%;height: 96px}
.topbt{width: 100%;height: 48px;background: #009FE3}
.topbt div{width: 1200px;line-height:48px;margin: 0 auto;font-size: 24px;color: #fff }
.Content{width: 1200px;margin: 50px auto;overflow: hidden;}
.Content .Content-L{float: left;width: 21%}
.Content .Content-R{float: right;width: 78%;margin-bottom: 30px}
.Content-R-bt{width: 100%;height: 22px;margin: 15px 0;}
.property{width: 100%;line-height: 48px;height: 48px}
.property .p1{float: left;font-size: 14px;}
.property .p2{float: right;}
.ModifyPassword{width: 100%;padding-left: 50px;}
.ModifyPassword p{height: 48px;line-height: 48px}
.Breadcrumb{font-size: 14px}
</style>
