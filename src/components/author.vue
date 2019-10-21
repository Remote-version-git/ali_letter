<template>
  <div class="author">
    <div class="am-top-bg">
        <div class="page-width">
            <div class="subnav">
                <p>
                    <i><a href="/">首页</a></i>
                    <span>{{authorName}}</span>
                </p>
            </div>
            <div class="am-hborder">
                <img class="am-himg" src="../assets/images/defaut.png">
            </div>
            <div class="am-center">
                <p class="am-name">{{authorName}}</p>
                <p class="am-name-bottom"></p>
            </div>
        </div>
    </div>
    <div class="page-width clear">
        <div class="am-con-title am-center">
            <div class="am-title-pen">
                <span>{{authorName}}</span><span>的作品</span>
            </div>
        </div>
        <div class="am-body" v-for="item in novelData" :key="item.id">
            <div class="am-item">
                <a target="_blank" :href="/book/ + item.id"><img class="am-item-img"
                        :src="item.novel_url"></a>
                <div class="am-item-div">
                    <a target="_blank" :href="/book/ + item.id">
                        <p class="am-right-title">{{item.novel_title}}</p>
                    </a>
                    <div class="am-right-num"><span class="am-right-num-span">{{item.word_nums}}万字</span><span>{{item.novel_classify}}</span></div>
                    <p class="am-right-desc">
                       {{item.novel_desc}}
                    </p>
                    <div class="am-right-bot">
                        <a target="_blank" class="am-right-read" :href="item.novel_paths">立即阅读</a>
                        <div class="am-right-shelf js-addShelf" data-bid="7098680">+书架</div>
                    </div>
                </div>
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
            novelData:[],
            authorName:""
        }
    },
    created() {
        this.getNovelData()
    },
    methods: {
       async getNovelData() {
            const { data } = await this.$http.get(`/novels/${this.id}`)
            this.authorName = data.data[0].novel_author
             const { data : data1 } = await this.$http.get(`/novels?keyword=${data.data[0].novel_author}`)
            this.novelData = data1.data
            
             
            
        }
    }
}
</script>


<style lang="less" scoped>
.author{
    
    margin-top: -14px;
    margin-bottom: 75px;
}
.am-top-bg {
    width: 100%;
    background-image: url("../assets/images/authormain-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
.page-width {
    width: 1120px;
    margin: 0 auto;
}
.subnav {
    padding-top: 26px;
    font-size: 13px;
    color: #1d1e20;
}

.subnav i {
    font-style: normal;
    display: inline-block;
}

.subnav span {
    color: #999;
}
.subnav i:after {
    content: '';
    width: 6px;
    height: 12px;
    color: #b0a9a9;
    background: url("../assets/images/r_arrows.png") no-repeat;
    float: right;
    margin: 3px 8px;
}
.am-hborder {
    width: 200px;
    height: 150px;
    margin: 0 auto;
    margin-top: 25px;
    background-image: url("../assets/images/authormain-border.png");
    background-repeat: no-repeat;
    background-position: center center;
}

.am-himg {
    width: 123px;
    height: 123px;
    border: 5px solid white;
    margin-left: 38px;
    margin-top: 13px;
    border-radius: 123px;
    background-color: #e2e4e4;
    box-sizing: border-box;
}

.am-center {
    text-align: center;
}

.am-name {
    font-size: 22px;
    margin-top: 5px;
    font-weight: bold;
}

.am-name-bottom {
    font-size: 14px;
    padding: 10px;
    color: #6f7f93;
}

.page-width {
    width: 1120px;
    margin: 0 auto;
}
.am-con-title {
    width: 100%;
    padding-top: 30px;
    font-size: 16px;
}

.am-title-pen:before {
    content: ' ';
    margin-right: 5px;
    width: 20px;
    height: 20px;
    display: inline-block;
    background-image: url(../assets/images/authormain-pen.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: -4px;
}
.am-body {
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    display: table;
}
.am-item {
    display: inline-block;
    float: left;
    height: 165px;
    width: 560px;
    box-sizing: border-box;
    margin-top: 40px;
}
.am-item-img {
    width: 135px;
    height: 164px;
    display: inline-block;
    float: left;
}
.am-item-div {
    display: inline-block;
    float: left;
    width: 420px;
    height: 164px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 30px;
    position: relative;
    color: #1d1f21;
}
.am-right-title {
    font-size: 14px;
    font-weight: bold;
}
.am-right-num {
    font-size: 12px;
    margin-top: 25px;
    color: #6f7f93;
}
.am-right-num-span {
    margin-right: 30px;
}
.am-right-num {
    font-size: 12px;
    margin-top: 25px;
    color: #6f7f93;
}
 .am-right-desc {
    font-size: 12px;
    margin-top: 20px;
    color: #6f7f93;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height: 34px;
    overflow: hidden;
}
.am-right-bot {
    overflow: hidden;
    text-align: center;
    position: absolute;
    left: 20px;
    top: 133px;
}
 .am-right-read {
    width: 110px;
    height: 30px;
    display: inline-block;
    float: left;
    font-size: 12px;
    line-height: 30px;
    margin-right: 12px;
    background-color: #f36f20;
    color: white;
    cursor: pointer;
}
.am-right-shelf.disable {
    border-color: #ccc;
    color: #999;
}
.authormain-page .am-right-shelf {
    width: 110px;
    height: 30px;
    border: 1px solid #f36f20;
    display: inline-block;
    float: left;
    font-size: 12px;
    line-height: 30px;
    cursor: pointer;
    box-sizing: border-box;
}

.am-right-shelf.disable {
    border-color: #ccc;
    color: #999;
}
.am-right-shelf {
  width: 110px;
    height: 30px;
    border: 1px solid #f36f20;
    display: inline-block;
    float: left;
    font-size: 12px;
    line-height: 30px;
    color: #f36f20;
    cursor: pointer;
    box-sizing: border-box;
}
</style>