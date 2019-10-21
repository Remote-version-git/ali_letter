<template>
  <div class="zong">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>搜索结果：{{ searchText }}</el-breadcrumb-item>
    </el-breadcrumb>
      <div class="matchbook" v-for="item in searchList" :key="item.id">
        <div class="view">
          <a target="_blank" href>
            <img :src="item.novel_url" class="cover" />
          </a>
          <p class="bookTitle">
            <a target="_blank" href>
              <span class="bname">{{ item.novel_title }}</span>
            </a>
            <span class="bauthor">{{ item.novel_author }} &nbsp;&nbsp;著</span>
          </p>
          <ul class="lastchapter clear">
            <li>{{ item.word_nums }}万字</li>
            <li>{{ item.novel_classify }}</li>
          </ul>
          <p class="bookDesc">{{ item.novel_desc }}</p>
          <div class="operates clear">
            <div class="left">
              <span class="tag" v-for="tagItem in item.novel_tags" :key="tagItem.id">{{ tagItem }}</span>
            </div>
            <div class="right">
              <span class="btn read">
                <a target="_blank" :href="item.novel_paths">立即阅读</a>
              </span>
              <span class="btn js-addShelf">+书架</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>-->
    <template  v-if="searchList.length === 0">
      <h1 class="nodata">暂无数据</h1>
    </template>
    <!-- <p>{{infos}}</p> -->
  </div>
</template>
<script>
import { create } from "domain";

export default {
  data() {
    return {
      searchList: this.$store.state.searchData.data,
      total: this.$store.state.searchData.total,
      searchText: this.$store.state.searchText
    };
  },
  created() {
    this.searchList.forEach(item => {
      item.novel_tags = item.novel_tags.split(" ");
    });
    console.log(this.searchList);
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async getNovel() {
      const { data: res } = await this.$http.get(
        `novels?keyword=${this.keyword}`
      );
      this.searchList = res.data;
      this.$store.state.searchData = res;
      this.$store.state.searchText = this.keyword;
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="less" scoped>
.zong {
  width: 1120px;
  margin: 0 auto;
}
.matchbook {
  width: 100%;
  padding: 30px 0;
  background: #f8f8f8;
  margin-top: 20px;
  margin-bottom: 30px;
}
.matchbook .view {
  width: 982px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 160px;
  position: relative;
  overflow: hidden;
}
a {
  text-decoration: none;
  color: inherit;
}
.matchbook .view .cover {
  width: 120px;
  height: 160px;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
}
.matchbook .view .bookTitle {
  width: 100%;
  height: 20px;
}
.matchbook .view .bookTitle .bname {
  font-size: 20px;
  color: #1c1c1e;
  cursor: pointer;
}
.matchbook .view .bookTitle .bauthor {
  font-size: 12px;
  color: #6f7f93;
  margin-left: 10px;
  cursor: pointer;
}
.matchbook .lastchapter {
  height: 20px;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 15px;
}
.matchbook .lastchapter li:first-child {
  border-right: 1px solid #ebebeb;
}

.matchbook .lastchapter li {
  padding-right: 10px;
  float: left;
  height: 100%;
  text-align: left;
  color: #6f7f93;
  margin-right: 15px;
}
.matchbook .view .bookDesc {
  width: 100%;
  text-align: justify;
  line-height: 20px;
  font-size: 12px;
  color: #6f7f93;
  margin-bottom: 10px;
}
.matchbook .operates .left {
  float: left;
}
.matchbook .operates .left .tag {
  display: inline-block;
  border: 1px solid #d8dae6;
  padding: 4px 10px;
  margin-right: 15px;
  font-size: 12px;
  color: #1d1f21;
  cursor: pointer;
}
.matchbook .operates .right {
  float: right;
}
.matchbook .operates .read {
  margin-right: 15px;
  background-color: #f36f20;
  color: #fff;
}
.matchbook .operates .btn {
  height: 28px;
  width: 110px;
  border: 1px solid #f36f20;
  line-height: 28px;
  text-align: center;
  color: #f36f20;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
}
.matchbook .operates .btn {
  height: 28px;
  width: 110px;
  border: 1px solid #f36f20;
  line-height: 28px;
  text-align: center;
  color: #f36f20;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
}
.clear:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: 0;
  overflow: hidden;
  clear: both;
}
.matchbook .operates .read a {
  margin-right: 15px;
  background-color: #f36f20;
  color: #fff;
}
.el-pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  margin-top: 54px;
}

.nodata {
  height: 428px;
  line-height: 428px;
  text-align: center;
  font-size: 26px;
  font-weight: normal;
}
</style>