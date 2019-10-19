<template>
  <div class="box">
    

    <div class="lefteare">
      <div class="titleline">
        <span class="tlle2">精品热推</span>
      </div>
      <div class="booklist">
        <div>
          <a href>
            <img src="../../public/img/1-1.jpg" alt />
            <p>天降大富豪</p>
          </a>
          <p class="author">
            <a href>乐天</a>
          </p>
          <p class="desc">被女神拒绝，被富二代侮辱，吴天以为自己这辈子都将抬不起头，但当一个美女御姐说是自己的秘书开始，一切都不一样了……</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-2.jpg" alt />
            <p>极品凡仙</p>
          </a>
          <p class="author">
            <a href>阿当先生</a>
          </p>
          <p class="desc">收个快递不小心成了试验体，装个逼不小心送个校花未婚妻</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-3.jpg" alt />
            <p>异能教官</p>
          </a>
          <p class="author">
            <a href>桃花老妖</a>
          </p>
          <p class="desc">世界顶级金牌教官身带神奇异能重归都市，本想只过大隐于市的平民生活</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-4.jpg" alt />
            <p>女总裁的最强兵王</p>
          </a>
          <p class="author">
            <a href>江湖菜鸟</a>
          </p>
          <p class="desc">【火爆新书、强烈推荐】有朝一日虎归山，我将血染半边天。</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-5.jpg" alt />
            <p>图穷匕见</p>
          </a>
          <p class="author">
            <a href>屋顶</a>
          </p>
          <p class="desc">一把遗落在圣光大陆的匕首，在这个元素世界的画卷展开到尽头时，看它是否能够改变当年的命运。</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-6.jpg" alt />
            <p>圣界苍穹</p>
          </a>
          <p class="author">
            <a href>木目</a>
          </p>
          <p class="desc">何谓道？一阴一阳谓之道。太极，万物之始</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-7.jpg" alt />
            <p>武道天下</p>
          </a>
          <p class="author">
            <a href>忆名风尘</a>
          </p>
          <p class="desc">双脚踏平十八府，一剑寒光荡九天。武道世界，强者为尊，</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-8.jpg" alt />
            <p>烽火山河</p>
          </a>
          <p class="author">
            <a href>琅琊苏二</a>
          </p>
          <p class="desc">黑山恶水杀出来金人以及星星之火的草原铁蹄，如霹雳雷霆碾过了血色山河，风雨飘摇，繁盛的赵国哀嚎在金人的铁蹄之下，到底谁是罪人谁是英雄？</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/1-9.jpg" alt />
            <p>重生之都市仙王</p>
          </a>
          <p class="author">
            <a href>虎眸大大</a>
          </p>
          <p class="desc">【阿里原创精品】 一代仙王重生少年时代！</p>
        </div>
      </div>
    </div>
    <div class="righteare">
      <ul class="directory-top">
        <li>
          <h2>人气榜</h2>
        </li>
      </ul>
      <ul class="directory-bottom">
        <li @mouseover="changeNums(item)" v-for="item in array1" :key="item.id">
          <a href>
            <p class="title">
              <i class="no">{{item.id}}</i>
              {{item.title}}
            </p>
          </a>
          <div class="info" v-show="item.currentEnce">
            <img :src="item.imgSrc" class="cover" />
            <a href>
              <div class="auth">{{item.auth}}</div>
              <div class="desc">{{item.desc}}</div>
            </a>
          </div>
        </li>
      </ul>
    </div>

    <div class="newrec">
      <div class="titleline">
        <span class="tlle3">新书速推</span>
      </div>
      <div class="newbook-left">
        <div class="newbook-left-top">
          <a href>
            <p class="ap1">铠甲少年</p>
          </a>
          <div class="side">
            <a href>
              <img src="../../public/img/side1.jpg" alt />
            </a>
            <p class="author">
              <a href>罗霸道</a>
            </p>
            <p>★精华简介★ 高三少年张卓，在人生最倒霉的时刻获得了一幅宇宙</p>
          </div>
        </div>
        <ul class="listrec">
          <li>
            <a href>
              <p class="_blank">妙手药王</p>
            </a>
            <p class="auth">
              <a href>大肚鱼</a>
            </p>
            <p class="desc">
              来历不明的神秘少年叶小天突然出现在大都市，创办倾城集团一炮而红，举世震惊，
              他那出神入化的医术不仅引得无数重症患者慕名前来求医，还能让各种奇花异草、珍贵药材疯狂生长，百年山参？
              一月养成，千年灵芝？给我三个月时间，救美女，医富豪，赚大钱，拳打地痞，针剌流氓，在红颜知己的帮助下，
              一路高歌，上演了属于他叶医生的时代。
            </p>
          </li>
          <li>
            <a href>
              <p class="_blank">九卷风云录</p>
            </a>
            <p class="auth">
              <a href>辛辛木</a>
            </p>
            <p class="desc">
              云洲的皇帝死去的那一年，天下就乱了，四海虎视眈眈，三邦蠢蠢欲动，
              这时候从西海来了一个传奇，拯救了即将分崩离析的云洲，在人们都以为这个传奇将成为新的云洲之主时，
              这个人消失了。十几年过去了，许多事情被遗忘，包括那个死去的皇帝，
              包括那个传奇，就像沽噜河的河水滚滚而去，故事就从这个沽噜河岸边的一个少年讲起。
            </p>
          </li>
        </ul>
      </div>

      <div class="newbook-right">
        <div class="booklist">
          <div>
            <a href>
              <img src="../../public/img/2-1.jpg" alt />
              <p>网游之先人一步</p>
            </a>
            <p class="author">
              <a href>乾为天</a>
            </p>
            <p class="desc">一本预知未来的电子杂志，让杨飞影在《乱世OL》中如鱼得水。金钱、实力的提升，使得杨飞影拥有更加广阔的视野，</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/1-2.jpg" alt />
              <p>丹武天帝</p>
            </a>
            <p class="author">
              <a href>御命丹心</a>
            </p>
            <p class="desc">修九阳之力，造不灭之体。上一世牧龙，这一世，我要牧这天下所有！</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/2-3.jpg" alt />
              <p>位面药材商</p>
            </a>
            <p class="author">
              <a href>旭日朝阳</a>
            </p>
            <p class="desc">回老家原溪村生活的王柯林，意外获得“位面药材铺”，可以借此出售采集到的药材，获得</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/2-4.jpg" alt />
              <p>逆天帝尊</p>
            </a>
            <p class="author">
              <a href>小相公</a>
            </p>
            <p class="desc">欧阳言从仙界重生归来，发现自己依附在一个废材身上，凭着前世的经验和记忆重修道法，逆天而上强势</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/2-5.jpg" alt />
              <p>大唐医圣</p>
            </a>
            <p class="author">
              <a href>浮生门</a>
            </p>
            <p class="desc">现代医生穿越回古代，妙手回春，华佗在世，不算什么本事？要会断案领兵，要会开矿</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/2-6.jpg" alt />
              <p>奇门医圣</p>
            </a>
            <p class="author">
              <a href>青岩</a>
            </p>
            <p class="desc">山村学徒遇难成祥，凭借手中的一根金针勇闯都市，遇强则强、遇弱则弱</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/1-7.jpg" alt />
              <p>逆天伐尊</p>
            </a>
            <p class="author">
              <a href>润之泽</a>
            </p>
            <p class="desc">（广西作协理事、广西网络文学委员、河池市网络文学副主席兼秘书长——润之泽最新玄幻小说）</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/2-8.jpg" alt />
              <p>创世天尊</p>
            </a>
            <p class="author">
              <a href>醉世</a>
            </p>
            <p class="desc">黑山恶水杀出来金人以及星星之火的草原铁蹄，如霹雳雷霆碾过了血色山河</p>
          </div>

          <div>
            <a href>
              <img src="../../public/img/2-9.jpg" alt />
              <p>绝品神医</p>
            </a>
            <p class="author">
              <a href>最强咸鱼</a>
            </p>
            <p class="desc">小神医苏成被师父遣送下山，要他来都市中弘扬医术并找寻多年不见的小师妹</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d">
      <a href>
        <img src="http://img-tailor.11222.cn/pm/book/operate/2019061110433522.jpg" alt />
      </a>
    </div>
    <!-- 猜你喜欢———————————————————————————————————————————— -->
    <div class="guess">
      <div class="titleline titles">
        <span class="tlle tlle4">猜你喜欢</span>
      </div>
      <div class="booklist">
        <div>
          <a href>
            <img src="../../public/img/3-1.jpg" alt />
            <p>太古真龙诀</p>
          </a>
          <p class="author">
            <a href>至尊小鱼</a>
          </p>
          <p class="desc">惨遭上苍抛弃的少年，肉身之中有真龙蛰伏！当真龙苏醒之日，便是少年逆天改命之时</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/3-2.jpg" alt />
            <p>幽冥大帝</p>
          </a>
          <p class="author">
            <a href>帝候</a>
          </p>
          <p class="desc">视之无形，听之无声，谓之幽冥。幽冥者，所以喻道而非道也</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/3-3.jpg" alt />
            <p>史上第一赘婿</p>
          </a>
          <p class="author">
            <a href>龚某人</a>
          </p>
          <p class="desc">纪子行原本在二十一世纪活得“好好”的，家庭困难，早年</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/3-4.jpg" alt />
            <p>绝命狂兵</p>
          </a>
          <p class="author">
            <a href>在难在北</a>
          </p>
          <p class="desc">兵王归来！阔别五年回到故乡，张沉又一次站在了曾经的仇人面前，这一次，他</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/3-5.jpg" alt />
            <p>极品万事屋</p>
          </a>
          <p class="author">
            <a href>李黑云</a>
          </p>
          <p class="desc">极品万事屋，你想要的都有。</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/3-6.jpg" alt />
            <p>超级神豪科技系统</p>
          </a>
          <p class="author">
            <a href>流失大能</a>
          </p>
          <p class="desc">屌丝李林飞因尾随女神，自行车撞上路边电杆，神豪系统，于是屌丝逆袭</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/3-7.jpg" alt />
            <p>诸天战帝</p>
          </a>
          <p class="author">
            <a href>花颜</a>
          </p>
          <p class="desc">一尊肉身，震天撼地，一柄战剑，破碎虚空！重生万年之后</p>
        </div>

        <div>
          <a href>
            <img src="../../public/img/3-8.jpg" alt />
            <p>最强技能系统</p>
          </a>
          <p class="author">
            <a href>都市大魔头</a>
          </p>
          <p class="desc">意外获得最强技能系统！醒来之后的叶默，注定走上一条不凡之路！看我拥有医术，武功，忍</p>
        </div>
      </div>
    </div>
    <div class="d">
      <a href>
        <img src="http://img-tailor.11222.cn/pm/book/operate/2019061110472352.jpg" alt />
      </a>
    </div>

    <div class="update">
      <div class="lefteare">
        <div class="titlelines">
          <span class="tlle2">最新更新</span>
          <a href>
            <span class="but">查看全部</span>
          </a>
        </div>
        <ul class="list">
          <li class="th">
            <span>类型</span>
            <span>书本名称</span>
            <span>最新章节</span>
            <span>作者</span>
            <span>更新时间</span>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>透视小神农</span>
              <span>第两千三百七十八章 打问消息</span>
              <span>布凡</span>
              <span>7小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>东方玄幻</span>
              <span>洪荒神帝</span>
              <span>第2211章 天外有天</span>
              <span>三千道</span>
              <span>7小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>绝品小神农</span>
              <span>两千两百二十六章 拍卖会</span>
              <span>纯良有欲</span>
              <span>8小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡野小仙农</span>
              <span>第一千二百五十二章 比打工强多了</span>
              <span>冬月十一</span>
              <span>8小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>长生小农民</span>
              <span>668 四爻</span>
              <span>拼命五郎</span>
              <span>8小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>恐怖惊悚</span>
              <span>鬼术大宗师</span>
              <span>第二千三百二十一章 所谓冥王</span>
              <span>黎照临</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>东方玄幻</span>
              <span>凌霄剑帝</span>
              <span>第三百九十三章 白虎裂天拳</span>
              <span>追逐时光</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡村超级医圣</span>
              <span>第1582章 硬闯</span>
              <span>医僧</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>都市神级小道士</span>
              <span>第一千六百零二章 末世</span>
              <span>非常白</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>战争幻想</span>
              <span>铁血兵锋</span>
              <span>第0897章 我交东西</span>
              <span>妖妖灵</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡村最强小神农</span>
              <span>第一千六百九十章 东天麟死</span>
              <span>龙腾青山</span>
              <span>9小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>古典仙侠</span>
              <span>笑仙盗v</span>
              <span>第一二八章 分裂边缘</span>
              <span>寂静的雪</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>东方玄幻</span>
              <span>逆乱乾坤</span>
              <span>第一千五百零一章 遗迹</span>
              <span>浮云孤影</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>异界大陆</span>
              <span>剑逆诸天</span>
              <span>第一千一百六十九章 不想走，就战死在此地</span>
              <span>无情海</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>逆天神医</span>
              <span>第二千八百三十九章 仙蝶归来</span>
              <span>月亮不发光</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市热血</span>
              <span>最强保镖</span>
              <span>第二千四百八十四章 屠龙之战 下</span>
              <span>海洋</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>乡村神医</span>
              <span>第2250章 果真是她</span>
              <span>七星</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市异能</span>
              <span>我的绝色总裁未婚妻</span>
              <span>第3492章 巫妖大劫</span>
              <span>花幽山月</span>
              <span>10小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>都市生活</span>
              <span>山村最强小农民</span>
              <span>第2018章 养料</span>
              <span>善良的面具</span>
              <span>11小时前</span>
            </a>
          </li>
          <li>
            <a href>
              <span>传统武侠</span>
              <span>武榜三十六</span>
              <span>第一百六十八章 玉佩</span>
              <span>殇笔梦溪</span>
              <span>11小时前</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="righteare">
        <ul class="directory-top">
          <li>
            <h2>版权推荐</h2>
          </li>
        </ul>
        <ul class="directory-bottom">
          <li @mouseover="changeNum(item)" v-for="item in array" :key="item.id">
            <a href>
              <p class="title">
                <i class="no">{{item.id}}</i>
                {{item.title}}
              </p>
            </a>
            <div class="info" v-show="item.currentEnce">
              <img :src="item.imgSrc" class="cover" />
              <a href>
                <div class="auth">{{item.auth}}</div>
                <div class="desc">{{item.desc}}</div>
              </a>
            </div>
          </li>
        </ul>
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
          title: "星际江湖",
          currentEnce: true,
          auth: "张老师",
          desc:
            "浩瀚的星际大时代，一个贫民区长大、怀着机甲梦想的少年，当他进入梦想之中，迎接他的",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/113971102494.jpg"
        },
        {
          id: 2,
          title: "万古神尊",
          currentEnce: false,
          desc:
            "千秋岁月一场梦，万古洪荒一卷空。重生少年王者归来，一拳镇神魔，一剑灭星辰。顺我",
          auth: "绯语",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1158587500203.jpg"
        },
        {
          id: 3,
          title: "刑宋",
          currentEnce: false,
          desc:
            "现代法医卓然意外穿越到了宋仁宗年间，运用法医知识和技能侦破案件，",
          auth: "沐轶",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1107687718892.jpg"
        },
        {
          id: 4,
          title: "大明长歌",
          currentEnce: false,
          desc:
            "李彤、刘颖、张守义、刘继业、常浩然等南京国子监学子，每天赖带南京城内无所事事。本",
          auth: "酒徒",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1152877445381.jpg"
        },
        {
          id: 5,
          title: "龙渊",
          currentEnce: false,
          desc:
            "世界上真的有龙吗？营川坠龙的龙骨最终被收藏何地？龙骨密码意欲何为？茫茫白山之中藏",
          auth: "骠骑",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1133567141530.jpg"
        },
        {
          id: 6,
          title: "浩荡",
          currentEnce: false,
          desc:
            "1997年， 香港回归，中国互联网元年，何潮和周安涌从北京南下深圳，以物流和电子",
          auth: "何常在",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1197987718377.jpg"
        },
        {
          id: 7,
          title: "长生密码",
          currentEnce: false,
          desc:
            "生尽为死，死尽为生，长生的秘密，注定便藏在黑暗的墓穴中。梧桐鬼洞现世，长生密码",
          auth: "九福",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1157497655811.jpg"
        },
        {
          id: 8,
          title: "星界守护",
          currentEnce: false,
          desc:
            "一次偶然的机会，江州大学软件工程学院的萧逸闲得到了星界辅助系统幺幺零，幺幺零默默",
          auth: "静夜寄思",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1158547709415.jpg"
        },
        {
          id: 9,
          title: "非凡特工",
          currentEnce: false,
          desc:
            "作为一个彻底失忆的男人，李记开仅仅只是想找回最初的自己。皂滑弄人，他却阴差错",
          auth: "了了一生",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201905270951501509.jpg"
        },
        {
          id: 10,
          title: "老街中的痞子",
          currentEnce: false,
          desc:
            "★精华简介★ 夜。 斑驳。 老街。 萧索身影。 两把唐刀。 一个把江湖搅得乌烟瘴",
          auth: "卸甲老卒",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201712121333215738.jpg"
        }
      ],
      array1: [
        {
          id: 1,
          title: "我的绝色总裁未婚妻",
          currentEnce: true,
          auth: "花幽山月",
          desc:
            " 【最火爆畅销书】★精华简介★本书又名《神级龙卫》神秘高手龙潜花都，与冰山美女总",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201803141444064795.jpg"
        },
        {
          id: 2,
          title: "重生之都市狂仙",
          currentEnce: false,
          desc:
            "剑斩风雷遮日月，掌握乾坤捣幽冥。世间人有六十亿，唯我一人称骄狂。 仙界青帝重生于",
          auth: "梦中笔丶",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1173867089483.jpg"
        },
        {
          id: 3,
          title: "都市之兵王归来",
          currentEnce: false,
          desc:
            "他是万里挑一的超级兵王，也是身怀绝技的顶尖高手。因为战友的牺牲，他心灰意冷，回归，",
          auth: "登临",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201609280952129078.jpg"
        },
        {
          id: 4,
          title: "撩妹兵王在都市",
          currentEnce: false,
          desc:
            "彪悍兵王周天回归都市，却不料魅力过人的他深陷万里花丛中，为保护那些美丽的花朵，他",
          auth: "左妻右妾",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201702161413505494.jpg"
        },
        {
          id: 5,
          title: "太古狂魔",
          currentEnce: false,
          desc:
            "一名身缠七彩恶龙、肩扛古老石棺的白发青年，仰望高高在上的诸天至尊、万古道祖，淡淡",
          auth: "汉隶",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1187006720460.jpg"
        },
        {
          id: 6,
          title: "逆天神医",
          currentEnce: false,
          desc:
            "★百万收藏，万人追读★真正的神医是什么？是会杀人的神医！杀一人，救百人，杀不杀？",
          auth: "月亮不发光",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1152716900908.jpg"
        },
        {
          id: 7,
          title: "乡村小神农",
          currentEnce: false,
          desc:
            "小农民强势归来，通医术、修法术、玩转都市，邂逅各路美女，无往不利！且看他如何逆天",
          auth: "南山侠",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1136887438273.jpg"
        },
        {
          id: 8,
          title: "绝品小神农",
          currentEnce: false,
          desc:
            "【火爆追读】乡村少年唐亦凡偶获神奇技能，烹制美食、治病救人、鉴宝识物、催生动植物",
          auth: "纯良有欲",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1108136952591.jpg"
        },
        {
          id: 9,
          title: "透视小神农",
          currentEnce: false,
          desc:
            "★火爆畅销★乡野小子王木生，一朝偶获神秘龙珠，获得逆天的透视，鉴宝，医术，动植物",
          auth: "布凡",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/201910052228413544.jpg"
        },
        {
          id: 10,
          title: "重生大富翁",
          currentEnce: false,
          desc:
            "一梦初醒，重生到了最好的年代，用96块钱生活费摆地摊积累了第一桶金，他的房地产，",
          auth: "南三石",
          imgSrc: "http://img-tailor.11222.cn/bcv/big/1123617460830.jpg"
        }
      ]
    };
  },
  methods: {
    changeNum(item) {
      this.array.forEach(item => {
        item.currentEnce = false;
      });
      item.currentEnce = true;
    },
    changeNums(item) {
      this.array1.forEach(item => {
        item.currentEnce = false;
      });
      item.currentEnce = true;
    }
  }
};
</script>
<style scoped>
* {
  font-family: Microsoft YaHei;
  font-size: 14px;
  margin: 0;
  padding: 0;
}
.titles {
  margin-bottom: 20px;
}
li {
  list-style: none;
}
img {
  vertical-align: top;
  border: none;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.box {
  width: 1120px;
  height: 100%;
  margin: 0 auto;
  margin-top: 20px;
}

.covers {
  height: 68px;
  float: right;
  position: relative;
  top: 33px;
}
.covers1 {
  width: 52px;
  height: 64px;
  right: 0px;
  z-index: 1;
  position: relative;
}
.covers2 {
  width: 55px;
  height: 68px;
  right: 17px;
  z-index: 2;
  position: relative;
  top: -5px;
}
.covers3 {
  width: 52px;
  height: 64px;
  right: 39px;
  z-index: 1;
  position: relative;
}

.lefteare {
  width: 74%;
  float: left;
  height: 100%;
  margin-top: 30px;
}
.booklist {
  width: 100%;
  text-align: justify;
  margin-top: 21px;
}
.booklist div {
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
.booklist div img {
      width: 91px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.cover {
  height: 100%;
  width: 82px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #eee;
}
.desc {
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
.auth {
  width: 100%;
  overflow: hidden;
  height: 14px;
  line-height: 14px;
  color: #999999;
  margin-top: 10px;
}
.no {
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
li:nth-child(1) i.no,
li:nth-child(2) i.no,
li:nth-child(3) i.no {
  background-color: #ff5e79;
}
p.title {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-left: 24px;
  height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.booklist div a {
  text-decoration: none;
  color: inherit;
}
.booklist div a p {
  margin-top: 9px;
}
.booklist div a:hover {
  color: #ff8e15;
}
.booklist div p.author {
  color: rgb(163, 163, 163);
  margin: 12px 0px 30px;
}
.booklist div p.desc {
  color: rgb(163, 163, 163);
  line-height: 20px;
  height: 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.righteare {
  margin-top: 30px;
  width: 274px;
  float: right;
}
.directory-top {
  width: 100%;
  height: 34px;
  line-height: 34px;
  display: flex;
  border-bottom: 4px solid #ff5e79;
  text-align: center;
  color: #1d1e20;
}
.directory-bottom {
  width: 100%;
  margin-top: 20px;
}
.directory-bottom li {
  line-height: 18px;
  margin-bottom: 16px;
  color: #1d1e20;
  font-size: 13px;
}
.info {
  width: 100%;
  height: 103px;
  position: relative;
  box-sizing: border-box;
  padding-left: 92px;
  margin-top: 10px;
  overflow: hidden;
}

.newrec {
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
}
.newbook-left {
  margin-top: 20px;
  width: 268px;
  float: left;
  background-color: #fcf0f6;
}
.newbook-left-top {
  width: 100%;
  height: 161px;
  box-sizing: border-box;
  padding: 28px 24px 0;
  background: url("/img/nv_left_bg_1.png") repeat-x;
  color: #1d1e20;
  position: relative;
}
.ap1 {
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  overflow: hidden;
  height: 18px;
}
.side {
  height: 94px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 24px;
    font-size: 14px;
}
.side img {
  float: left;
  height: 100%;
  width: 82px;
}
.side .author {
  height: 14px;
  line-height: 14px;
  margin: 17px 0 12px;
  white-space: nowrap;
  width: 128px;
  float: right;
  overflow: hidden;
  color: #a9a9a9;
}
.side p {
  line-height: 20px;
  height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 128px;
  float: right;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #a9a9a9;
}

.newbook-right {
  width: 73.04%;
  float: right;
  margin-bottom: 30px;
}

.titleline {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.titleline:before {
  content: "";
  display: block;
  width: 100%;
  height: 5px;
  background-color: #fcf0f6;
  margin-top: 9px;
}
.tlle {
  padding: 0 18px 0 48px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: url("/img/nv_icon_girl.png") no-repeat 18px 0 #fff;
  background-size: 22px 22px;
}
.tlle2 {
  padding: 0 18px 0 14px;
  position: absolute;
  left: 0;
  top: 0;
  background: url("/img/nv1_icon_cate.png") no-repeat 0 0 #fff;
  background-size: auto 22px;
}
.tlle3 {
  padding: 0 18px 0 48px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: url("/img/title_icon_new3.png") no-repeat 18px 0 #fff;
  background-size: 22px 22px;
}
.tlle4 {
  background: url("/img/title_icon_like4.png") no-repeat 18px 0 #fff;
}
.listrec {
  overflow: hidden;
  color: #1c0800;
  width: 218px;
  margin: 0 auto;
}
.listrec li {
  width: 100%;
  height: 120px;
  margin-top: 27px;
  box-sizing: border-box;
  padding-left: 12px;
  border-left: 4px solid #d3d1d5;
  position: relative;
}
._blank {
  font-size: 14px;
  line-height: 16px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.auth {
  color: #757575;
  margin: 7px 0 7px;
}
.desc {
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
.guess {
  margin: 0 auto;
  height: 375px;
  margin-top: 30px;
}
.update {
  width: 100%;
  margin-top: 20px;
  height: 500px;
}
.titlelines {
  height: 22px;
  line-height: 22px;
  font-size: 18px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.but {
  float: right;
  text-indent: 0;
  height: 100%;
  width: 82px;
  box-sizing: border-box;
  text-align: center;
  font-size: 12px;
  border: 1px solid #f37315;
  border-radius: 4px;
  color: #f37315;
}
.list li:first-child {
  color: #000;
  border-bottom: 2px solid #c6c6c6;
}
.list li {
  color: #a9a9a9;
  border-bottom: 1px #c6c6c6 dashed;
  overflow: hidden;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
}
.list li span {
  display: inline-block;
}
.list li span:nth-child(1) {
  margin-left: 5px;
  width: 7%;
}
.list li span:nth-child(2) {
  width: 25%;
}
.list li span:nth-child(3) {
  width: 37%;
  margin: 0 5px;
}
.list li span:nth-child(4) {
  width: 15%;
}
.list li span:nth-child(5) {
  width: 14%;
}
.list li a span {
  color: #a9a9a9;
}
.list li a span:hover {
  color: #ff8e15;
}
</style>