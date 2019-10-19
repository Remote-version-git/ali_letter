<template>
  <div>
    <div class="zong">
      <el-breadcrumb
        class="breadline"
        separator-class="el-icon-arrow-right"
        v-for="item in RenderingList"
        :key="item.id"
      >
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{item.novel_classify}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{item.novel_title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="infoarea">
      <div class="view" v-for="item in RenderingList" :key="item.id">
        <img :src="item.novel_url" class="cover" />
        <p class="bookTitle">
          <span class="bname">{{item.novel_title}}</span>
          <span class="bauthor">
            <a href>{{item.novel_author}}</a>
          </span>
          <span class="bhot">
            人气值：
            <i>259126</i>
          </span>
        </p>

        <p class="bookDesc">{{item.novel_desc}}</p>

        <ul class="tags clear">
          <li>
            <a href>异能</a>
          </li>

          <li>
            <a href>都市</a>
          </li>

          <li>
            <a href>暧昧</a>
          </li>
        </ul>

        <ul class="operates clear">
          <li class="read">
            <a target="_blank" :href="item.novel_paths">立即阅读</a>
          </li>
          <li>
            <a class="ml" target="_blank" href>目录</a>
          </li>
          <li class="js-addShelf">加入书架</li>
        </ul>
        <ul class="lastchapter clear">
          <li>都市异能</li>
          <li>732.96万字</li>
          <li>连载</li>
          <li>9小时前更新</li>
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
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      // 详情
      RenderingList: []
    };
  },
  mounted: {
    // 渲染
    async RenderingClick() {
      const { data } = await this.$http.get(`/novels/${this.id}`);
      // console.log(data.data);

      this.RenderingList = data.data;
    }
  }
};
</script>
<style lang="less" scoped>
.zong {
  width: 1120px;
  margin: 0 auto;
}
.breadline {
  height: 64px;
  line-height: 64px;
  font-size: 15px;
  color: #1d1e20;
}
.infoarea {
  /* height: 1519px; */
  width: 100%;
  padding: 38px 0;
  background: #f8f8f8;
}
.infoarea .view {
  width: 982px;
  min-height: 258px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 212px;
  position: relative;
}
img.cover {
  width: 193px;
  height: 258px;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
}
/* 简介 */
.view p.bookTitle {
  width: 100%;
  height: 20px;
  padding: 15px 0 19px;
}
.view p.bookTitle .bname {
  float: left;
  font-size: 20px;
  color: #1c1c1e;
}
.view p.bookTitle span {
  height: 20px;
  line-height: 20px;
}
.view p.bookTitle .bauthor {
  float: left;
  font-size: 14px;
  color: #999;
  margin-left: 10px;
}
.view p.bookTitle .bauthor a {
  color: #999;
}
.view p.bookTitle .bhot {
  float: right;
  font-size: 14px;
  color: #999;
}
.view p.bookTitle span {
  height: 20px;
  line-height: 20px;
}
.view p.bookTitle .bhot i {
  font-size: 16px;
  color: #f36f20;
  font-style: normal;
}
/* 简介 */
.infoarea .view p.bookDesc {
  width: 100%;
  text-align: justify;
  line-height: 20px;
  font-size: 14px;
  color: #3b3b3d;
  min-height: 60px;
}
/* 标签 */
.infoarea .view ul.tags {
  margin-top: 15px;
}
.infoarea .view ul.tags li {
  border: 1px solid #aaa69f;
  border-radius: 4px;
  float: left;
  font-size: 12px;
  margin-right: 20px;
}
.infoarea .view ul.tags li a {
  padding: 4px 13px;
  display: inline-block;
}
/*  */
.infoarea .view ul.operates {
  padding-top: 30px;
}
.infoarea .view ul.operates li.read {
  background-color: #f36f20;
  color: #fff;
}

.infoarea .view ul.operates li.read a {
  color: #fff;
}
.infoarea .view ul.operates li {
  height: 28px;
  width: 110px;
  border: 1px solid #f36f20;
  line-height: 28px;
  text-align: center;
  float: left;
  margin-right: 15px;
  color: #f36f20;
  cursor: pointer;
}
.ml {
  color: #f36f20;
}
.infoarea .view ul.operates li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
/* 
 */
.infoarea .view ul.lastchapter {
  height: 20px;
  font-size: 14px;
  padding-top: 15px;
}
.infoarea .view ul.lastchapter li {
  padding-right: 10px;
  float: left;
  height: 100%;
  text-align: left;
  border-right: 1px solid #ebebeb;
  color: #999;
  margin-right: 15px;
}
</style>