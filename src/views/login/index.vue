<template>
  <div class="container-login">
    <el-card class="my-card">
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单验证
      1.在el-form 添加rules
       -->
      <el-form :model="loginForm" :rules="loginRules" status-icon ref="loginForm">
        <el-form-item prop="mobile" >
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:238px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已经阅读和同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-button type="primary" style="width:100%" @click="login()">登 录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import auth from '@/utils/auth'
export default {
  name: "app-login",
  data() {
    // 自定义校验
  
    const checkMobile=(rule,value,callback)=>{
      //value 需校验的内容
      if(!/^1[3-9]\d{9}$/.test(value)){
        //校验失败
        return callback (new Error('手机号格式不对'))
      }
     //校验成功
      callback()
    }
    return {
      loginForm: {
        mobile: "",
        code: ""
      },
      loginRules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {validator:checkMobile,trigger:'blur'}
          ],
           code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          {len:6, message:'请输入六位验证码',trigger:'blur'}
          ]
      }
    };
  },
  methods:{
    login(){
      //对整体表单进行校验
      this.$refs.loginForm.validate((valid)=>{
        //valid值为true则校验成功
        if(valid){
          this.$http.post(
            'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            this.loginForm
          ).then(res => {
            // 登录成功
            // res 是响应对象  res.data 是响应主体 将来会使用
            // 直接跳转首页
             auth.setUser(res.data.data) // 这才是用户信息{token,id,name,photo}
            this.$router.push('/')
          }).catch(e => {
            // 登录失败
            // e 错误对象
            // 提示：手机号或验证码错误
            this.$message.error('手机号或验证码错误')
          })
        }
      })
    }
  }
};
</script>

<style scoped lang='less'>
.container-login {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../../assets/login_bg.jpg) no-repeat;
  background-size: cover;
  .my-card {
    width: 400px;
    height: 350px;
    transform: translate(-50%, -60%);
    position: absolute;
    left: 50%;
    top: 50%;
    img {
      width: 200px;
      display: block;
      margin: 0 zuto 20px;
    }
  }
}
</style>