<template>
	<view>
		<view class="nav-box">
			<view class="navbar-l">
				<view class="return">
					<text class="icon iconfont icon-fanhui"></text>
					<image :src="userinfo.userimg" mode=""></image>
					<text class="username">{{userinfo.username}}</text> 
				</view>
				<view class="navbar-r-btn">
					关注
				</view>
			</view> 
		</view> 
	</view>
</template>

<script>
	export default {
		props:{
			userinfo:{
				type: Object,
				default () {
					return {};
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.nav-box { display: flex;justify-content: space-between;padding: 0px 12rpx; padding-top: 25px; padding-bottom: 20rpx; background-color: #fff;}
	.navbar-l {display: flex;justify-content: space-between;}
	.icon-fanhui { margin-right: 30rpx;}
	.navbar-r {display: flex;justify-content: space-between; line-height: 76rpx;}
	.return { line-height: 76rpx;}
	.return image { width: 66rpx; height: 66rpx; border-radius: 50%;vertical-align: middle; margin-right: 20rpx;}
	.navbar-r-btn { width: 100rpx; height: 48rpx; line-height: 48rpx; color: #FFC21F; border: 1px solid #FFC21F; border-radius: 48rpx; text-align: center;
	margin-top: 15rpx; margin-left: 20rpx;
	}
</style>
