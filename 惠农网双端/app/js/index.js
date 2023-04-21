$(document).ready(function () {
    var menuBtn = document.querySelector('.open');
    var nav = document.querySelector('nav');
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav_open');
    })
    $('#art-hk span').hover(function () {
        $('#art-hk span:eq('+$(this).index()+')').addClass('hk-a').siblings().removeClass('hk-a');    
        $('.art div:eq('+ $(this).index() +')').addClass('show').siblings().removeClass('show')
    });
})