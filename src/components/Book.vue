<template>
  <div>
    <div class="zong">
      <el-breadcrumb class="breadline" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>都市异能</el-breadcrumb-item>
        <el-breadcrumb-item>我的绝色总裁未婚妻</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="infoarea">
      <div class="view">
        <img src="../assets/images/201803141444064795.jpg" class="cover" />
        <p class="bookTitle">
          <span class="bname">我的绝色总裁未婚妻</span>
          <span class="bauthor">
            <a href>花幽山月</a>
          </span>
          <span class="bhot">
            人气值：
            <i>259126</i>
          </span>
        </p>

        <p
          class="bookDesc"
        >【最火爆畅销书】★精华简介★本书又名《神级龙卫》神秘高手龙潜花都，与冰山美女总裁签订婚约，但无奈被嫌弃。可怜的沈浪，只得外出觅食。不料一个个美女接踵而至，沈浪陷入各种桃运漩涡。当然，最主要的还是征服冰山女总裁。不乖？调教一下就好。</p>

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
            <a target="_blank" href>立即阅读</a>
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
      </div>
    </div>
    <div class="zong">
      <div class="leftarea">
        <div class="lastchapter" data-clog="base">
          <div class="titleline">
            <span class="title">最新章节</span>
          </div>
          <a target="_blank" href>
            <div class="chapname">第3488章 突破地仙中期</div>
            <div class="chapcont">
              <i></i>
            </div>
          </a>
        </div>
        <div class="comment-view js-commentView" data-clog="comment">
          <div class="titleline">
            <span class="title">
              书友评论
              <i >（ 701856条 ）</i>
            </span>
            <span class="btn">
              <a
                target="_blank"
                href=""
              >全部评论</a>
            </span>
          </div>
          <!-- <p class="pub-warning hide js-pubWarning">内容正在审核中，请耐心等待...</p> -->
          <!-- <div
            class="publish js-showPublishArea"
            data-clog="publish-publish$$bid=6725806"
            type="text"
            @click="dialogVisible = true"
          >登录才能评论噢~</div>-->

          <!-- 登录 -->
          <el-dialog
            title="账号登录"
            :visible.sync="dialogVisible"
            width="30%"
          
            style="margin-top: 0px;"
          >
            <input type="text" placeholder="请输入手机号" class="iphone js-phone" />
            <input type="password" placeholder="请输入密码" class="pwd js-pwd" />
            <p class="inter">
              登录账号即代表您已阅读过、了解并接受
              <a href="#">《阿里文学用户服务协议》</a>、
              <a href="#">《隐私保护政策》</a>
              <span class="select js-accept"></span>
            </p>
            <div class="submit js-entry unable">登录</div>
            <p class="operates">
              <span class="js-toReg">注册账号</span>
              <span class="js-forget">忘记密码</span>
            </p>
          </el-dialog>

          <!-- 登录后发表评论 -->
          <div @click="commentgd"  ref="aa" :style="conheight"  class="writearea hide js-commentTextarea">
            <el-input
              type="textarea"
              placeholder="发表评论"
              v-model="textarea"
              maxlength="1000"
              show-word-limit
            ></el-input>
            <div class="textinfo">
              <span class="notice js-notice" style="display: block;">不能少于5个字</span>
              <span class="submit js-sendComment" @click="centerDialogVisible = true">发送</span>
              <!-- 提示 当没有填写任何内容时弹出 -->
              <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
                <div class="pw-content">
                  <div class="pw-textarea js-content center middle">多少也写点内容吧……</div>
                </div>

                <span slot="footer" class="dialog-footer">
                  <el-button type="warning" @click="centerDialogVisible = false">确认</el-button>
                </span>
              </el-dialog>
              <span class="abort js-commentAbort"  @click="commentqx" >取消</span>
            </div>
          </div>

          <!-- 下拉状态 发表评论 -->
          <!-- <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <span>发表评论</span>
        </template>
        <el-menu-item-group>
           <div class="writearea hide js-commentTextarea">
            <el-input
              type="textarea"
              placeholder="发表评论"
              v-model="textarea"
              maxlength="1000"
              show-word-limit
            ></el-input>
            <div class="textinfo">
              <span class="notice js-notice" style="display: block;">不能少于5个字</span>
              <span class="submit js-sendComment" @click="centerDialogVisible = true">发送</span>
              提示 当没有填写任何内容时弹出
              <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
                <div class="pw-content">
                  <div class="pw-textarea js-content center middle">多少也写点内容吧……</div>
                </div>

                <span slot="footer" class="dialog-footer">
                  <el-button type="warning" @click="centerDialogVisible = false">确认</el-button>
                </span>
              </el-dialog>
              <span class="abort js-commentAbort">取消</span>
            </div>
          </div>
        </el-menu-item-group>
      </el-submenu>
          </el-menu>-->

          <ul class="comments js-commentList">
            <li class="clear">
              <div class="comment">
                <div class="photo">
                  <img
                    src="http://img-tailor.11222.cn/account/avatar/90a99ecd2f3e090c01ce85f99e232e0e.bmp"
                  />
                </div>
                <div class="username">
                  花幽山月
                  <span class="flag author">作者</span>
                  <span class="flag top">置顶</span>
                  <span class="flag good">精</span>
                </div>

                <p class="content js-textArea">
                  山月建了几个交流群，大家可以选择性的加入。
                  VIP①群：730498640（大群，高素质）
                  VIP②群：723437261（暂时备用，①群满员后可入）
                  VIP③群：745180129（备用）
                  VIP书友群只加书旗正版用户，需订阅截图。
                  介于山月更新时间经常不稳定，我会在群里通知更新每日更新时间，偶尔也会在群里冒泡聊聊后续情节。
                  公众书友①群：190705584（大群，整合了贴吧群）
                  公众书友②群：...
                </p>
                <div class="more">
                  <p
                    class="js-showAll"
                    data-text="山月建了几个交流群，大家可以选择性的加入。
VIP①群：730498640（大群，高素质）
VIP②群：723437261（暂时备用，①群满员后可入）
VIP③群：745180129（备用）
VIP书友群只加书旗正版用户，需订阅截图。
介于山月更新时间经常不稳定，我会在群里通知更新每日更新时间，偶尔也会在群里冒泡聊聊后续情节。
公众书友①群：190705584（大群，整合了贴吧群）
公众书友②群：729886658
公众书友③群：749740054（备用）
大家可以选择性加入，建立交流群只是为了更方便和大家交流，并及时告诉大家更新时间，免得总是让读者等。
群里严禁黄图，喷作者可以允许，但不要辱骂群里书友，和谐相处。
能给大家一段轻松愉悦的阅读记忆，山月心中也会有不小成就感，希望各位道友能踊跃交流，畅所欲言。
PS：微信书群可以让群友拉进去。"
                  >显示全文</p>
                </div>
                <div class="info">
                  <span class="time">2018-05-12 01:15</span>
                  <span class="reply js-checkoutReply">1065</span>
                  <span class="line"></span>
                  <span class="good js-goodComment">20305</span>
                </div>
              </div>
              <div class="js-replysView"></div>
            </li>

            <li class="clear">
              <div class="comment">
                <div class="photo">
                  <img
                    src="https://tfs.alipayobjects.com/images/partner/TB1ll1SXwSJDuNjmgXqXXbesFXa"
                  />
                </div>
                <div class="username">
                  凡哥
                  <span class="flag good">精</span>
                </div>
                <p class="content js-textArea">
                  越写越烂，废话连篇，剧情推进速度简直比蜗牛还慢 追了这么久了真的让人很失望
                  <span
                    class="comments-face"
                    style="background-position:87.5% 0%;"
                  ></span>
                </p>
                <div class="info">
                  <span class="time">2天前</span>
                  <span class="reply js-checkoutReply">0</span>
                  <span class="line"></span>
                  <span class="good js-goodComment">58</span>
                </div>
              </div>
              <div class="js-replysView"></div>
            </li>

            <li class="clear">
              <div class="comment">
                <div class="photo">
                  <img
                    src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLnJXXzCXI1aRTrc2QZRyMn3v0QZHSdCYNmSr7FPSXpyG2jjcpR9JgyT3zOPSWia8ZnR1pwq89T2RQ/132"
                  />
                </div>
                <div class="username">
                  蓝图灯光音响心无杂念
                  <span class="flag good">精</span>
                </div>

                <p class="content js-textArea">上个台阶写5天</p>

                <div class="info">
                  <span class="time">2天前</span>
                  <span class="reply js-checkoutReply">0</span>
                  <span class="line"></span>
                  <span class="good js-goodComment">57</span>
                </div>
              </div>
              <div class="js-replysView"></div>
            </li>

            <li class="clear">
              <div class="comment">
                <div class="photo">
                  <img
                    src="http://img-tailor.11222.cn/account/avatar/25cca6c168f3eeb7ff01ed1d3be99baa@120w_120h"
                  />
                </div>
                <div class="username">
                  书友1061022006
                  <span class="flag good">精</span>
                </div>

                <p class="content js-textArea">雷霆漩涡中黑白紫青黑共五种雷霆能量。。。呵呵，作者又花了半章形容五雷法，我已经会背了，谢谢作者。</p>

                <div class="info">
                  <span class="time">2天前</span>
                  <span class="reply js-checkoutReply">3</span>
                  <span class="line"></span>
                  <span class="good js-goodComment">54</span>
                </div>
              </div>
              <div class="js-replysView"></div>
            </li>
          </ul>
          <div class="btn-toall">
            <a href="#">查看全部 &gt;</a>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="rightarea">
        <div class="user-orther">
          <div class="header">看过这本书的还看过</div>
          <ul class="clear">
            <li>
              <a href="#">
                <p class="title">老夫少妻的互撩日常</p>
              </a>
              <p class="auth">柳赋雨</p>
              <p class="desc">《霸总夫妇的互撩日常》已发，本书姐妹篇，求支持。家族企业狗带，私生女江梦娴被八万块卖给了一个老光棍做</p>
            </li>

            <li>
              <a href="#">
                <p class="title">第一战神</p>
              </a>
              <p class="auth">我本纯洁</p>
              <p class="desc">千万级销量作家我本纯洁火爆玄幻作品来袭——少年杨武遭美女陷害入狱，侥幸获神犬之助，破狱场，驰沙场，揽</p>
            </li>
          </ul>
        </div>
        <div class="rank-list">
          <div class="comp-ranks normal js-ranks">
            <ul class="cp-ranks-navs alone js-ranksNavs">
              <li class="active">重磅推荐</li>
            </ul>
            <ul class="cp-ranks-list js-ranksList">
              <li>
                <a target="_blank" href="#">
                  <p class="title">
                    <i class="no">1</i>先爱你为敬
                  </p>
                  <div class="info">
                    <img src="http://img-tailor.11222.cn/bcv/big/1124607899686.jpg" class="cover" />
                    <div class="auth">画早</div>
                    <div class="desc">
                      现实的重压，将极度骄傲的周冕，连拖带拽地推进内衣行业里摩擦摩擦。
                      即便他作为内衣
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <p class="title">
                    <i class="no">2</i>私奔后的种田生活
                  </p>
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <p class="title">
                    <i class="no">3</i>神医毒妃：病娇王爷请自重
                  </p>
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <p class="title">
                    <i class="no">4</i>宠婢
                  </p>
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <p class="title">
                    <i class="no">5</i>神探死亡倒计时
                  </p>
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <p class="title">
                    <i class="no">6</i>重生之都市修真者
                  </p>
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <p class="title">
                    <i class="no">7</i>绝世至尊
                  </p>
                </a>
              </li>

              <li>
                <a target="_blank" href="#" data-clog="a8$$bid=7933656">
                  <p class="title">
                    <i class="no">8</i>乡村小邪医
                  </p>
                </a>
              </li>

              <li>
                <a target="_blank" href="#" data-clog="a9$$bid=7067742">
                  <p class="title">
                    <i class="no">9</i>剑逆诸天
                  </p>
                </a>
              </li>
            </ul>
            <div class="page-data js-ranks-data"></div>
          </div>
        </div>
      </div>
      <!-- 回到顶部 -->
      <div class="comp-web-backtop hide js-webBackTopView" style="display: block;">
        <div class="comp-web-bt-width page-width">
          <div class="backtop-btn js-btn">返回顶部</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { METHODS } from "http";
import { log } from 'util';
export default {
  data() {
    return {
      // 登录
      dialogVisible: false,
      // 评论
      text: "",
      textarea: "",
      centerDialogVisible: false,
      conheight: {
        height: ""
        
      }
    };
  },
  methods: {
    commentgd() {
      // 
       this.conheight.height = 250+"px";
      // this.$refs.aa.style.height = 250 + "px";
      //  this.conheight.height = 250+"px";
    },
    commentqx() {
      // console.log(this.$el);
      this.$refs.aa.style.height = 40 + "px";
      // this.conheight.height = 40+"px";
      // console.log('3ww');
      
    },
    
  }
};
</script>

<style >
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

/* 最新章节 */
.leftarea {
  width: 77.86%;
  float: left;
  margin-top: 24px;
  margin-bottom: 40px;
}
.leftarea .lastchapter {
  color: #1d1e20;
}
.leftarea .lastchapter .titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.leftarea .lastchapter .titleline .title {
  padding: 0 18px 0 14px;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../assets/images/title_icon_cate.png) no-repeat 0 0
    #fff;
  background-size: auto 22px;
}
.leftarea .lastchapter .chapname {
  font-size: 16px;
  height: 16px;
  line-height: 18px;
  margin: 10px 0;
  padding-left: 14px;
}
.leftarea .lastchapter .chapcont {
  padding-left: 14px;
  font-size: 12px;
  line-height: 20px;
  color: #999;
  max-height: 100px;
  overflow: hidden;
}
.leftarea .lastchapter .titleline:before {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background-color: #e8f3f1;
  margin-top: 9px;
}
a:hover {
  color: #ff8e15;
}
/* 书友评论 */
.leftarea .comment-view .titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  overflow: hidden;
  margin: 14px 0;
}
.leftarea .comment-view .titleline span.title {
  padding: 0 18px 0 14px;
  float: left;
  background: url(../assets/images/title_icon_cate.png) no-repeat 0 0
    #fff;
  background-size: auto 22px;
  height: 22px;
  overflow: hidden;
}
.leftarea .comment-view .titleline span.title i {
  color: #999;
  font-size: 14px;
  font-style: normal;
}
.leftarea .comment-view .titleline span.btn {
  float: right;
  width: 80px;
  height: 20px;
  border: 1px solid #f37315;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #f37315;
  border-radius: 3px;
}
.leftarea .comment-view .titleline span.btn a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #f37315;
}
/* 登录 */
.el-dialog {
  margin-top: 0px;
  padding: 50px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 300px;
}
.el-dialog input {
  border: 0;
  border-bottom: 1px solid #ededed;
  line-height: 36px;
  height: 36px;
  font-size: 16px;
  color: #1d1e20;
  display: block;
  width: 100%;
  margin-bottom: 26px;
}
.el-dialog .inter {
  line-height: 18px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  position: relative;
  font-size: 12px;
  margin-bottom: 20px;
  color: #999;
}
.el-dialog .select {
  width: 12px;
  height: 12px;
  font-size: 12px;
  border: 2px solid #ededed;
  position: absolute;
  left: 0;
  top: 1px;
}
.el-dialog .submit.unable {
  background: #cccccc;
  text-align: center;
  color: #fff;
}

.el-dialog .submit {
  background: #f36f20;
  text-align: center;
  color: #fff;
  height: 40px;
  border-radius: 6px;
  line-height: 40px;
  cursor: pointer;
}
.el-dialog .prompt.login .operates {
  text-align: center;
  margin-top: 15px;
}
.el-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  overflow: hidden;
  margin: 0;
}
.el-dialog {
  margin-top: 0px;
  padding: 50px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 24%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 300px;
}
element.style {
  /* margin-top: 15vh; */
  margin-top: 0px;
  width: 30%;
}

.el-dialog .operates {
  text-align: center;
  margin-top: 15px;
}
.el-dialog .operates span:first-child {
  border-right: 2px solid #f1f1f3;
}
.el-dialog .operates span {
  display: inline-block;
  width: 72px;
  height: 18px;
  color: #f36f20;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
}
.el-textarea .el-input__count {
  color: #909399;
  background: #f8f8f8;
  position: absolute;
  font-size: 15px;
  width: 30px;
  bottom: 5px;
  top: 200px;
  left: 0px;
}

/* 登录才能评论 */
.leftarea .comment-view .publish {
  height: 42px;
  border: 1px solid #dcdcdc;
  background: #f8f8f8;
  color: #999;
  line-height: 42px;
  text-indent: 19px;
  font-size: 14px;
}
.leftarea .comment-view div.writearea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  background: #f8f8f8;
  padding: 12px 16px;
  margin-top: 10px;
  color: #999;
  font-size: 14px;
}
.leftarea .comment-view div.writearea textarea {
  width: 100%;
  height: 200px;
  line-height: 20px;
  background: transparent;
  border: 0;
  resize: none;
  margin-top: -8px;
}
/* 评论 */
.leftarea .comment-view div.writearea .textinfo {
  width: 98%;
  height: 30px;
  line-height: 30px;
  margin-top: -2px;
  margin-left: 25px;
}

.leftarea .comment-view div.writearea .textinfo .wordcount,
.leftarea .comment-view div.writearea .textinfo .notice {
  float: left;
  height: 100%;
}
.leftarea .comment-view div.writearea .textinfo .notice {
  margin-left: 20px;
  color: #ff4242;
}
.leftarea .comment-view div.writearea .textinfo .submit,
.leftarea .comment-view div.writearea .textinfo .abort {
  float: right;
  width: 110px;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #f36f20;
  background: #f36f20;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.leftarea .comment-view div.writearea .textinfo .abort {
  margin-right: 14px;
  background: #fff;
  color: #f36f20;
}
.el-textarea .el-input__count {
  color: #909399;
  background: #f8f8f8;
  position: absolute;
  font-size: 15px;
  width: 30px;
  bottom: 5px;
  left: -6px;
     top: 197px;
}
.leftarea .comment-view div.writearea {
  width: 100%;
  height: 40px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  background: #f8f8f8;
  padding: 12px 16px;
  margin-top: 10px;
  color: #999;
  font-size: 14px;
}

.leftarea .comment-view .comments {
  width: 100%;
}
.leftarea .comment-view .comments li {
  margin-top: 12px;
  padding-bottom: 14px;
  border-bottom: 1px #e4e4e4 dashed;
  word-wrap: break-word;
}
.leftarea .comment-view .comments li .comment {
  width: 100%;
  box-sizing: border-box;
  padding-left: 84px;
  position: relative;
}
.leftarea .comment-view .comments li .comment .photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.leftarea .comment-view .comments li .comment .photo img {
  width: 100%;
  height: 100%;
}
.leftarea .comment-view .comments li .comment .username {
  font-size: 16px;
  line-height: 32px;
  height: 32px;
  vertical-align: middle;
  position: relative;
  z-index: 2;
}
.leftarea .comment-view .comments li .comment .username .flag.author {
  border-color: #dd641d;
  background-color: #f36f20;
}
.leftarea .comment-view .comments li .comment .username .flag.top {
  border-color: #e26580;
  background-color: #f9708d;
}
.leftarea .comment-view .comments li .comment .username .flag.good {
  border-color: #e89568;
  background-color: #ffa473;
}
.leftarea .comment-view .comments li .comment .username .flag {
  font-size: 12px;
  padding: 2px 3px;
  vertical-align: middle;
  color: #fff;
  border: 1px solid #fff;
  display: inline-block;
  line-height: 12px;
  border-radius: 3px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.leftarea .comment-view .comments li .comment .content {
  line-height: 25px;
  font-size: 15px;
  width: 100%;
  color: #999;
  text-align: justify;
  /* height: 99px;
  overflow: hidden; */
}
/* 展示全文 */
.leftarea .comment-view .comments li .comment .more {
  height: 14px;
  line-height: 14px;
  font-size: 14px;
}
.leftarea .comment-view .comments li .comment .more p {
  float: right;
  color: #f36f20;
  cursor: pointer;
}
.leftarea .comment-view .comments li .comment .more p:after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background: url(../assets/images/item_more_flag.png);
  margin-left: 4px;
}
/* 日期 */
.leftarea .comment-view .comments li .comment .info {
  line-height: 18px;
  height: 18px;
  font-size: 14px;
  margin-top: 6px;
}
.leftarea .comment-view .comments li .comment .info .time {
  float: left;
  color: #999;
}
.leftarea .comment-view .comments li .comment .info .reply,
.leftarea .comment-view .comments li .comment .info .good {
  float: right;
  padding-left: 24px;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.leftarea .comment-view .comments li .comment .info .reply:before,
.leftarea .comment-view .comments li .comment .info .good:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  background: url(../assets/images/item_flags.png) no-repeat 0 0;
}
.leftarea .comment-view .comments li .comment .info .good:before {
  background-position: -20px 0;
}
.leftarea .comment-view .comments li .comment .info .line {
  height: 100%;
  width: 1px;
  background: #e2e2e2;
  margin: 0 9px;
  float: right;
}
/* 查看全部 */
.leftarea .comment-view .btn-toall {
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  margin-top: 20px;
  color: #f37315;
}
.leftarea .comment-view .btn-toall a {
  color: #f37315;
}

/* 右边 */
.rightarea {
  width: 220px;
  float: right;
  margin-top: 24px;
}
.rightarea .user-orther {
  overflow: hidden;
  color: #1c0800;
  margin-top: 14px;
}
.rightarea .user-orther .header {
  font-size: 16px;
  line-height: 22px;
  height: 22px;
  overflow: hidden;
  margin-bottom: 14px;
  padding-left: 14px;
  background: url(../assets/images/title_icon_cate.png) no-repeat 0 0
    #fff;
  background-size: auto 22px;
}
.rightarea .user-orther li {
  width: 100%;
  height: 84px;
  margin-bottom: 14px;
  box-sizing: border-box;
  padding-left: 8px;
  border-left: 4px solid #eee;
  position: relative;
}
.rightarea .user-orther li p.auth {
  color: #999;
  margin: 7px 0 9px;
}
.rightarea .user-orther li p.title,
.rightarea .user-orther li p.auth {
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rightarea .user-orther li p.desc {
  font-size: 12px;
  line-height: 20px;
  height: 40px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 重磅推荐 */
.comp-ranks,
.comp-ranks.normal {
  width: 100%;
}
.comp-ranks .cp-ranks-navs.alone,
.comp-ranks.normal .cp-ranks-navs.alone {
  text-align: left;
}

.comp-ranks .cp-ranks-navs,
.comp-ranks.normal .cp-ranks-navs {
  width: 100%;
  height: 34px;
  line-height: 34px;
  display: flex;
  font-size: 14px;
  border-bottom: 1px solid #d6dbe0;
  text-align: center;
  color: #999;
}
.comp-ranks .cp-ranks-navs li.active,
.comp-ranks.normal .cp-ranks-navs li.active {
  font-weight: bold;
  color: #1d1e20;
  position: relative;
}

.comp-ranks .cp-ranks-navs li,
.comp-ranks.normal .cp-ranks-navs li {
  flex: 1;
  height: 100%;
  cursor: pointer;
}
.comp-ranks .cp-ranks-navs li.active:after,
.comp-ranks.normal .cp-ranks-navs li.active:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 3px;
  background: #f37315;
}
.comp-ranks .cp-ranks-list,
.comp-ranks.normal .cp-ranks-list {
  width: 100%;
  margin-top: 20px;
}
.comp-ranks .cp-ranks-list li,
.comp-ranks.normal .cp-ranks-list li {
  line-height: 18px;
  margin-bottom: 16px;
  color: #1d1e20;
  font-size: 13px;
}
.comp-ranks .cp-ranks-list li .title,
.comp-ranks.normal .cp-ranks-list li .title {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 24px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.comp-ranks .cp-ranks-list li .title i.no,
.comp-ranks.normal .cp-ranks-list li .title i.no {
  color: #fff;
  width: 18px;
  height: 18px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  background-color: #d2d2d2;
  font-style: normal;
}
.comp-ranks .cp-ranks-list li:nth-child(1) i.no,
.comp-ranks .cp-ranks-list li:nth-child(2) i.no,
.comp-ranks .cp-ranks-list li:nth-child(3) i.no,
.comp-ranks.normal .cp-ranks-list li:nth-child(1) i.no,
.comp-ranks.normal .cp-ranks-list li:nth-child(2) i.no,
.comp-ranks.normal .cp-ranks-list li:nth-child(3) i.no {
  background-color: #f37315;
}
/* 图 */
.comp-ranks .cp-ranks-list li .info,
.comp-ranks.normal .cp-ranks-list li .info {
  width: 100%;
  height: 103px;
  position: relative;
  box-sizing: border-box;
  padding-left: 92px;
  margin-top: 10px;
  overflow: hidden;
}
.comp-ranks .cp-ranks-list li .info .auth,
.comp-ranks.normal .cp-ranks-list li .info .auth {
  width: 100%;
  overflow: hidden;
  height: 14px;
  line-height: 14px;
  color: #999999;
  margin-top: 10px;
}
.comp-ranks .cp-ranks-list li .info .desc,
.comp-ranks.normal .cp-ranks-list li .info .desc {
  height: 66px;
  line-height: 22px;
  font-size: 12px;
  color: #999;
  text-align: justify;
  margin-top: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.comp-ranks .cp-ranks-list li .info .cover,
.comp-ranks.normal .cp-ranks-list li .info .cover {
  height: 100%;
  width: 82px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #eee;
}
/* 回到顶部 */
.comp-web-backtop {
  width: 100%;
  height: 0px;
  position: fixed;
  z-index: 10;
  left: 0;
  bottom: 224px;
  font-size: 12px;
}
.page-width {
  width: 1120px;
  margin: 0 auto;
}
.comp-web-backtop .comp-web-bt-width .backtop-btn {
  cursor: pointer;
  background: url(../assets/images/back_top.png) no-repeat center top;
  background-size: 50px 50px;
  padding-top: 50px;
  line-height: 20px;
  float: right;
  text-align: center;
  color: #d6dbe0;
}
</style>