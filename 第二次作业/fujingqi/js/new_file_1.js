$(function() {
    $('.level1').click(function() {
        $(this).next().stop().slideToggle().parent().siblings().children('ul').slideUp();
    })

})