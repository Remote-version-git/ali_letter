<template>
  <div class="index">
    <!-- 布局 -->
    <el-container>
      <el-header style="height:100%">
        <!-- 顶部 -->
        <div class="common top">
          <a href="/" class="top-left">
            <img src="../assets/img/logo.png" alt />
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
          <div class="nav clear">
            <div class="nav_classification">
              <ul>
                <li class="active">
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
              </ul>
            </div>
            <div class="nav_search">
              <el-input v-model="input" placeholder="请根据书名或者作者" width="20px">
                <el-button icon="el-icon-search" circle slot="append"></el-button>
              </el-input>
            </div>
          </div>
        </div>
      </el-header>

      <el-main style="height:100%">
        <router-view></router-view>
      </el-main>
      <el-footer style="height:100%">

      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/* 公共宽度 */
.common {
  width: 1120px;
  margin: 0 auto;
  /* background-color: antiquewhite; */
}

/* 布局css */


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
</style>