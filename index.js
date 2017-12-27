new Image().src="decode.png";
new Image().src="234.png";
var start, showDecode, jumpToDecode, isStarted = false;
var is_share = false;
/**
 * const MODEL 运行模式 1.分享查看签文 2.关注公众号查看签文
 * @type {number}
 */
const MODEL =1;


start = function() {
    window.removeEventListener('devicemotion', shake);
	isStarted = true;
	$('.decode').hide();
	$('.result').show();
	setTimeout(showDecode, 3000);
};

showDecode = function(){
    if(GetQueryString("is_share") == null && MODEL == 1){
        is_share = true;
        alert('分享后可查看抽签结果！');
        $('.item').html('<h1 style="color:#fff">分享后查看签文！</h1>');
        return false;
	}else if(MODEL == 2){
        $('.item').html('<img style="width:100%;height:100%;" src="/code.jpg"/>');
        alert('关注公众号后查看抽签结果！');
	}else{
        $('.result').hide();
        $('.decode').show();
        setTimeout(jumpToDecode, 3000);
	}
};

$('.do').click(start);


window.onload = function(){
    if(window.DeviceMotionEvent){
        window.addEventListener('devicemotion', shake, false);
    }else{
        alert('本设备不支持摇一摇功能');
        return;
    }
};
var lastTime = 0;
var x = y = z = lastX = lastY = lastZ = 0;
var shakeSpeed = 2000;

function shake(eventDate){
    //获取设备加速度信息
    var acceleration = eventDate.accelerationIncludingGravity;
    var nowTime = new Date().getTime();
    //如果这次摇的时间距离上次摇的时间有一定间隔 才执行
    if(nowTime - lastTime > 100){
        var diffTime = nowTime - lastTime;
        lastTime = nowTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
        if(speed > shakeSpeed){
            start();
        }
        lastX = x;
        lastY = y;
        lastZ = z;
    }
}

wx.ready(function () {
    wx.hideMenuItems({
        menuList: [
            'menuItem:share:qq',
            'menuItem:share:weiboApp',
            'menuItem:share:facebook',
            'menuItem:share:QZone',
            'menuItem:openWithSafari',
            'menuItem:share:email',
            'menuItem:openWithQQBrowser'
        ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    });
    wx.onMenuShareAppMessage({
        title: document.title, // 分享标题
        desc: '这是对过去的感悟和对新年的祈望，希望它能为你带来好运...', // 分享描述
        link: 'http://qqxn.fazuzu.cn', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://qqxn.fazuzu.cn/thumbnail.jpg', // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
// 用户确认分享后执行的回调函数
            if (is_share === true){
                $('.result').hide();
                $('.decode').show();
                setTimeout(jumpToDecode, 3000);
			}
        },
        cancel: function () {
            alert('分享后查看抽签结果！');
// 用户取消分享后执行的回调函数
        }
    });
    wx.onMenuShareTimeline({
        title: document.title, // 分享标题
        link: 'http://qqxn.fazuzu.cn', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://qqxn.fazuzu.cn/thumbnail.jpg', // 分享图标
        success: function () {
            if (is_share === true){
                $('.result').hide();
                $('.decode').show();
                setTimeout(jumpToDecode, 3000);
            }
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            alert('分享后查看抽签结果！');
            // 用户取消分享后执行的回调函数
        }
    });
});
wx.error(function(res){
    console.log(res)
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});

function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!==null){
        return  decodeURI(r[2]);
    }
    return null;
}

