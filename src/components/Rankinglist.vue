<template>
  <div class="zong">
    <el-row class="rkleft">
      <el-tabs tab-position="left" v-model="activeName">
        <el-tab-pane class="paihang" label="排行榜单" disabled></el-tab-pane>
        <el-tab-pane label="男频点击榜" name="second">
          <div class="rigth">
            <ul class="ranklist-ul">
              <li v-for="item in MensClickList" :key="item.id">
                <a href>
                  <img :src="item.novel_url" alt class="img" />
                </a>
                <a href>
                  <h3>{{item.novel_title}}</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>{{item.novel_author}}</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">{{item.novel_classify}}</span>
                </p>
                <p class="ranklist-des">{{item.novel_desc}}</p>
                <p class="ranklist-tag">
                  <span>
                    <a href>{{item.novel_tags}}</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <!-- <div class="ranklist-top rktop-icon1"></div> -->
              </li>
            </ul>
            <div class="fy">
              <!-- <span class="demonstration">完整功能</span> -->
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="女频点击榜">
          <div class="rigth">
            <ul class="ranklist-ul">
              <li v-for="item2 in WomenClickList" :key="item2.id">
                <a href>
                  <img :src="item2.novel_url" alt class="img" />
                </a>
                <a href>
                  <h3>{{item2.novel_title}}</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>{{item2.novel_author}}</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">{{item2.novel_classify}}</span>
                </p>
                <p class="ranklist-des">{{item2.novel_desc}}</p>
                <p class="ranklist-tag">
                  <span>
                    <a href>{{item2.novel_tags}}</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <!-- <div class="ranklist-top rktop-icon1"></div> -->
              </li>
            </ul>
            <div class="fy">
              <!-- <span class="demonstration">完整功能</span> -->
              <el-pagination
                @size-change="handleSizeChangenv"
                @current-change="handleCurrentChangenv"
                :current-page="queryInfo.pagenum"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="完结榜">
          <div class="rigth">
            <ul class="ranklist-ul">
              <li v-for="item3 in EndList" :key="item3.id">
                <a href>
                  <img :src="item3.novel_url" alt class="img" />
                </a>
                <a href>
                  <h3>{{item3.novel_title}}</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>{{item3.novel_author}}</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">{{item3.novel_classify}}</span>
                </p>
                <p class="ranklist-des">{{item3.novel_desc}}</p>
                <p class="ranklist-tag">
                  <span>
                    <a href>{{item3.novel_tags}}</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <!-- <div class="ranklist-top rktop-icon1"></div> -->
              </li>
            </ul>
            <div class="fy">
              <!-- <span class="demonstration">完整功能</span> -->
              <el-pagination
                @size-change="handleSizeChangewj"
                @current-change="handleCurrentChangewj"
                :current-page="queryInfo.pagenum"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="人气榜">
          <div class="rigth">
            <ul class="ranklist-ul">
              <li v-for="item4 in PopularityList" :key="item4.id">
                <a href>
                  <img :src="item4.novel_url" alt class="img" />
                </a>
                <a href>
                  <h3>{{item4.novel_title}}</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>{{item4.novel_author}}</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">{{item4.novel_classify}}</span>
                </p>
                <p class="ranklist-des">{{item4.novel_desc}}</p>
                <p class="ranklist-tag">
                  <span>
                    <a href>{{item4.novel_tags}}</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <!-- <div class="ranklist-top rktop-icon1"></div> -->
              </li>
            </ul>
            <div class="fy">
              <!-- <span class="demonstration">完整功能</span> -->
              <el-pagination
                @size-change="handleSizeChangerq"
                @current-change="handleCurrentChangerq"
                :current-page="queryInfo.page"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
      // 男频渲染
      MensClickList: [],
      // 女
      WomenClickList: [],
      //完结
      EndList: [],
      // 人气
      PopularityList: [],
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
      total: 0
    };
  },
  methods: {
    async MensClick() {
      // console.log('11')
      const { data } = await this.$http.get(
        `/novels?type=4&page=${this.queryInfo.pagenum}&per_page=${this.queryInfo.pagesize}&sz=1`
      );
      this.MensClickList = data.data;
      this.total = data.total;
      console.log(data);
      // console.log(this.total);
      // console.log(this.MensClickList);
    },
    // 女
    async WomenClick() {
      // console.log('11')
      const { data } = await this.$http.get(
        `/novels?type=4&page=${this.queryInfo.pagenum}&per_page=${this.queryInfo.pagesize}&sz=0`
      );
      this.WomenClickList = data.data;
      this.total = data.total;
      // console.log(this.total);
      // console.log(this.WomenClickList);
    },
    // 完结
    async EndClick() {
      // console.log('11')
      const { data } = await this.$http.get(
        `/novels?status=1&page=${this.queryInfo.pagenum}&per_page=${this.queryInfo.pagesize}`
      );
      this.EndList = data.data;
      this.total = data.total;
      // console.log(this.total);
      // console.log(this.WomenClickList);
    },
    // 字数
    async PopularityClick() {
      // console.log('11')
      const { data } = await this.$http.get(
        `/novels?type=1&page=${this.queryInfo.pagenum}&per_page=${this.queryInfo.pagesize}`
      );
      this.PopularityList = data.data;
      this.total = data.total;
      
      // console.log(this.total);
      // console.log(this.WomenClickList);
    },
    //   男分页
    handleSizeChange(per_page) {
      this.queryInfo.pagesize = per_page;
      console.log(per_page);
      this.MensClick();
    },
    handleCurrentChange(page) {
      this.queryInfo.pagenum = page;
      this.MensClick();
    },
      //   女分页
    handleSizeChangenv(per_page) {
      this.queryInfo.pagesize = per_page;
      console.log(per_page);
      this.WomenClick();
    },
    handleCurrentChangenv(page) {
      this.queryInfo.pagenum = page;
      this.WomenClick();
    },
    // 完结
    handleSizeChangewj(per_page) {
      this.queryInfo.pagesize = per_page;
      console.log(per_page);
      this.EndClick();
    },
    handleCurrentChangewj(page) {
      this.queryInfo.pagenum = page;
     this.EndClick();
    },
    // 人气
      handleSizeChangerq(per_page) {
      this.queryInfo.pagesize = per_page;
      console.log(per_page);
      this.PopularityClick();
    },
    handleCurrentChangerq(page) {
      this.queryInfo.pagenum = page;
     this.PopularityClick();
    },
  },
  created() {
    this.MensClick();
    this.WomenClick();
    this.EndClick();
    this.PopularityClick();
  }
};
</script>

<style scoped>
.zong {
  width: 1120px;
  margin: 0 auto;
}
.rkleft {
  float: left;
  width: 183px;
  line-height: 46px;
  font-size: 14px;
}
.el-col-12 {
  width: 100%;
}
.bdfl {
  background-image: url(../assets/images/navs_head_bg.png);
}

/* 右边 */
.paihang {
}
.el-tabs__content {
  overflow: hidden;
  position: relative;
  /* left: -42px; */
  top: 2px;
}
.el-tabs--left .el-tabs__item.is-left {
  /* text-align: right; */
  width: 183px;
  text-align: left;
}
.el-tabs--left,
.el-tabs--right {
  /* overflow: hidden; */
  width: 1156px;
}
a:hover {
  color: #ff8e15;
}
.rigth {
  /* width: 80%; */
  float: right;
}
.ranklist-ul li {
  height: 164px;
  margin-bottom: 30px;
  position: relative;
  zoom: 1;
}
/* 书图片 */
.img {
  width: 132px;
  height: 164px;
  float: left;
  margin-right: 22px;
}
.ranklist-ul p {
  font-size: 12px;
}
.ranklist-ul h3 {
  font-size: 14px;
}
/* 作者 */
.rightarea .ranklist-ul p {
  font-size: 12px;
}
.ranklist-autor {
  color: #b0a9a9;
  /* margin-top: 10px; */
}
.zzm {
  color: #b0a9a9;
}
.ranklist-autor span {
  display: inline-block;
  margin-right: 20px;
}
/* 简介 */
.ranklist-des {
  color: #1d1e20;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 20px;
  /* margin: 14px 0 52px 0; */
}
/* 标签 */
.ranklist-tag span {
  border: 1px solid #aaa69f;
  margin-right: 20px;
  border-radius: 2px;
  color: #27282b;
}
.ranklist-tag span a {
  padding: 2px 13px;
  display: inline-block;
}
/* 书架 */
.ranklist-handle {
  position: absolute;
  font-size: 14px;
  right: 0;
  bottom: 0;
  z-index: 10;
  top: 140px;
}
.ranklist-handle a,
.ranklist-handle .addshelf {
  border: 1px solid #f36f20;
  margin-left: 10px;
  letter-spacing: 4px;
  display: inline-block;
  width: 110px;
  height: 28px;
  text-align: center;
  line-height: 30px;
}
.immediately {
  background: #f36f20;
  color: #fff;
}
.addshelf {
  color: #f36f20;
  cursor: pointer;
}
/* 排行 */
.ranklist-top {
  width: 30px;
  height: 41px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}
.rktop-icon1 {
  background: url(../assets/images/rank_top_1.png);
}
.rktop-icon2 {
  background: url(../assets/images/rank_top_2.png);
}
.rktop-icon3 {
  background: url(../assets/images/rank_top_3.png);
}

/* 分页 */
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 54px;
}
</style>