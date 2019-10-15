<template>
  <div class="index">
    <!-- 布局 -->
    <el-container>
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
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>