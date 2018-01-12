
localStorage.view_btn = 1;
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
var type = getUrlParam('type');
$(".appid").val(appId);
if(localStorage.upload1!="" || localStorage.upload1!="undefined"){
  $(".view-img").attr('src',localStorage.upload1);
}

/*
  图片上传
*/
var imgCallback = function(){
    $(".view-img").attr('src',localStorage.upload1)
}

$("#file").change( function() {
     previewImage(this,imgCallback)
})
var uploadImg=function(){ 
   imgCallback();
}