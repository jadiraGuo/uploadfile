 /**
  *@description:JQ AJAX UPLOAD FILE
  *  
  * file: 上传input
  * callbackfun:上传成功后回调函数
  * url:提交地址
  * formData:提交参数
  *
  */
function previewImage(param){
    var fd = new FormData();
    fd.append("file", param.file.files[0]);
    for(var i in param.formData){
        fd.append(i,param.formData[i]);
    }
    $.ajax({
      type: "POST",
      url: param.url,
      data: fd,
      processData : false, // 告诉jQuery不要去处理发送的数据
      contentType : false , // 必须false才会自动加上正确的Content-Type
      xhr: function(){
        var xhr = $.ajaxSettings.xhr();
        if(xhr.upload) {
          xhr.upload.addEventListener("progress", function(e){
             loading(parseInt(e.loaded/e.total*100) + "%")
          }, false);         
          return xhr;
        }
      },
      success:function(res){
            loadingend();            
            if(param.callbackfun){
                 param.callbackfun(res);
            }
          
      }
    });
}