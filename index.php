<?php
require_once "jssdk.php";
$jssdk = new JSSDK("", "");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>2018戊戌年，为自己摇枚新年签！</title>
   <style>
       @keyframes play {
	100%{
		background-position: -737px -2px;
	}
}
@-webkit-keyframes play {
	100%{
		background-position: -737px -2px;
	}
}
.sprite {
	width:145px;
	height:300px;
	display:inline-block;
	overflow:hidden;
	background-repeat: no-repeat;
	background-image:url(234.png);
	background-position: -2px -2px;
	animation: play 0.8s steps(5) infinite;
	-webkit-animation: play 0.8s steps(5) infinite;
}
.preload {
	background-position: 9999px 9999px;
	width: 1px;
	height: 1px;
	display: none;
}

body {
	background: url(bg.jpg) no-repeat #E8DFD0;
	background-size: 100% 100%;
}
html, body{
	margin: 0;
	width: 100%;
	height: 100%;
}
.do {
	background: url(button.png) no-repeat center;
	background-size: cover;
	width: 100%;
	height: 15%;
	margin: 0 auto;
	position: fixed;
	bottom: 20%;
	text-align: center;
	color: #666;
	line-height: 180px;
	cursor: pointer;
}

.cover {
	background: url(share.png) top right no-repeat;
	background-size: 50%;
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: none;
}

.decode .inner {
	width: 100%;
	height: 100%;
	background: url(decode.png) center no-repeat;
	background-size: 80%;
}

.item {
	width: 100%;
	text-align: center;
	padding-top: 20%;
}
   </style>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
</head>
<body>
	<div style="display:none">
		<img src="/thumbnail.jpg" />
		<p>这是对过去的感悟和对新年的祈望，希望它能为你带来好运…………………………</p>
	</div>
    <div class="do"></div>
    <div class="cover result">
        <div class="item">
            <div class="sprite a1"></div>
        </div>
    </div>
    <div class="cover decode">
        <div class="inner"></div>
    </div>
</body>

<script src="zepto.min.js"></script>
<script src="jump_url.js"></script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script>

    /*
     * 注意：
     * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
     * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
     * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
     *
     * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
     * 邮箱地址：weixin-open@qq.com
     * 邮件主题：【微信JS-SDK反馈】具体问题
     * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
     */
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'onVoicePlayEnd',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ]
    });
</script>
<script src="index.js?20150109"></script>
</html>
