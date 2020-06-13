<template>
	<view class="content">
		<view class="end-title">
			<scroll-view class="uni-slidingMenu" scroll-x>
				<view  :class="['slidingMenuList',activeIndex==index?'active':'']" v-for="(item, index) in list1" 
				:key="index" @click="getActive(index)" v-cloak>{{ item.name }}</view>
			</scroll-view>
		</view> 
	</view>
</template>

<script>
export default {
	props:["list1"],
	data() {
		return {
			count: 0,
			btnnum: 0, 
			activeIndex:"0",
			name:'' 
		};
	},  
	methods: { 
		getActive(index){
			var navurl = this.list1[index].url;
			uni.navigateTo({
				url: navurl,
				animationType:''
			}); 
		}
	}
};
</script>
<style>
	page { background-color: #FAFAFA;}
</style>
<style lang="scss" scoped>
.content {
	width: 100%;
	height: auto;
}
/* 将三个内容view的display设置为none(隐藏) */
.end-title {
	width: 100%; 
	margin: 0 auto;
	display: flex;
}
.end-title > view {
	height: 88rpx;
	line-height: 88rpx;
	color: #999999;
	font-size: 28rpx;
	flex-grow: 1;
	text-align: center;
}
.end-cont {
	display: none;
	background: #c8c7cc;
}
// .socrll-box {
// 	overflow-y: auto;
// }

.btna {
	color: black !important;
	font-size: 32rpx !important;
	box-sizing: border-box;
}
.end-content {
	width: 100%;
	height: calc(100vh - 148rpx); 
}
.dis {
	width: 100vw;
	height: 100%;
	display: block;
	background: #ffffff;
}
.search {
	width: 90%;
	height: 70rpx;
	margin: 20rpx 5%;
	border-radius: 50rpx;
	background: #999999;
}
.search {
	width: 90%;
	height: 70rpx;
	margin: 20rpx 5%;
	border-radius: 50rpx;
	background: #eeeeee;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
}
.search-txt {
	display: inline-block;
	height: 70rpx;
	line-height: 70rpx;
}
.help-select-contet {
	column-count: 2;
	column-gap: 4rpx;
	width: 100%;
}
.help-select-card {
	background: #fff;
	width: 375rpx;
	display: inline-block; /*内部卡片需要设置为inline-block,否则会截断显示，如图一*/
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 20rpx 15rpx;
	margin-bottom: 10rpx;
}
.help-select-iamge {
	width: 100%;
	height: auto;
}
.uni-slidingMenu {
	width: 100%;
	white-space: nowrap; 
    background: none;
	overflow: hidden;
} 
/* 循环显示的菜单栏 */
.slidingMenuList {
	height: 60rpx;
	line-height: 60rpx;
	display: inline-block;
	font-size: 28rpx;
	font-family:PingFang SC;
	margin-left: 12rpx; 
	border-radius: 8upx;
	padding: 0px 18upx;
	color: #828282;
}
.slidingMenuList:last-child{
	margin-right: 12rpx;
}
/* 点击选中菜单栏时的样式 */
.active { 
	color: #000;
	font-weight: bold;
} 
</style>
