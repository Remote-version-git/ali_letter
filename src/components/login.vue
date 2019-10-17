<template>
  <el-dialog title="账号登录" :visible.sync="centerDialogVisible" width="30%" center>
    <el-form class="login-form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
      <!-- 账号/用户名 -->
      <el-form-item prop="phone">
        <el-input type="text" v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <p class="protocol">
        <input type="checkbox" v-model="check" />
        登录账号即代表您已阅读过、了解并接受
        <a href>《阿里文学用户服务协议》</a>
        <a href>《隐私保护政策》</a>
      </p>
      <div
        class="submit"
        @click="login()"
        :style="{background: check == '' ? '#cccccc' : '#ff6500'}"
      >登录</div>
      <p class="operates">
        <span class="js-toReg">注册账号</span>
        <span class="js-forget">忘记密码</span>
      </p>
    </el-form>
  </el-dialog>
</template>

<script>
import qs from "qs";
export default {
  data() {
    // 验证手机格式
    var checkPhone = (rule, value, callback) => {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error("请输入正确的手机号"));
      }
    };

    return {
      // 用户名和密码对象
      loginForm: {
        phone: "",
        password: ""
      },
      check: false,
      // 显示dialog
      centerDialogVisible: true,
      // 表单验证规则
      loginFormRules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        password: [
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    getBtn() {},
    // 登录功能
    login() {
      let form = qs.stringify(this.loginForm);
      if (this.check) {
        this.$refs.loginFormRef.validate(async volid => {
          if (!volid) return;
          const { data: res } = await this.$http.post("/login", form);
          console.log(res);
          if (res.state !== 200) {
            return this.$message.error(res.error);
          }
          return this.$message.success("登陆成功！");
        });
      }
    }
  }
};
</script>

<style>
element.style {
  margin-top: 0px !important;
}
.el-dialog__title {
  margin: 20px 0 38px;
  font-size: 20px;
  line-height: 20px;
  color: #1d1e20;
  font-weight: 20;
}
.el-input__inner {
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
.protocol {
  line-height: 18px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  position: relative;
  font-size: 12px;
  margin-bottom: 20px;
  color: #999;
}
a {
  color: #999;
  text-decoration: none;
}
.submit {
  text-align: center;
  color: #fff;
  height: 40px;
  width: 100%;
  border-radius: 6px;
  line-height: 40px;
  cursor: pointer;
}
.operates {
  text-align: center;
  margin-top: 15px;
}
.js-toReg,
.js-forget {
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
.el-dialog {
  padding: 50px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 300px;
}
#ckb {
  width: 12px;
  height: 12px;
  font-size: 12px;
  border: 2px solid #ededed;
  position: absolute;
  left: 0;
  top: 1px;
}
</style>