<template>
  <el-dialog title="欢迎加入阿里文学大家庭" :visible.sync="centerDialogVisible" width="30%" center>
    <input type="text"  placeholder="请输入手机号" v-model="username" clearable></input>
    <input type="password"   placeholder="请输入密码" v-model="password" ></input>
     <input type="password"   placeholder="请再次输入密码" v-model="password" ></input>
    <p class="protocol ">
      <input type="checkbox" id="ckb">
      登录账号即代表您已阅读过、了解并接受
      <a href="">《阿里文学用户服务协议》</a>
      <a href="">《隐私保护政策》</a>
    </p>
      <div class="submit">登录</div>
      <p class="operates">
        <span class="js-toReg">注册账号</span>
        <span class="js-forget" >忘记密码</span>
      </p>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      centerDialogVisible: true
    };
  },
  methods: {}
};
</script>

<style>


.style {
    margin-top: 0vh;
}
.el-dialog__title {
  margin: 20px 0 38px;
  font-size: 20px;
  line-height: 20px;
  color: #1d1e20;
  font-weight: 20;
}
input {
    border: 0;
    padding-left: 20px;
    border-bottom: 1px solid #ededed;
    line-height: 36px;
    height: 36px;
    font-size: 16px;
    color: #1d1e20;
    display: block;
    width: 100%;
    margin-bottom: 26px;
}
.protocol{
 line-height: 18px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    position: relative;
    font-size: 12px;
    margin-bottom: 20px;
    color: #999;
}
a{
    color: #999;
      text-decoration: none;
}
.submit{
    background: #f36f20;
    text-align: center;
    color: #fff;
    height: 40px;
    border-radius: 6px;
    line-height: 40px;
    cursor: pointer;

}
.operates{
text-align: center;
    margin-top: 15px;
}
.js-toReg,.js-forget{
display: inline-block;
    width: 72px;
    height: 18px;
    color: #f36f20;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
}
  span:first-child {
    border-right: 2px solid #f1f1f3;
}
.el-dialog{
      padding: 50px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 300px;
}
#ckb{
    width: 12px;
    height: 12px;
    font-size: 12px;
    border: 2px solid #ededed;
    position: absolute;
    left: 0;
    top: 1px;
} 

   
</style>