<template>
	<view>
	 <view class="user-list">
	 	<view class="list-box" v-for="(item,index) in friend" :key="index">
	 		<view class="user-item">
	 			<image :src="item.avatar_url" mode=""></image>
				<text v-if="item.is_sign" class="icon iconfont icon-yuandianxiao"></text>
	 		</view>
	 	</view>
	 </view>
	</view>
</template>

<script>
	export default {
		props:["friend"],
		data() {
			return {  
			};
		}
	}
</script>

<style>
 .user-list {display: flex;justify-content: flex-start; padding: 0px 24rpx;overflow-x: scroll;}
 .user-item {position:relative; width: 60rpx; height: 60rpx; margin-right: 40rpx;}
 .user-item image { width: 60rpx; height: 60rpx; border-radius: 50%;}
 .icon-yuandianxiao { color: #00E646; font-size: 20px; position: absolute; top:-8px; right: -10rpx;}
</style>