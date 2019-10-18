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
                <el-carousel-item v-for="item3 in topData" :key="item3.id">
                  <img :src="item3.novel_url" alt />
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
                <li v-for="(item1,index) in connect_middle_top" :key="index">
                  <a href>
                    <span>[现代言情]</span>
                    {{item1.novel_title}}
                  </a>
                </li>
              </ul>
            </div>

            <div class="connect_middle_bottom">
              <div class="connect_middle_bottom_book" v-for="item in topData" :key="item.id + ''">
                <img :src="item.novel_url" alt />
                <a href>{{ item.novel_title }}</a>
                <a href>{{ item.novel_author }}</a>
              </div>
            </div>
          </div>

          <div class="editor_recommend_connect_right">
            <p>主编强推</p>

            <ul class="connect_right_book">
              <li v-for="(item,index) in connect_right_book1" :key="item.detail_id">
                <a href="/">
                  <p>
                    <i class="connect_right_book_chen">{{index+1}}</i>
                    {{item.novel_title}}
                  </p>
                  <div class="connect_right_book_info" v-if="item.currentEnce">
                    <img :src="item.novel_url" alt />
                    <a href>{{item.novel_author}}</a>
                    <a href>{{item.novel_desc}}</a>
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
                <el-carousel-item v-for="item in famelaData" :key="item.id">
                  <img :src="item.novel_url" alt />
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
              <li v-for="item2 in famelaData1" :key="item2.id">
                <a href="/" class="top_book">
                  <img :src="item2.novel_url" alt />
                  <p>{{item2.novel_title}}</p>
                </a>

                <p class="top_author">
                  <a href>{{item2.novel_author}}</a>
                </p>

                <p class="top_Introduction">{{item2.novel_desc}}}</p>
              </li>
            </ul>

            <ul class="female_connect_middle-bottom">
              <li v-for="item3 in famelaData1" :key="item3.id">
                <a href="/" class="top_book">
                  <p>{{item3.novel_title}}</p>
                </a>

                <p class="top_author">
                  <a href>{{item3.novel_author}}</a>
                </p>

                <p class="top_Introduction">{{item3.novel_desc}}</p>
              </li>
            </ul>
          </div>

          <div class="female_connect_right">
            <p>女频人气</p>

            <ul class="connect_right_book">
              <li v-for="(item3,index) in famelaData2" :key="item3.id">
                <a href="/">
                  <p>
                    <i class="connect_right_book_chen">{{index+1}}</i>
                    {{item3.novel_title}}
                  </p>
                  <div class="connect_right_book_info" v-show="item3.currentEnce">
                    <img :src="item3.novel_url" alt />
                    <a href>{{item3.novel_author}}</a>
                    <a href>{{item3.novel_desc}}</a>
                  </div>
                </a>
              </li>

              <!-- <li>
                <a href="/">
                  <p>
                    <i class="connect_right_book_hui">1</i>
                    圣祖
                  </p>
                  <div class="connect_right_book_info">
                    <img src="../assets/images/201903121846461623.jpg" alt />
                    <a href>傲天无痕</a>
                    <a href>我们无数次仰望星空，却从没想过，外星人可能就在你我身边？外星人正如你我一样，也会</a>
                  </div>
                </a>
              </li>-->
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
                <el-carousel-item v-for="item in melaData" :key="item">
                  <img :src="item.novel_url" alt />
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
              <li v-for="item1 in melaData1" :key="item1">
                <a href="/" class="top_book">
                  <img :src="item1.novel_url" alt />
                  <p>{{item1.novel_title}}</p>
                </a>

                <p class="top_author">
                  <a href>{{item1.novel_author}}</a>
                </p>

                <p class="top_Introduction">{{item1.novel_desc}}</p>
              </li>
            </ul>

            <ul class="female_connect_middle-bottom">
              <li v-for="item2 in melaData1" :key="item2">
                <a href="/" class="top_book">
                  <p>{{item2.novel_title}}</p>
                </a>

                <p class="top_author">
                  <a href>{{item2.novel_author}}</a>
                </p>

                <p class="top_Introduction">{{item2.novel_desc}}</p>
              </li>
            </ul>
          </div>

          <div class="male_connect_right">
            <p>男频人气</p>

            <ul class="connect_right_book">
              <li v-for="(item3,index) in melaData2" :key="item3">
                <a href="/">
                  <p>
                    <i class="connect_right_book_chen">{{index + 1}}</i>
                    {{item3.novel_title}}
                  </p>
                  <div class="connect_right_book_info" v-show="item3.currentEnce">
                    <img :src="item3.novel_url" alt />
                    <a href>{{item3.novel_author}}</a>
                    <a href>{{item3.novel_desc}}</a>
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
                  <img src="../assets/images/201712261741391310.jpg" alt />
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
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
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
                    <img src="../assets/images/201903121846461623.jpg" alt />
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
                    <img src="../assets/images/201903121846461623.jpg" alt />
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
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
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
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
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
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
                  <p>京华一江春</p>
                </a>

                <p class="top_author">
                  <a href>小染</a>
                </p>

                <p class="top_Introduction">清末民国初，北京城风起云涌，一江春这个小小二</p>
              </li>

              <li>
                <a href="/" class="top_book">
                  <img src="../assets/images/1167257860984.jpg" alt />
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
                  <img src="../assets/images/201903121846461623.jpg" alt />
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
                  <img src="../assets/images/201903121846461623.jpg" alt />
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
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
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
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
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
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
                    <p>爱你看象限</p>
                  </a>
                  <p>一世安</p>
                </li>

                <li>
                  <a href>
                    <img src="../assets/images/1154277717039.jpg" alt />
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
                  <img src="../assets/images/201903121846461623.jpg" alt />
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
                  <img src="../assets/images/201903121846461623.jpg" alt />
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
      activeName: "first",
      connect_middle_top: [],
      topData: [],
      connect_right_book1: [],
      tableData: [],
      famelaData: [],
      famelaData1: [],
      famelaData2: [],
      famelaData3: [],
      melaData: [],
      melaData1: [],
      melaData2:[]
    };
  },
  methods: {
    // changeObjer(item) {
    //   this.connect_right_book1.forEach(item1 => {
    //     item1.currentEnce = false;
    //   });
    //   console.log(item.currentEnce);
    //   console.log(this.connect_right_book1);
    //   item.currentEnce = true;
    //   item.currentEnce = true;
    // },
    handleClick() {}
  },
  updated() {},
  async created() {
    // 主编推荐
    const { data: data1 } = await this.$http("/designation?id1=1,2,3");
    this.topData = data1.data;

    const { data: data2 } = await this.$http(
      "/designation?id1=4,5,6,7,8,9,10,11,12,13"
    );
    this.connect_middle_top = data2.data;

    const { data: data3 } = await this.$http("novels?sz=0&per_page=10");
    this.connect_right_book1 = data3.data;
    this.connect_right_book1.forEach((item, i) => {
      if (i == 0) {
        item.currentEnce = true;
      } else {
        item.currentEnce = false;
      }
    });

    // 女频
    const { data: data4 } = await this.$http("novels?sz=1&per_page=3");
    this.famelaData = data4.data;

    const { data: data5 } = await this.$http("novels?sz=1&per_page=4");
    this.famelaData1 = data5.data;

    const { data: data6 } = await this.$http("novels?sz=1&per_page=3&type=1");
    this.famelaData2 = data6.data;
    this.famelaData2.forEach((item, i) => {
      if (i == 0) {
        item.currentEnce = true;
      } else {
        item.currentEnce = false;
      }
    });

    // 男频
    const { data: data7 } = await this.$http("novels?sz=0&per_page=3");
    this.melaData = data7.data;

    const { data: data8 } = await this.$http("novels?sz=0&per_page=4");
    this.melaData1 = data8.data;

    const { data: data9 } = await this.$http("novels?sz=0&per_page=3&type=1");
    this.melaData2 = data9.data;
    this.melaData2.forEach((item, i) => {
      if (i == 0) {
        item.currentEnce = true;
      } else {
        item.currentEnce = false;
      }
    });
  }
};
</script>

<style lang="less">
.eeee {
  display: none;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

// 公共宽度
.common {
  width: 1120px;
  margin: 0 auto;
}

// 欢迎图片
.welcome > a > img {
  width: 100%;
}
// 欢迎图片结束

// 主编推荐
.editor_recommend {
  margin-top: 20px;
}

.editor_recommend_name {
  position: relative;
  text-align: center;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.el-carousel-item img {
  width: 132px;
  height: 164px;
}

.editor_recommend_name::before {
  position: absolute;
  top: 10px;
  content: "";
  height: 5px;
  width: 100%;
  background-color: #f8f3ea;
  display: block;
}

.editor_recommend_name > span {
  position: absolute;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  background-image: url(../assets/images/title_icon_1.png);
  background-repeat: no-repeat;
  padding: 0 16px 0 44px;
  background-color: white;
  background-position-x: 15px;
}

.editor_recommend_connect {
  width: 100%;
  height: 470px;
  // background-color: antiquewhite;
  margin-top: 20px;
}

.el-carousel {
  width: 232px;
  margin-left: 17px;
  margin-top: 20px;
}

.editor_recommend_connect_left {
  display: inline-block;
  float: left;
  width: 268px;
  height: 469px;
  background-color: #f8f3ea;
  background-image: url(../assets/images/mainrec_left_bg.png);
  background-repeat: no-repeat;
  background-position-y: 284px;
}

.el-carousel__container {
  height: 165px;
}

.connect_left_text {
  width: 232px;
  margin: 0 auto;
}

.connect_left_text p {
  height: 31px;
  text-align: justify;
  overflow: hidden;
}

.connect_left_text p > a,
.connect_left_text p {
  font-size: 14px;
}

.connect_left_text > p:nth-child(3) {
  height: 66px;
  line-height: 24px;
}

.connect_left_text p:nth-child(2) > a {
  color: #99a9bf;
}

.connect_left_text > ul > li {
  display: inline-block;
  width: 50px;
  height: 26px;
  border: 1px solid #99a9bf;
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
  margin-top: 15px;
  margin-left: 16px;
}

.connect_left_button {
  margin: 20px auto;
  width: 98px;
}

.editor_recommend_connect_middle {
  width: 544px;
  height: 478px;
  float: left;
  margin-left: 20px;
}

.connect_middle_top {
  width: 100%;
  height: 180px;
}

.connect_middle_top ul li {
  width: 272px;
  height: 36px;
  display: inline-block;
}

.connect_middle_top ul li a {
  font-size: 15px;
}

.connect_middle_top ul li a > span {
  color: #a6a6b6;
  margin-right: 10px;
}

.connect_middle_bottom {
  width: 544px;
  height: 256px;
  margin-top: 30px;
}

.connect_middle_bottom .connect_middle_bottom_book {
  width: 140px;
  height: 256px;
  display: inline-block;
  margin: 0 0 0 45px;
}

.connect_middle_bottom > .connect_middle_bottom_book:first-child {
  margin-left: 0px;
}

.connect_middle_bottom_book a {
  display: block;
  width: 100%;
  text-align: center;
  height: 20px;
  font-size: 13px;
}

.connect_middle_bottom_book a:nth-child(2) {
  margin-top: 10px;
}

.connect_middle_bottom_book a:last-child {
  color: #b4adb2;
}

.el-carousel__item > img {
  width: 116px;
  height: 165px;
}

.connect_middle_bottom_book img {
  width: 140px;
  height: 187px;
}

.editor_recommend_connect_right {
  float: left;
  width: 218px;
}

.editor_recommend_connect_right > p {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}

.editor_recommend_connect_right > p::after {
  content: "";
  height: 3px;
  background-color: #f37315;
  display: block;
}

.connect_right_book {
  margin-top: 15px;
}

.connect_right_book .connect_right_book_chen {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #f37315;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: white;
  margin-right: 5px;
}

.connect_right_book_info {
  margin-top: 10px;
  height: 103px;
  overflow: hidden;
}

.connect_right_book li:hover .connect_right_book_info {
  display: block;
}

.connect_right_book li {
  margin-top: 10px;
}

.connect_right_book_info img {
  float: left;
  width: 83px;
  height: 103px;
  margin-right: 15px;
}

.connect_right_book_info a {
  display: block;
  font-size: 13px;
  line-height: 20px;
  color: #99a9bf;
}

.connect_right_book .connect_right_book_hui {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #a6a6b6;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: white;
  margin-right: 5px;
}
// 主编推荐结束

// 广告
.advertising {
  margin-top: 20px;
  margin-bottom: 20px;
}
// 广告结束

//女频开始
.editor_recommend .female::before {
  position: absolute;
  top: 10px;
  content: "";
  height: 5px;
  width: 100%;
  background-color: #fff6f6;
  display: block;
}

.editor_recommend .female > span {
  background-image: url(../assets/images/title_icon_girl.png);
}

.editor_recommend_connect .female_left {
  display: inline-block;
  float: left;
  width: 268px;
  height: 469px;
  background-color: #fff5f5;
  background-image: url(../assets/images/girlrec_left_bg.png);
  background-repeat: no-repeat;
  background-position-y: 284px;
}

.female_connect_right {
  float: left;
  width: 218px;
}

.female_connect_right > p {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}

.female_connect_right > p::after {
  content: "";
  height: 3px;
  background-color: #ff5e79;
  display: block;
}

.female_connect_right .connect_right_book_chen {
  background-color: #ff5e79;
}

.female_connect_middle {
  float: left;
  width: 544px;
  height: 470px;
  // background-color: #d3dce6;
  margin-left: 20px;
}

.female_connect_middle-top li {
  display: inline-block;
  width: 246px;
  height: 120px;
  margin-right: 26px;
  margin-bottom: 20px;
}

.top_book img {
  float: left;
  width: 90px;
  height: 120px;
  margin-right: 10px;
}

.top_book p {
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 7px;
}

.top_book p:hover {
  color: #f37315;
}

.top_author a:hover {
  color: #f37315;
}

.top_author a {
  font-size: 14px;
  color: #99a9bf;
}

.top_Introduction {
  color: #99a9bf;
  font-size: 12px;
  margin-top: 35px;
  line-height: 20px;
  height: 40px;
  width: 146px;
  overflow: hidden;
  display: inline-block;
}

.female_connect_middle-bottom li {
  display: inline-block;
  width: 246px;
  height: 86px;
  border-left: #eeeeee 4px solid;
  padding-left: 10px;
  margin-bottom: 9px;
}

.female_connect_middle-bottom .top_Introduction {
  margin-top: 5px;
  width: 192px;
  overflow: hidden;
  height: 35px;
}
// 女频结束

// 男频
.editor_recommend .male:before {
  position: absolute;
  top: 10px;
  content: "";
  height: 5px;
  width: 100%;
  background-color: #e8f3f1;
  display: block;
}

.editor_recommend .male > span {
  background-image: url(../assets/images/title_icon_boy.png);
}

.editor_recommend_connect .male_left {
  background-color: #d7e3e3;
  background-image: url(../assets/images/boyrec_left_bg.png);
}

.male_connect_right {
  float: left;
  width: 218px;
}

.male_connect_right > p {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}

.male_connect_right > p::after {
  content: "";
  height: 3px;
  background-color: #6bd6df;
  display: block;
}

.male_connect_right .connect_right_book_chen {
  background-color: #6bd6df;
}
// 男频结束

// 轻小说
.editor_recommend .light:before {
  position: absolute;
  top: 10px;
  content: "";
  height: 5px;
  width: 100%;
  background-color: #f8f2e9;
  display: block;
}

.editor_recommend .light > span {
  background-image: url(../assets/images/title_icon_cartoon.png);
}

.editor_recommend_connect .light_left {
  background-color: #e6d4d4;
  background-image: url(../assets/images/cartoonrec_left_bg.png);
}

.light_connect_right {
  float: left;
  width: 218px;
}

.light_connect_right > p {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}

.light_connect_right > p::after {
  content: "";
  height: 3px;
  background-color: #ffd800;
  display: block;
}

.light_connect_right .connect_right_book_chen {
  background-color: #ffd800;
}
// 轻小说结束

// 新书推荐
.new_book_left {
  width: 261px;
  // background-color: #b4adb2;
  float: left;
  margin-right: 20px;
}

.book_left_male {
  position: relative;
}

.book_left_male::after {
  position: absolute;
  top: 12px;
  right: 14px;
  content: "";
  width: 86px;
  height: 5px;
  background-color: #f8f3ea;
}

.book_left_male span {
  display: inline-block;
  font-size: 20px;
  background-image: url("../assets/images/title_icon_boy.png");
  background-repeat: no-repeat;
  background-color: #fff;
  font-weight: bold;
  padding: 0 0 0 30px;
  height: 28px;
  line-height: 28px;
}

.book_bottom > ul > li {
  margin-bottom: 20px;
}

.new_book .new_book_left:nth-child(2) .book_left_male span {
  background-image: url("../assets/images/title_icon_girl.png");
}

.new_book .new_book_left:nth-child(3) .book_left_male span {
  background-image: url("../assets/images/title_icon_cartoon.png");
}

.new_book .new_book_left:nth-child(3) > .book_left_male::after {
  right: -5px;
}
// 新书推荐结束

// 完结好书
.end {
  float: left;
  width: 854px;
  margin-top: 10px;
}

.book_end {
  position: relative;
  width: 100%;
  height: 524px;
}

.book_end .editor_recommend_name > span {
  background-image: url("../assets/images/title_icon_end.png");
}

.book_end_female {
  display: inline-block;
  width: 857px;
  height: 157px;
  margin-right: 0;
}

.end_female_title {
  position: absolute;
  float: left;
  background-image: url("../assets/images/end_title_flag.png");
  background-repeat: no-repeat;
  width: 35px;
  height: 122px;
}

.end_female_title span {
  font-size: 15px;
  color: #fff;
  width: 17px;
  display: inline-block;
  margin-left: 8px;
  font-weight: bold;
  margin-top: 10px;
}

.end_famale_content {
  float: left;
}

.end_famale_content ul {
  margin-left: 55px;
}

.end_famale_content ul li {
  float: left;
  margin-right: 60px;
}

.end_famale_content img {
  width: 90px;
  height: 120px;
}

.end_famale_content p {
  display: block;
  width: 100%;
  text-align: center;
  height: 20px;
  font-size: 13px;
}

.end_famale_content > ul > li > p {
  color: #b4adb2;
}

.end .book_end_female:nth-child(2) .end_female_title {
  background-position-x: -40px;
}

.book_end .book_end_female:last-child .end_female_title {
  background-position-x: -80px;
}
// 完结新书结束

// 热门分类
.hot {
  height: 558px;
}

.hot_title {
  position: relative;
  margin-bottom: 10px;
}

.hot_title::after {
  content: "";
  background: #f8f3ea;
  width: 1020px;
  height: 5px;
  position: absolute;
  top: 7px;
  right: 0px;
}

.hot_title span {
  display: block;
  font-size: 18px;
  font-weight: bold;
  background-image: url("../assets/images/title_icon_cate.png");
  background-repeat: no-repeat;
  padding-left: 10px;
}

.hot_content_ul li {
  position: relative;
  float: left;
  width: 260px;
  height: 251px;
  border: 1px solid #dedede;
  margin-right: 18px;
  margin-bottom: 15px;
}

.hot_content_ul li i {
  position: absolute;
  top: 12px;
  left: -6px;
  display: inline-block;
  width: 108px;
  height: 32px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  background-image: url("../assets/images/cate_title_flag.png");
}

.hot_content_details {
  margin: 50px 0px 0px 22px;
}

.hot_content_details > a {
  float: left;
}

.hot_content_details > p:nth-child(2) a {
  display: block;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 10px;
}

.hot_content_details > p:nth-child(2) {
  display: inline-block;
}

.hot_content_details > p:nth-child(3) a {
  font-size: 14px;
  color: #99a9bf;
}

.hot_content_details img {
  width: 82px;
  height: 103px;
  margin-right: 10px;
}

.hot_content_details > a:last-child {
  display: inline-block;
  width: 68px;
  height: 20px;
  border: #f37315 1px solid;
  line-height: 20px;
  text-align: center;
  border-radius: 5px;
  margin-top: 25px;
}

.hot_content_p {
  position: absolute;
  top: 68%;
  left: 25px;
}

.hot_content_p p {
  margin-bottom: 10px;
}

.hot_content_p p > span {
  color: #b4adb2;
  font-size: 14px;
  margin-right: 5px;
}

.hot_content_p p > a {
  font-size: 14px;
  color: #333;
}
// 热门分类结束

// 大神介绍
.great .hot_title::after {
  top: 16px;
}

.great .hot_title > span {
  background-position-y: 7px;
}

.great_content {
  margin-top: 50px;
}

.great_content ul li {
  display: inline-block;
  width: 260px;
  margin-right: 20px;
}

.great_content ul li i {
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 1px;
  width: 260px;
  height: 32px;
  background-color: #f1f1f4;
}

.great_content_bottom {
  position: relative;
  width: 260px;
  height: 120px;
  border: 1px solid #d7d7da;
}

.great_content_bottom p:first-child {
  line-height: 32px;
  text-align: center;
  position: absolute;
  left: 90px;
}

.great_content_bottom p:last-child {
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  line-height: 20px;
  padding: 4px 10px 0px 12px;
}

.great_content ul li {
  position: relative;
}

.great_content ul li a:nth-child(2) {
  position: absolute;
  top: -33px;
  z-index: 100;
}

.great_content ul li a:nth-child(2) img {
  width: 60px;
  height: 60px;
  border-radius: 50px;
}
// 大神介绍结束

// 最近更新
.recent_updates_left {
  float: left;
  width: 800px;
  margin-right: 35px;
}

.recent_updates_title {
}
.recent_updates_title span {
  float: left;
  font-size: 18px;
  display: inline-block;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 1px;
  width: 93px;
  height: 20px;
  background-image: url("../assets/images/title_icon_cate.png");
  background-repeat: no-repeat;
}

.recent_updates_title a {
  float: right;
  display: inline-block;
  width: 80px;
  height: 20px;
  border: #f37315 1px solid;
  text-align: center;
  line-height: 20px;
  border-radius: 5px;
}

.el-table__header-wrapper {
  border-bottom: 3px solid #909399;
}

.el-tabs {
  float: left;
  width: 264px;
}

.el-tabs__item:hover {
  color: #f37315;
}

.el-tabs__active-bar {
  background-color: #f37315;
}

.el-tabs__item.is-active {
  color: #f37315;
}
// .el-tab-top{
//   width: 45px;
// }
</style>