<template>
	<view class="content">
		<view class="bg_title">
			<view class="apply">
				<image src="../../static/bwimg/return.svg"></image>
				<text>申请报名</text>
			</view>
		</view>
		<view class="apply_item">
			<image src="../../static/bwimg/bwcbm.jpg" mode="widthFix"></image>
			<view class="app_tit">四川成都火锅-宽窄巷子九宫格双人套双人30 元晚餐火锅</view>
			<view class="app_mid">
				<view class="app_mid_top">
					<view class="mid_top_l">
						<text class="zero">0</text>
						<text class="yuan">元</text>
						<text class="price">¥ 330</text>
					</view>
					<view class="mid_top_r">
						<text class="end">距结束还有:</text>
						<text class="emd_time">12:32:33</text>
					</view>
				</view>
				<view class="app_mid_bot">
					<view class="txt">
						<text>支持Pass卡</text>
						<text class="txt2">100份免单</text>
					</view>
				</view>
			</view>
			<view class="app_bot">
				<view class="app_bot_l">
					<image src="../../static/img/tag1.png" mode=""></image>
				</view>
				<view class="app_bot_m">
					<view class="bot_ma">宽窄巷子火锅（新街口店）</view>
					<view class="bot_mi">3.4km 鼓楼区小仙女街道超好吃路02-08</view>
				</view>
				<view class="app_bot_r">
					<image src="../../static/bwimg/qianjin.svg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="app_info">
			<view class="setinfo">信息填写</view>
			<view class="phone">手机号</view>
			<view class="vercode">验证码</view>
			<view class="passcard">pass卡</view>
		</view>
		<view class="app_footer">
			<view class="get_pass">
				<image src="../../static/bwimg/info.png" mode=""></image>
				<text>使用pass卡必中霸王餐</text>
				<text>如何获取Pass卡</text>
			</view>
			<view class="submit_btn">
				<text class="btn">提交</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>

<style lang="scss" scoped>
	// 设计图为750px 1 vh = 750px/100 = 7.5 px
	.content {
		width: 100vw;
		height: 100vh;

		.bg_title {
			width: 100%;
			height: 550rpx;
			background-image: url(../../static/bwimg/bwcbmfilter.jpg);

			.apply {
				width: 94%;
				height: 86rpx;
				margin-left: 3%;

				>image {
					width: 20px;
					height: 35px;
					margin-top: 49rpx;
					margin-left: 23rpx;
				}

				>text {
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 34rpx;
					text-align: center;
					margin-left: 203rpx;
				}
			}
		}

		.apply_item {
			width: 90%;
			height: 1200rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 6rpx 4rpx 21rpx 0 rgba(0, 0, 0, 0.15);
			border-radius: 20rpx;
			margin: 0 5% 13rpx 5%;
			position: absolute;
			top: 160rpx;

			>image {
				width: 100%;
				height: 450rpx;
				border-radius: 20px 20px 0px 0px;
			}

			.app_tit {
				width: 92%;
				height: 79rpx;
				font-size: 32rpx;
				margin: 0 4% 30rpx 4%;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(5, 5, 5, 1);
				line-height: 48rpx;
			}

			.app_mid {
				width: 92%;
				height: 200rpx;
				margin: 0 4% 30rpx 4%;

				.app_mid_top {
					height: 65rpx;
					display: flex;
					justify-content: space-between;

					.mid_top_l {
						height: 65rpx;

						.zero {
							width: 37rpx;
							height: 53rpx;
							font-size: 70rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(255, 54, 21, 1);
							line-height: 58rpx;
						}

						.yuan {
							width: 24rpx;
							height: 23rpx;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 400;
							color: rgba(255, 54, 21, 1);
							line-height: 38rpx;
							margin: 0 22rpx 0 14rpx;
						}

						.price {
							width: 72rpx;
							height: 20rpx;
							font-size: 26rpx;
							font-family: PingFang SC;
							font-weight: 400;
							text-decoration: line-through;
							color: rgba(160, 160, 160, 1);
							line-height: 38rpx;
						}
					}

					.mid_top_r {
						height: 45rpx;
						padding-top: 20rpx;

						.end {
							width: 64rpx;
							height: 16rpx;
							font-size: 20rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: rgba(102, 102, 102, 1);
							line-height: 16rpx;
						}

						.end_time {
							width: 76px;
							height: 20px;
							background: rgba(255, 234, 234, 1);
							border-radius: 4px;
							font-size: 14px;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: 500;
							color: rgba(223, 7, 4, 1) !important;
							line-height: 20px;
							letter-spacing: 1px;
						}
					}
				}

				.app_mid_bot {
					width: 100%;
					height: 50rpx;
					margin: 43rpx 0;
					display: flex;
					justify-content: space-around;

					.txt {
						width: 100%;
						height: 40rpx;
						background: rgba(255, 255, 255, 1);
						border-radius: 3rpx;

						>text {
							width: 124rpx;
							height: 23rpx;
							font-size: 24rpx;
							border: 1rpx solid rgba(115, 115, 115, 1);
							font-family: PingFang SC;
							font-weight: 400;
							color: rgba(5, 5, 5, 1);
							line-height: 28rpx;
						}
					}

					.txt2 {
						margin-left: 20rpx;
					}
				}
			}

			.app_bot {
				width: 98%;
				height: 140rpx;
				display: flex;

				.app_bot_l {
					width: 39rpx;
					height: 39rpx;

					>image {
						width: 33rpx;
						height: 33rpx;
						margin-left: 20rpx;
						margin-top: 18rpx;
					}
				}

				.app_bot_m {
					width: 406rpx;
					height: 80rpx;
					margin-left: 20rpx;

					.bot_ma {
						font-size: 27rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(5, 5, 5, 1);
						line-height: 28rpx;
						margin-bottom: 14rpx;
					}

					.bot_mi {
						font-size: 22rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: rgba(160, 160, 160, 1);
						line-height: 28rpx;
					}
				}

				.app_bot_r {
					width: 50rpx;
					height: 50rpx;

					>image {
						width: 50rpx;
						height: 50rpx;
						padding-left: 150rpx;
						margin-top: 10rpx;
					}
				}
			}
		}

		.app_info {
			width: 90%;
			height: 386rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 6rpx 4rpx 21rpx 0 rgba(0, 0, 0, 0.15);
			border-radius: 20rpx;
			margin-left: 5%;
			position: absolute;
			top: 1080rpx;

			.setinfo {
				width: 100%;
				height: 29rpx;
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(58, 58, 58, 1);
				line-height: 28rpx;
				margin: 30rpx 0 59rpx 30rpx;
			}
			.phone,.vercode,.passcard{
				width: 90%;
				height: 25rpx;
				font-size: 27rpx;
				margin-left: 5%;
				font-family: PingFang SC;
				font-weight: 400;
				line-height: 28rpx;
			}
			.vercode{
				margin: 79rpx 31rpx;
			}
		}

		.app_footer {
			width: 90%;
			height: 312rpx;
			margin-left: 5%;
			position: absolute;
			top: 1480rpx;
			.get_pass{
				height: 50rpx;
				display: flex;
				margin-top: 39rpx;
				>image{
					width: 25rpx;
					height: 25rpx;
					margin: 10rpx 5rpx;
				}
			}
			.submit_btn{
				width:60%;
				height:80rpx;
				background:rgba(255,194,31,1);
				border-radius:40rpx;
				margin: 86rpx 16%;
				display: flex;
				justify-content: center;
				align-items: center;
				.btn{
					width:64rpx;
					height:31rpx;
					font-size:32rpx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(255,255,255,1);
					line-height:28rpx;
					
				}
			}
		}
	}
</style>