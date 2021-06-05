$(function() {
    $('.tabPanel ul li').click(function() {
        $(this).addClass('hit').siblings().removeClass('hit');
        $('.panes>div:eq(' + $(this).index() + ')').show().siblings().hide();
    })
})