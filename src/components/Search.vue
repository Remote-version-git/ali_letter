<template>
  <div class="zong">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>搜索结果：朋友Friend</el-breadcrumb-item>
      <div class="matchbook">
        <div class="view">
          <a target="_blank" href>
            <img src="../assets/images/1165857960663.jpg" class="cover" />
          </a>
          <p class="bookTitle">
            <a target="_blank" href>
              <span class="bname">朋友Friend</span>
            </a>
            <span class="bauthor">无声浪 &nbsp;&nbsp;著</span>
          </p>
          <ul class="lastchapter clear">
            <li>3.1万字</li>
            <li>星际战争</li>
          </ul>
          <p
            class="bookDesc"
          >出生于中国西南部偏远山区的“小七子”从小渴望了解外面的世界，在成长的过程中小七子眺望星空感知到宇宙的神奇，至此有了人生志向。小七子想去当兵，想保护自己的祖国，想去宇宙星空之中。小七子在大山的森林中结识了一群朋友，他们陪着小七子在山林之间奔跑戏耍，在大山之巅拍打云彩。1997年，7岁的小七子突然感知到万物的声音，仿佛间这个世界都在向他诉说心情，就这样开启了小七子与宇宙诸天星空文明的访问与探索。</p>
          <div class="operates clear">
            <div class="left">
              <span class="tag">争霸</span>

              <span class="tag">穿越</span>

              <span class="tag">励志</span>

              <span class="tag">小说</span>
            </div>
            <div class="right">
              <span class="btn read">
                <a target="_blank" href>立即阅读</a>
              </span>
              <span class="btn js-addShelf">+书架</span>
            </div>
          </div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-breadcrumb>
  </div>
</template>

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
</style>