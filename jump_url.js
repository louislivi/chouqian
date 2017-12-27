jumpToDecode = function(){
    var jump_url = getCookie('jump_url');
    if (jump_url === null){
        var urls = [
            "http://mp.weixin.qq.com/s/WFXz9IwUingJSHJsj9znaQ",
            "http://mp.weixin.qq.com/s/GJFzlUdqaDKdcMPVlgH27A",
            "http://mp.weixin.qq.com/s/mlkbvrB3Rd5634riKtxtVQ",
            "http://mp.weixin.qq.com/s/DfBpf5ZDVMI0illUgf1YrQ",
            "http://mp.weixin.qq.com/s/uXk8DzcEP41Dwh0PjKnOXg",
            "http://mp.weixin.qq.com/s/Xd_IlGO6DGLQjLlfvb3ung",
            "http://mp.weixin.qq.com/s/6k58nn25F825vNgAHnxjKQ",
            "http://mp.weixin.qq.com/s/gRXpH-HwldqOGSwWuBVgRg",
            "http://mp.weixin.qq.com/s/eLFBmpdk0Gitm-qXVR2QQw",
            "http://mp.weixin.qq.com/s/Fpolg2eildtdOOyQQmL8hw",
            "http://mp.weixin.qq.com/s/u08VkqmA4STUVPKkT8jyCQ",
            "http://mp.weixin.qq.com/s/9A887O-Mw9Gd3KWCEDphjQ",
            "http://mp.weixin.qq.com/s/wphXP8jM1_B0uG4SV6e3QA",
            "http://mp.weixin.qq.com/s/4itSCzFD3iXgcc4B1l_ZOg",
            "http://mp.weixin.qq.com/s/Ua7ubuaDd9CvouLVneKx-A",
            "http://mp.weixin.qq.com/s/U5RWvJ0WkOpDiH69MNIz3A",
            "http://mp.weixin.qq.com/s/usWpDQBp9pqFLJCh0QsKxQ",
            "http://mp.weixin.qq.com/s/gTF2l2gpBBTWHw9ZaJOowA",
            "http://mp.weixin.qq.com/s/YLFaznSxeo8Hs9PrC055-A"
        ];
        var jumpTo;
        jumpTo = urls[parseInt(Math.random() * urls.length)];
        setCookie('jump_url',jumpTo);
    }else{
        jumpTo = jump_url;
    }
    window.location = jumpTo;
};


function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}