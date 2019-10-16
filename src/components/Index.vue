<template>
  <div class="index">
    <!-- 欢迎图片 -->
    <div class="welcome">
      <a href>
        <img src="../assets/img/welcome.jpg" alt />
      </a>
    </div>

    <!-- 主编推荐 -->
    <div class="common">
      <div class="editor_recommend">
        <div class="editor_recommend_name">
          <span>主编推荐</span>
        </div>
      </div>

      <div class="editor_recommend_connect">
        <div class="editor_recommend_connect_left">
          <div class="connect_left_el-carousel">
            <el-carousel :interval="4000" type="card">
              <el-carousel-item v-for="item in 3" :key="item">
                <img src="../assets/img/201712261741391310.jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </div>

          <div class="connect_left_text">
            <p>
              <a href="/">逐魂录</a>
            </p>
            <p>
              <a href="/">李寻希</a>
            </p>
            <p>十年前，他亲手结束了父亲的生命。为了继承父亲生前的使命，他加入了那个父亲曾经引以为傲的组织。然而，他的目的并</p>
            <ul>
              <li>
                <a href>热血</a>
              </li>
              <li>
                <a href>爽文</a>
              </li>
              <li>
                <a href>虐文</a>
              </li>
            </ul>
            <div class="connect_left_button">
              <el-button type="danger">立即阅读</el-button>
            </div>
          </div>
        </div>

        <div class="editor_recommend_connect_middle">
          <div class="connect_middle_top">
            <ul>
              <li>
                <a href>
                  <span>[现代言情]</span>十家锅灶九不同
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>夜留余白
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>噬天至尊
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>虚灵人
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>末日堡垒
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>明谋善赖
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>农女巧儿的致富日常
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>最强狂暴兵王
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>我有五个女朋友
                </a>
              </li>
              <li>
                <a href>
                  <span>[现代言情]</span>龙神归来
                </a>
              </li>
            </ul>
          </div>

          <div class="connect_middle_bottom">
            <div class="connect_middle_bottom_book">
              <img src="../assets/img/1132437923371.jpg" alt />
              <a href>大神求翻牌</a>
              <a href>一见如故</a>
            </div>

            <div class="connect_middle_bottom_book">
              <img src="../assets/img/1132437923371.jpg" alt />
              <a href>大神求翻牌</a>
              <a href>一见如故</a>
            </div>

            <div class="connect_middle_bottom_book">
              <img src="../assets/img/1132437923371.jpg" alt />
              <a href>大神求翻牌</a>
              <a href>一见如故</a>
            </div>
          </div>
        </div>

        <div class="editor_recommend_connect_right">
          <p>主编强推</p>

          <ul class="connect_right_book">
            <li>
              <a href="/">
                <p>
                  <i class="connect_right_book_chen">1</i>
                  圣祖
                </p>
                <div class="connect_right_book_info">
                  <img src="../assets/img/201903121846461623.jpg" alt />
                  <a href>傲天无痕</a>
                  <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                </div>
              </a>
            </li>

            <li>
              <a href="/">
                <p>
                  <i class="connect_right_book_hui">1</i>
                  圣祖
                </p>
                <div class="connect_right_book_info">
                  <img src="../assets/img/201903121846461623.jpg" alt />
                  <a href>傲天无痕</a>
                  <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                </div>
              </a>
            </li>
          </ul>

          <!-- <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="transparent"
            text-color="#333">
            <el-submenu index="1" class="connect_right_book">
              <template slot="title">
                <p>
                  <i class="connect_right_book_chen">1</i>
                  圣祖
                </p>
              </template>
              <el-menu-item-group class="connect_right_book_info">
                <img src="../assets/img/201903121846461623.jpg" alt />
                <a href>傲天无痕</a>
                <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
              </el-menu-item-group>
            </el-submenu>
          </el-menu> -->
        </div>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.el-carousel__item h3 {
  color: #475669 ;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// 公共宽度
.common {
  width: 1120px;
  margin: 0 auto;
}

// 欢迎图片
.welcome > a > img {
  width: 100%;
}
// 欢迎图片结束

// 主编推荐
.editor_recommend {
  margin-top: 20px;
}

.editor_recommend_name {
  position: relative;
  text-align: center;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.el-carousel-item img {
  width: 132px;
  height: 164px;
}

.editor_recommend_name::before {
  position: absolute;
  top: 10px;
  content: "";
  height: 5px;
  width: 100%;
  background-color: #f8f3ea;
  display: block;
}

.editor_recommend_name > span {
  position: absolute;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  background-image: url(../assets/img/title_icon_1.png);
  background-repeat: no-repeat;
  padding: 0 16px 0 44px;
  background-color: white;
  background-position-x: 15px;
}

.editor_recommend_connect {
  width: 100%;
    height: 470px;
  // background-color: antiquewhite;
  margin-top: 20px;
}

.el-carousel {
  width: 232px;
  margin-left: 17px;
  margin-top: 20px;
}

.editor_recommend_connect_left {
  display: inline-block;
  float: left;
  width: 268px;
  height: 469px;
  background-color: #f8f3ea;
  background-image: url(/img/mainrec_left_bg.6014d9a3.png);
  background-repeat: no-repeat;
  background-position-y: 284px;
}

.el-carousel__container {
  height: 165px;
}

.connect_left_text {
  width: 232px;
  margin: 0 auto;
}

.connect_left_text p {
  height: 31px;
  text-align: justify;
  overflow: hidden;
}

.connect_left_text p > a,
.connect_left_text p {
  font-size: 14px;
}

.connect_left_text > p:nth-child(3) {
  height: 66px;
  line-height: 24px;
}

.connect_left_text p:nth-child(2) > a {
  color: #99a9bf;
}

.connect_left_text > ul > li {
  display: inline-block;
  width: 50px;
  height: 26px;
  border: 1px solid #99a9bf;
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 16px;
}

.connect_left_button {
  margin: 20px auto;
  width: 98px;
}

.editor_recommend_connect_middle {
  width: 544px;
  height: 478px;
  float: left;
  margin-left: 20px;
}

.connect_middle_top {
  width: 100%;
  height: 180px;
}

.connect_middle_top ul li {
  width: 272px;
  height: 36px;
  display: inline-block;
}

.connect_middle_top ul li a {
  font-size: 15px;
}

.connect_middle_top ul li a > span {
  color: #a6a6b6;
  margin-right: 10px;
}

.connect_middle_bottom {
  width: 544px;
  height: 256px;
  margin-top: 30px;
}

.connect_middle_bottom .connect_middle_bottom_book {
  width: 140px;
  height: 256px;
  display: inline-block;
  margin: 0 0 0 45px;
}

.connect_middle_bottom > .connect_middle_bottom_book:first-child {
  margin-left: 0px;
}

.connect_middle_bottom_book a {
  display: block;
  width: 100%;
  text-align: center;
  height: 20px;
  font-size: 13px;
}

.connect_middle_bottom_book a:nth-child(2) {
  margin-top: 10px;
}

.connect_middle_bottom_book a:last-child {
  color: #b4adb2;
}

.connect_middle_bottom_book img {
  width: 140px;
  height: 187px;
}

.editor_recommend_connect_right {
  float: left;
  width: 218px;
}

.editor_recommend_connect_right > p {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}

.editor_recommend_connect_right > p::after {
  content: "";
  height: 3px;
  background-color: #f37315;
  display: block;
}

.connect_right_book {
  margin-top: 15px;
}

.connect_right_book .connect_right_book_chen {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #f37315;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: white;
  margin-right: 5px;
}

.connect_right_book_info {
  margin-top: 10px;
  height: 103px;
  overflow: hidden;
}

.connect_right_book li:hover .connect_right_book_info {
  display: block;
}

.connect_right_book li {
  margin-top: 10px;
}

.connect_right_book_info img {
  float: left;
  width: 83px;
  height: 103px;
  margin-right: 15px;
}

.connect_right_book_info a {
  display: block;
  font-size: 13px;
  line-height: 20px;
  color: #99a9bf;
}

.connect_right_book .connect_right_book_hui {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #a6a6b6;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: white;
  margin-right: 5px;
}
// 主编推荐结束

//女频开始


// .el-submenu__title{
//   height: 30px;
//   background-color:transparent;

// }

// .connect_right_book p{
//   margin-top: -15px;
//   line-height: 30px;
// }
</style>