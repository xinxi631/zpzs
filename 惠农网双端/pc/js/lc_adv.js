// 两侧广告位
// 判断轮播图是否消失在用户视野中
// 判断元素和视野的关系
function setCheckInview(elem,a){ 
    checkInview(elem); 
    $(window).on('scroll', function(e){ 
        checkInview(elem); 
    }); 
    var topTemp = null; 
    function checkInview(elem){ 
        var t = elem.offset().top - $(window).scrollTop();
        var h = $(window).height(); 
        var b = h - ( t + elem.height() ); 
        var inview = 0; 
        var posi = 0;  
        var intro = '';  
        var dicrect = 0;  
        if(t>0 && t>h && b<0){ 
            intro = '消失-在视野之下'; 
            inview = 2; 
            posi = 2; 
        } 
        if(t>0 && t<h && b<0){ 
            intro = '部分-冒头(在视野下部分)'; 
            inview = 1; 
            posi = 2; 
        } 
        if(t>0 && t<h && b>0 && b<h){ 
            intro = '全部-在视野内'; 
            inview = 0; 
            posi = t<b ? 0 : t==b ? 1 : 2; 
        } 
        if(t<0 && b>0 && b<h){ 
            intro = '部分-露脚(在视野上部分)'; 
            inview = 1; 
            posi = 0; 
        } 
        if(t<0 && b>0 && b>h){ 
            intro = '消失-在视野之上'; 
            inview = 2; 
            posi = 0; 
        } 
        if(t==0 && b>=0){ 
            intro = '全部-在视野内-上贴边'; 
            inview = 0; 
            posi = 0; 
        } 
        if(t==0 && b<0){ 
            intro = '部分-上贴边，冒头(在视野下部分)'; 
            inview = 1; 
            posi = 2; 
        } 
        if(t>=0 && b==0){ 
            intro = '全部-在视野内-下贴边'; 
            inview = 0; 
            posi = t==b ? 1 : 2; 
        } 
        if(t<0 && b==0){ 
            intro = '部分-下贴边，露脚(在视野上部分)'; 
            inview = 1; 
            posi = 0; 
        } 
        if(t<0 && b<0){ 
            intro = '部分-没有头，没有脚(在视野下部分)'; 
            inview = 1; 
            posi = t<b ? 0 : t==b ? 1 : 2; 
        }
        topTemp = t;  
        var data = { t: t, b: b, h: h, inview: inview, posi: posi, dicrect: dicrect, intro: intro }
        if (intro == '消失-在视野之上') {
            $('#cl1-l').css('position','fixed')
            $('#cl1-l').css('top','0')
            $('#cl1-r').css('position','fixed')
            $('#cl1-r').css('top','0')
        }else{
            $('#cl1-l').css('position','absolute')
            $('#cl1-l').css('top',a)
            $('#cl1-r').css('position','absolute')
            $('#cl1-r').css('top',a)
        }
        if(typeof onchange == 'function'){ 
            onchange.apply(this, [data]); 
        } 
    } 
}