<template>
  <div class="index">
    <!-- 布局 -->
    <el-container>

      <el-header>
        <!-- 顶部 -->
        <div class="common top">
          <a href="/" class="top-left">
            <img src="../assets/img/logo.png" alt />
          </a>

          <div class="top_right">
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
        </div>

        <!-- 导航栏 -->
        <div class="nav">
          <div class="nav_classification">
            <ul>
              <li><a href="">首页</a></li>
              <li><a href="">男频</a></li>
              <li><a href="">女频</a></li>
              <li><a href="">轻小说</a></li>
              <li><a href="">书库</a></li>
              <li><a href="">排行榜</a></li>
            </ul>
          </div>
        </div>
      </el-header>
      <!-- <el-main class="common">Main</el-main> -->
      <!-- <el-footer class="common">Footer</el-footer> -->

      <el-header>Header</el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>

    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 公共宽度 */
.common {
  width: 1200px;
  margin: 0 auto;
  /* background-color: antiquewhite; */
}

/* 布局css */
.el-header,
.el-footer {
  line-height: 60px;
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

</style>