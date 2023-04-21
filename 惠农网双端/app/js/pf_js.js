// 动态多行文字溢出隐藏
$(function(){
    $('.wzyc').each(function(){
        var wz=$(this).height()/parseInt($(this).css('line-height'),10)
        wz=wz-0.5
        var dom=$(this)
        jsLine(wz,dom);
    })
    $('.zx-show.show .zx-wzyc').each(function(){
        var wz=$(this).height()/parseInt($(this).css('line-height'),10)
        wz=wz-0.5
        var dom=$(this)
        jsLine(wz,dom);
    })
})
function jsLine(line,className){
    for (let i = 0; i < className.length; i++) {
        var textLength=className[i]['childNodes'][0].length;//文本长度
	    var fontSize=getComputedStyle(className[i],undefined).getPropertyValue("font-size").substr(0,2);//获取字体大小
	    var lineNum=Math.round(className[i].clientWidth/fontSize);//四舍五入,一行有多少字
	    if(textLength>(lineNum*line)){
		    var newText=className[i].innerText.substr(0,(Math.round(lineNum*line)))+'...';
		    className[i].innerText=newText;
	    }
    }
}
