<template>
  <div class="stackroom">
    <div class="carouselBgc">
      <div class="roomcentre" id="wrap">
        <!-- 轮播图 -->
        <div class="slide" id="slide">
          <ul ref="slideshow">
            <li>
              <a href>
                <img src="../assets/images/zy_book2.png" alt />
              </a>
            </li>
            <li>
              <a href>
                <img src="../assets/images/zy_book2.png" alt />
              </a>
            </li>
            <li>
              <a href>
                <img src="../assets/images/zy_book2.png" alt />
              </a>
            </li>
            <li>
              <a href>
                <img src="../assets/images/zy_book2.png" alt />
              </a>
            </li>
            <li>
              <a href>
                <img src="../assets/images/zy_book2.png" alt />
              </a>
            </li>
            <li>
              <a href>
                <img src="../assets/images/zy_book2.png" alt />
              </a>
            </li>
            <li>
              <a href>
                <img src="../assets/images/zy_book2.png" alt />
              </a>
            </li>
          </ul>
        </div>
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
                    <img src="" alt />
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
                    <img src="" alt />
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
                    <img src="" alt />
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
                    <img src="" alt />
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
                    <img src="" alt />
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
                    <img src="" alt />
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
                    <img src="" alt />
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
                    <img src="" alt />
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
import "../main.js";
export default {
  data() {
    return {
      activeName: "second",
      // 定义一把锁
      flag: true,
      // 轮播图的图片分布位置
      config: [
        {
          width: 500,
          height: 250,
          top: 160,
          left: -100,
          opacity: 0.3,
          zIndex: 1
        },
        {
          width: 500,
          height: 270,
          top: 140,
          left: -50,
          opacity: 0.5,
          zIndex: 2
        }, //0
        {
          width: 500,
          height: 290,
          top: 120,
          left: 0,
          opacity: 0.8,
          zIndex: 3
        }, //1
        {
          width: 500,
          height: 310,
          top: 100,
          left: 200,
          opacity: 1,
          zIndex: 4
        }, //2
        {
          width: 500,
          height: 290,
          top: 120,
          left: 420,
          opacity: 0.8,
          zIndex: 3
        }, //3
        {
          width: 500,
          height: 270,
          top: 140,
          left: 480,
          opacity: 0.5,
          zIndex: 2
        }, //4
        {
          width: 500,
          height: 250,
          top: 160,
          left: 530,
          opacity: 0.3,
          zIndex: 1
        }
      ]
    };
  },
  created() {},
  methods: {
    // 遍历每个轮播图的li 把config数组中的样式给每个li
    handleAssign() {
      var aLi = this.$refs.slideshow.getElementsByTagName("li");
      var newaLi = Array.prototype.slice.call(aLi);
      // console.log(newaLi);
      //  aa()
      newaLi.forEach(item => {
        // console.log(item)
        this.config.forEach(subItem => {
          this.animate(item, subItem, function() {
            this.flag = true;
          });
        });
      });
    },
    getStyle(element, attr) {
      return;
      this.mywindow.myfunction
        ? this.mywindow.myfunction(element, null)[attr]
        : element.currentStyle[attr] || 0;
    },
    // tabs切换时触发
    handleClick(tab, event) {
      console.log(tab, event);
    },
    animate(element, json, fn) {
      clearInterval(element.timeId); //清理定时器
      //定时器,返回的是定时器的id
      element.timeId = setInterval(function() {
        var flag = true; //默认,假设,全部到达目标
        //遍历json对象中的每个属性还有属性对应的目标值
        for (var attr in json) {
          //判断这个属性attr中是不是opacity
          if (attr == "opacity") {
            //获取元素的当前的透明度,当前的透明度放大100倍
            var current = this.getStyle(element, attr) * 100;
            console.log("aagagag" + current);
            //目标的透明度放大100倍
            var target = json[attr] * 100;
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step; //移动后的值
            element.style[attr] = current / 100;
          } else if (attr == "zIndex") {
            //判断这个属性attr中是不是zIndex
            //层级改变就是直接改变这个属性的值
            element.style[attr] = json[attr];
          } else {
            //普通的属性
            //获取元素这个属性的当前的值
            const aa = this.getStyle(element, attr);
            var current = parseInt(aa);
            //当前的属性对应的目标值
            var target = json[attr];
            //移动的步数
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step; //移动后的值
            element.style[attr] = current + "px";
          }
          //是否到达目标
          if (current != target) {
            flag = false;
          }
        }
        if (flag) {
          //清理定时器
          clearInterval(element.timeId);
          //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
          if (fn) {
            fn();
          }
        }
      }, 20);
    }
  },
  mounted() {
    this.handleAssign();
    // this.getStyle();
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
  background-image: url(../assets/images/carousel.png);
}

// 轮播图css
.slide {
  position: relative;
  height: 292px;
}

.slide li {
  position: absolute;
  top: 0;
  left: 0;
}

.slide li img {
  width: 100%;
}

/////////////////////////////////////////////////////

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