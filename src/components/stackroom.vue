<template>
  <div class="stackroom">
    <div class="carouselBgc">
      <div class="roomcentre">
        <!-- 走马灯组件 -->
        <el-carousel :interval="4000" type="card">
          <el-carousel-item v-for="item in 6" :key="item">
            <img src="../assets/img/zy_book2.png" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="roomcentre">
      <!-- card卡片组件 -->
      <el-card class="box-card">
        <dt>衍生方向</dt>
        <dd>全部</dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
        <dd></dd>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// .stackroom {
// //   height: 500px;
//   //   background-color: #000;
// }

.roomcentre {
  width: 1120px;
  margin: 0 auto;
}

.carouselBgc {
  width: 100%;
  height: 490px;
  background-image: url(../assets/img/carousel.png);
}

.el-carousel {
  padding-top: 50px;
}

.el-carousel__item {
  width: 210px;
  height: 280px;
  margin-left: 175px;
}

.el-carousel__item > img {
  width: 100%;
  height: 100%;
}

// card卡片组件
.el-card {
  margin-top: 30px;
  border-top: 1px solid #f89a3b;
}
</style>