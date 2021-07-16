$(function(){


    // 下拉菜单
        $('.nav_list').mouseover(function(){
            $(this).children(".nei").show();
            $(this).css('font-weight','800');
            $(this).css('font-size','1.2em');
            $(this).css('background-color','#0594C9');
    
        });
        $('.nav_list').mouseout(function(){
            $(this).children(".nei").hide();
            $(this).css('font-weight','400');
            $(this).css('font-size','1.0em');
            $(this).css('background-color','#084466');
        });
        $('.nei li').mouseover(function(){
            $(this).children(".nei").show();
            $(this).css('font-weight','800');
            $(this).css('font-size','0.8em');
            $(this).css('background-color','#0594C9');
        });
        $('.nei li').mouseout(function(){
            $(this).children(".nei").hide();
            $(this).css('font-weight','400');
            $(this).css('font-size','0.7em');
            $(this).css('background-color','#084466');
        });
    






    // 轮播图
    









        

    // 返回顶部
    $(function(){
        goD();
    $('#dingDuan').click(function(){
        $('html,body').animate({scrollTop:'0px'},1500);
    });
    function goD(){
        $(window).scroll(function(){
            var sTt =document.documentElement.scrollTop;
        if(sTt > 150){
            $('#dingDuan').show();
        }
        else{
            $('#dingDuan').hide();
        }
        });
    };
    });




})
$(function(){
    $('.woliu').onclick = function(){
        window.open("https://www.baidu.com","_blank","height=400,width=600,top=100,left=100,scrollbars=no");

};
})