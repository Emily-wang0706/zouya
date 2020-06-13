<template>
	<view>
		<view class="header">
			<view class="head-bg">
				<image src="../../static/img/head.png" class="head-img" mode=""></image>
				<view class="end-title">
					<view v-for="(item, index) in items" :key="index" :class="{ btna: count == index }" @tap="change(index)">{{ item }}</view>
				</view> 
				<view class="weather">
					<text class="icon iconfont icon-tianqi" style="margin-right: 8rpx;"></text> 28℃
				</view>
				<view class="head-bottom">
					<view class="hbottom-l">
						<view class="avatarbox">
							<template v-for="(item,index) in useravatar">
								<u-avatar :size="50" :ml="ml" :src="item.url"></u-avatar> 
							</template> 
						</view>
						<text style="margin-left: 12rpx;">
							{{Sign}}人打过卡
						</text>
					</view> 
					<view class="hbottom-r">
						<u-checkbox-group size="34" @change="checkboxGroupChange">
							<u-checkbox 
								active-color="none" 
								label-size="30"
								@change="checkboxChange" 
								v-model="item.checked" 
								v-for="(item, index) in list" :key="index" 
								:name="item.name" shape="circle"
							>{{item.name}}</u-checkbox>
						</u-checkbox-group>
					</view>
				</view> 
			</view>  
		</view> 
		<view class="intlocal">
			<view class="intlocal-tt">
				<image src="../../static/img/camera.png" mode="widthFix"></image> <text class="tt-title">网红打卡地</text>
			</view>
			<view class="intlocal-con">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll">
					 <view class="intlocal-card" v-for="(item,index) in intcard" 
					 :style="{backgroundImage: 'url('+ item.url +')',backgroundSize:cover }" :key="index">
					 	 <view class="card-btm">
					 	 	<view class="btm-tt">
					 	 		{{item.title}}
					 	 	</view>
							<view class="btm-num">
								{{item.num}} 人打卡
							</view>
					 	 </view>
					 </view>
				</scroll-view>
			</view>
		</view>
		<view class="playbox">
			<view class="intlocal-tt">
				<image src="../../static/img/Play.png" mode="widthFix"></image> <text class="tt-title">吃喝玩乐</text>
			</view>
			<view class="play-con">
				<u-tabs :list="tablist" font-size="26" height="42" bold="true" inactive-color="#828282" :show-bar="false" :is-scroll="true" 
				:current="current" active-color="#050505" :activeItemStyle="activeItemStyle" @change="change1"></u-tabs>
				<view class="play-card">
					<view class="card-item" v-for="(item,index) in playlist" :key="index">
						<image :src="item.url" mode=""></image>
						<view class="card-tt">
							<view class="item-tt">
								{{item.title}}
							</view>
							<view class="item-num">
								{{item.num}} 人打卡
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="travel">
			<view class="intlocal-tt">
				<image src="../../static/img/map.png" mode="widthFix"></image> <text class="tt-title">旅游攻略</text>
			</view>
			<view class="travel-con">
				<u-tabs :list="tablist1" font-size="26" height="42" bold="true" inactive-color="#828282" :show-bar="false" :is-scroll="true"
				:current="current1" active-color="#050505" :activeItemStyle="activeItemStyle" @change="change2"></u-tabs>
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
	</view>
</template>

<script>
	import REQUtil from '@/common/request.js';
	export default {
		data() {
			return {
				count: 2,
				btnnum: 2,
				ml:12,
				Sign:7234,
				items: ['关注','发现','南京'],
				activeItemStyle:{
					'background':'#F6F6F6',
					'border-radius': '21rpx'
				},
				useravatar:[
					{url:'https://img.xiaohongshu.com/avatar/5e71c94e9781840001814362.jpg@80w_80h_90q_1e_1c_1x.jpg'},
					{url:'https://img.xiaohongshu.com/avatar/5d560008f85d68000106f7d0.jpg@80w_80h_90q_1e_1c_1x.jpg'},
					{url:'https://img.xiaohongshu.com/avatar/5ea541dcea6c1600015afb91.jpg@80w_80h_90q_1e_1c_1x.jpg'}
				],
				list: [
					{
						name: '来过',
						checked: true,
						disabled: false
					} 
				],
				intcard:[
					{
						url:'https://ci.xiaohongshu.com/495628c8-e7ea-5ea7-b833-1939102f69d6?imageView2/2/w/540/format/jpg',
						title:'老门东',
						num:2374
					},
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'老门东',
						num:2374
					},
					{
						url:'https://ci.xiaohongshu.com/495628c8-e7ea-5ea7-b833-1939102f69d6?imageView2/2/w/540/format/jpg',
						title:'老门东',
						num:2374
					},
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'老门东',
						num:2374
					} 
				],
				tablist: [{
						name: '全部'
					}, {
						name: '景点'
					}, {
						name: '美食'
					}, {
						name: '购物'
					}],
					current: 0,
					tablist1: [{
							name: '景点'
						}, {
							name: '美食'
						}, {
							name: '购物'
						}],
						current1: 0,
				playlist: [
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'栖霞古寺',
						num:'7547'
					},
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'栖霞古寺',
						num:'7547'
					},
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'栖霞古寺',
						num:'7547'
					},
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'栖霞古寺',
						num:'7547'
					},
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'栖霞古寺',
						num:'7547'
					},
					{
						url:'https://ci.xiaohongshu.com/f34f30a1-06cb-5b91-967f-ca7dd44894e8?imageView2/2/w/540/format/jpg',
						title:'栖霞古寺',
						num:'7547'
					}
				],
				flwlist:[],
				flowList:[],
				is_next:false
			}
		},
		onLoad() {
			REQUtil.Request({
				url:REQUtil.API.index, 
				nav_id:0,
				page:1,
				success: res => { 
					this.flwlist = res.data.list;
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
					let index = this.$u.random(0, this.flwlist.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱 
					let item = JSON.parse(JSON.stringify(this.flwlist[index]))
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
		},
		change1(index) {
			this.current = index;
		},
		change2(index) {
			this.current1 = index;
		},
		// 选中某个复选框时，由checkbox时触发
		checkboxChange(e) {
			//console.log(e);
		},
		// 选中任一checkbox时，由checkbox-group触发
		checkboxGroupChange(e) {
			// console.log(e);
		} 
		}
	}
</script>

<style>
.header{ 
	width: 100%;
	display: flex;
	flex-direction:column;
	justify-content: space-between; 
	padding-top: 0rpx; 
	z-index: 1009; 
	height: 422rpx;
}
.head-bg {width: 100%; height: 100%;position: relative;}
.head-bg view {z-index: 900;}
.head-bg .head-img { width: 100%; height: 100%;position: absolute;z-index: 500;}
.end-title {
	width: 42%; 
	margin: 0 auto;
	display: flex;
	position: fixed;
	top: 40rpx;
	left: 29%;
	z-index: 1010;
}
.end-title > view {
	height: 88rpx;
	line-height: 88rpx;
	color: #fff;
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
	color: #fff;
	font-size: 40rpx;
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
.avatarbox { margin-left: 12rpx; border-radius: 21rpx;}
.head-bottom {display: flex; justify-content:space-between; position: absolute; width: 100%; bottom: 62rpx;left:0rpx; color: #fff;}
.head-bottom > view > text { line-height: 50rpx; margin-left: 12rpx; font-size: 24rpx; color: #fff;}
.weather { color: #fff;position: absolute; bottom: 146rpx; left:22rpx; font-size: 34rpx;}
.weather .iconfont { font-size: 42rpx; font-weight: bold;} 
.hbottom-l { display: flex;justify-content: flex-start; padding-left: 22rpx;}
.intlocal { padding: 22rpx;border-radius:16px 16px 0px 0px;background:rgba(255,255,255,1);
 position: relative; z-index: 1010; margin-top: -26rpx;}
.tt-title { font-size: 30rpx; color: #3A3A3A; margin-left: 12rpx; vertical-align: middle;}
.intlocal-tt { padding-bottom: 20rpx;}
.intlocal-tt image { width: 40rpx; line-height: 40rpx; vertical-align: middle;}
.intlocal-card { width: 240rpx; height: 320rpx;display: inline-block; margin-right: 15rpx; border-radius: 12rpx; overflow: hidden;position: relative;}
.scroll-view_H { display: flex;justify-content: flex-start; margin-right: 15rpx; white-space: nowrap; }
.btm-num { height: 30rpx; display: inline-block; line-height: 30rpx;background:rgba(255,255,255,0.4); font-size: 24rpx; color: #000; padding: 0px 12rpx; border-radius: 6rpx;}
.btm-tt { font-size: 27rpx; color: #fff; margin-bottom: 15rpx; font-weight: normal;}
.card-btm { position: absolute; bottom: 20rpx; left: 20rpx; width: 100%;}
.playbox {padding: 22rpx;  }
.play-con {}
.play-card { display: flex;direction:column;flex-wrap:wrap; margin-top: 40rpx;}
.card-item { width: 50%; display: flex;justify-content:flex-start; margin-bottom: 20rpx;}
.card-item image {width: 120rpx; height: 120rpx; border-radius: 6rpx; margin-right: 20rpx;}
.item-tt { font-size: 27rpx; color: #050505; margin-bottom: 20rpx; margin-top: 10rpx;}
.item-num { font-size: 22rpx; color: #323232;}
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
