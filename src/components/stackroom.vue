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
    <!-- 分类部分 -->
    <div class="books_classify">
      <div class="roomcentre">
        <!-- card卡片组件 -->
        <el-card class="box-card">
          <div class="satck_direction satck_direction1 clearfix">
            <h3>作品类型</h3>
            <ul>
              <li>
                <a href>全部</a>
              </li>
              <li>
                <a href>男频</a>
              </li>
              <li>
                <a href>女频</a>
              </li>
            </ul>
          </div>
          <div class="satck_direction clearfix">
            <h3>作品分类</h3>
            <ul>
              <li>
                <a href>不限</a>
              </li>
              <li>
                <a href>都市</a>
              </li>
              <li>
                <a href>玄幻</a>
              </li>
              <li>
                <a href>仙侠</a>
              </li>
              <li>
                <a href>灵异</a>
              </li>
              <li>
                <a href>历史</a>
              </li>
              <li>
                <a href>游戏</a>
              </li>
              <li>
                <a href>科幻</a>
              </li>
              <li>
                <a href>武侠</a>
              </li>
              <li>
                <a href>奇幻</a>
              </li>
              <li>
                <a href>竞技</a>
              </li>
            </ul>
          </div>
          <div class="satck_direction clearfix">
            <h3>作品状态</h3>
            <ul>
              <li>
                <a href>不限</a>
              </li>
              <li>
                <a href>连载</a>
              </li>
              <li>
                <a href>完结</a>
              </li>
            </ul>
          </div>
          <div class="satck_direction clearfix">
            <h3>作品字数</h3>
            <ul>
              <li>
                <a href>不限</a>
              </li>
              <li>
                <a href>30万以下</a>
              </li>
              <li>
                <a href>30~50万</a>
              </li>
              <li>
                <a href>30~50万</a>
              </li>
              <li>
                <a href>30~50万</a>
              </li>
              <li>
                <a href>30~50万</a>
              </li>
            </ul>
          </div>
          <div class="satck_direction clearfix" style="margin-bottom:0;">
            <h3>更新时间</h3>
            <ul>
              <li>
                <a href>不限</a>
              </li>
              <li>
                <a href>3天内</a>
              </li>
              <li>
                <a href>7天内</a>
              </li>
              <li>
                <a href>半个月内</a>
              </li>
              <li>
                <a href>一个月之内</a>
              </li>
              <li>
                <a href>30~50万</a>
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
          <el-tab-pane label="按时间排序" name="first">
            <ul class="datas clearfix">
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail1.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail1.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail1.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail1.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="按热度排序" name="second">
            <ul class="datas clearfix">
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail2.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail2.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail2.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href>
                  <div class="coverBox">
                    <img src="../assets/img/books_detail2.png" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      重卡雄风
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">陈飒</span>
                      <span class="size">字数：</span>
                      <span>176.3万</span>
                    </p>
                    <p class="types">
                      类型：
                      <span class="types_other">都市</span>
                      <span class="types_other">青春</span>
                      <span class="types_other">其他</span>
                      <span class="weekvalue">
                        人气值：
                        <i>2</i>
                        <i>0</i>
                        <i>4</i>
                        <i>5</i>
                      </span>
                    </p>
                  </div>
                  <div
                    class="desc"
                  >工艺精良、动力十足、载重非凡，牵引着战争之神，碾过历史的尘埃，轰隆隆行走在大地上的伟岸巨物——且看被誉为重卡超人的林超涵如何绝地求生，革新技术引领潮流，将t临倒闭的重型卡车厂塑造成中国重工业的明珠、世界重卡行业的巨头企业。</div>
                  <div class="bookext">
                    <p class="spread">
                      可售版权：
                      <i>电视剧</i>
                      <i>网剧</i>
                      <i>院线电影</i>
                      <i>游戏</i>
                    </p>
                    <p class="copyright spread">
                      已售版权：
                      <i>无</i>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </el-tab-pane>
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
  border-top: 1px solid #f89a3b;
  margin-bottom: 30px;
}

// 分类部分
.satck_direction {
  width: 100%;
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
// 书籍展示部分
.books_detail {
  // height: 600px;
  background-color: #ffffff;
  margin: 18px 0 40px 0;
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

.datas > li {
  float: left;
  width: 545px;
  height: 352px;
  border: 1px solid #e3e7ec;
  margin: 40px 30px 40px 0;
  padding: 18px 39px 0 40px;
  box-sizing: border-box;
}

.datas > li:nth-child(2n) {
  margin: 40px 0 40px 0;
}

.datas > li > a {
  position: relative;
  display: block;
}

// 图片
.coverBox {
  position: absolute;
  top: -55px;
  left: 0px;
}

.coverBox,
.coverBox > img {
  width: 138px;
  height: 172px;
}

.info {
  padding-left: 165px;
}

.bname {
  width: 301px;
  height: 48px;
  line-height: 48px;
  font-size: 20px;
  color: #27292c;
  font-family: "Microsoft YaHei";
}

.bname:hover {
  color: #f36f20;
}

.continue {
  display: inline-block;
  width: 42px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  background-color: #30ca48;
  color: #ffffff;
  text-align: center;
  border-radius: 3px;
  margin-left: 17px;
}

.bookMini {
  height: 30px;
  line-height: 30px;
  color: #8292a4;
}

.bauthor {
  margin-right: 15px;
}

.types {
  height: 38px;
  line-height: 38px;
  color: #8292a4;
}

.types_other {
  width: 32px;
  height: 23px;
  line-height: 24px;
  padding: 4px 3px;
  border: 1px solid #f2f4f7;
  background-color: #f7f8fa;
  border-radius: 2px;
  margin-right: 5px;
  box-sizing: border-box;
}

.weekvalue {
  color: #8292a4;
  height: 26px;
  line-height: 26px;
}

.weekvalue > i {
  display: inline-block;
  width: 12px;
  height: 16px;
  line-height: 16px;
  background-color: #8292a4;
  margin-right: 3px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}

.desc {
  position: absolute;
  top: 130px;
  margin: 30px 0 40px 0;
  width: 100%;
  line-height: 25px;
  height: 96px;
  text-align: justify;
  color: #8292a4;
  font-family: "Microsoft YaHei";
}

.bookext {
  position: absolute;
  top: 300px;
  font-family: "Microsoft YaHei";
}

.spread {
  display: inline-block;
  color: #8292a4;
}

.spread > i {
  display: inline-block;
  color: #f36f20;
  // padding-right: 10px;
}

.spread > i::after {
  width: 10px;
  height: 100%;
  content: "/";
  margin: 0 3px;
}

.spread > i:last-child::after {
  display: none;
}

.copyright {
  margin-left: 30px;
}

.copyright > i {
  color: #cbcbcb;
}
</style>