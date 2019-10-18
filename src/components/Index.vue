<template>
  <div class="index">
    <!-- 欢迎图片 -->
    <div class="welcome">
      <a href>
        <img src="../assets/images/welcome.jpg" alt />
      </a>
    </div>

    <div class="common">
      <!-- 主编推荐 -->
      <div>
        <div class="editor_recommend">
          <div class="editor_recommend_name">
            <span>主编推荐</span>
          </div>
        </div>

        <div class="editor_recommend_connect">
          <div class="editor_recommend_connect_left">
            <div class="connect_left_el-carousel">
              <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in 3" :key="item">
                  <img src="../assets/images/book/201712261741391310.jpg" alt />
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="connect_left_text">
              <p>
                <a href="/">逐魂录</a>
              </p>
              <p>
                <a href="/">李寻希</a>
              </p>
              <p>十年前，他亲手结束了父亲的生命。为了继承父亲生前的使命，他加入了那个父亲曾经引以为傲的组织。然而，他的目的并</p>
              <ul>
                <li>
                  <a href>热血</a>
                </li>
                <li>
                  <a href>爽文</a>
                </li>
                <li>
                  <a href>虐文</a>
                </li>
              </ul>
              <div class="connect_left_button">
                <el-button type="danger">立即阅读</el-button>
              </div>
            </div>
          </div>

          <div class="editor_recommend_connect_middle">
            <div class="connect_middle_top">
              <ul>
                <li>
                  <a href>
                    <span>[现代言情]</span>十家锅灶九不同
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>夜留余白
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>噬天至尊
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>虚灵人
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>末日堡垒
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>明谋善赖
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>农女巧儿的致富日常
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>最强狂暴兵王
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>我有五个女朋友
                  </a>
                </li>
                <li>
                  <a href>
                    <span>[现代言情]</span>龙神归来
                  </a>
                </li>
              </ul>
            </div>

            <div class="connect_middle_bottom">
              <div class="connect_middle_bottom_book">
                <img src="../assets/images/book/1132437923371.jpg" alt />
                <a href>大神求翻牌</a>
                <a href>一见如故</a>
              </div>

              <div class="connect_middle_bottom_book">
                <img src="../assets/images/book/1132437923371.jpg" alt />
                <a href>大神求翻牌</a>
                <a href>一见如故</a>
              </div>

              <div class="connect_middle_bottom_book">
                <img src="../assets/images/book/1132437923371.jpg" alt />
                <a href>大神求翻牌</a>
                <a href>一见如故</a>
              </div>
            </div>
          </div>

          <div class="editor_recommend_connect_right">
            <p>主编强推</p>

            <ul class="connect_right_book">
              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_chen">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>

              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_hui">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 广告 -->
      <div class="advertising">
        <img src="../assets/images/2019061110421882.jpg" alt />
      </div>

      <!-- 女频 -->
      <div class="female_frequency">
        <div class="editor_recommend">
          <div class="editor_recommend_name female">
            <span>女频推荐</span>
          </div>
        </div>

        <div class="editor_recommend_connect">
          <div class="female_left">
            <div class="connect_left_el-carousel">
              <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in 3" :key="item">
                  <img src="../assets/images/book/201712261741391310.jpg" alt />
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="connect_left_text">
              <p>
                <a href="/">逐魂录</a>
              </p>
              <p>
                <a href="/">李寻希</a>
              </p>
              <p>十年前，他亲手结束了父亲的生命。为了继承父亲生前的使命，他加入了那个父亲曾经引以为傲的组织。然而，他的目的并</p>
              <ul>
                <li>
                  <a href>热血</a>
                </li>
                <li>
                  <a href>爽文</a>
                </li>
                <li>
                  <a href>虐文</a>
                </li>
              </ul>
              <div class="connect_left_button">
                <el-button type="danger">立即阅读</el-button>
              </div>
            </div>
          </div>

          <div class="female_connect_middle">
            <ul class="female_connect_middle-top">
              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>
            </ul>

            <ul class="female_connect_middle-bottom">
              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>
            </ul>
          </div>

          <div class="female_connect_right">
            <p>女频人气</p>

            <ul class="connect_right_book">
              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_chen">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>

              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_hui">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 男频 -->
      <div class="male_frequency">
        <div class="editor_recommend">
          <div class="editor_recommend_name male">
            <span>男频推荐</span>
          </div>
        </div>

        <div class="editor_recommend_connect">
          <div class="editor_recommend_connect_left male_left">
            <div class="connect_left_el-carousel">
              <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in 3" :key="item">
                  <img src="../assets/images/book/201712261741391310.jpg" alt />
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="connect_left_text">
              <p>
                <a href="/">逐魂录</a>
              </p>
              <p>
                <a href="/">李寻希</a>
              </p>
              <p>十年前，他亲手结束了父亲的生命。为了继承父亲生前的使命，他加入了那个父亲曾经引以为傲的组织。然而，他的目的并</p>
              <ul>
                <li>
                  <a href>热血</a>
                </li>
                <li>
                  <a href>爽文</a>
                </li>
                <li>
                  <a href>虐文</a>
                </li>
              </ul>
              <div class="connect_left_button">
                <el-button type="danger">立即阅读</el-button>
              </div>
            </div>
          </div>

          <div class="female_connect_middle">
            <ul class="female_connect_middle-top">
              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>
            </ul>

            <ul class="female_connect_middle-bottom">
              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>
            </ul>
          </div>

          <div class="male_connect_right">
            <p>男频人气</p>

            <ul class="connect_right_book">
              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_chen">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>

              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_hui">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 轻小说 -->
      <div class="light_novel">
        <div class="editor_recommend">
          <div class="editor_recommend_name light">
            <span>轻小说推荐</span>
          </div>
        </div>

        <div class="editor_recommend_connect">
          <div class="editor_recommend_connect_left light_left">
            <div class="connect_left_el-carousel">
              <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="item in 3" :key="item">
                  <img src="../assets/images/book/201712261741391310.jpg" alt />
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="connect_left_text">
              <p>
                <a href="/">逐魂录</a>
              </p>
              <p>
                <a href="/">李寻希</a>
              </p>
              <p>十年前，他亲手结束了父亲的生命。为了继承父亲生前的使命，他加入了那个父亲曾经引以为傲的组织。然而，他的目的并</p>
              <ul>
                <li>
                  <a href>热血</a>
                </li>
                <li>
                  <a href>爽文</a>
                </li>
                <li>
                  <a href>虐文</a>
                </li>
              </ul>
              <div class="connect_left_button">
                <el-button type="danger">立即阅读</el-button>
              </div>
            </div>
          </div>

          <div class="female_connect_middle">
            <ul class="female_connect_middle-top">
              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>
            </ul>

            <ul class="female_connect_middle-bottom">
              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">把脑仁烧成渣，把热血烧成糊，把硬汉当到底的长篇悬疑硬派都市！ 卧底卓霖精心策</p>
              </li>
            </ul>
          </div>

          <div class="light_connect_right">
            <p>轻小说人气</p>

            <ul class="connect_right_book">
              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_chen">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>

              <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_hui">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/book/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 广告 -->
      <div class="advertising">
        <img src="../assets/images/2019093011005673.jpg" alt />
      </div>

      <!-- 新书推荐 -->
      <div class="new_book">
        <!-- 男频新书推荐 -->
        <div class="new_book_left">
          <div class="book_left_male">
            <span>男频新书推荐</span>
          </div>

          <div class="book_bottom">
            <ul>
              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 女频新书推荐 -->
        <div class="new_book_left">
          <div class="book_left_male">
            <span>女频新书推荐</span>
          </div>

          <div class="book_bottom">
            <ul>
              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 轻小说新书推荐 -->
        <div class="new_book_left">
          <div class="book_left_male">
            <span>轻小说新书推荐</span>
          </div>

          <div class="book_bottom">
            <ul>
              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/book/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 右边推荐 -->
        <div class="editor_recommend_connect_right">
          <p>主编强推</p>

          <ul class="connect_right_book">
            <li>
              <a href="/">
                <p>
                  <i class="connect_right_book_chen">1</i>
                  圣祖
                </p>
                <div class="connect_right_book_info">
                  <img src="../assets/images/book/201903121846461623.jpg" alt />
                  <a href>傲天无痕</a>
                  <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                </div>
              </a>
            </li>

            <li>
              <a href="/">
                <p>
                  <i class="connect_right_book_hui">1</i>
                  圣祖
                </p>
                <div class="connect_right_book_info">
                  <img src="../assets/images/book/201903121846461623.jpg" alt />
                  <a href>傲天无痕</a>
                  <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 广告 -->
      <div class="advertising">
        <img src="../assets/images/2019093011005673.jpg" alt />
      </div>

      <!-- 完结好书 -->
      <div class="book_end">
        <!-- 标题 -->
        <div class="editor_recommend_name">
          <span>完结好书</span>
        </div>

        <div class="end">
          <!-- 女频完结 -->
          <div class="book_end_female">
            <div class="end_female_title">
              <span>女频完结</span>
            </div>

            <div class="end_famale_content">
              <ul>
                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>
              </ul>
            </div>
          </div>

          <!-- 男频完结 -->
          <div class="book_end_female">
            <div class="end_female_title">
              <span>男频完结</span>
            </div>

            <div class="end_famale_content">
              <ul>
                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>
              </ul>
            </div>
          </div>

          <!-- 轻小说完结 -->
          <div class="book_end_female">
            <div class="end_female_title">
              <span>轻小说完结</span>
            </div>

            <div class="end_famale_content">
              <ul>
                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/book/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 右边推荐 -->
        <div class="editor_recommend_connect_right">
          <p>主编强推</p>

          <ul class="connect_right_book">
            <li>
              <a href="/">
                <p>
                  <i class="connect_right_book_chen">1</i>
                  圣祖
                </p>
                <div class="connect_right_book_info">
                  <img src="../assets/images/book/201903121846461623.jpg" alt />
                  <a href>傲天无痕</a>
                  <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                </div>
              </a>
            </li>

            <li>
              <a href="/">
                <p>
                  <i class="connect_right_book_hui">1</i>
                  圣祖
                </p>
                <div class="connect_right_book_info">
                  <img src="../assets/images/book/201903121846461623.jpg" alt />
                  <a href>傲天无痕</a>
                  <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 广告 -->
      <div class="advertising">
        <img src="../assets/images/2019093011005673.jpg" alt />
      </div>

      <!-- 热门分类 -->
      <div class="hot">
        <div class="hot_title">
          <span>热门分类</span>
        </div>

        <div class="hot_content">
          <ul class="hot_content_ul">
            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>

            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>

            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>

            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>

            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>

            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>

            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>

            <li>
              <i>轻小说-冒险</i>
              <div class="hot_content_details">
                <a href="/">
                  <img src="../assets/images/1147257831386.jpg" alt />
                </a>
                <p>
                  <a href="/">拯救苗殿下</a>
                </p>
                <p>
                  <a href>花小睡</a>
                </p>
                <a href="/">
                  <span>立即阅读</span>
                </a>
              </div>
              <div class="hot_content_p">
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
                <p>
                  <span>[搞笑]</span>
                  <a href="/">男神，暗恋了解一下</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 大神介绍 -->
      <div class="great">
        <div class="hot_title">
          <span>热门分类</span>
        </div>

        <div class="great_content">
          <ul>
            <li>
              <i></i>
              <a href="/">
                <img src="../assets/images/home_au_1.png" alt />
              </a>
              <div class="great_content_bottom">
                <p>代表作《爱在天摇地动时》</p>
                <p>阿里签约作者，擅长都市情感剧，对于各行各业不同圈子的男女角色把握精准。新文《我和他的小秘密》正在阿里文学连载中。</p>
              </div>
            </li>

            <li>
              <i></i>
              <a href="/">
                <img src="../assets/images/home_au_1.png" alt />
              </a>
              <div class="great_content_bottom">
                <p>代表作《爱在天摇地动时》</p>
                <p>阿里签约作者，擅长都市情感剧，对于各行各业不同圈子的男女角色把握精准。新文《我和他的小秘密》正在阿里文学连载中。</p>
              </div>
            </li>
            <li>
              <i></i>
              <a href="/">
                <img src="../assets/images/home_au_1.png" alt />
              </a>
              <div class="great_content_bottom">
                <p>代表作《爱在天摇地动时》</p>
                <p>阿里签约作者，擅长都市情感剧，对于各行各业不同圈子的男女角色把握精准。新文《我和他的小秘密》正在阿里文学连载中。</p>
              </div>
            </li>

            <li>
              <i></i>
              <a href="/">
                <img src="../assets/images/home_au_1.png" alt />
              </a>
              <div class="great_content_bottom">
                <p>代表作《爱在天摇地动时》</p>
                <p>阿里签约作者，擅长都市情感剧，对于各行各业不同圈子的男女角色把握精准。新文《我和他的小秘密》正在阿里文学连载中。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 广告 -->
      <div class="advertising">
        <img src="../assets/images/2019093011005673.jpg" alt />
      </div>

      <!-- 最近更新 -->
      <div class="recent_updates">
        <div class="recent_updates_left">
          <div class="recent_updates_title">
            <span>最近更新</span>
            <a href="/">查看全部</a>
          </div>

          <div class="recent_updates_content">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="类型" width="80"></el-table-column>
              <el-table-column prop="name" label="书本名称"></el-table-column>
              <el-table-column prop="address" label="最新章节"></el-table-column>
              <el-table-column prop="address" label="作者" width="130"></el-table-column>
              <el-table-column prop="address" label="更新时间" width="100"></el-table-column>
            </el-table>
          </div>
        </div>

        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane class="el-tab-top" label="男频更新" name="first">用户管理</el-tab-pane>
          <el-tab-pane class="el-tab-top" label="女频更新" name="second">配置管理</el-tab-pane>
          <el-tab-pane class="el-tab-top" label="轻小说更新" name="third">角色管理</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/Home.css";
</style>