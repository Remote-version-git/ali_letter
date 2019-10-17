<template>
  <div class="zong">
    <el-row class="rkleft">
      <el-tabs tab-position="left" v-model="activeName">
        <el-tab-pane class="paihang" label="排行榜单" disabled></el-tab-pane>
        <el-tab-pane label="男频点击榜" name="second">
          <div class="rigth">
            <ul class="ranklist-ul">
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1130867089610.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>福地甜园：拐个王爷好种田</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon1"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1106997010698.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>冥龙神尊</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon2"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1159127520672.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>零点</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon3"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="女频点击榜">
          <div class="rigth">
            <ul class="ranklist-ul">
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>福地甜园：拐个王爷好种田</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon1"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1106997010698.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>冥龙神尊</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon2"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1159127520672.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>零点</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon3"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="完结榜">
           <div class="rigth">
            <ul class="ranklist-ul">
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/201804101519109645.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>福地甜园：拐个王爷好种田</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon1"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1106997010698.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>冥龙神尊</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon2"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1159127520672.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>零点</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon3"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              ></el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="字数榜">
           <div class="rigth">
            <ul class="ranklist-ul">
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/navs_head_bg.png" alt class="img" />
                </a>
                <a href>
                  <h3>福地甜园：拐个王爷好种田</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon1"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1106997010698.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>冥龙神尊</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon2"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1159127520672.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>零点</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
                  </span>
                  <span>
                    <a href>全文</a>
                  </span>
                </p>
                <div class="ranklist-handle">
                  <a class="immediately" href>立即阅读</a>
                  <span class="addshelf js-addShelf">+书架</span>
                </div>
                <div class="ranklist-top rktop-icon3"></div>
              </li>
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
              <li>
                <a href>
                  <img src="../assets/img/changkexinimg/1151507895784.jpg" alt class="img" />
                </a>
                <a href>
                  <h3>末日堡垒</h3>
                </a>
                <p class="ranklist-autor">
                  <span class="bkuser-icon">
                    <i class="el-icon-user-solid"></i>
                    <a class="zzm" href>幽花山月</a>
                  </span>
                  <i class="el-icon-menu"></i>
                  <span class="bkcate-icon">都市异能</span>
                </p>
                <p class="ranklist-des">
                  一朝穿越成为名满天下的顾氏女，却被预言活不过十六岁，顾云曦满头黑线。
                  我的生活我做主，管他什么预言？顾家大院麻烦多，看她保护母亲弟妹斗极品，带领家人发家致富奔小康某人，你总往本姑娘身边凑，几个意思？
                  娘子，你都把我拐到手了，还能啥意思？吹灯耕田呗。
                </p>
                <p class="ranklist-tag">
                  <span>
                    <a href>穿越</a>
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
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
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
      activeName: "second"
    };
  }
};
</script>

<style>
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
  background-image: url(../assets/img/changkexinimg/navs_head_bg.png);
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
  background: url(../assets/img/changkexinimg/rank_top_1.png);
}
.rktop-icon2 {
  background: url(../assets/img/changkexinimg/rank_top_2.png);
}
.rktop-icon3 {
  background: url(../assets/img/changkexinimg/rank_top_3.png);
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