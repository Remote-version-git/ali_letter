<template>
  <el-dialog title="注册账号" :visible.sync="centerDialogVisible" width="30%" center top="0">
    <el-form :model="registerForm" :rules="registerFormRules" ref="registerFormRef">
      <!-- 账号/用户名 -->
      <el-form-item prop="phone">
        <el-input type="text" v-model="registerForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="pass">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="registerForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请再次输入密码"
          v-model="registerForm.password"
          autocomplete="off"
        ></el-input>
        <SliderVerificationCode v-model="verify" @change="handleChange" />
      </el-form-item>
      

      <!-- 协议 -->
      <p class="inner">
        <input type="checkbox" v-model="check" class="select" />
        登录账号即代表您已阅读过、了解并接受
        <a href>《阿里文学用户服务协议》</a>
        <a href>《隐私保护政策》</a>
      </p>
      <div
        class="submit"
        @click="register()"
        :style="{background: check == '' ? '#cccccc' : '#ff6500'}"
      >注册</div>
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
    // 确认密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.pass !== "") {
          this.$refs.registerFormRef.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 用户名和密码对象
      registerForm: {
        phone: "",
        pass: "",
        password: ""
      },
      verify: "",
      check: false,
      // 显示dialog
      centerDialogVisible: true,
      // 表单验证规则
      registerFormRules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },

  // 方法区
  methods: {
    // 手机验证功能


  }
};
</script>

<style >
.el-dialog__title {
  margin: 20px 0 38px;
  font-size: 20px;
  line-height: 20px;
  color: #1d1e20;
  font-weight: bold;
}

.el-input__inner {
  border: 0;
  border-bottom: 1px solid #ededed;
  line-height: 36px;
  height: 36px;
  font-size: 16px;
  color: #1d1e20;
  display: block;
  width: 100%;
  margin-bottom: 20px;
}
.select {
  zoom: 150%;
  font-size: 12px;
  border: 2px solid #ededed;
  position: absolute;
  left: 0;
  top: 1px;
}
.inner {
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