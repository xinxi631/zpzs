$(function(){
    list()
})
// if ($('.nav-index a').length>5) {
//     $('.nav-show').css('width','108%')
//     $('.nav-show').css('overflow-y','auto')
// } else {
//     $('.nav-show').css('width','100%')
// }
var list = function () {
    // 侧导航溢出的点击事件
    // 点击向下
    // $('.bb').click(function(){
    //     var nav_show_height=parseInt($('.nav-show').css('height'))
    //     var nav_show_top=parseInt($('.nav-show').css('top'))
    //     var nav_index_top=parseInt($('.nav-index').css('top'))
    //     var nav_a=$('#nav-index a').length
    //     if (nav_index_top > - (nav_a - 8)*50) {
    //         if ($('.bt').css('display') == 'none') {
    //             $('.bt').show()
    //             if (nav_show_height > 350) {
    //                 $('.nav-show').css('height',nav_show_height - 50 + 'px')
    //             }
    //             $('.nav-show').css('top',nav_show_top + 50 + 'px')
    //             $('.nav-index').css('top',nav_index_top - 50 +'px')
    //         }else{
    //             $('.nav-index').css('top',nav_index_top - 50 +'px')
    //         } 
    //     }else{
    //         $('.bb').hide()
    //         $('.nav-show').css('height','calc(350px/6 + ' + nav_show_height +')')
    //     }
    // })
    // // 点击向上
    // $('.bt').click(function(){
    //     var nav_show_height=parseInt($('.nav-show').css('height'))
    //     var nav_show_top=parseInt($('.nav-show').css('top'))
    //     var nav_index_top=parseInt($('.nav-index').css('top'))
    //     var nav_a=$('#nav-index a').length
    //     // console.log(nav_index_top);
    //     if (nav_index_top < 0) {
    //         if ($('.bb').css('display') == 'none') {
    //             $('.bb').show()
    //             $('.nav-show').css('height','calc(350px/6*5)')
    //         }else{
    //             $('.nav-index').css('top',nav_index_top + 50+'px')
    //             $('.nav-show').css('top','50px')
    //         } 
    //     }else{
    //         $('.bt').hide()
    //         $('.nav-show').css('top','0')
    //         $('.nav-show').css('height','calc(350px/6*5)')
    //     }
    // })
    // 首页头部测导航滑块
    $(".nav-index a").mouseover(function (e){
        e.stopPropagation();
        $(".eject").addClass("zindex");
        $(".eject .demo:eq(" +$(this).index()+ ")").show();
        $(this).addClass("hk-a").siblings().removeClass("hk-a");
    })
    $(".nav-index a").mouseout(function (e){
        $(".eject .demo").hide();
        $(".eject").removeClass("zindex");
        $(this).removeClass("hk-a");
    })
    $(".eject .demo").mouseover(function (e) {
        e.stopPropagation();
        $(".eject").addClass("zindex");
        $(this).show();
    })
    $(".eject .demo").mouseout(function (e){
        $(".eject .demo").hide();
        $(this).removeClass("hk-a");
        e.stopPropagation();
        $(".eject").addClass("zindex");
        $(this).hide();
    })
    $('.dh a').hover(function () {
        $('.dh a:eq('+$(this).index()+')').addClass('hk-a').siblings().removeClass('hk-a')
    });
    $('#top2 span').hover(function(){
        $('#top2 span:eq('+$(this).index()+')').addClass('hk-a').siblings().removeClass('hk-a')
        $('.art-show div:eq('+$(this).index()+')').addClass('show').siblings().removeClass('show')
    })
    // end
    // 首页头部导航栏防护机智
    // if($('.nav-index .nav-a').length>=3){
    //     for(var i =0;i<=$('.nav-index .nav-a').length-1;i++){
    //         if(i==3){
    //             // $('.nav-index .nav-a')[i].style.border='none'
    //         }else if(i>3){
    //             $('.nav-index .nav-a')[i].remove()
    //         }
    //     }
    // }
    // end
}
// 百度热搜效果
// 声明两个计时器的时间
var timer3
var timer2
var li_c=$('.art-dev-ul a')
var li_list=$('.art-dev-ul a').length
for (let i = 0; i < li_list; i++) {
    $('.art-dev-ul').mouseleave(function () {
        timer2 = setTimeout(() => {
            for (var k = 0; k < li_list; k++) {
                if (li_c[k].className) {
                    li_c[k].classList.remove('hk-a')
                }
            }
            li_c[0].classList.add('hk-a')
        }, 1000)
    })
    li_c[i].addEventListener('mouseenter', function () {
        if (timer2) {
            clearTimeout(timer2)
        }
        timer3 = setTimeout(() => {
            for (let j = 0; j < li_list; j++) {
                li_c[j].classList.remove('hk-a')
            }
            li_c[i].classList.add('hk-a')
        }, 1000)
        li_c[i].addEventListener('mouseleave', function () {
            if (timer3) {
                clearTimeout(timer3)
            }
        })
    })
}
