// 声明高德api的key和公用地址
var url1='https://restapi.amap.com/v3/'
var key='?key=7b0b55dc3bf2778fa1f74930f898f6e3'
// 地址选择
// 加载swpier实现地址选项卡的切换
var ns_banner = new Swiper('.pf-tq-div', {
    // effect:'coverflow',//3d流动
    // effect:'cube',//3d方块
    effect:'flip',//3d翻转
    loop: true,
    centeredSlides : true,
    watchSlidesProgress : true,
    navigation: {
    	nextEl: '.pf-dzqh',
        prevEl: '.pf-tq-hidden',
    },
})
var dz_array
var pf_dz_1
$.ajax({
    type:'get',
    url:url1+'config/district'+key+'&subdistrict=3',
    data:'data',
    dataType:'json',
    success:function(response){
        $('.pf-dzqh').click(function(){
            pf_dz_1=''
            dz_array=response['districts'][0]['districts']
            var sz=response['districts'][0]['districts']
            sz.forEach((dz_1,dz_1_id) => {
                pf_dz_1+=`<button id=`+dz_1_id+` onclick='dz1(this)' value=`+dz_1['adcode']+` name=`+dz_1['name']+`>`+dz_1['name']+`</button>`
            });
            $('.pf_dz').html(pf_dz_1)
        })
    }
})
function dz1(a){
    pf_dz_1=''
    if (dz_array[a.id]['districts']=='') {
        $(".pf-tq-hidden").trigger("click");
        // console.log(a.value);
        CityCode(a.value)
        $('#pf-dqdz').val(a.name)
    }else{
        $('.pf_dz').html('')
        dz_array[a.id]['districts'].forEach((dz_1,dz_1_id) => {
            pf_dz_1+=`<button id=`+dz_1_id+` onclick='dz1(this)' value=`+dz_1['adcode']+` name=`+dz_1['name']+`>`+dz_1['name']+`</button>`
        });
        dz_array=dz_array[a.id]['districts']
        $('.pf_dz').html(pf_dz_1)
    }
}
// 获取默认ip地址
$.ajax({
    type: "get",
    url: url1+"ip"+key,
    data: "data",
    dataType: "json",
    success: function (response) {
        $('#pf-dqdz').val(response['city'])
        $('#pf-dqdz1').text(response['city'])
        city=response['city']
    }
});
// 监听地址发生变化获取改地址的城市编码
$("#pf-dqdz1").bind("DOMNodeInserted",function(e){
    $.ajax({
        type:'get',
        url: url1+'geocode/geo'+key+'&address='+$(e.target).text()+'/&city=',
        data:'data',
        dataType:'json',
        success: function (response) {
            citycode=response['geocodes'][0]['adcode']
            CityCode(citycode)
        }
    })
})
// 天气更新
function CityCode(citycode){
    city='&city='+citycode
    $.ajax({
        type:'get',
        url:url1+'weather/weatherInfo'+key+city,
        data:'data',
        dataType:'json',
        success: function (response) {
            dqwd=response['lives'][0]['temperature']+'℃'
            addtime=response['lives'][0]['reporttime'].substr(11,5)+'  更新'
            gxtime=response['lives'][0]['reporttime']
            TqAndFl=response['lives'][0]['weather']+' '+response['lives'][0]['winddirection']+'风'+response['lives'][0]['windpower']+'级'
            PfDqFl=response['lives'][0]['windpower']+'级'
            PfDqSd=response['lives'][0]['humidity']+'%'
            PfDqRq=response['lives'][0]['reporttime'].substr(5,5)
            $('#pf-dq-wd').text(dqwd)
            $('#pf-gxtime').text(addtime)
            $('#pf-tq-and-fl').text(TqAndFl)
            $('#pf-dq-fl').text(PfDqFl)
            $('#pf-dq-sd').text(PfDqSd)
            $('#pf-dq-rq').text(PfDqRq)
        }
    })
    $.ajax({
        type:'get',
        url:url1+'weather/weatherInfo'+key+city+'&extensions=all',
        data:'data',
        dataType:'json',
        success: function (response) {
            // console.log(response['forecasts'][0]['casts'][0]);
            PfDwGw=response['forecasts'][0]['casts'][0]['nighttemp']+'℃~'+response['forecasts'][0]['casts'][0]['daytemp']+'℃'
            $('#pf-dw-gw').text(PfDwGw)
        }
    })
}
// 天气滑块部分js
$(function(){
    $('.pf-tq-hk span').hover(function(){
        $('.pf-tq-hk span:eq('+$(this).index()+')').addClass('pf-tq-show').siblings().removeClass('pf-tq-show')
        $('.pf-dqwd span:eq('+$(this).index()+')').addClass('show').siblings().removeClass('show')
    })
})