if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2b5d621f5a79476ab84e052d421e152f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

if (typeof jQuery === 'undefined') {
    throw new Error('jQuery is not loaded');
}

    var  url=location.href;
    $.ajax({
        type : "get",
        url : "https://www.facto.com.cn/assets/jssdk.php?url="+url,
        dataType : "jsonp",
        jsonp: "callback",
        jsonpCallback:"success_jsonpCallback",
        success : function(data){
            console.log(data)
            wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    'updateAppMessageShareData', //分享到朋友圈
                    'updateTimelineShareData',//分享给朋友
                ]
            });
        },
        error:function(data){
            alert("连接失败！");
        }
    });

    wx.ready(function () {

         //分享到朋友圈
     wx.updateTimelineShareData({
       title: 'FactoGPT - 全能高效的AI助手',
       link: url,
       imgUrl: 'https://www.facto.com.cn/static/wx-share.png',
       success: function (res) {

       }
     })
 		//分享给朋友
     wx.updateAppMessageShareData({
       title: 'FactoGPT',
       desc: '全能高效的AI助手',
       link: url,
       imgUrl:  'https://www.facto.com.cn/static/wx-share.png',
       success: function (res) {

       }
     })


    });
    wx.error(function (res) {
        alert(res);

    });
