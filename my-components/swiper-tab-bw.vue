<template>
	<view class="cont">
		<!-- 轮播 -->
		<view class="swiper-box">
			<view class="swiper-bg"><image mode="widthFix" class="bg-img" :src="looplist1.background_image"></image></view>
			<view class="page-section-spacing swiper-item-box">
				<swiper
					class="swiper"
					indicator-active-color="rgba(255, 194, 31, 1)"
					indicator-color="rgba(255, 255, 255, 1)"
					indicator-dots="true"
					autoplay="true"
					circular="true"
					interval="4000"
					duration="500"
				>
					<swiper-item v-for="(item, index) in looplist" :key="index"><image :src="looplist[index].image" mode="aspectFill"></image></swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 卡片 -->
		<view class="card-box">
			<view class="card-item">
				<view class="card-item-l"><image mode="widthFix" class="bg-img" src="../static/bwimg/card-l.png"></image></view>
				<view class="card-item-r">
					<text class="c-subtitle">累计中奖人数</text>
					<text class="c-title">{{numObj.winning_num}}</text>
				</view>
			</view>
			<view class="card-item">
				<view class="card-item-l"><image mode="widthFix" class="bg-img" src="../static/bwimg/card-r.png"></image></view>
				<view class="card-item-r">
					<text class="c-subtitle">累计送出份数</text>
					<text class="c-title">{{numObj.send_num}}</text>
				</view>
			</view>
		</view>
		<!-- 限时秒杀 -->
		<view class="LimTime">
			<view class="LimTime-title">
				<view class="l-title-item l-title-l">
					<image class="l-title-img" mode="widthFix" src="../static/bwimg/time.png"></image>
					<text class="l-title-txt">限时秒杀一元起</text>
				</view>
				<view class="l-title-item l-title-r">
					<text class="r-title-txt">更多</text>
					<image class="r-title-img" mode="widthFix" src="../static/bwimg/more.png"></image>
				</view>
			</view>
			<view class="limTime-cont">
				<image class="l-c-img" mode="widthFix" :src="secList[0].thumb"></image>
				<view class="l-c-subTitle">
					<image class="" mode="widthFix" :src="secList[0].store_logo"></image>
					<text>{{secList[0].store_name}}</text>
				</view>
				<text class="l-c-title">{{secList[0].name}}</text>
				<view class="l-c-footer">
					<view class="l-c-footer-l">
						<text class="txt-l">距结束还有:</text>
						<text class="txt-r">12:32:58</text>
					</view>
					<view class="l-c-footer-r">1元超低购</view>
				</view>
			</view>
		</view>
		<!-- 精选 -->
		<view class="select-box">
			<view class="select-title">
				<view class="l-title-item l-title-l">
					<image class="l-title-img" mode="widthFix" src="../static/bwimg/time.png"></image>
					<text class="l-title-txt">精选霸王餐</text>
					<text class="l-title-text">品质美食免费吃</text>
				</view>
				<view class="l-title-item l-title-r">
					<text class="r-title-txt">更多</text>
					<image class="r-title-img" mode="widthFix" src="../static/bwimg/more.png"></image>
				</view>
			</view>
			<view class="select-cont">
				<view class="inv-h-w">
					<view v-for="(item, index) in pagList" :key="index" :class="['inv-h', Inv == index ? 'inv-h-se' : '']" @click="changeTab(index)">{{item.name}}</view>
				</view>
				<view class="current" v-show="Inv == 0">
					<view class="foodlist" v-for="(item, index) in goodList" :key="index">
						<view><image :src="item.thumb" class="foimg"></image></view>
						<view>
							<view class="foadd">{{ item.name }}</view>
							<view class="instance">{{ item.address }} | {{ item.dist }}</view>
							<view class="fobo">
								<view class="price">
									<text class="sell">￥</text>
									{{ item.price }}
								</view>
								<view class="free">
									<view></view>
									<text>免费抽</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="current" v-show="Inv == 1">
					<view class="foodlist" v-for="(item, index) in goodList" :key="index">
						<view><image :src="item.thumb" class="foimg"></image></view>
						<view>
							<view class="foadd">{{ item.name }}</view>
							<view class="instance">{{ item.address }} | {{ item.dist }}</view>
							<view class="fobo">
								<view class="price">
									<text class="sell">￥</text>
									{{ item.price }}
								</view>
								<view class="free">
									<view></view>
									<text>免费抽</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="current" v-show="Inv == 2"></view>
				<view class="current" v-show="Inv == 3"></view>
			</view>
		</view>
	</view>
</template>

<script>
import REQUtil from '@/common/request.js';
export default {
	data() {
		return {
			list: [],
			Inv: 0,
			looplist:[],
			looplist1:[],
			numObj:{},
			secList:[],
			pagList: [],
			goodList: [],
		};
	},
	onLoad() {},
	mounted() {
		this.getBannerList();
		this.getShoppingList();
		this.getPagList();
		this.getSecList();
		this.getNumList()
	},
	onReachBottom() {},
	methods: {
	    // 获取banner图
		getBannerList(){
			REQUtil.Request({
				url: REQUtil.API.bwcbanner,
				success: res => {
					this.looplist1 = res.data;
					this.looplist = res.data.list;
				},
				error: function() {
					console.log('1');
				}
			});
		},
		// 获取累计人数总数据
		getNumList() {
			REQUtil.Request({
				url: REQUtil.API.bwcnum,
				success: res => {
					this.numObj = res.data;
				},
				error: function() {
					console.log('1');
				}
			});
		},
		// 获取秒杀数据
		getSecList() {
			REQUtil.Request({
				url: REQUtil.API.bwcsekill,
				success: res => {
					this.secList = res.data.list;
				},
				error: function() {
					console.log('1');
				}
			});
		},
		// 分类选项卡数据请求
		getPagList() {
			REQUtil.Request({
				url: REQUtil.API.bwcpaging,
				success: res => {
					this.pagList = res.data.list;
				},
				error: function() {
					console.log('1');
				}
			});
		},
		// 分类数据请求
		getShoppingList() {
			REQUtil.Request({
				url: REQUtil.API.bwclist,
				success: res => {
					this.goodList = res.data.list;
				},
				error: function() {
					console.log('1');
				}
			});
		},
		//tab切换
		changeTab(index){
			this.Inv = index;
		}
		
	}
};
</script>

<style lang="scss" scoped>
.cont {
	width: 100%;
	background: rgba(248, 248, 248, 1);
	.swiper-box {
		width: 100%;
		position: relative;
		.swiper-bg {
			width: 100%;
			.bg-img {
				width: 100%;
				height: auto;
			}
		}
		.swiper-item-box {
			width: 95%;
			height: 160rpx;
			position: absolute;
			left: 2.5%;
			bottom: -60rpx;
			border-radius: 30rpx;
			overflow: hidden;
			.swiper {
				width: 100%;
				height: 100%;
				// swiper-item 里面的图片高度
				swiper-item > image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.card-box {
		width: 100%;
		height: 200rpx;
		margin: 80rpx 0 0 0;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		// justify-content: space-around;
		.card-item {
			width: 328rpx;
			height: 132rpx;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: space-evenly;
			border-radius: 20rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 4px 20px 0px rgba(74, 74, 74, 0.1);
			margin-left: 30rpx;
			.card-item-l {
				width: 40%;
				height: 100%;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: center;
				> image {
					width: 80rpx;
					height: 80rpx;
				}
			}
			.card-item-r {
				width: 90%;
				height: 100%;
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				justify-content: space-evenly;
				> text {
					width: 100%;
					text-align: left;
					font-size: 30rpx;
					color: #666;
					overflow: hidden;
					text-overflow: ellipsis;
					whitewhite-space: nowrap;
				}
				.c-title {
					font-size: 32rpx;
					color: #000;
				}
			}
		}
	}
	.LimTime {
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-evenly;
		.LimTime-title {
			width: 95%;
			margin: 30rpx 0 20rpx 0;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: space-between;
			.l-title-item {
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				> image {
					width: 30rpx;
					height: 30rpx;
				}
				> text {
					font-size: 24rpx;
					color: #333;
					font-weight: 600;
				}
				.l-title-img {
					width: 60rpx;
					height: 60rpx;
					margin-right: 10rpx;
				}
				.l-title-txt {
					color: #000000;
					font-size: 32rpx;
				}
				.l-title-text {
					font-size: 24rpx;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
		.l-title-r {
			width: 122rpx;
			height: 52rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 36rpx;
			padding-left: 24rpx;
		}
		.limTime-cont {
			width: 95%;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: space-around;
			background: rgba(255, 255, 255, 1);
			border-radius: 16rpx;
			box-shadow: 0px 4px 20px 0px rgba(74, 74, 74, 0.1); //将h-shadow,v-shadow设为0px,实现四周阴影
			.l-c-img {
				width: 95%;
				margin: 2% 0;
				height: 400rpx !important;
				border-radius: 10rpx;
			}
			.l-c-subTitle {
				width: 95%;
				height: 40rpx;
				margin-bottom: 30rpx;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: flex-start;
				> image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 10rpx;
				}
				> text {
					font-size: 30rpx;
				}
			}
			.l-c-title {
				width: 95%;
				line-height: 48rpx;
				font-size: 40rpx;
				overflow: hidden; /*超出隐藏*/
				text-overflow: ellipsis; /*文本溢出时显示省略标记*/
				display: -webkit-box; /*设置弹性盒模型*/
				-webkit-line-clamp: 2; /*文本占的行数,如果要设置2行加...则设置为2*/
				-webkit-box-orient: vertical; /*子代元素垂直显示*/
			}
			.l-c-footer {
				width: 95%;
				padding: 20rpx 0;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				justify-content: space-between;
				.l-c-footer-l {
					.txt-l {
						font-size: 24rpx;
						color: #909399;
						margin-right: 10rpx;
					}
					.txt-r {
						width: 152px;
						height: 40px;
						padding: 10rpx 16rpx;
						font-size: 28rpx;
						color: rgba(223, 7, 4, 1);
						font-weight: 500;
						background: rgba(255, 234, 234, 1);
						border-radius: 8px;
					}
				}
				.l-c-footer-r {
					padding: 10rpx 16rpx;
					font-size: 24rpx;
					color: rgba(255, 255, 255, 1);
					background: rgba(255, 194, 31, 1);
					border-radius: 50rpx;
				}
			}
		}
	}
	.select-box {
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: space-evenly;
		.select-title {
			width: 95%;
			margin: 30rpx 0 20rpx 0;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: space-between;
			.l-title-r {
				width: 122rpx;
				height: 52rpx;
				background: rgba(255, 255, 255, 1);
				border-radius: 36rpx;
				padding-left: 24rpx;
			}
			.l-title-item {
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				> text {
					font-size: 24rpx;
					color: #333;
					font-weight: 600;
				}
				> image {
					width: 30rpx;
					height: 30rpx;
				}
				.l-title-img {
					width: 60rpx;
					height: 60rpx;
				}
				.l-title-txt {
					color: #000000;
					font-size: 32rpx;
				}
				.l-title-text {
					font-size: 24rpx;
					color: rgba(153, 153, 153, 1);
					margin-left: 8rpx;
				}
			}
		}
		.select-cont {
			width: 95%;
			height: 1040rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 2rpx 10rpx 0 rgba(74, 74, 74, 0.1);
			background: rgba(255, 255, 255, 1);
			border-radius: 15rpx;
			.inv-h-w {
				width: 100%;
				height: 100upx;
				display: flex;
			}
			.inv-h {
				height: 100upx;
				line-height: 100rpx;
				font-size: 30rpx;
				text-align: center;
				flex: 1;
				font-weight: 500;
			}
			.inv-h-se {
				background: #ffffff;
				color: #ffc21f;
				border-bottom: 2rpx solid #ffc21f;
				border-radius: 15rpx 15rpx 0 0;
			}
		}
		.foodlist {
			width: 94%;
			height: 180rpx;
			margin: 36rpx 3% 48rpx;
			display: flex;
			justify-content: space-around;
			.foimg {
				width: 180rpx;
				height: 180rpx;
				margin-right: 20rpx;
				border-radius: 10rpx;
			}
			.foadd {
				width: 448rpx;
				height: 80rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 800;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
			}
			.instance {
				height: 32rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
				line-height: 32rpx;
				margin: 12rpx 0;
			}
			.fobo {
				display: flex;
				justify-content: space-between;
				.price {
					width: 58rpx;
					height: 48rpx;
					font-size: 32rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: rgba(222, 84, 26, 1);
					line-height: 48rpx;
				}
				.sell {
					width: 24rpx;
					height: 32rpx;
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 800;
					color: rgba(222, 84, 26, 1);
					line-height: 32rpx;
				}
				.free {
					width: 132rpx;
					height: 60rpx;
					background: rgba(255, 194, 31, 1);
					border-radius: 36rpx;
					> text {
						width: 84rpx;
						height: 40rpx;
						font-size: 28rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
						line-height: 40rpx;
						margin-left: 24rpx;
					}
					> view {
						height: 10rpx;
					}
				}
			}
		}
	}
}
</style>
