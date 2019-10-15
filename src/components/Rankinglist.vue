<template>
<div class="left">
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">榜单分类</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">男频点击榜</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">女频点击榜</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">完结榜</span>
        </el-menu-item>
          <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">新书人气榜</span>
        </el-menu-item>
          <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">点击榜</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</div>

</template>
<script>
export default {};
</script>

<style>

</style>