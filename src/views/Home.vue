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
              <li>
                <a href>登录</a>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <a href>注册</a>
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
              <!-- <ul>
                <li class="class_active">
                  <a href>首页</a>
                </li>
                <li>
                  <a href>男频</a>
                </li>
                <li>
                  <a href>女频</a>
                </li>
                <li>
                  <a href>轻小说</a>
                </li>
                <li>
                  <a href>书库</a>
                </li>
                <li>
                  <a href>排行榜</a>
                </li>
              </ul>-->

              <el-menu
                :default-active="activeIndex"
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
              <el-input v-model="input" placeholder="请根据书名或者作者" width="20px">
                <el-button icon="el-icon-search" circle slot="append"></el-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/index",
      input:''
    };
  },
  methods: {
    handleSelect() {}
  }
};
</script>

<style scoped>
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