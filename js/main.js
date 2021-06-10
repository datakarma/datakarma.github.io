$(document).ready(function(){
    // Mobile Menu
    $('.menu-btn').on('click', function(e){
        $('.header').toggleClass('menu-open');
        $('body').toggleClass('overflow')
        e.preventDefault();
    })
    $('.header .menu a').on('click', function(){
        $('.header').removeClass('menu-open');
        $('body').removeClass('overflow')
    })
})