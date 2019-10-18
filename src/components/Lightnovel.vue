<template>
  <div class="lightnovel">
    <!-- 布局 -->
    <div class="common clear">
      <!-- 轻小说推荐 -->
      <el-row :span="24" class="titleline">
        <span class="title">轻小说推荐</span>
      </el-row>

      <!-- 左边立即阅读 -->
      <el-container>
        <el-main class="clear" style="padding: 0px;">
          <div class="main">Main</div>

          <!-- 左下第二个左边模块(图书、作者介绍) -->
          <div class="secrec_box">
            <ul class="secrec">
              <li v-for="item in localData" :key="item.id">
                <a :href="'/book/'+item.id" class="demo">
                  <img :src="item.novel_url" />
                  <p class="bookname">{{ item.novel_title }}</p>
                </a>
                <p class="author">
                  <a :href="'/author/'+item.id"
                    class="demo deem_color"
                  >{{ item.novel_author }}</a>
                </p>
                <p class="desc">{{ item.novel_desc }}</p>
              </li>
            </ul>
            <!-- 左下第二个右边模块(类型、书名) -->
            <div class="thirdrec">
              <ul class="clear">
                <li class="clear" v-for="item in thirdrec" :key="item.id">
                  <a :href="'/book/'+item.id" class="demo">
                    <span>[{{ item.novel_classify }}]</span>
                    {{ item.novel_title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-main>
        <!-- 右边冒险、搞笑、热门标签... -->
        <el-aside class="clear" style="width:217px">
          <div class="righteare clear">
            <!-- 冒险 -->
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
            <!-- 搞笑 -->
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
            <!-- 纯爱 -->
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
            <!-- 热门标签 -->
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

      <!-- 本宫腿毛一尺长图片条 -->
      <div class="banner-advert page-width">
        <a href="#" class="demo">
          <img src="../assets/images/2019070217055008.jpg" />
        </a>
      </div>

      <!-- 精品热推模块 -->
      <div class="goodrec page-width clear" style="margin-bottom: -16px;">
        <!-- 左边图书、介绍 -->
        <div class="lefteare">
          <div class="titleline">
            <span class="title">精品热推</span>
          </div>
          <div class="booklist">
            <div class="item" v-for="item in Hotbook" :key="item.id">
              <a href="#" class="demo">
                <img :src="item.novel_url" />
                <p class="bookname">{{item.novel_title}}</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">{{item.novel_author}}</a>
              </p>
              <p class="desc">{{item.novel_desc}}</p>
            </div>
          </div>
        </div>
        <!-- 右边本周强推 -->
        <div class="comp-ranks gold js-ranks float_right">
          <ul class="cp-ranks-navs alone js-ranksNavs">
            <li class="active">本周强推</li>
          </ul>
          <ul class="cp-ranks-list js-ranksList">
            <li @mousemove="changeObj(item5)" v-for="(item5,index) in array" :key="index">
              <a href="#" class="demo">
                <p class="title">
                  <i class="no">{{item5.id}}</i>
                  {{item5.title}}
                </p>
                <div class="info" ref="info" v-show="item5.currentEnce">
                  <img :src="item5.imgSrc" class="cover" />
                  <div class="auth">{{item5.author}}</div>
                  <div class="desc">{{item5.describe}}</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 死神的新娘图片 -->
      <div class="banner-advert page-width">
        <a href="#" class="demo">
          <img src="../assets/images/2019070217071804.jpg" />
        </a>
      </div>
      <!-- 新书速推 -->
      <div class="newrec page-width clear">
        <div class="titleline">
          <span class="title">新书速推</span>
        </div>
        <!-- 左边第四面强 -->
        <div class="lefteare">
          <div class="top">
            <a href="#" class="demo">
              <p class="bookname">第四面墙</p>
            </a>
            <div class="info">
              <a href="#" class="demo">
                <img src="../assets/images/1120117874697.jpg" />
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">陌白</a>
              </p>
              <p class="desc">人类舍弃去外太空寻找生命，想要打破‘第四面墙’来探索未知的领域和生物，却忽略了在维度夹缝中的生命体，它们给人类带来的不只是惊喜，还有灾难。</p>
            </div>
          </div>
          <!-- 我家盟主没舅了、怪谈校区 -->
          <ul class="listrec">
            <li>
              <a href="#" class="demo">
                <p class="title">我家盟主没舅了</p>
              </a>
              <p class="auth">
                <a href="#" class="demo deem_color">方片儿柴郡猫</a>
              </p>
              <p class="desc">
                死因成谜，反派魔王。身后事业全凉凉。一朝穿越鸠占鹊，炮灰弟子惊坐床。跑路作恶拆家忙，无奈阴差逢阳错，武林美名身上扛。忙者匆匆欲归去，江湖风雨动弥彰。刀光迸裂寒剑影，四海春秋空苍苍。
                这是一个死因成谜的反派魔王不幸穿越成炮灰某正派弟子，发誓杀人放火报复社会，结果求锤不得锤的故事。
              </p>
            </li>
            <li>
              <a href="#" class="demo">
                <p class="title">怪谈校区</p>
              </a>
              <p class="auth">
                <a href="#" class="demo deem_color">千钧三两</a>
              </p>
              <p class="desc">
                校外，与魔鬼做交易的拍卖行，穿梭阴阳的233路公交，恐怖邮差
                校内，恶灵许愿树，三万层台阶怪谈，阶梯教室百鬼大讲座
                这片校区镇压这往生门，封印岌岌可危，阴气外泄，校内外诡异之事层出不穷，怪谈不断。
                这么危险的地方，要不……转学吧？
                转学？
                我，陆小白！当代玄学大师，能抓鬼，看风水，安坟，卜卦，怕个锤子！
              </p>
            </li>
          </ul>
        </div>
        <!-- 图书、作者、简介 -->
        <div class="righteare">
          <div class="booklist">
            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1140007801299.jpg" />
                <p class="bookname">贫穷大王要翻身</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">大尾巴鱼</a>
              </p>
              <p class="desc">陈小轩下定决心要建设自己的领土，凭借着从现代带来的知识，开发出石英矿，远销海内外。获得巨额资产……</p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1164387823153.jpg" />
                <p class="bookname">终末勇者的网游无双</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">不笑喵</a>
              </p>
              <p class="desc">
                异世界冒险者竟硬核穿越到网游世界？
                爱人失忆，队友变成NPC，他要只身一人面对氪金玩家、强肝玩家，甚至是封测者。
                虽然是异世界土著，却熟知副本攻略、装备出处。
                公会大战，世界boss，揭穿游戏制作者的阴谋。
                他化身终末勇者，开启网游无双！
              </p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1196557853712.jpg" />
                <p class="bookname">有人正在谋杀全球</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">千秋清流</a>
              </p>
              <p
                class="desc"
              >当肉体已经不在成为精神的束缚，网络可以承载人的灵魂的时候，我们应该生活在宛若天堂般的虚拟世界中享受着生活，还是在地狱般的现实中面对残酷的未来。真相是残酷的，美好的是谎言，那么，你愿意接受的，是真相，还是谎言？</p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1152147818620.jpg" />
                <p class="bookname">单身是病</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">空桑从女</a>
              </p>
              <p class="desc">
                21世纪的大学生艾小爱在年满二十岁的时候忽然穿越到了一个认为单身是病的主题世界。在这个世界中，男生女生到了二十岁都必须要找到互相爱慕的伴侣，否则将会被送去专业的主题医院进行治疗。在主题世界中，单身是一种病，极罕见又难治疗的病征。直到找到愿意跟他一起生活的伴侣这才算是根治了病征。
                由于“单身”这种病传染性很强（思维传播），所以必须尽快跟正常人隔离开。
              </p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1135087817543.jpg" />
                <p class="bookname">我的女儿来自未来</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">白衣乱武</a>
              </p>
              <p class="desc">
                陨石落入地球，陨石上携带者大量不知名辐射，导致地球所有生物发生异变进化。
                嘤嘤嘤必杀技！
                你叫嘤嘤嘤！
              </p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1163367813451.jpg" />
                <p class="bookname">穿越者救助指南</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">知之</a>
              </p>
              <p class="desc">
                刚刚参加完高考的官歌被5000万奖学金吸引，稀里糊涂成为了穿越者救助大学地球分校的新生，目的就是要救助从地球穿越到其他世界，或从其他世界穿越到地球的悲催穿越者们。
                不小心附身到了太监身上？放心，我帮你；穿越后抄袭古诗词差点被砍头？赶紧拨打我们的热线；在异世界练习魔法走火入魔了，别怕，我们可以重新再穿一次……
                哦对了，我们的救助是收费的，这是您的账单！
              </p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1102487809351.jpg" />
                <p class="bookname">我的妹妹是阎王</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">柠檬不酸</a>
              </p>
              <p
                class="desc"
              >马超是一名先天性地中海贫血患者，医生断言他只能活到十八岁，为了根植他的疾病，父母生了二胎配型，出门打工积攒治疗费用，妹妹的出生也是为了救治马超。对此马超并不知情，直到有一天马超考上了高中……</p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1122657801839.jpg" />
                <p class="bookname">幽灵船</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">火焰</a>
              </p>
              <p
                class="desc"
              >在潜能开发下，人类基因突变，随着退化基因的越来越强大，人类才发现，这是噩梦的开始，第一批潜能开发的人类，已经成了人类社会的噩梦。主角必须找到人类基因的退化密码，才能杜绝局势的进一步恶化。</p>
            </div>

            <div class="item">
              <a href="#" class="demo">
                <img src="../assets/images/1145427873722.jpg" />
                <p class="bookname">傲视江湖</p>
              </a>
              <p class="author">
                <a href="#" class="demo deem_color">懒猫打挺</a>
              </p>
              <p
                class="desc"
              >二十年前，六道门门主，身兼大随镇南王的赫连战，为大随镇守边界功高盖主，被随皇串通众势力联手消灭。二十年后，当年赫连战的余党组建暗组织罗刹门，开始在江湖中兴风作浪，妄图为赫连战报仇。六道门仅剩一支的人道宗宗主眼见罗刹门作乱，于是派遣四名弟子下山，想要阻止这场动乱，可是却没想到所有的事情都开始慢慢随着这四名弟子转动起来，江湖、天下都一起陷入其中。</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 恋爱过敏症图片 -->
      <div class="banner-advert page-width">
        <a href="#" class="demo">
          <img src="../assets/images/2019070217083857.jpg" />
        </a>
      </div>
      <!-- 猜你喜欢导航条 -->
      <div class="linkrec page-width clear">
        <div class="titleline">
          <span class="title">猜你喜欢</span>
        </div>
        <!-- 图书、作者介绍 -->
        <div class="booklist">
          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/1194617789686.jpg" />
              <p class="bookname">救命！我变成主角了！</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">莫凡凡</a>
            </p>
            <p
              class="desc"
            >顶着超长头衔的程晓声，一直想要丢掉所有光环融进城市与校园的生活中，每天都在努力扮演着普通市民A的角色，但终于有一天命运还是没有放过他，突然之间在他眼中的整个世界都变了……为什么？为什么有些人的头顶上会出现一个金灿灿的问号？</p>
          </div>

          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/201811271314283236.jpg" />
              <p class="bookname">我家妖男又饿了</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">奶凶妖姬</a>
            </p>
            <p
              class="desc"
            >穿越之后发现自己的处境居然好比西游记里唐三藏，是某个牛逼仙女转世之躯体，世间传闻吃了她的肉便可以长生不老得道成仙！于是呼，各路妖男都将她锁定为觅食目标，却一个个反被她捉弄得七零八落。</p>
          </div>

          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/1104767699668.jpg" />
              <p class="bookname">妹妹们是问题偶像！</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">zakuro石榴</a>
            </p>
            <p class="desc">
              “今后，请多多指教。”
              与从未见面的朋友的双胞胎妹妹如是说道，展开的却是需要经历考验的同居生活。背负着罪恶而许下的诺言，陆尘发誓去照顾自己死去挚友的两个妹妹。
              “想要成为偶像？”
              而得知了妹妹们的梦想后，同居开始的偶像养成日记，以不规则的叙写方式混合着悲伤和喜悦、以及和其他女孩的交织展开了。
              “尘，该吃饭了哦。”
              “喂！蠢货！本小姐的晚餐呢？！”
              而性格迥异的姐妹，也很难对付。
            </p>
          </div>

          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/1149667787708.jpg" />
              <p class="bookname">我在美少女虫娘学院当老师</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">少点辣椒</a>
            </p>
            <p class="desc">
              这是虫娘从古至今就存在的平行世界，姜炎意外穿越成为一名老师。
              一招降服黑寡妇，两下戳破独角仙。
              住得了虫娘宿舍，下得了美女澡堂。
              总之，这是一个男主带领他的虫娘美少女一起快乐地奋斗顺便拯救世界的故事。
            </p>
          </div>

          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/1105377787147.jpg" />
              <p class="bookname">间谍少爷</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">狮鹫骑士</a>
            </p>
            <p
              class="desc"
            >赴日留学、过着悠哉生活的少爷在回乡之后惊觉东北成了“满洲国”，天下早已大乱。作为富庶人家的少爷，他开始了表面上是纨绔子弟、暗地里支持反抗组织的生活。</p>
          </div>

          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/1137097795044.jpg" />
              <p class="bookname">恋爱过敏症</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">八月未央</a>
            </p>
            <p
              class="desc"
            >18岁元气美少女沈慕念有着一个不为人知的秘密，就是自己曾经在高中拼命想要给自己喜欢的人告白时过敏了，并且险些死掉，而后沈慕念发现只要自己一动感情，就会立马呼吸急促，浑身长满红疹子，越想便越严重，所以自那以后只能关闭心扉，做一名清心寡欲的姑娘。并且沈慕念脱敏的治疗方式只有一个，那就是看恋爱向的漫画，越是肉麻，越是玛丽苏，过敏症状就消失的越快。所以男朋友是什么？能吃吗？！</p>
          </div>

          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/1130237787143.jpg" />
              <p class="bookname">人类终结之日</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">会飞的猪人</a>
            </p>
            <p
              class="desc"
            >科技的发展促使人类毁灭，最后的人类把希望寄托在过去，将唯一的机器人投入时间穿梭机器。而在另一条时间线上，对此毫不知情的洛伦站在雪白的北道，丝毫没意识到自己从一开始就是一个悲剧。好像也只能这样了吧。</p>
          </div>

          <div class="item">
            <a href="#" class="demo">
              <img src="../assets/images/1117477801943.jpg" />
              <p class="bookname">我家乌龟成精了</p>
            </a>
            <p class="author">
              <a href="#" class="demo deem_color">蚂蚁蛋</a>
            </p>
            <p class="desc">
              方吟水（男）醒来发现自己坑爹的变成了一只龟……在现代还是普遍又廉价的那种！
              正在他艰难地背着沉重的壳，一步一步地往前爬的时候，他被人翻了个壳儿，四脚朝天地蹬着腿儿。男人淡若琉璃的清冷眸子微含，微微弯起的眼角带着一丝笑意，带有质感的性感嗓音低声问他，“龟儿，你要去哪？”
              缱绻的声调，茗儿、嫣儿、翠儿、放在别的名字上都是无比动听的称呼，带上了那个字，方吟水只想吐血三升，‘龟儿，你全家都是龟儿。’
            </p>
          </div>
        </div>
      </div>

      <!-- 底部发狂图片导航图 -->
      <div class="banner-advert page-width">
        <a href="#" class="demo">
          <img src="../assets/images/2019070217100551.jpg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        {
          id: 1,
          imgSrc: require("../assets/images/1145637829226.jpg"),
          author: "轻舟",
          currentEnce: true,
          describe:
            "来到异世界之后的精灵少女，最犯愁的事情，不是精灵不会魔法，而是精灵手里没有钱。",
          title: "精灵少女的异世界马戏团生涯"
        },
        {
          id: 2,
          imgSrc: require("../assets/images/1169137823196.jpg"),
          author: "菠萝包",
          currentEnce: false,
          describe:
            "崇尚修真的少年，阴差阳错之下来到了仙境。却被告知，我们不修真，我们学魔法吧！",
          title: "我们不教修仙，教魔法！"
        },
        {
          id: 3,
          imgSrc: require("../assets/images/1153777825575.jpg"),
          author: "江左",
          currentEnce: false,
          describe: "逗逼、搞笑、一个学霸的成长与守护之路。",
          title: "修仙界学霸"
        },
        {
          id: 4,
          imgSrc: require("../assets/images/1137827830393.jpg"),
          author: "右手染红尘",
          currentEnce: false,
          describe:
            "出身贫民窟的白小白在达到十六岁后成功觉醒了世界上第一个心灵类异能女装，异能的力量",
          title: "我！是个杀手"
        },
        {
          id: 5,
          imgSrc: require("../assets/images/1162157829678.jpg"),
          author: "虫子男爵",
          currentEnce: false,
          describe:
            "公元33世纪，陆青从冰封的洞穴醒来，失去了所有的记忆。洞穴之外的世界沧海桑田，厚",
          title: "诡诞纪元"
        },
        {
          id: 6,
          imgSrc: require("../assets/images/1120117874697.jpg"),
          author: "月有北安",
          currentEnce: false,
          describe:
            "一个人，究竟可以倒霉到什么地步？亲人惨死，家族覆灭，曾经在江湖上赫赫有名的侠二",
          title: "这个江湖风太大"
        },
        {
          id: 7,
          imgSrc: require("../assets/images/201809271723143753.jpg"),
          author: "好玩的饺子",
          currentEnce: false,
          describe:
            "互相羡慕对方生活的男女两人，在开学不久一天早上醒来，发现两人之间互换了身体？在没",
          title: "如果我是Ta"
        },
        {
          id: 8,
          imgSrc: require("../assets/images/1137907838187.jpg"),
          author: "走到天边看海",
          currentEnce: false,
          describe:
            "刘越穿越到这个时代本是胸无大志，只想浪荡的过完这一生，开始为了自己的安危而查案，",
          title: "痞子黄檀"
        },
        {
          id: 9,
          imgSrc: require("../assets/images/1169327831495.jpg"),
          author: "八口",
          currentEnce: false,
          describe:
            "公元2050年，因不明污染，女性不断减少，一款名为拯救少女的游戏风靡全球，玩游戏",
          title: "前进, 拯救少女"
        },
        {
          id: 10,
          imgSrc: require("../assets/images/1180837787059.jpg"),
          author: "小梦大师",
          currentEnce: false,
          describe:
            "末日到来的我要拯救世界么？当然！我不仅要拯救世界，我还要拯救世界里生存的",
          title: "末日到来的我要拯救世界么"
        }
      ],
      localData: [],
      // 顶部中间12条
      thirdrec: [],
      // 精品热推书名9条
      Hotbook: [],
      dataHotbook: []
    };
  },
  methods: {
    changeObj(item) {
      this.array.forEach(item1 => {
        item1.currentEnce = false;
      });
      item.currentEnce = true;
      this.$refs.info.display = "block";
    }
  },
  // 渲染数据
  async beforeCreate() {
    const { data: data1 } = await this.$http.get("/designation?id1=8,4");
    this.localData = data1.data;

    const { data: data2 } = await this.$http.get(
      "/designation?id1=6,8,9,10,20,30,40,12,32,34,12,,19,34,22"
    );
    this.thirdrec = data2.data;
    // 精品热推9条书
    const { data: dataHotbook } = await this.$http.get(
      "/designation?id1=5,7,17,23,55,12,22,44,55"
    );
    this.Hotbook = dataHotbook.data;

    // 本周强推10条
    // const { data: data3 } = await this.$http.get("/novels?type=0&per_page=10");
    // this.array = data3.data;
    // console.log(this.array);

    // this.array.forEach((item, i) => {
    //   if (i == 0) {
    //     item.currentEnce = true;
    //   } else {
    //     item.currentEnce = false;
    //   }
    //   console.log(item);
    // });
  }
};
</script>

<style lang="less" scoped>
.lightnovel {
  width: 100%;
  height: 100%;
  font-family: "Microsoft YaHei";
}
a.deem_color {
  color: #a3a3a3;
}
a.deem_color:hover,
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
  margin: 0 0 20px 0;
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

// 右边冒险、搞笑、热门标签...
.righteare {
  float: right;
  width: 218px;
}

// 冒险
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

// 搞笑
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

// 纯爱
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

// 热门标签
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

// 左下第二个左边模块(图书、作者介绍)
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

// 左下第二个右边模块(类型、书名)
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

// 本宫腿毛一尺长图片条
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

// 精品热推模块
.page-width {
  width: 1120px;
  margin: 0 auto;
  // margin-bottom: -16px;
}
.goodrec .lefteare {
  width: 78.4%;
  float: left;
}
.goodrec .lefteare .titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.goodrec .lefteare .titleline .title {
  padding: 0 18px 0 14px;
  position: absolute;
  left: 55px;
  top: 0;
  background: url("../assets/images/title_icon_cate.png") no-repeat 0 0 #fff;
  background-size: auto 22px;
}

// 精品热推图书、介绍
.goodrec .lefteare .booklist {
  width: 100%;
  text-align: justify;
  margin-top: 21px;
  font-size: 0;
}
.mainrec .lefteare .secrec li {
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
.goodrec .lefteare .booklist .item {
  width: 265px;
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  height: 120px;
  margin-bottom: 20px;
  margin-right: 40px;
  position: relative;
  box-sizing: border-box;
  padding-left: 106px;
  color: #1d1e20 !important;
  overflow: hidden;
}
.goodrec .lefteare .booklist .item:nth-of-type(3n) {
  margin-right: 0px !important;
}
.goodrec .lefteare .booklist .item .author {
  color: #a3a3a3 !important;
  margin: 8px 0 30px;
}
.goodrec .lefteare .booklist .item img {
  width: 91px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.goodrec .lefteare .booklist .item .desc {
  color: #a3a3a3;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goodrec .lefteare .booklist .item .bookname {
  margin-top: 9px;
}

// 本周强推
.goodrec .float_right {
  width: 218px;
  height: 492px;
  float: right;
}
.comp-ranks .cp-ranks-navs li {
  flex: 1;
  height: 100%;
  cursor: pointer;
}
.comp-ranks .cp-ranks-navs li.active {
  position: relative;
  font-weight: bold;
  color: #1d1e20;
  text-align: left;
  cursor: pointer;
}
.comp-ranks .cp-ranks-navs {
  width: 100%;
  height: 34px;
  line-height: 34px;
  display: flex;
  font-size: 14px;
  border-bottom: 3px solid #ffd800;
  text-align: center;
  color: #999;
}
.comp-ranks .cp-ranks-list li,
.comp-ranks.normal .cp-ranks-list li {
  line-height: 18px;
  margin-bottom: 15px;
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
.comp-ranks.gold .cp-ranks-list li:nth-child(1) i.no,
.comp-ranks.gold .cp-ranks-list li:nth-child(2) i.no,
.comp-ranks.gold .cp-ranks-list li:nth-child(3) i.no {
  background-color: #ffd800;
}
.comp-ranks .cp-ranks-list {
  margin-top: 10px;
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
.comp-ranks .cp-ranks-list li .info .cover,
.comp-ranks.normal .cp-ranks-list li .info .cover {
  height: 100%;
  width: 82px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #eee;
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
.info {
  display: block;
}
.infoer {
  display: none;
}

// 死神的新娘图片
.banner-advert {
  margin: 24px auto;
  display: block;
  height: 90px;
  overflow: hidden;
}
.banner-advert img {
  width: 100%;
  height: 90px;
  float: left;
}

// 新书速推导航条
.newrec .titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}
.newrec .titleline .title {
  padding: 0 18px 0 48px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: url("../assets/images/title_icon_new.png") no-repeat 18px 0 #fff;
  background-size: 22px 22px;
}

// 左边第四面墙
.newrec .lefteare {
  width: 268px;
  float: left;
  padding-bottom: 28px;
  background: url("../assets/images/new_left_bg_2.png") no-repeat right bottom;
  background-color: #fff6e5;
}
.newrec .lefteare .top {
  height: 161px;
  width: 100%;
  box-sizing: border-box;
  padding: 28px 24px 0;
  background: url("../assets/images/new_left_bg_1.png") repeat-x;
  color: #1d1e20;
  position: relative;
}
.newrec .lefteare .top .bookname {
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  overflow: hidden;
  height: 18px;
}
.newrec .lefteare .top .info {
  height: 94px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 24px;
  font-size: 14px;
}
.newrec .lefteare .top .info img {
  float: left;
  height: 100%;
  width: 82px;
}
.newrec .lefteare .top .info .author,
.newrec .lefteare .top .info .desc {
  width: 128px;
  float: right;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #a9a9a9;
}
.newrec .lefteare .top .info .author {
  height: 14px;
  line-height: 14px;
  margin: 17px 0 12px;
  white-space: nowrap;
}
.newrec .lefteare .top .info .desc {
  line-height: 20px;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// 我家盟主没舅了、怪谈校区
.newrec .lefteare .listrec {
  overflow: hidden;
  color: #1c0800;
  width: 218px;
  margin: 0 auto;
}
.newrec .lefteare .listrec li {
  width: 100%;
  height: 103px;
  margin-top: 27px;
  box-sizing: border-box;
  padding-left: 12px;
  border-left: 4px solid #e4d2b1;
  position: relative;
}
.newrec .lefteare .listrec li p.title,
.newrec .lefteare .listrec li p.auth {
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.newrec .lefteare .listrec li p.auth {
  color: #757575;
  margin: 7px 0 7px;
}
.newrec .lefteare .listrec li p.desc {
  font-size: 12px;
  line-height: 20px;
  height: 60px;
  color: #757575;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

// 图书作者简介
.newrec .righteare {
  width: 73.04%;
  float: right;
}
.newrec .righteare .booklist {
  width: 100%;
  text-align: justify;
  font-size: 0;
}
.newrec .righteare .booklist .item {
  width: 265px;
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  height: 120px;
  margin-right: 10px;
  margin-bottom: 46px;
  position: relative;
  box-sizing: border-box;
  padding-left: 106px;
  color: #1d1e20;
  overflow: hidden;
}
.newrec .righteare .booklist .item:nth-of-type(3n) {
  margin-right: 0px !important;
}
.newrec .righteare .booklist .item:nth-of-type(7),
.newrec .righteare .booklist .item:nth-of-type(8),
.newrec .righteare .booklist .item:nth-of-type(9) {
  margin-bottom: 0px !important;
}
.newrec .righteare .booklist .item .author {
  color: #a3a3a3;
  margin: 8px 0 30px;
}
.newrec .righteare .booklist .item .desc {
  color: #a3a3a3;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.newrec .righteare .booklist .item img {
  width: 91px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.newrec .righteare .booklist .item .bookname {
  margin-top: 9px;
}

// 恋爱过敏症图片
.banner-advert {
  margin: 24px auto;
  display: block;
  height: 90px;
  overflow: hidden;
}
.banner-advert img {
  width: 100%;
  height: 90px;
  float: left;
}

// 猜你喜欢导航条
.linkrec .titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}
.linkrec .titleline .title {
  padding: 0 18px 0 48px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: url("../assets/images/title_icon_new.png") no-repeat 18px 0 #fff;
  background-size: 22px 22px;
}

// 作者、图书介绍
.linkrec .booklist {
  width: 100%;
  text-align: justify;
  font-size: 0;
}
.linkrec .booklist .item {
  width: 265px;
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  height: 120px;
  margin-bottom: 20px;
  position: relative;
  box-sizing: border-box;
  padding-left: 106px;
  color: #1d1e20;
  overflow: hidden;
}
.linkrec .booklist .item .author {
  color: #a3a3a3;
  margin: 8px 0 30px;
}
.linkrec .booklist .item .desc {
  color: #a3a3a3;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.linkrec .booklist .item img {
  width: 91px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.linkrec .booklist .item .bookname {
  margin-top: 9px;
}

// 底部发狂图片导航图
.banner-advert {
  margin: 24px auto;
  display: block;
  height: 90px;
  overflow: hidden;
}
</style>