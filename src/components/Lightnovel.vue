<template>
  <div class="lightnovel">
    <!-- 布局 -->
    <div class="common clear">
      <!-- 轻小说推荐 -->
      <el-row :span="24" class="titleline">
        <span class="title">轻小说推荐</span>
      </el-row>

      <!-- 第二大模块布局 -->
      <!-- 左边立即阅读 -->
      <el-container>
        <el-main class="clear" style="padding: 0px;">
          <div class="main">Main</div>

          <!-- 左下第二个左边模块 -->
          <div class="secrec_box">
            <ul class="secrec">
              <li>
                <a href="#" class="demo">
                  <img src="../assets/images/1171307858386.jpg" />
                  <p class="bookname">作者大人们别烦我</p>
                </a>
                <p class="author">
                  <a href="#" class="demo">这只是个包子</a>
                </p>
                <p class="desc">夜风经营着一家专门收集图书的店铺，这一天，他意外地收到了一个莫名其妙的快递，和一封邮件......</p>
              </li>

              <li>
                <a href="#" class="demo">
                  <img src="../assets/images/1172837858415.jpg" />
                  <p class="bookname">月神攻陷作战！开始！</p>
                </a>
                <p class="author">
                  <a href="#" class="demo">苦味酸</a>
                </p>
                <p
                  class="desc"
                >都已经2050年了，怎么还有人信神的，要唯物，唯物你知道么，但是如果神明本来就是客观的存在，那就没办法了啊，毕竟我是个唯物主义者——被月神的弓箭射穿胸膛的我如是想。</p>
              </li>
            </ul>
            <!-- 左下第二个右边模块 -->
            <div class="thirdrec">
              <ul class="clear">
                <li class="clear">
                  <a href="#" class="demo">
                    <span>[魔幻]</span>天黑请回家
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[架空]</span>黑夜惩戒使
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[日常]</span>二律背反
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[游戏]</span>兄弟，成仙么？
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[古风]</span>我真不是大侠
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[搞笑]</span>我绝对不要什么鬼修仙
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[冒险]</span>百家天问·阴阳篇
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[搞笑]</span>我不当阎王好多年
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[日常]</span>异常生物社区的日常生活
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[古风]</span>修仙界开学院我是不是搞错了什么
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[架空]</span>半神之境
                  </a>
                </li>
                <li>
                  <a href="#" class="demo">
                    <span>[烧脑]</span>重复同一天的侦探
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-main>
        <!-- 右边大盒子 -->
        <el-aside class="clear" style="width:217px">
          <div class="righteare clear">
            <!-- 第一个 -->
            <div class="pos-one clear">
              <a href="#javaScript:;">
                <h3>冒险</h3>
                <div class="covers">
                  <img src="../assets/images/1137097795044.jpg" class="center" />
                  <img src="../assets/images/1105377787147.jpg" class="left" />
                  <img src="../assets/images/1149667787708.jpg" class="right" />
                </div>
              </a>
            </div>
            <!-- 第二个 -->
            <div class="pos-two clear">
              <h3>
                <a href="#javaScript:;">搞笑</a>
              </h3>
              <ul>
                <li>
                  <a href="#" class="demo">莺庙札记</a>
                  <i>1</i>
                </li>
                <li>
                  <a href="#" class="demo">死亡歌颂者</a>
                  <i>2</i>
                </li>
                <li>
                  <a href="#" class="demo">四相行者</a>
                  <i>3</i>
                </li>
              </ul>
            </div>
            <!-- 第三个 -->
            <ul class="pos-three clear">
              <li style="background: #f0fbed;">
                <a href="#javaScript:;">纯爱</a>
              </li>
              <li style="background: #fbedfe;">
                <a href="#javaScript:;">烧脑</a>
              </li>
              <li style="background: #edefff;">
                <a href="#javaScript:;">游戏</a>
              </li>
              <li style="background: #eaf9f9;">
                <a href="#javaScript:;">热血</a>
              </li>
            </ul>
            <!-- 第四个 -->
            <div class="pos-four">
              <h4>热门标签</h4>
              <ul class="clear">
                <li>
                  <a href="#javaScript:;">少年</a>
                </li>
                <li>
                  <a href="#javaScript:;">竞技</a>
                </li>
                <li>
                  <a href="#javaScript:;">重生</a>
                </li>
                <li>
                  <a href="#javaScript:;">烧脑</a>
                </li>
                <li>
                  <a href="#javaScript:;">冒险</a>
                </li>
                <li>
                  <a href="#javaScript:;">穿越</a>
                </li>
                <li>
                  <a href="#javaScript:;">轻松</a>
                </li>
                <li>
                  <a href="#javaScript:;">魔法</a>
                </li>
                <li>
                  <a href="#javaScript:;">机甲</a>
                </li>
              </ul>
            </div>
          </div>
        </el-aside>
      </el-container>

      <!-- 第二大模块图片条 -->
      <div class="banner-advert page-width">
        <a href="#" class="demo">
          <img src="../assets/images/2019070217055008.jpg" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.lightnovel {
  width: 100%;
  height: 100%;
}

a:hover {
  color: #ffa600;
}

.titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}

.titleline:before {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background-color: #fff6e5;
  margin-top: 9px;
}

.titleline .title {
  padding: 0 18px 0 48px;
  background: url("../assets/images/title_icon_cartoon.png") no-repeat 18px 0
    #fff;
  background-size: 22px 22px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

// 左边立即阅读

.main {
  width: 872px;
  height: 212px;
  background-color: pink;
}

// 右边
.righteare {
  float: right;
  width: 218px;
}

// 第一个
.righteare .pos-one {
  padding: 21px 18px 0;
  color: #1d1e20 !important;
  background-color: #fff6e5;
  margin-bottom: 2px;
}
.righteare .pos-one a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.righteare .pos-one h3 {
  font-size: 14px;
  margin-top: 16px;
  line-height: 14px;
  float: left;
}
.righteare .pos-one .covers {
  height: 68px;
  float: right;
  position: relative;
}
.righteare .pos-one .covers .center {
  width: 55px;
  height: 68px;
  right: 17px;
  z-index: 2;
}
.righteare .pos-one .covers img {
  position: absolute;
  bottom: 0;
}
.righteare .pos-one .covers .left {
  width: 52px;
  height: 64px;
  right: 39px;
  z-index: 1;
}
.righteare .pos-one .covers img {
  position: absolute;
  bottom: 0;
}
.righteare .pos-one .covers .right {
  width: 52px;
  height: 64px;
  right: 0px;
  z-index: 1;
}

// 第二个
.righteare .pos-two {
  padding: 20px 22px;
  font-size: 14px;
  color: #1d1e20;
  background-color: #fff6e5;
  margin-bottom: 2px;
}

.righteare .pos-two h3 {
  line-height: 14px;
  font-size: 14px;
}
.righteare .pos-two li {
  width: 100%;
  box-sizing: border-box;
  padding-left: 26px;
  height: 19px;
  line-height: 19px;
  position: relative;
  margin-top: 16px;
  overflow: hidden;
}
.righteare .pos-two li i {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffa600;
  text-align: center;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  font-style: normal;
}

// 第三个
.righteare .pos-three {
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 52px;
  color: #1d1e20;
  font-size: 14px;
}
.righteare .pos-three {
  text-align: center;
  line-height: 52px;
  color: #1d1e20;
  font-size: 14px;
}
.righteare .pos-three li {
  float: left;
  width: 108px;
  height: 52px;
  margin-bottom: 2px;
}
.righteare .pos-three li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

// 第四个
.righteare .pos-four {
  padding: 10px 20px 0;
  background: #fef1f0;
}
.righteare .pos-four h4 {
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  color: #f47a33;
  margin-bottom: 12px;
}
.righteare .pos-four ul {
  padding: 0;
  margin: 0;
  overflow: hidden;
  margin-left: -9px;
  // position: relative;
}
.righteare .pos-four ul li {
  font-size: 12px;
  line-height: 12px;
  padding: 3px 8px;
  border-left: 1px solid #fcd6c6;
  float: left;
  margin-bottom: 12px;
  color: #f47a33;
  cursor: pointer;
}
.pos-four > ul > li:nth-of-type(1) {
  border-left: none;
}
.pos-four > ul > li:nth-of-type(5) {
  border-left: none;
}
.pos-four > ul > li:nth-of-type(9) {
  border-left: none;
}
.righteare .pos-four ul li > a {
  color: #f47a33;
}
// 左下第二个左边模块
.secrec_box {
  margin-top: 20px;
}
.secrec {
  width: 265px;
  float: left;
}
.secrec li {
  font-size: 13px;
  line-height: 13px;
  height: 120px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  box-sizing: border-box;
  padding-left: 106px;
  color: #1d1e20;
  overflow: hidden;
}
.secrec li img {
  width: 91px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.secrec li .bookname {
  margin-top: 9px;
}
.secrec li .author {
  color: #a3a3a3;
  margin: 8px 0 30px;
}
.secrec li .desc {
  color: #a3a3a3;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// 左下第二个右边模块
.thirdrec {
  width: 540px;
  float: right;
  color: #1d1e20;
}

.thirdrec ul :nth-child(1),
.thirdrec ul :nth-child(2) {
  margin-top: 0;
}
.lefteare .thirdrec ul :nth-child(2n + 1) {
  float: left;
}
.thirdrec ul li {
  float: left;
  width: 240px;
  height: 36px;
  font-size: 15px;
  line-height: 36px;
  margin-top: 8px;
}
.thirdrec ul li a {
  width: 100%;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.thirdrec ul li span {
  color: #a0a1a1;
}
.thirdrec ul li a {
  width: 100%;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

// 第二大模块
.banner-advert {
  display: block;
  height: 90px;
  overflow: hidden;
}

.banner-advert img {
  width: 100%;
  height: 90px;
  float: left;
}
</style>