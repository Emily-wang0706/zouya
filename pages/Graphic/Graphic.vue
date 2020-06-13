<template>
	<view>
		 <nav-bar :userinfo="userinfo"></nav-bar>
		 <view style="height: 74px;"> 
		 </view>
		 <u-swiper :list="list" :height="1000" mode="number" indicator-pos="topRight"></u-swiper>
		 <view class="graphic-con">
		 	<view class="con-h1">
		 		假期防胖！！16    减肥快乐茶|低卡喜茶
		 	</view>
			<view class="con-tag">
				<view class="Addresslabel">
					<image src="../../static/img/tag1.png" mode=""></image> 新街口
				</view>
				<view class="Customlabel">
					<image src="../../static/img/tag2.png" mode=""></image> 网红美食
				</view>
			</view>
			<text class="context">身为一个资深的喜茶爱好者，光点菜单上的饮品怎么能够满足呢？！今天，小编要把珍藏多年的喜茶点单攻略分享给你们，
			让各位在喝一杯奶茶的同时，收获多倍的快乐~ 桃桃波波茶。以高颜值跻身点单前排，粉粉嫩嫩，5层渐变色，选用大颗水蜜桃果肉，手工捣碎成果泥，
			喝到嘴里都是真实的桃肉。 喜乐芝＋奥利奥＋芋圆小丸子。喜乐芝是喜茶里的咸芝士奶盖，比起重芝士它的口感更加轻盈不会腻，而奥利奥就不用说了，
			简直是一个神奇的存在，搭配啥都好喝！这款饮品搭配下来，真的是很饱哈哈哈哈~</text> 
			<view class="bottom-time">
				<text class="contime">
					发布时间：{{articledate}}
				</text>
			</view> 
			<view class="productcard">
				<view class="cardpd" v-for="(item,index) in card" :key="index">
					<image :src="item.productimg" mode=""></image>
					<view class="card-con">
						<view class="cardname">
							{{item.productname}}
						</view>
						<view class="">
							<text style="color: #9F9F9F; font-size: 24rpx; line-height: 36rpx;">{{item.productfollow}}人 关注</text>
						</view>
						<view class="cardprc">
							<text style="color: #9F9F9F; font-size: 24rpx;">评分：<text style="color: #FFC11F;">{{item.score}}分</text></text>
							<text style="font-size: 20rpx; color:#ff3615;">￥<text style="font-size: 30rpx; color: #ff3615;">{{item.productprice}}</text>
							<text style="font-size: 20rpx; color: #a0a0a0;"> 起</text></text>
						</view>
					</view>
				</view>
			</view>
			<view class="allcomment"> 
				共有 <text style="color: #050505;">{{allcomment}}</text> 条评论
			</view>
			<view class="comment">
			   <view class="">
			   	<image :src="userinfo.userimg" mode=""></image>
			   </view>
				<view class="commentinput">
					<input type="text" :value="commentvalue" placeholder="回复TA..." placeholder-style="font-size:27rpx;color:#9F9F9F;line-height: 65rpx" />
					<view class="comment-btn" @click="commentgd">
						<image src="../../static/img/goudayiju.png" mode=""></image> 勾搭一句
					</view>
				</view>
			</view>
		 </view>
		 <view style="margin-bottom: 98rpx;"> 
			<comMent></comMent> 
		 </view>
		 <view class="share-box">
		 	<view class="box-li">
		 		<image src="../../static/img/share.png" mode=""></image> <text>{{bottomnum.share}}</text>
		 	</view>
			<view class="box-li">
				<image src="../../static/img/comment.png" mode=""></image> <text>{{bottomnum.comment}}</text>
			</view>
			<view class="box-li">
				<image src="../../static/img/likes.png" mode=""></image> <text>{{bottomnum.likes}}</text>
			</view>
			<view class="box-li">
				<image src="../../static/img/collection.png" mode=""></image> <text>{{bottomnum.collection}}</text>
			</view>
		 </view>
	</view>
</template> 
<script>
	import navBar from '@/my-components/nav-bar.vue'; 
	import comMent from '@/my-components/comment.vue'
	export default {
		data() {
			return {
				userinfo:{
					userimg:'https://img.xiaohongshu.com/avatar/57cd29736a6a696b7c67de8a.jpg@80w_80h_90q_1e_1c_1x.jpg',
					username:'绵绵爱吃饭'
				},
				articledate:'05-21',
				card:[
					{
						productimg:'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
						productname:'南京一日游南京一日游南京',
						productfollow:2342,
						productprice:765,
						score:4.2,
					}
				],
				allcomment:234,
				list: [{
						image: 'https://ci.xiaohongshu.com/337a3a9c-72e5-5733-9f8f-35505c4fe18d?imageView2/2/w/540/format/jpg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: 'https://ci.xiaohongshu.com/337a3a9c-72e5-5733-9f8f-35505c4fe18d?imageView2/2/w/540/format/jpg',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: 'https://ci.xiaohongshu.com/337a3a9c-72e5-5733-9f8f-35505c4fe18d?imageView2/2/w/540/format/jpg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				],
				bottomnum:{
					share:56,
					comment:120,
					likes:200,
					collection:35
				},
				commentlist:['它很闷，闷到生蘑菇','每年的诺贝尔文学奖揭晓后','米兰昆德拉的小说观','陈清扬说她真实的罪孽'],
				commentvalue:''
			}
		},
		components:{
			navBar,
			comMent
		},
		methods: {
			commentgd(){
				let vindex = Math.floor((Math.random()*4));
				this.commentvalue = this.commentlist[vindex];
			}
		}
	}
</script>

<style>
.wrap {
	 padding: 40rpx;
  }
nav-bar { position: fixed;top: 0; width: 100%;z-index: 1001;} 
.graphic-con { padding: 0px 20rpx;}
.con-h1 { font-size: 34rpx; color: #000; font-weight: bold; padding-top: 20rpx;}
.con-tag { padding: 40rpx 0;}
.con-tag > view { height: 45rpx; line-height: 42rpx; border: 1px solid #859ede; border-radius: 45rpx; text-align: center; padding: 0px 22rpx;
display: inline-block; font-size: 26rpx; color: #859ede; margin-right: 20rpx;}
.con-tag > view.Customlabel { background-color: #e4ecfb;border-color: #e4ecfb;} 
.con-tag image { margin-right: 12rpx; width: 25rpx; height: 25rpx;}
.share-box { display: flex;justify-content: space-between; padding: 0px 20rpx; height: 98rpx;line-height: 98rpx;position: fixed; bottom: 0; left: 0;
width: 100%; background-color: #fff;-moz-box-shadow:0px 6px 12px 12px #f0f0f0; -webkit-box-shadow:0px 6px 12px 12px #f0f0f0;z-index: 1005;
 box-shadow:0px 6px 12px 12px #f0f0f0;}
.box-li image { width: 36rpx; height: 36rpx; vertical-align: middle; margin-right: 15rpx;}
.box-li text { line-height: 38rpx; color: #3A3A3A; font-size: 30rpx; vertical-align: middle;}
.context { font-size: 29rpx; line-height: 42rpx; color: #050505;}
.bottom-time { padding: 20rpx 0 30rpx 0;border-bottom: 1px solid #EFEFEF; margin-bottom: 35rpx;}
.contime { font-size: 26rpx; color: #9F9F9F; line-height: 42rpx;}
.productcard { padding: 0rpx 15rpx;margin-bottom: 52rpx;}
.cardpd { display: flex; padding: 15rpx 20rpx; border-radius: 10rpx;
-moz-box-shadow:0px 0px 8px 5px #f5f5f5; -webkit-box-shadow:0px 0px 8px 5px #f5f5f5; box-shadow:0px 0px 8px 5px #f5f5f5;}
.cardpd image { width: 150rpx; height: 150rpx; margin-right: 25rpx; border-radius: 10rpx;}
.cardname { margin-bottom: 20rpx; font-size: 27rpx; color: #050505; line-height: 36rpx; padding-top: 8rpx;}
.card-con { width: 470rpx;}
.cardprc { display: flex; justify-content: space-between; margin-top: 12rpx; line-height: 30rpx;}
.allcomment { font-size: 30rpx; color: #9F9F9F; margin-bottom: 40rpx;}
.comment { display: flex;justify-content: space-between;}
.comment image { width: 65rpx;  height: 65rpx; border-radius: 50%; margin-right: 22rpx; }
.commentinput { height: 65rpx; width: 620rpx; background-color:#f0f0f0; line-height: 65rpx; border-radius: 65rpx;position: relative;}
.commentinput input { font-size: 27rpx;color: #9F9F9F; padding-left: 40rpx; line-height: 65rpx; height: 65rpx;}
.comment-btn {position: absolute; right: 8rpx; top: 6rpx; z-index: 1000; width: 176rpx; height: 55rpx; line-height: 55rpx; background-color: #fff; border-radius: 55rpx;}
.comment-btn image { width: 40rpx; height: 28rpx; margin-left: 12rpx; margin-right: 0px;}
</style>
