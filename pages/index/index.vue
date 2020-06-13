<template>
	<view class="content">
		<view class="header">
			<view class="end-title">
				<view v-for="(item, index) in items" :key="index" :class="{ btna: count == index }" @tap="change(index)">{{ item }}</view>
			</view>
			<view class="search"><view></view><view class="search-txt">喜茶网红款</view></view>
		</view>
		
		<view class="end-content">
			<view class="end-cont" :class="{ dis: btnnum == 0 }">
				<view class="info-content">
				   <follo-wuser :friend="friend"></follo-wuser>
				   <u-waterfall v-model="flowList" ref="uWaterfall">
				   	<template v-slot:left="{leftList}">
				   		<view class="demo-warter" v-for="(item, index) in leftList" :key="index" style="margin-right: 0;">
				   			<!-- 警告：微信小程序不支持嵌入lazyload组件，请自行如下使用image标签 -->
				   			<!-- #ifndef MP-WEIXIN -->
				   			<u-lazy-load threshold="-450" border-radius="10" :image="item.thumb" :index="index"></u-lazy-load>
				   			<!-- #endif -->
				   			<!-- #ifdef MP-WEIXIN -->
				   			<view class="demo-img-wrap">
				   				<image class="demo-image" :src="item.thumb" mode="widthFix"></image>
				   				<view class="itag-box">
				   					<image v-if="item.has_music == 1" class="image-tag" src="../../static/img/music.png" mode=""></image>
				   					<image v-if="item.has_voice == 1" class="image-tag" src="../../static/img/audio.png" mode=""></image>
				   					<image v-if="item.has_video == 1" class="image-tag" src="../../static/img/video.png" mode=""></image> 
				   				</view>
				   				<view v-if="item.tag" class="img-tag">
				   				   {{item.tag}}
				   				</view>
				   			</view>
				   			<!-- #endif -->
				   			<view class="demo-title">
				   				{{item.title}}
				   			</view>
				   			<view class="likes-box"> 
				   				<view class="demo-shop">
				   					<image :src="item.avatar_url" mode=""></image> {{item.nickname}}
				   				</view>
				   				<view class="demo-price">
				   					<text class="icon iconfont icon-aixin"></text>{{item.likes}}
				   				</view>
				   			</view>
				   			<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
				   			<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
				   		</view>
				   	</template>
				   	<template v-slot:right="{rightList}">
				   		<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
				   			<!-- #ifndef MP-WEIXIN -->
				   			<u-lazy-load threshold="-450" border-radius="10" :image="item.thumb" :index="index"></u-lazy-load>
				   			<!-- #endif -->
				   			<!-- #ifdef MP-WEIXIN -->
				   			<view class="demo-img-wrap">
				   				<image class="demo-image" :src="item.thumb" mode="widthFix"></image>
				   				<view class="itag-box">
				   					<image v-if="item.has_music == 1" class="image-tag" src="../../static/img/music.png" mode=""></image>
				   					<image v-if="item.has_voice == 1" class="image-tag" src="../../static/img/audio.png" mode=""></image>
				   					<image v-if="item.has_video == 1" class="image-tag" src="../../static/img/video.png" mode=""></image> 
				   				</view> 
				   				<view v-if="item.tag" class="img-tag">
				   				   {{item.tag}}
				   				</view>
				   			</view>
				   			<!-- #endif -->
				   			<view class="demo-title">
				   				{{item.title}}
				   			</view>
				   			<view class="likes-box">
				   				<view class="demo-shop">
				   					<image :src="item.avatar_url" mode=""></image>	{{item.nickname}}
				   				</view>
				   				<view class="demo-price">
				   					<text class="icon iconfont icon-aixin"></text>{{item.likes}}
				   				</view>
				   			</view>
				   			<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
				   			<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
				   		</view>
				   	</template>
				   </u-waterfall>
				   <u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
			    </view>
			</view> 
			<view class="end-cont" :class="{ dis: btnnum == 1 }">
				<swiper-tab-head :list1="list1"></swiper-tab-head> 
				<u-waterfall v-model="flowList" ref="uWaterfall">
					<template v-slot:left="{leftList}">
						<view class="demo-warter" v-for="(item, index) in leftList" :key="index" style="margin-right: 0;">
							<!-- 警告：微信小程序不支持嵌入lazyload组件，请自行如下使用image标签 -->
							<!-- #ifndef MP-WEIXIN -->
							<u-lazy-load threshold="-450" border-radius="10" :image="item.thumb" :index="index"></u-lazy-load>
							<!-- #endif -->
							<!-- #ifdef MP-WEIXIN -->
							<view class="demo-img-wrap">
								<image class="demo-image" :src="item.thumb" mode="widthFix"></image>
								<view class="itag-box">
									<image v-if="item.has_music == 1" class="image-tag" src="../../static/img/music.png" mode=""></image>
									<image v-if="item.has_voice == 1" class="image-tag" src="../../static/img/audio.png" mode=""></image>
									<image v-if="item.has_video == 1" class="image-tag" src="../../static/img/video.png" mode=""></image> 
								</view>
								<view v-if="item.tag" class="img-tag">
								   {{item.tag}}
								</view>
							</view>
							<!-- #endif -->
							<view class="demo-title">
								{{item.title}}
							</view>
							<view class="likes-box"> 
								<view class="demo-shop">
									<image :src="item.avatar_url" mode=""></image> {{item.nickname}}
								</view>
								<view class="demo-price">
									<text class="icon iconfont icon-aixin"></text>{{item.likes}}
								</view>
							</view>
							<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
							<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
						</view>
					</template>
					<template v-slot:right="{rightList}">
						<view class="demo-warter" v-for="(item, index) in rightList" :key="index">
							<!-- #ifndef MP-WEIXIN -->
							<u-lazy-load threshold="-450" border-radius="10" :image="item.thumb" :index="index"></u-lazy-load>
							<!-- #endif -->
							<!-- #ifdef MP-WEIXIN -->
							<view class="demo-img-wrap">
								<image class="demo-image" :src="item.thumb" mode="widthFix"></image>
								<view class="itag-box">
									<image v-if="item.has_music == 1" class="image-tag" src="../../static/img/music.png" mode=""></image>
									<image v-if="item.has_voice == 1" class="image-tag" src="../../static/img/audio.png" mode=""></image>
									<image v-if="item.has_video == 1" class="image-tag" src="../../static/img/video.png" mode=""></image> 
								</view> 
								<view v-if="item.tag" class="img-tag">
								   {{item.tag}}
								</view>
							</view>
							<!-- #endif -->
							<view class="demo-title">
								{{item.title}}
							</view>
							<view class="likes-box">
								<view class="demo-shop">
									<image :src="item.avatar_url" mode=""></image>	{{item.nickname}}
								</view>
								<view class="demo-price">
									<text class="icon iconfont icon-aixin"></text>{{item.likes}}
								</view>
							</view>
							<!-- 微信小程序无效，因为它不支持在template中引入组件 -->
							<u-icon name="close-circle-fill" color="#fa3534" size="34" class="u-close" @click="remove(item.id)"></u-icon>
						</view>
					</template>
				</u-waterfall>
				<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
			</view>
			<view class="end-cont" :class="{ dis: btnnum == 2 }"><view class="nj-content">南京信息</view></view>
		</view>
	</view>
</template> 
<script>
import swiperTabHead from '@/my-components/swiper-tab-head.vue';
import folloWuser from '../../my-components/followuser.vue';
import REQUtil from '@/common/request.js';
export default {
	data() {
		return {
			count: 1,
			btnnum: 1,
			items: ['关注','发现','南京'],
			loadStatus: 'loadmore',
			flowList: [], 
			friend:[],
			list: [],
			is_next:false,
			list1: []
		};
	},
	components: { swiperTabHead,folloWuser },
	onLoad() {
		REQUtil.Request({
			url:REQUtil.API.indextab,   
			page:1,
			success: res => { 
				this.list1 = res.data.list; 
			},
			error:function(){
			}
		})
		REQUtil.Request({
			url:REQUtil.API.index, 
			nav_id:0,
			page:1,
			success: res => { 
				this.list = res.data.list;
				this.is_next = res.data.is_next;
				this.addRandomData();    
			},
			error:function(){
			}
		}) 
	},
	onReachBottom() {
		if (process.env.NODE_ENV === 'development') {
			// 开发环境
			 this.loadStatus = 'loading';
			 // 模拟数据加载
			 setTimeout(() => {
			 	this.addRandomData();
			 	this.loadStatus = 'loadmore';
			 }, 1000)
		} else {
			// 生产环境
			if(this.is_next){
				this.loadStatus = 'loading';
				// 模拟数据加载
				setTimeout(() => {
					this.addRandomData();
					this.loadStatus = 'loadmore';
				}, 1000)
			} 
		}
		
	},
	methods: {
		addRandomData() {
			for(let i = 0; i < 10; i++) {
				let index = this.$u.random(0, this.list.length - 1);
				// 先转成字符串再转成对象，避免数组对象引用导致数据混乱 
				let item = JSON.parse(JSON.stringify(this.list[index]))
				item.id = this.$u.guid();
				this.flowList.push(item);
			}
		},
		remove(id) {
			this.$refs.uWaterfall.remove(id);
		}, 
		change(e) {
			this.count = e;
			this.btnnum = e;
			console.log(this.btnnum);
			if(this.btnnum == 0){
				REQUtil.Request({
					url:REQUtil.API.friend,   
					page:1,
					success: res => { 
						this.friend = res.data.list;  
					},
					error:function(){
					}
				});
				REQUtil.Request({
					url:REQUtil.API.index, 
					user_id:5456,
					page:1,
					success: res => { 
						this.list = res.data.list;
						this.is_next = res.data.is_next;
						this.addRandomData();    
					},
					error:function(){
					}
				}) 
			}else if(this.btnnum == 1){
				this.addRandomData();  
			}
		}
	}
};
</script>

<style scoped>
page { background-color: #FAFAFA;}
.content {
	width: 100%;
	height: auto; 
}
/* 将三个内容view的display设置为none(隐藏) */
.header{ 
	width: 100%;
	display: flex;
	flex-direction:column;
	justify-content: space-between;
	position: fixed;
	top: 0rpx;
	padding-top: 50rpx;
	left: 0;
	z-index: 1009;
	padding-bottom: 18rpx;
	border-bottom: 1px solid #F0F0F0;
	background-color: #fff;
}
.end-title {
	width: 42%; 
	margin: 0 auto;
	display: flex;
	// position: fixed;
	// top: 60rpx;
	// left: 29%;
}
.end-title > view {
	height: 88rpx;
	line-height: 88rpx;
	color: #999999;
	font-size: 34rpx;
	flex-grow: 1;
	text-align: center;
}
.end-cont {
	display: none;
	background: #c8c7cc;
	margin-top: 148rpx;
}
.end-title > view.btna {
	color: black;
	font-size: 36rpx;
	box-sizing: border-box;
	background: url(../../static/img/bottom.png) no-repeat center 56rpx;
}
.end-content {
	width: 100%;
	height: calc(100vh - 148rpx);
	background: red;
	margin-top: 220rpx;
}
.dis {
	width: 100vw;
	height: 100%; 
	display: block;
	background: #fafafa;
}
.search {
	width: 80%;
	height: 50rpx;
	margin: 0rpx 10%;
	border-radius: 50rpx;
	background: #f0f0f0;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	// position: fixed;
	// top: 128rpx;
	// left: 20rpx;
}
.search-txt {
	display: inline-block;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 25rpx;
	font-weight: normal;
	color: #bbbbbb;
}
.info-content {
	margin-top: 40rpx;
}
.nj-content {
	margin-top: 40rpx;
}
.demo-warter {
		border-radius: 8px;
		margin: 8px;
		background-color: #ffffff;
		// padding: 8px;
		position: relative;
	}
	
	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}
	
	.demo-image {
		width: 100%;
		border-radius: 4px 4px 0px 0px;
	}
	
	.demo-title {
		font-size: 27rpx;
		margin-top: 5px;
		color: $u-main-color;
		padding-left: 16rpx;
		padding-right: 12rpx;
	}
	
	.demo-tag {
		display: flex;
		margin-top: 5px;
	}
	
	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}
	
	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}
	
	.demo-price {
		font-size: 27rpx;
		color: #3A3A3A;
		margin-top: 5px;
	}
	.demo-price .iconfont { margin-right: 10rpx; font-size: 26rpx;}
	.demo-shop {
		font-size: 23rpx;
		color: $u-tips-color;
		margin-top: 5px;
		line-height: 45rpx;
		width: 190rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	} 
	.demo-shop image { width: 45rpx; height:45rpx; border-radius:50%; vertical-align: middle; margin-right: 12rpx;}
	.likes-box { display: flex;justify-content: space-between; padding-bottom: 28rpx; padding-left: 16rpx; padding-right: 12rpx;} 
	.demo-img-wrap {position: relative;}
	.demo-img-wrap .itag-box {position: absolute; top:10rpx; right: 8rpx; display: flex;justify-content: flex-end;}
	.demo-img-wrap .itag-box image {width: 35rpx; height: 35rpx; margin-left: 10rpx;}
	.img-tag { position: absolute;bottom: 18rpx; left: 10rpx; height: 35rpx; 
	line-height: 35rpx; padding: 0px 14rpx;z-index: 1001;background:rgba(93,93,93,0.5); color: #FFFFFF; font-size: 22rpx;border-radius:10px 10px;}
</style>
