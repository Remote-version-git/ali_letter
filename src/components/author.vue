<template>
    <div class="author">
        <div class="am-top-bg">
		<div class="page-width">
			<div class="subnav">
		      	<p>
		      		<i><a href="/">首页</a></i>
		      		<span>简落离</span>
		      	</p>
		    </div>
		    <div class="am-hborder">
	    		<img class="am-himg" src="../assets/images/defaut.png">
		    </div>
		    <div class="am-center">
		    	<p class="am-name">简落离</p>
		    	<p class="am-name-bottom"></p>
		    </div>
		</div>
	</div>
    <div class="page-width clear">
		<div class="am-con-title am-center">
			<div class="am-title-pen">
				<span>简落离</span><span>的作品</span>
			</div>
		</div>
		<div class="am-body">
			<div class="am-item">
				<a target="_blank" href="/cover?bid=7473196"><img class="am-item-img" src="http://img-tailor.11222.cn/bcv/big/1172587473196.jpg"></a>
				<div class="am-item-div">
					<a target="_blank" href="/cover?bid=7473196"><p class="am-right-title">我的狐王男友</p></a>
					<div class="am-right-num"><span class="am-right-num-span">79万字</span><span>幻想言情</span></div>
					<p class="am-right-desc">一个是妖族狐王，一个是只能隐藏身份的女巫，两人本不该有任何的牵扯，但是，缘分这种东西，谁知道呢？还不是在六千年前就相遇相爱？还不是在沉睡了六千年后依旧的相爱？都是愿意为了心爱之人而放弃一切之人，怎么会没有一个好的结局？即便是困难重重，但是在爱的面前什么都不算了，我的狐王，我，永远都是你的狐后！</p>
					<div class="am-right-bot">
						<a target="_blank" class="am-right-read" href="/reader?bid=7473196">立即阅读</a>
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
            novelData:[]
        }
    },
    created() {
        this.getNovelData()
    },
    methods: {
       async getNovelData() {
            const { data } = await this.$http.get(`/novels/${this.id}`)
            this.novelData = data.data
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
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-orient: vertical;
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