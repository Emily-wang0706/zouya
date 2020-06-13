<template>
	<view class="cont">
		<!-- 轮播 -->
		<view class="swiper-box">
			<view class="swiper-bg"><image mode="widthFix" class="bg-img" src="../static/bwimg/swpier-bg.png"></image></view>
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
					<swiper-item v-for="(item, index) in looplist" :key="data.id"><image :src="item.image" mode="aspectFill"></image></swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 卡片 -->
		<view class="card-box">
			<view class="card-item">
				<view class="card-item-l"><image mode="widthFix" class="bg-img" src="../static/bwimg/card-l.png"></image></view>
				<view class="card-item-r">
					<text class="c-subtitle">累计中奖人数</text>
					<text class="c-title">37284人</text>
				</view>
			</view>
			<view class="card-item">
				<view class="card-item-l"><image mode="widthFix" class="bg-img" src="../static/bwimg/card-r.png"></image></view>
				<view class="card-item-r">
					<text class="c-subtitle">累计送出份数</text>
					<text class="c-title">37284人</text>
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
				<image class="l-c-img" mode="widthFix" src="../static/bwimg/food.png"></image>
				<view class="l-c-subTitle">
					<image class="" mode="widthFix" src="../static/bwimg/time.png"></image>
					<text>宽窄巷子火锅(新街口店)</text>
				</view>
				<text class="l-c-title">超美味韩国料理 Garry最爱黑石料理 黑珍珠餐厅 双人</text>
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
					<view :class="['inv-h', Inv == 0 ? 'inv-h-se' : '']" @click="Inv = 0">美食</view>
					<view :class="['inv-h', Inv == 1 ? 'inv-h-se' : '']" @click="Inv = 1">丽人</view>
					<view :class="['inv-h', Inv == 2 ? 'inv-h-se' : '']" @click="Inv = 2">周边游</view>
					<view :class="['inv-h', Inv == 3 ? 'inv-h-se' : '']" @click="Inv = 3">休闲/玩乐</view>
				</view>
				<view class="current" v-show="Inv == 0">
					<view class="foodlist">
						<view><image src="../static/bwimg/food.png" class="foimg"></image></view>
						<view>
							<view class="foadd">澳门烧鸭卤味饭新卤味饭新街口店-价值999元</view>
							<view class="instance">李时珍大道 | 3.4km</view>
							<view class="fobo">
								<view class="price">
									<text class="sell">￥</text>
									999
								</view>
								<view class="free">
									<view></view>
									<text>免费抽</text>
								</view>
							</view>
						</view>
					</view>
					<view class="foodlist">
						<view><image src="../static/bwimg/food.png" class="foimg"></image></view>
						<view>
							<view class="foadd">澳门烧鸭卤味饭新卤味饭新街口店-价值999元</view>
							<view class="instance">李时珍大道 | 3.4km</view>
							<view class="fobo">
								<view class="price">
									<text class="sell">￥</text>
									999
								</view>
								<view class="free">
									<view></view>
									<text>免费抽</text>
								</view>
							</view>
						</view>
					</view>
					<view class="foodlist">
						<view><image src="../static/bwimg/food.png" class="foimg"></image></view>
						<view>
							<view class="foadd">澳门烧鸭卤味饭新卤味饭新街口店-价值999元</view>
							<view class="instance">李时珍大道 | 3.4km</view>
							<view class="fobo">
								<view class="price">
									<text class="sell">￥</text>
									999
								</view>
								<view class="free">
									<view></view>
									<text>免费抽</text>
								</view>
							</view>
						</view>
					</view>
					<view class="foodlist">
						<view><image src="../static/bwimg/food.png" class="foimg"></image></view>
						<view>
							<view class="foadd">澳门烧鸭卤味饭新卤味饭新街口店-价值999元</view>
							<view class="instance">李时珍大道 | 3.4km</view>
							<view class="fobo">
								<view class="price">
									<text class="sell">￥</text>
									999
								</view>
								<view class="free">
									<view></view>
									<text>免费抽</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="current" v-show="Inv == 1"></view>
				<view class="current" v-show="Inv == 2"></view>
				<view class="current" v-show="Inv == 3"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['looplist'],
	data() {
		return {
			list: [],
			Inv: 0,
			datalist: []
		};
	},
	onLoad() {},
	onReachBottom() {},
	methods: {
		changeTab(Inv) {
			that.navIdx = Inv;
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
