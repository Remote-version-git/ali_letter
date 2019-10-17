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
    <div class="books_classify">
      <div class="roomcentre">
        <!-- card卡片组件 -->
        <el-card class="box-card">
          <div class="satck_direction satck_direction1 clearfix">
            <h3>衍生方向</h3>
            <ul>
              <li>
                <a href>全部</a>
              </li>
              <li>
                <a href class="HaoJiHua">HAO计划</a>
              </li>
              <li>
                <a href>电视剧</a>
              </li>
              <li>
                <a href>网剧</a>
              </li>
              <li>
                <a href>游戏</a>
              </li>
              <li>
                <a href>电影</a>
              </li>
              <li>
                <a href>漫画</a>
              </li>
              <li>
                <a href>出版</a>
              </li>
              <li>
                <a href>其他</a>
              </li>
            </ul>
          </div>
          <div class="satck_direction clearfix">
            <h3>作品分类</h3>
            <ul>
              <li>
                <a href>全部</a>
              </li>
              <li>
                <a href>好计划</a>
              </li>
              <li>
                <a href>电视剧</a>
              </li>
              <li>
                <a href>网剧</a>
              </li>
              <li>
                <a href>游戏</a>
              </li>
              <li>
                <a href>电影</a>
              </li>
              <li>
                <a href>漫画</a>
              </li>
              <li>
                <a href>出版</a>
              </li>
              <li>
                <a href>其他</a>
              </li>
            </ul>
          </div>
          <div class="satck_direction clearfix">
            <h3>版权状态</h3>
            <ul>
              <li>
                <a href>全部</a>
              </li>
              <li>
                <a href>好计划</a>
              </li>
              <li>
                <a href>电视剧</a>
              </li>
              <li>
                <a href>网剧</a>
              </li>
              <li>
                <a href>游戏</a>
              </li>
              <li>
                <a href>电影</a>
              </li>
              <li>
                <a href>漫画</a>
              </li>
              <li>
                <a href>出版</a>
              </li>
              <li>
                <a href>其他</a>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 书籍展示部分开始 -->
    <div class="books_detail">
      <div class="roomcentre">
        <!-- tabs标签页组件 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="按时间排序" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="按热度排序" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less" scoped>
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
.books_classify {
  background-color: #f7f8fa;
  padding: 30px 0 1px 0;
}

.el-card {
  height: 145px;
  border-top: 1px solid #f89a3b;
  margin-bottom: 30px;
}

// 分类部分
.satck_direction {
  display: inline-block;
  margin-bottom: 15px;
}

.satck_direction > h3,
.satck_direction > ul,
.satck_direction > ul > li {
  float: left;
}

.satck_direction > h3 {
  color: #8e96aa;
  width: 90px;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  font-weight: normal;
}

.satck_direction > ul > li {
  height: 24px;
  line-height: 24px;
}

.satck_direction > ul > li:nth-child(1) {
  color: #ffffff;
  background-color: #ff910d;
  border-radius: 20px;
}

.satck_direction > ul > li a {
  font-size: 14px;
  padding: 0 10px;
  font-family: "Microsoft YaHei";
}

.HaoJiHua {
  font-weight: 900;
  color: red;
}

// 书籍展示部分
.books_detail {
  height: 600px;
  //   background-color: pink;
}

.el-tabs__item {
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  font-family: "Microsoft YaHei";
}

.el-tabs {
  margin-top: 20px;
  margin-bottom: 40px;
}


</style>