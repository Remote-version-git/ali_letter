<template>
  <div class="honor">
    <el-container>
      <el-header>
        <div class="top_left">
          <img src="../assets/images/8ed6ec0769861b3e999ca082c9babec2.png" alt />
        </div>

        <el-button type="primary">退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="/user">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="novel">
              <i class="el-icon-menu"></i>
              <span slot="title">小说管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/user"
    };
  }
};
</script>

<style lang="less">
.honor {
  height: 100%;
}

.el-container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

.top_left {
  display: inline-block;
  float: left;
  width: 200px;
  height: 60px;
  background-color: #eb624b;
  margin-left: -20px;
}

.top_left img {
  width: 150px;
  height: 48px;
  margin-top: 5px;
}

.el-button {
  float: right;
  margin-top: 10px;
}
</style>