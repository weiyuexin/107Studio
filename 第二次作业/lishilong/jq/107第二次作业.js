 /*搜索框背景颜色改变实现*/
 function changego(){
    document.getElementById("input-one").style.backgroundColor=("white");
}
function changeback(){
    document.getElementById("input-one").style.backgroundColor=("#F5AA02");
}

/*中心简介下拉菜单滑动效果实现*/
$(document).ready(function(){
    $("#second").mouseenter(function(){
        $(".second-div").stop().slideDown(400);
        $(this).css("background-color","#EC6B0E")
    });
    $("#second").mouseleave(function(){
        $(".second-div").stop().slideUp(400);
        $(this).css("background-color","#118E99")
    });
    $(".second-div").hover(function(){$(this).stop().slideDown(400);$("#second").css("background-color","#EC6B0E")},function(){$(this).stop().slideUp(400);$("#second").css("background-color","#118E99")});
 });

 /*中心动态下拉菜单活动效果实现*/
 $(document).ready(function(){
    $("#third").mouseenter(function(){
        $(".third-div").stop().slideDown(400);
        $(this).css("background-color","#EC6B0E")
    });
    $("#third").mouseleave(function(){
        $(".third-div").stop().slideUp(400);
        $(this).css("background-color","#118E99")
    });
    $(".third-div").hover(function(){$(this).stop().slideDown(400);$("#third").css("background-color","#EC6B0E")},function(){$(this).stop().slideUp(400);$("#third").css("background-color","#118E99")});
 });

 /*教师培训下拉菜单活动效果实现*/
 $(document).ready(function(){
    $("#forth").mouseenter(function(){
        $(".forth-div").stop().slideDown(400);
        $(this).css("background-color","#EC6B0E")
    });
    $("#forth").mouseleave(function(){
        $(".forth-div").stop().slideUp(400);
        $(this).css("background-color","#118E99")
    });
    $(".forth-div").hover(function(){$(this).stop().slideDown(400);$("#forth").css("background-color","#EC6B0E")},function(){$(this).stop().slideUp(400);$("#forth").css("background-color","#118E99")});
 });

 /*教学研究下拉菜单活动效果实现*/
 $(document).ready(function(){
    $("#fifth").mouseenter(function(){
        $(".fifth-div").stop().slideDown(400);
        $(this).css("background-color","#EC6B0E")
    });
    $("#fifth").mouseleave(function(){
        $(".fifth-div").stop().slideUp(400);
        $(this).css("background-color","#118E99")
    });
    $(".fifth-div").hover(function(){$(this).stop().slideDown(400);$("#fifth").css("background-color","#EC6B0E")},function(){$(this).stop().slideUp(400);$("#fifth").css("background-color","#118E99")});
 });

  /*资源中心下拉菜单活动效果实现*/
  $(document).ready(function(){
    $("#sixth").mouseenter(function(){
        $(".sixth-div").stop().slideDown(400);
        $(this).css("background-color","#EC6B0E")
    });
    $("#sixth").mouseleave(function(){
        $(".sixth-div").stop().slideUp(400);
        $(this).css("background-color","#118E99")
    });
    $(".sixth-div").hover(function(){$(this).stop().slideDown(400);$("#sixth").css("background-color","#EC6B0E")},function(){$(this).stop().slideUp(400);$("#sixth").css("background-color","#118E99")});
 });


  /** 轮播图效果实现**/
  $(document).ready(function(){
    var container = $("#container")
    var picturelist = $("#picturelist");
    var right = $("#right");
    var left = $("#left");
    var width = parseInt(picturelist.css("width"))/6;//计算图片的宽度然后自适应屏幕宽度
    var span = $("#navdiv span");
    var index = 1;
    var interval = 3000;
    var timer = null;
    picturelist.css("left",-width);//图片加载完成时将图片向左偏移一张图片显示出第一张


    function go(offset){                                          //滑动图片
        var newLeft = parseInt(picturelist.css("left")) + offset;//点击后的图片列表应该left的值
        picturelist.animate({"left":newLeft + "px"},900,function(){
            if(newLeft >= 0){									//判断图片是否已经循环一次
                picturelist.css("left",-width*4);
            }
            if(newLeft < -width*4){
                picturelist.css("left",-width);
            }
        });
    }

    function changenav(){				//导航条颜色更新
        span.each(function(){			//将每个导航条class设置为空
            $(this).attr("class","");
        });
        span.eq(index-1).addClass("on");	//将当前导航条的class设置为on
    }


    function autogo(){					//自动轮播实现
        timer = setInterval(function(){
            right.trigger("click");
        },interval);
    }
    function stop(){                    //停止自动轮播
        clearInterval(timer);
    }


    container.mouseenter(function(){     //判断鼠标是否移入轮播图并停止或者开始轮播
        stop();
    });
    container.mouseleave(function(){
        autogo();
    });


    /*为左右箭头绑定滑动图片函数 */
    right.click(function(){
        if(picturelist.is(":animated")){
            return;
        }
        if(index >= 4){     //点击右箭头index+1 
            index = 1;
        }else{
            index =index*1+1;
        }
        go(-width);
        changenav();
    });
    left.click(function(){
        if(picturelist.is(":animated")){
            return;
        }
        if(index <= 1 ){     //点击左箭头index-1
            index = 4;
        }else{
            index =index*1 - 1;   //数字加法不知道为什么变成了字符串加法，导致导航条切换bug，终于在网上找了个*1的方法
        }
        go(width);
        changenav();
    });


    span.each(function(){					//底部按钮点击切换图片
        $(this).click(function(){
            if(picturelist.is(":animated") || $(this).attr("class") == "on"){
                return;
            }
            var newIndex = $(this).attr("index");
            var offset = (newIndex - index) * -width;
            index = newIndex;
            go(offset);
            changenav();
        })
    })

    autogo();   //开始自动轮播
});



/*诗词点击切换效果实现*/
$(document).ready(function(){
    $("#shui").click(function(){
        $("#manjianghong").fadeOut(100);
        $("#shuidiaogetou").fadeIn(600);
        $(this).css("background-color","#EC6B0E");
        $("#man").css("background-color","#F5AA02");
    })
    $("#man").click(function(){
        $("#shuidiaogetou").fadeOut(100);
        $("#manjianghong").fadeIn(600);
        $(this).css("background-color","#EC6B0E");
        $("#shui").css("background-color","#F5AA02");
    })
})




/**第二个轮播图的实现 */
$(document).ready(function(){
    var container1 = $("#container1");
    var picturelist1 = $("#picturelist1");
    var picturebtn = $("#picturebtn")
    var width1 = parseInt(picturelist1.css("width"))/6;//计算图片的宽度然后自适应屏幕宽度
    var index1 = 1;
    var span1 = $("#picturebtn>span")
    var img = $("#picturebtn img")
    var div1 = $("#picturebtn div")
    var interval1 = 2500;
    var timer1 = null;
    picturelist1.css("left",-width1);//图片加载完成时将图片向左偏移一张图片显示出第一张


    function go1(offset){                                          //滑动图片
        var newLeft1 = parseInt(picturelist1.css("left")) + offset;//点击后的图片列表应该left的值
        picturelist1.animate({"left":newLeft1 + "px"},900,function(){
            if(newLeft1 >= 0){									//判断图片是否已经循环一次
                picturelist1.css("left",-width1*4);
            }
            if(newLeft1 < -width1*4){
                picturelist1.css("left",-width1);
            }
        });
            if(index1>4){
                index1=1;
            }else if(index1<1){
                index1=4; 
            }
    }


    autogo1();
    function autogo1(){                //自动轮播
        timer1 = setInterval(function(){
            index1++;
            go1(-width1);
            console.log(index1)
            changePic();
    },interval1)
}
    function stop1(){                 //停止自动轮播
        clearInterval(timer1);
    }


    container1.mouseenter(function(){     //鼠标移入停止自动轮播
        stop1();
    })
    container1.mouseleave(function(){     //鼠标移出继续自动轮播
        autogo1();
    })

    picturebtn.mouseenter(function(){     //鼠标移入停止自动轮播
        stop1();
    })
    picturebtn.mouseleave(function(){     //鼠标移出继续自动轮播
        autogo1();
    })


    //下方小图片导航更新
    function changePic(){				
        span1.each(function(){			//将每个图片 class设置为空清楚边框颜色
            $(this).attr("class","");
        });
        span1.eq(index1-1).addClass("on1");	//将当前小图片导航的class设置为on添加边框颜色
        div1.each(function(){              //将每个小三角颜色设置为白色
            $(this).attr("class","")
        })
        div1.eq(index1-1).addClass("ON1")   //将当前小三角class设置为ON1设置亮橙色
    }


    //点击下方图片导航到对应图片
    img.each(function(){					//底部按钮点击切换图片
        $(this).click(function(){
            if(picturelist1.is(":animated") || $(this).attr("class") == "ON1"){
                return;
            }
            var newIndex1 = $(this).attr("index1");
            var offset1 = (newIndex1 - index1) * -width1;
            index1 = newIndex1;
            go1(offset1);
            changePic();
        })
    })



    /**右侧滑动切换古诗实现 */

    $(document).ready(function(){

    
        $("#chunxiaodiv").click(function(){
            $("#yeyudiv").animate({"top":68+"%"});
            $("#qingmingdiv").animate({"top":83+"%"});
            $("#chunxiaodiv #chunxiaodiv-ul li span").css("background-color","#EC6B0E");
            $("#yeyudiv #yeyudiv-ul li span").css("background-color","#F5AA02");
            $("#qingmingdiv #qingmingdiv-ul li span").css("background-color","#F5AA02");
        })


        $("#yeyudiv").click(function(){
        
                $(this).animate({"top":17+"%"});
                $("#qingmingdiv").animate({"top":83+"%"});
                $("#chunxiaodiv #chunxiaodiv-ul li span").css("background-color","#F5AA02");
                $("#yeyudiv #yeyudiv-ul li span").css("background-color","#EC6B0E");
                $("#qingmingdiv #qingmingdiv-ul li span").css("background-color","#F5AA02");
        })



        $("#qingmingdiv").click(function(){

                $(this).animate({"top":34.1+"%"});
                $("#yeyudiv").animate({"top":17+"%"});
                $("#chunxiaodiv #chunxiaodiv-ul li span").css("background-color","#F5AA02");
                $("#yeyudiv #yeyudiv-ul li span").css("background-color","#F5AA02");
                $("#qingmingdiv #qingmingdiv-ul li span").css("background-color","#EC6B0E");
        })
    })

})

/*第三个轮播图。。。。。。。。。 */
$(document).ready(function(){
    var container2 = $("#container2")
    var picturelist2 = $("#picturelist2");
    var RIGHT = $("#RIGHT");
    var LEFT = $("#LEFT");
    var width2 = parseInt(picturelist2.css("width"))/14;//计算图片的宽度然后自适应屏幕宽度
    var interval2 = 3000;
    var timer2 = null;
    picturelist2.css("left",-width2*4);//图片加载完成时将图片向左偏移显示出前四张


    function go2(offset){                                          //滑动图片
        var newLeft2 = parseInt(picturelist2.css("left")) + offset;//点击后的图片列表应该left的值
        picturelist2.animate({"left":newLeft2 + "px"},900,function(){
            if(newLeft2 >= 0){									//判断图片是否已经循环一次
                picturelist2.css("left",-width2*6);
            }
            if(newLeft2 <= -width2*9){
                picturelist2.css("left",-width2*4);
            }
        });
    }


    function autogo2(){					//自动轮播实现
        timer2 = setInterval(function(){
            go2(-width2);
        },interval2);
    }
    function stop2(){                    //停止自动轮播
        clearInterval(timer2);
    }

    autogo2();     //开始轮播



    RIGHT.click(function(){
        if(picturelist2.is(":animated")){
            return;
        }
        go2(-width2);
    })
    LEFT.click(function(){
        if(picturelist2.is(":animated")){
            return;
        }
        go2(width2);
    })

    container2.mouseenter(function(){
        stop2();
    })
    container2.mouseleave(function(){
        autogo2();
    })
})


/*小狗图片放大效果实现*/
$(document).ready(function(){
    $("#dog1").click(function(){
        $("#modal").css("display","block");
        $("#bigdogcontainer1").css("display","block");
    })
    $("#dog1x").click(function(){
        $("#modal").css("display","none");
        $("#bigdogcontainer1").css("display","none");
    })


    $("#dog2").click(function(){
        $("#modal").css("display","block");
        $("#bigdogcontainer2").css("display","block");
    })
    $("#dog2x").click(function(){
        $("#modal").css("display","none");
        $("#bigdogcontainer2").css("display","none");
    })


    $("#dog3").click(function(){
        $("#modal").css("display","block");
        $("#bigdogcontainer3").css("display","block");
    })
    $("#dog3x").click(function(){
        $("#modal").css("display","none");
        $("#bigdogcontainer3").css("display","none");
    })


    $("#dog4").click(function(){
        $("#modal").css("display","block");
        $("#bigdogcontainer4").css("display","block");
    })
    $("#dog4x").click(function(){
        $("#modal").css("display","none");
        $("#bigdogcontainer4").css("display","none");
    })
})