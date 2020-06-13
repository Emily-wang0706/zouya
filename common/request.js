let url_config = ""

if (process.env.NODE_ENV === 'development') {
	// 开发环境
	url_config = 'https://api.qiandaokeji.club/mock/trueExam.do?projectId=159107989802207000003&interfaceId='
} else {
	// 生产环境
	url_config = 'https://jtapi.qiandaokeji.club'
}
let api_url = {
	// 走鸭首页接口
	index:"/api/vlog/index/article",
	indextab:"/api/vlog/index/nav",
	friend:"/api/vlog/friend/log",
	bwcindex:"/api/vlog/free/list",
	// 霸王餐首页接口
	bwcbanner:"/api/vlog/free/banner"
}
/**
 * 
 */
function gRequest({url,method = "post",isShowLoading,showError,data,success,fail,complete}) {
	if (isShowLoading) {
		uni.showLoading({
			title: "加载中",
			mask: true
		})
	}
	// 开始请求
	url = url_config + url;
	// 获取本地保存的session_id加入到每次请求中
	var api_token = uni.getStorageSync('API_TOKEN'); //本地取存储的sessionID
	if (api_token != "" && api_token != null) {
		var header = {
			'X-Requested-With': 'xmlhttprequest',
			'ZouYA-Api': 'ZouYA-Api',
			// 'content-type': 'application/json',
			'content-type': 'application/x-www-form-urlencoded',
			'api_token': api_token
		}
		data['api_token'] = api_token;
	} else {
		var header = {
			'X-Requested-With': 'xmlhttprequest',
			'ZouYA-Api': 'ZouYA-Api',
			'content-type': 'application/x-www-form-urlencoded'
		}
	}

	// 发起请求
	console.log('api_token:' + api_token);
	uni.request({
		url: url,
		method: method,
		data: data,
		header: header,
		dataType: 'json',
		success: res => {
			if (isShowLoading) {
				uni.hideLoading();
			}
			if ((api_token == "" || api_token == null) && res.data.data.hasOwnProperty('api_token') ) {
				// 如果本地没有就说明第一次请求 把返回的session id 存入本地
				uni.setStorageSync('API_TOKEN', res.data.data.api_token)
			}
			if(res.data.code!=200 && showError){
				uni.showToast({
					title:res.data.msg?res.data.msg:"系统异常"
				})
			}
			success(res.data); // 调用用户success方法
		},
		fail: res => {
			if (isShowLoading) {
				uni.hideLoading();
			}
			if (fail) {
				fail(res);
			}
		},
		complete: complete
	})
}

module.exports = {
	API: api_url,
	Request:gRequest 
}
