<template>
  <div class="stackroom">
    <div class="carouselBgc">
      <div class="roomcentre" id="wrap">
        <!-- 轮播图 -->
        <div class="slide" id="slide">
          <ul ref="slideshow" class="slideshow">
            <li v-for="item in autoPlayTxtList" :key="item.id">
              <a href>
                <img :src="item.novel_url" alt />
              </a>
            </li>
          </ul>
          <div class="arrow" id="arrow">
            <a href="javascript:;" class="prev" id="arrLeft" @click="prevClick"></a>
            <a href="javascript:;" class="next" id="arrRight" @click="nextClick"></a>
          </div>
        </div>
        <div class="slide_text">
          <p class="slide_text_p1">
            <a href class="box_name">大名长歌</a>
            <span class="author">今夏 著</span>
            <i class="continue">连载中</i>
          </p>
          <p class="slide_text_p2">李彤、刘颖、张守义、刘继业、常浩然等南京国子监学子，每天赖带南京城内无所事事。</p>
          <p class="slide_text_p3">
            <span class="weekName">人气值：</span>
            <span class="weekValue">
              <i class="week-number">1</i>
              <i class="week-number">0</i>
              <i class="week-number">0</i>
              <i class="week-number">0</i>
            </span>
            <span class="apply">适用于：</span>
            <span class="labelBox">
              <i class="apply-label">电视剧</i>
              <i class="apply-label">网剧</i>
            </span>
            <a href class="lookdesc">查看详细</a>
          </p>
        </div>
      </div>
    </div>
    <!-- 分类部分 -->
    <div class="books_classify">
      <div class="roomcentre">
        <div class="classify">
          <div class="classify_title">作品类型</div>
          <ul class="classify_option">
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
        <div class="classify">
          <div class="classify_title">作品分类</div>
          <ul class="classify_option">
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
              <a href>武侠奇幻</a>
            </li>
            <li>
              <a href>竞技</a>
            </li>
            <li>
              <a href>其他</a>
            </li>
            <li>
              <a href>现言</a>
            </li>
            <li>
              <a href>古言</a>
            </li>
            <li>
              <a href>幻言</a>
            </li>
          </ul>
        </div>
        <div class="classify">
          <div class="classify_title">作品状态</div>
          <ul class="classify_option">
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
        <div class="classify">
          <div class="classify_title">作品字数</div>
          <ul class="classify_option">
            <li>
              <a href>全部</a>
            </li>
            <li>
              <a href>30万以下</a>
            </li>
            <li>
              <a href>30万~50万</a>
            </li>
            <li>
              <a href>50万~100万</a>
            </li>
            <li>
              <a href>100万~200万</a>
            </li>
            <li>
              <a href>200万以上</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 书本陈列 -->
    <el-row>
      <el-col>
        <div class="bexhibit">
          <div class="roomcentre">
            <ul class="bexhibit_option clearfix">
              <li
                class="bexhibit_option_list"
                v-for="novelTxtItem in novelTypeList"
                :key="novelTxtItem.id"
              >
                <a :href="/book/+novelTxtItem.id" class="clearfix">
                  <img :src="novelTxtItem.novel_url" alt />
                  <div class="exhibit_clearfix">
                    <h3>{{novelTxtItem.novel_title}}</h3>
                    <p class="store_des">{{novelTxtItem.novel_desc}}</p>
                    <p class="store_tag">
                      <span class="bkcate_icon">{{novelTxtItem.novel_classify}}</span>
                      <a :href="/author/+novelTxtItem.id">
                        <span class="bkuser_icon">{{novelTxtItem.novel_author}}</span>
                      </a>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 书籍展示部分开始 -->
    <div class="books_detail">
      <div class="roomcentre">
        <!-- tabs标签页组件 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="版权推荐" name="first">
            <ul class="datas clearfix">
              <li v-for="copyrightItem in copyrightList" :key="copyrightItem.id">
                <a href>
                  <div class="coverBox">
                    <img :src="copyrightItem.novel_url" alt />
                  </div>
                  <div class="info">
                    <p class="bname">
                      {{copyrightItem.novel_title}}
                      <i class="continue">连载中</i>
                    </p>
                    <p class="bookMini">
                      <span>作者：</span>
                      <span class="bauthor">{{copyrightItem.novel_author}}</span>
                      <span class="size">字数：</span>
                      <span>{{copyrightItem.word_nums}}</span>
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
                  <div class="desc">{{copyrightItem.novel_desc}}</div>
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
            <el-row>
              <el-col class="paging">
                <div class="block">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.pagenum"
                    :page-sizes="[6, 12, 24, 48]"
                    :page-size="queryInfo.pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageTotal"
                  ></el-pagination>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
var flag = true;
import { getStyle, animate } from "../assets/js/animate";
export default {
  data() {
    return {
      activeName: "first",
      // 定义一把锁
      flag: true,
      // 轮播图的图片分布位置
      config: [
        {
          width: 120,
          height: 150,
          top: 170,
          left: 130,
          opacity: 0.7,
          zIndex: 1
        },
        {
          width: 177,
          height: 237,
          top: 94,
          left: 185,
          opacity: 0.8,
          zIndex: 2
        }, //0
        {
          width: 197,
          height: 263,
          top: 67,
          left: 295,
          opacity: 0.9,
          zIndex: 3
        }, //1
        {
          width: 218,
          height: 310,
          top: 40,
          left: 445,
          opacity: 1,
          zIndex: 4
        }, //2
        {
          width: 197,
          height: 263,
          top: 68,
          left: 605,
          opacity: 0.9,
          zIndex: 3
        }, //3
        {
          width: 177,
          height: 237,
          top: 94,
          left: 735,
          opacity: 0.8,
          zIndex: 2
        }, //4
        {
          width: 120,
          height: 150,
          top: 170,
          left: 855,
          opacity: 0.7,
          zIndex: 1
        }
      ],
      // 轮播图数据
      autoPlayTxtList: [],
      // 作品类型数据
      novelTypeList: [],
      // 版权推荐数据
      copyrightList: [],
      queryInfo: {
        pagenum: 1,
        pagesize: 6
      },
      pageTotal: 0
    };
  },
  methods: {
    // 遍历每个轮播图的li 把config数组中的样式给每个li
    handleAssign() {
      let newaLi = document.querySelectorAll(".slideshow li");
      newaLi.forEach((item, index) => {
        this.animate(item, this.config[index], () => {
          flag = true;
        });
      });
    },
    nextClick() {
      if (this.flag) {
        // this.flag = false;
        this.config.unshift(this.config.pop());
        //  3.2.1 等数组中的元素变了之后 让页面重新布局
        this.handleAssign();
      }
    },
    prevClick() {
      if (this.flag) {
        this.config.push(this.config.shift());
        this.handleAssign();
      }
    },
    // 自动轮播
    autoPlay() {
      setInterval(this.nextClick, 4000);
    },
    // 获取轮播图数据
    async getautoList() {
      const { data } = await this.$http.get("/novels?type=1&per_page=7");
      this.autoPlayTxtList = data.data;
      // console.log(this.autoPlayTxtList)
    },
    // 获取作品分类数据
    async getnovelTypeList() {
      const { data } = await this.$http.get("/novels");
      this.novelTypeList = data.data;
      console.log(this.novelTypeList);
      // console.log(data.data.novel_type);
    },
    // 获取版权推荐数据
    async getCopyrightList() {
      const { data } = await this.$http.get(
        `/novels?type=1&page=${this.queryInfo.pagenum}&per_page=${this.queryInfo.pagesize}`
      );
      this.copyrightList = data.data;
      this.pageTotal = data.total;
    },
    handleSizeChange(size) {
      this.queryInfo.pagesize = size;
      this.getCopyrightList;
    },
    handleCurrentChange(num) {
      this.queryInfo.pagenum = num;
      this.getCopyrightList();
    },
    getStyle: getStyle,
    animate: animate
  },
  mounted() {
    // 调用轮播图
    this.handleAssign();
    setTimeout(this.autoPlay(), 500);
    // 调用轮播图数据
    this.getautoList();
  },
  created() {
    this.getnovelTypeList();
    // 调用版权推荐数据
    this.getCopyrightList();
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
  height: 540px;
  background-image: url(../assets/images/carousel.png);
}

// 轮播图css
.slide {
  position: relative;
  height: 292px;
}

.slideshow {
  margin-left: 100px;
}

.slide li {
  position: absolute;
  top: 0;
  left: 0;
}

.slide li img {
  width: 100%;
}

.arrow {
  z-index: 100;
}

.prev,
.next {
  display: block;
  width: 44px;
  height: 44px;
  // background-color: #000;
  border-radius: 50%;
}

.prev {
  position: absolute;
  top: 210px;
  left: 0;
  background-image: url(../assets/images/next.prev.png);
  background-position: 0px 0px;
}

.next {
  position: absolute;
  top: 210px;
  right: 0;
  background-image: url(../assets/images/next.prev.png);
  background-position: -60px 0px;
}

// 轮播图下方文字
.slide_text {
  position: relative;
  padding-top: 70px;
  padding-left: 130px;
  font-family: "Microsoft YaHei";
}

.slide_text_p1 {
  height: 32px;
  line-height: 32px;
}

.box_name {
  font-size: 24px;
  color: #ffffff;
  margin-right: 17px;
}

.author {
  font-size: 12px;
  color: #d3d4d6;
}

.slide_text_p2 {
  line-height: 24px;
  color: #d3d4d6;
  font-size: 12px;
  margin-top: 15px;
}

.slide_text_p3 {
  margin-top: 30px;
}

.weekName {
  color: #ffffff;
  font-size: 12px;
}

.week-number {
  display: inline-block;
  color: #ff910d;
  width: 12px;
  height: 16px;
  line-height: 15px;
  background: #5f616e;
  font-size: 14px;
  margin-right: 2px;
  // font-style: normal;
  text-align: center;
  // font-family: "dinbold";
}

.apply {
  display: inline-block;
  font-size: 12px;
  margin-left: 12px;
  color: #d3d4d6;
}

.apply-label {
  display: inline-block;
  color: #ffffff;
  font-size: 12px;
  margin-right: 4px;
  font-style: normal;
}

.apply-label::after {
  content: "/";
}

.apply-label:last-child::after {
  display: none;
}

.lookdesc {
  position: absolute;
  bottom: 0;
  right: 130px;
  display: inline-block;
  width: 112px;
  height: 30px;
  background: #ff910d;
  color: #ffffff;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
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

.books_classify {
  margin-top: 20px;
  // background-color: pink;
  padding-top: 1px;
}

.classify {
  height: 28px;
  line-height: 28px;
  box-sizing: border-box;
  margin-top: 20px;
}

.classify_title,
.classify_option {
  display: inline-flex;
  font-family: "Microsoft YaHei";
}

.classify_title {
  margin-right: 20px;
  font-size: 14px;
  color: #8e96aa;
  font-weight: bold;
}

.classify_option > li {
  float: left;
  height: 28px;
  line-height: 28px;
}

.classify_option > li > a {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  padding: 0 15px;
}

.classify_option > li > a:hover {
  color: #f36f20;
}

.classify_option > li:nth-child(1) > a {
  background-color: #8e96aa;
  color: #ffffff;
  border-radius: 3px;
}

//////////////////////////////////////////////////////

.bexhibit_option {
  // height: 500px;
  background-color: pink;
  margin-bottom: 20px;
}

.bexhibit_option_list {
  float: left;
  height: 120px;
  width: 260px;
  margin: 10px 10px;
}

.bexhibit_option_list > a {
  display: block;
  height: 120px;
}

.bexhibit_option_list img {
  float: left;
  display: block;
  width: 90px;
  height: 120px;
  // background-color: green;
  margin-right: 8px;
}

.exhibit_clearfix > h3 {
  font-size: 13px;
  height: 28px;
  line-height: 28px;
  margin-top: 15px;
}

.store_des {
  height: 38px;
  line-height: 19px;
  color: #a3a3a3;
  font-size: 13px;
  overflow: hidden;
}

.store_tag {
  margin-top: 25px;
}

.bkcate_icon,
.bkuser_icon {
  color: #a3a3a3;
  position: relative;
  margin-left: 16px;
}
.bkuser_icon {
  float: right;
  display: inline-block;
  text-align: right;
}

.bkcate_icon::before {
  position: absolute;
  left: -14px;
  top: 1px;
  content: "";
  width: 11px;
  height: 11px;
  background-image: url("../assets/images/bkcate_icon.png");
}
.bkuser_icon:before {
  position: absolute;
  left: -14px;
  top: 1px;
  content: "";
  width: 11px;
  height: 11px;
  background-image: url("../assets/images/bkuser_icon.png");
}

/////////////////////
// 书籍展示部分
.books_detail {
  // height: 600px;
  background-color: #ffffff;
  margin: 50px 0 40px 0;
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
  margin-left: 5px;
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
  overflow: hidden;
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

.paging {
  padding-left: 210px;
}
</style>