<template>
	<view class="content">
		<view class="header">
			<view class="header-title">
				<view v-for="(item, index) in items" :key="index" :class="{ btna: count == index }" @tap="change(index)">{{ item }}</view>
			</view>
		</view>
		<view class="header-content">
			<view class="header-cont" :class="{ dis: btnnum == 0 }"><swiper-tab-bw :looplist="looplist"></swiper-tab-bw></view>
			<view class="header-cont" :class="{ dis: btnnum == 1 }">Pass卡</view>
		</view>
	</view>
</template>

<script>
import swiperTabBw from '@/my-components/swiper-tab-bw.vue';
import REQUtil from '@/common/request.js';
export default {
	data() {
		return {
			count: 0,
			btnnum: 0,
			items: ['霸王餐', 'Pass卡'],
			looplist: [],
		};
	},
	components: { swiperTabBw },
	onLoad() {
		REQUtil.Request({
			url: REQUtil.API.bwcbanner,
			success: res => {
				this.looplist = res.data.list;
			},
			error: function() {
				console.log('1');
			}
		});
	},
	methods: {
		change(e) {
			this.count = e;
			this.btnnum = e;
			console.log(this.btnnum);
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	width: 100vw;
	height: 100vh;

	.header {
		width: 100%;
		// height: 88rpx;
		padding: 60rpx 0 10rpx 0;
		z-index: 9;

		.header-title {
			width: 36%;
			height: 88rpx;
			margin: 0 auto;
			display: flex;

			> view {
				height: 88rpx;
				line-height: 88rpx;
				color: #999999;
				font-size: 34rpx;
				flex-grow: 1;
				text-align: center;
			}

			.btna {
				color: black !important;
				font-size: 36rpx !important;
				box-sizing: border-box;
			}
		}
	}

	.header-content {
		width: 100%;
		height: calc(100vh - 158rpx);
		background: red;

		.header-cont {
			overflow: hidden;
			overflow-y: auto;
			display: none;
			background: #c8c7cc;
		}

		.dis {
			width: 100vw;
			height: 100%;
			display: block;
		}
	}
}
</style>
