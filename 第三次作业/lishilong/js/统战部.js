//轮播图的完成
$(document).ready(function(){
    var container = $("#container");
    var picturelist = $("#picturelist");
    var span = $("#navdiv span");
    var dd = $(".zhushi dd")
    var width = 320;
    var index  = 1;
    var interval = 3000;
    var timer = null;
    
    picturelist.css("left",-width);
    

    function go(offset){
        var newleft = parseInt(picturelist.css("left")) + offset;
        picturelist.animate({"left":newleft + "px"},900,function(){
            if(newleft >= 0){
                picturelist.css("left",-width*2);
            }
            if(newleft < -width*2){
                picturelist.css("left",-width);
            }
        });
    }


    function changenav(){
        span.each(function(){
            $(this).attr("class","");
        })
        span.eq(index-1).addClass("on");
    }

    function changezhushi(){
        dd.each(function(){
            $(this).attr("class","NO");
        })
        dd.eq(index-1).attr("class","");
        dd.eq(index-1).addClass("ON");
    }
    

    function autogo(){
        timer = setInterval(function(){
            index++;
            if(index > 2){
                index = 1;
            }
            go(-width);
            changenav();
            changezhushi();
        },interval);
    }

    function stop(){
        clearInterval(timer);
    }

    container.mouseenter(function(){     
        stop();
    });
    container.mouseleave(function(){
        autogo();
    });



    span.each(function(){
        $(this).click(function(){
            if(picturelist.is(":animated") || $(this).attr("class")=="on"){
                return;
            }
            var newindex = $(this).attr("index");
            var offset = (newindex-index)*-width;
            index = newindex;
            go(offset);
            changenav();
            changezhushi();
        });
    });

    autogo();
});


/**自动轮滑效果的实现 */
$(document).ready(function(){
    var slider  = $(".slider");
    var dx = 1.5;
    var dy = 1;
    var timer = null;
    var swidth = 400;
    var sheight = 120;
    var width = $(window).width();
    var height = $(window).height();



    function slide(){
        var newleft = dx +parseInt(slider.css("left"));
        var newtop = dy + parseInt(slider.css("top"));
        if(newleft <= 0 || newleft>=width-swidth){
            dx = dx*-1;
            newleft = dx+parseInt(slider.css("left"));
        }
        if(newtop <= 0 || newtop>=height-sheight){
            dy = dy*-1;
            newtop = dy+parseInt(slider.css("top"));
        }
        slider.css({left:newleft + "px",top:newtop + "px"});
    }

    function autoslide(){
        timer = setInterval(function(){
            slide();
        },10)
    }

    function stop(){
        clearInterval(timer);
    }
    slider.mouseenter(function(){
        stop();
    })
    slider.mouseleave(function(){
        autoslide();
    })


    autoslide();
})

/**返回顶部按钮 */
$(document).ready(function(){
    var gotop = $(".gotop")
    gotop.click(function(){
        $("html").animate({scrollTop:0+"px"},500)
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            gotop.fadeIn();
        }
        else{
            gotop.fadeOut()
        }
    })
})