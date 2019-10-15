<template>
  <div class="zong">
    <el-row class="left">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#589db1"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item text-color="#f36f20">
            <span slot="title" text-color="#f36f20">榜单分类</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-s-custom"></i>
            <span slot="title">男频点击榜</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-s-custom"></i>
            <span slot="title">女频点击榜</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">完结榜</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">新书人气榜</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-collection"></i>
            <span slot="title">点击榜</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="rigth">
      <ul class="ranklist-ul">
        <li>
          <a href>
            <img src="../assets/img/changkexinimg/1130867089610.jpg" alt class="img" />
          </a>
          <a href>
            <h3>福地甜园：拐个王爷好种田</h3>
          </a>
          <p>
            <a href>长白山上的雪</a>
            <a href>古典架空</a>
          </p>
          <p>
            一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
            我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
            娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
          </p>
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.zong {
  width: 1120px;
  margin: 0 auto;
}
.left {
  float: left;
  width: 183px;
  line-height: 46px;
  font-size: 14px;
}
.el-col-12 {
  width: 100%;
}
.bdfl {
  background-image: url(../assets/img/changkexinimg/navs_head_bg.png);
}

/* 右边 */
.rigth {
  width: 80%;
  float: right;
}
/* 书图片 */
.img {
  width: 132px;
  height: 164px;
  float: left;
  margin-right: 22px;
}
.ranklist-ul li {
  margin-bottom: 30px;
  position: relative;
}
.ranklist-ul p {
    font-size: 12px;
}
.ranklist-ul h3 {
    font-size: 14px;
}
</style>