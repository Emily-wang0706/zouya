<template>
	<view>
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
			<view class="left"><image :src="res.url" mode="aspectFill"></image></view>
			<view class="right">
				<view class="top">
					<view class="name">{{ res.name }}</view>
					<view class="like" :class="{ highlight: res.isLike }"> 
						<text v-if="!res.isLike" name="thumb-up" @click="getLike(index)" class="icon iconfont icon-weidianzan"></text>
						<text v-if="res.isLike" name="thumb-up-fill" @click="getLike(index)" class="icon iconfont icon-yidianzan"></text> 
						<view class="num">{{ res.likeNum }}</view>
					</view>
				</view>
				<view class="content">{{ res.contentText }}<text>{{ res.date }}</text></view>
				<view class="reply-box">
					<view class="item" v-for="(item, index1) in res.replyList" :key="item.index1">
						<view class="userinfobox">
							<view class="username">{{ item.name }}
							  <view v-if="item.Blogger" class="Blogger">博主</view>
							</view>
							<view class="userlikes">
								<view class="like" :class="{ highlight: item.isLike }">
									<text v-if="!item.isLike" name="thumb-up" @click="getLike(index,index1)" class="icon iconfont icon-weidianzan"></text>
									<text v-if="item.isLike" name="thumb-up-fill" @click="getLike(index,index1)" class="icon iconfont icon-yidianzan"></text> 
									<view class="num">{{ item.likeNum }}</view>
								</view>
							</view>
						</view> 
						<view class="text">{{ item.contentStr }}<text>{{item.date}}</text></view>
						<image :src="item.userimg" mode=""></image>
					</view>
					<view class="all-reply" @tap="toAllReply" v-if="res.replyList != undefined">
						展开更多评论 
					</view>
				</view> 
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			commentList: [{
					id: 1,
					name: '叶轻眉',
					date: '12-25',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
					allReply: 12,
					likeNum: 33,
					isLike: false,
					replyList: [
						{
							name: 'uview',
							contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！',
							userimg:'https://img.xiaohongshu.com/avatar/57cd29736a6a696b7c67de8a.jpg@80w_80h_90q_1e_1c_1x.jpg',
							date:'12-25',
							Blogger:true,
							isLike: false,
							likeNum:55
						},
						{
							name: '粘粘',
							contentStr: '今天吃什么，明天吃什么，晚上吃什么，我只是一只小猫咪为什么要烦恼这么多',
							userimg:'https://img.xiaohongshu.com/avatar/5e686b53de5968000127eb8e.jpg@80w_80h_90q_1e_1c_1x.jpg',
							date:'12-25',
							isLike: false,
							likeNum:80
						}
					]
				},
				{
					id: 2,
					name: '叶轻眉1',
					date: '01-25',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					allReply: 0,
					likeNum: 11,
					isLike: false,
					url: 'https://cdn.uviewui.com/uview/template/niannian.jpg',
				},
				{
					id: 3,
					name: '叶轻眉2',
					date: '03-25',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					allReply: 0,
					likeNum: 21,
					isLike: false,
					allReply: 2,
					url: '../../../static/logo.png',
					replyList: [
						{
							name: 'uview',
							contentStr: 'uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！',
							userimg:'https://img.xiaohongshu.com/avatar/57cd29736a6a696b7c67de8a.jpg@80w_80h_90q_1e_1c_1x.jpg',
							date:'12-25',
							Blogger:true,
							isLike: false,
							likeNum:55
						},
						{
							name: '豆包',
							contentStr: '想吃冰糖葫芦粘豆包，但没钱5555.........',
							userimg:'https://img.xiaohongshu.com/avatar/57cd29736a6a696b7c67de8a.jpg@80w_80h_90q_1e_1c_1x.jpg',
							date:'12-25',
							Blogger:true,
							isLike: false,
							likeNum:55
						}
					]
				},
				{
					id: 4,
					name: '叶轻眉3',
					date: '06-20',
					contentText: '我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的',
					url: 'https://cdn.uviewui.com/uview/template/SmilingDog.jpg',
					allReply: 0,
					likeNum: 150,
					isLike: false
				}]
		};
	},
	onLoad() { 
	},
	methods: {
		// 跳转到全部回复
		toAllReply() {
			uni.navigateTo({
				url: '/pages/comment/comment'
			});
		},
		// 点赞
		// getLike(index) {
		// 	this.commentList[index].isLike = !this.commentList[index].isLike;
		// 	if (this.commentList[index].isLike == true) {
		// 		this.commentList[index].likeNum++;
		// 	} else {
		// 		this.commentList[index].likeNum--;
		// 	}
		// },
		getLike(index,index1){
			if(index1 == null && index1 == undefined){
				this.commentList[index].isLike = !this.commentList[index].isLike;
				if (this.commentList[index].isLike == true) {
					this.commentList[index].likeNum++;
				} else {
					this.commentList[index].likeNum--;
				} 
			}else{
			this.commentList[index].replyList[index1].isLike = !this.commentList[index].replyList[index1].isLike;
			if (this.commentList[index].replyList[index1].isLike == true) {
				this.commentList[index].replyList[index1].likeNum++;
			} else {
				this.commentList[index].replyList[index1].likeNum--;
			}	 
		   }  
		}
	}
};
</script>

<style lang="scss" scoped>
.comment {
	display: flex;
	padding: 15rpx 20rpx; 
	.left {
		image {
			width: 64rpx;
			height: 64rpx;
			border-radius: 50%;
			background-color: #f2f2f2;
		}
	}
	.right {
		flex: 1;
		padding-left: 20rpx;
		font-size: 30rpx;
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 10rpx;
			.name {
				color: #A0A0A0;
				font-size: 26rpx;
				line-height:42rpx;
			}
			.like {
				display: flex;
				align-items: center;
				color: #9a9a9a;
				font-size: 26rpx;
				.icon { font-size:26rpx;}
				.num {
					margin-left: 12rpx;
					font-size:27rpx;
					color: #3A3A3A;
				}
			}
			.highlight {
				color: #f44d4d;
				.num {
					// color: #f44d4d;
				}
			}
		}
		.content {
			margin-bottom: 10rpx;
			color: #050505;
			font-size: 27rpx;
			text {
				color: #A0A0A0;
				font-size: 22rpx;
				margin-left: 8rpx;
			}
		}
		.reply-box { 
			border-radius: 12rpx;
			padding-left: 30rpx;
			.item {
				padding: 20rpx; 
				position: relative;
				padding-right: 0px;
				.userinfobox {
					display: flex;
					justify-content: space-between;
					.like {
						display: flex;
						align-items: center;
						color: #9a9a9a;
						font-size: 26rpx;
						.icon { font-size:26rpx;}
						.num {
							margin-left: 12rpx;
							font-size:27rpx;
							color: #3A3A3A;
						}
					}
					.highlight {
						color: #f44d4d;
						.num {
							// color: #f44d4d;
						}
					}
				}
				.username {
					color: #A0A0A0;
					font-size: 26rpx;
					line-height:42rpx;
					margin-bottom: 8rpx;
					.Blogger {
						width: 77rpx;
						height: 35rpx;
						border: 1rpx solid #ffc21f;
						line-height: 33rpx;
						text-align: center;
						color: #ffc21f;
						font-size:26rpx;
						display: inline-block;
						margin-left: 16rpx;
						border-radius: 35rpx;
					}
				}
				.text { font-size:27rpx;color: #050505;
				   text {color: #A0A0A0;
						font-size: 24rpx;
						margin-left: 8rpx;
						}
				}
				image {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					position: absolute;
					left: -50rpx;
					top:20rpx;
				}
			}
			.all-reply {
				padding:15rpx 20rpx;
				display: flex;
				color: #3290F1;
				font-size: 27rpx;
				align-items: center;
				.more {
					margin-left: 6rpx;
				}
			}
		}
		.bottom {
			margin-top: 20rpx;
			display: flex;
			font-size: 24rpx;
			color: #9a9a9a;
			.reply {
				color: #5677fc;
				margin-left: 10rpx;
			}
		}
	}
}
</style>
