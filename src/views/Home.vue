<template>
  <div class="index">
    <!-- 布局 -->
    <el-container>
      <el-header style="height:100%">
        <!-- 顶部 -->
        <div class="common top">
          <a href="/" class="top-left">
            <img src="../assets/images/logo.png" alt />
          </a>

          <div class="top_right clear">
            <ul>
              <li>
                <a href>下载客户端</a>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <a href>书架</a>
              </li>
              <li>
                <span>|</span>
              </li>
              <li @click="centerDialogVisible = true">
                <a href="javascript:;">登录</a>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <a @click="centeDialogVisible=true">注册</a>
              </li>
            </ul>
          </div>

          <!-- 导航栏 -->
        </div>
      </el-header>

      <!-- 内容 组件 -->
      <el-main style="height:100%">
        <div class="common">
          <!-- 导航栏 -->
          <div class="nav clear">
            <div class="nav_classification">
              <el-menu
                :default-active="this.$route.path"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                :router="true"
              >
                <el-menu-item index="/index">首页</el-menu-item>
                <el-menu-item index="/male">男频</el-menu-item>
                <el-menu-item index="/female">女频</el-menu-item>
                <el-menu-item index="/lightnovel">轻小说</el-menu-item>
                <el-menu-item index="/stackroom">书库</el-menu-item>
                <el-menu-item index="/rankinglist">排行榜</el-menu-item>
                <el-menu-item index="/honor">后台管理系统</el-menu-item>
              </el-menu>
            </div>
            <div class="nav_search">
              <el-input v-model="keyword" placeholder="请根据书名或者作者" width="20px">
                <el-button icon="el-icon-search" circle slot="append" @click="getNovel"></el-button>
              </el-input>
            </div>
          </div>
        </div>

        <router-view></router-view>
      </el-main>

      <!-- 底部 -->
      <el-footer style="height:180px">
        <div class="common bottom">
          <p>
            <span class="left">
              <a href>联系我们</a>
              <a href>关于我们</a>
              <a href>投稿声明</a>
              <a href>常见问题</a>
              <a href>网站微博</a>
            </span>
            <span class="right">广州阿里巴巴文学信息技术有限公司版权所有</span>
          </p>
          <p>
            <span class="left">阿里文学 书旗网</span>
            <span class="right">粤ICP备13078413号-6 增值电信业务许可证 粤B2-20130742 网络文化经营许可证 粤网文[2017]3018-499号</span>
          </p>
          <p>
            <span class="left">请使用者仔细阅读阿里文学《阿里文学用户服务协议》、《隐私保护政策》说明</span>
            <span class="right">地址：广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元 电话：0571-26883636</span>
          </p>
          <p>
            <span class="left">为保证更好的浏览效果，请使用Chrome或其他主流浏览器访问</span>
            <span class="right">本站部分作品的封面设计图系由作者自行上传，本站未进行任何人工编辑整理。若有侵犯您的知识产权，请及时通知</span>
          </p>
        </div>
      </el-footer>
    </el-container>

    <el-dialog title="账号登录" :visible.sync="centerDialogVisible" width="30%" center top="0">
      <el-form class="login-form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!-- 账号/用户名 -->
        <el-form-item prop="phone">
          <el-input type="text" v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <p class="inner">
          <input type="checkbox" v-model="check" class="select" />
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

    <!-- 注册 -->
    <el-dialog title="账号登录" :visible.sync="centeDialogVisible" width="30%" center top="0">
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
        >登录</div>
        <p class="operates">
          <span class="js-toReg">注册账号</span>
          <span class="js-forget">忘记密码</span>
        </p>
      </el-form>
    </el-dialog>
  </div>
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
      input: "",
      activeIndex: "/index",
      keyword: "",
      searchList: [],
      // 用户名和密码对象
      loginForm: {
        phone: "",
        password: ""
      },
      check: false,
      // 显示dialog
      centerDialogVisible: false,
      // 表单验证规则
      loginFormRules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        password: [
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      },
      // 用户名和密码对象
      registerForm: {
        phone: "",
        pass: "",
        password: ""
      },
      check: false,
      // 显示dialog
      centeDialogVisible: false,
      // 表单验证规则
      registerFormRules: {
        phone: [{ validator: checkPhone, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSelect() {},
    async getNovel() {
      const { data: res } = await this.$http.get(
        `novels?keyword=${this.keyword}`
      );
      this.searchList = res.data;
      this.$router.push("/search");
    },
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
          this.centerDialogVisible = false;
        });
      }
    },
    // 登录功能
    register() {
      if (this.check) {
        let form = qs.stringify(this.registerForm);
        this.$refs.registerFormRef.validate(async volid => {
          if (!volid) return;
          const { data: res } = await this.$http.post("/users", form);
          console.log(res);
          if (res.state !== 200) {
            return this.$message.error(res.error);
          }
          return this.$message.success("注册成功！");
          this.centeDialogVisible = false;
        });
      }
    }
  }
};
</script>

<style scoped>
element.style {
  margin-top: 0px !important;
}
.el-dialog__title {
  margin: 20px 0 38px;
  font-size: 20px;
  line-height: 20px;
  color: #1d1e20;
  font-weight: bold;
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
  border-radius: 0;
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

/* 公共宽度 */
.common {
  width: 1120px;
  margin: 0 auto;
  /* background-color: antiquewhite; */
}

/* 导航选中样式 */
.class_active {
  width: 110px;
  height: 60px;
  border-bottom: 3px solid darkblue;
}

/* 清除浮动 */
.clear {
  clear: both;
}

.el-main {
  padding: 0;
}

/* 顶部 */
.top-left {
  display: inline-block;
  width: 18%;
  height: 100%;
  margin-top: 10px;
}

.top_right,
.top_right ul li {
  display: inline-block;
}

.top_right {
  float: right;
  height: 60px;
  line-height: 60px;
}

.top_right ul {
  margin: 0;
}

.top_right ul li {
  margin-left: 10px;
}

.top_right ul li > a {
  color: #333;
  font-size: 13px;
  font-weight: bold;
}
/* 顶部结束 */

/* 导航 */
.nav {
  margin-bottom: 12px;
  border-bottom: 2px solid #ececec;
  height: 60px;
}

.nav_classification {
  display: inline-block;
}

.nav ul li {
  display: inline-block;
  width: 110px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}

.nav ul li a {
  display: inline-block;
  font-size: 18px;
}

.nav ul li a:hover {
  color: #ff6c17;
}

.nav_search {
  display: inline-block;
  width: 300px;
  float: right;
  line-height: 60px;
}

.el-input__inner {
  border-radius: 50px;
  height: 28px;
}

.el-input-group__append {
  border-radius: 0px 50px 50px 0;
  background-color: transparent;
}

.el-tabs {
  width: 100%;
}
/* 导航结束 */

/* 底部 */
.el-footer {
  width: 100%;
  background-color: #333;
}

.bottom > p {
  width: 100%;
  height: 45px;
  line-height: 45px;
}

.bottom span {
  display: inline-block;
  color: white;
  font-size: 13px;
  font-weight: 100;
}

.bottom .left {
  float: left;
}

.bottom .right {
  float: right;
}

.bottom > p:first-child > span > a {
  position: relative;
  display: inline-block;
  width: 70px;
  color: white;
}

.bottom > p:first-child > span > a::after {
  content: "";
  position: absolute;
  right: 11px;
  top: 16px;
  height: 14px;
  width: 1px;
  background-color: #fff;
}

.bottom > p:first-child > span > a:last-child:after {
  display: none;
}

.bottom > p:first-child > span > a:hover {
  color: #ff6c17;
}

.bottom > p:nth-child(2) > span:last-child {
  background-image: url(../assets/images/bottom_icon.png);
  background-size: 34px 34px;
  background-repeat: no-repeat;
  padding-left: 40px;
  background-position-y: 5px;
  width: 613px;
}

.bottom > p:last-child > span:last-child {
  color: #6c6c6c;
}
</style>