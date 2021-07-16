// 搜索框
$(function(){
	$(".i1").focus(function(){
		$(this).css("background-color","white");
	});
	$(".i1").blur(function(){
		$(this).css("background-color","#F5AA02");
	});
});
// 下拉菜单
$(function(){
$(".xianshi").mouseover(function(){
		$(this).children("ul").stop().slideDown(210);
	});
$(".xianshi").mouseout(function(){
		$(this).children("ul").stop().slideUp(210);
	});
});

// 轮播效果1
$(function(){
	var indexx =0 ;
	$(".xiabiao .dotd").click(function(){
		clearInterval(asdftimer);
		var nowIndex = $(this).index();
		qiehuan(nowIndex-1);
		if(nowIndex>=indexx){
			var a = nowIndex - indexx;
			for( var i=0 ; i < a  ;i++ ){toRight();}
		}
		else{
			var b = indexx - nowIndex;
			for( var i=1; i <= b  ;i++ ){toLeft();}
		}
		asdf();
	})
	// 右按钮
	$(".butn2").click(function(){
		clearInterval(asdftimer);
		toRight();
		qiehuan(indexx);
		asdf();
	});
	//左按钮
	$(".butn1").click(function(){
		clearInterval(asdftimer);
		toLeft();
		qiehuan(indexx-1)
		asdf();
	});
	function asdf() {
		asdftimer = setInterval(() => {
			qiehuan(indexx);
			toRight();
		},2000);
	}
	asdf();
	function toRight(){
		$(".wrpa").stop(true,true).animate({"left":"-100%"},function(){
				$(".wrpa li").first().appendTo($(".wrpa"));
				$(".wrpa").css("left",0);
				indexx == 3 ? indexx = 0 : indexx++;
			});
	}
	function toLeft(){
		$(".wrpa li").stop(true,true).last().prependTo($(".wrpa"));
			$(".wrpa").css("left","-100%");
			$(".wrpa").animate({"left":0});
			indexx == 0 ? indexx = 3 : indexx--;
	}
	//四个小点
	function qiehuan(indexx){
		if(indexx==3){
			$(".xiabiao>.dotd").eq(0).css( "background-color","#F5AA02").siblings().css("background","grey");
		}
		else{
			$(".xiabiao>.dotd").eq(indexx+1).css( "background-color","#F5AA02").siblings().css("background","grey");
			}
	}
});
// 书签
$(function(){
	$(".aniu1").click(function(){
		$(".aniu2").css("background-color","#FEA800");
		$(".aniu1").css("background-color","#F2730B");
		$(".shi1").show();
		$(".shi2").hide();
	})
	$(".aniu2").click(function(){
		$(".aniu2").css("background-color","#F2730B");
		$(".aniu1").css("background-color","#FEA800");
		$(".shi2").show();
		$(".shi1").hide();
	})
});
// 轮播效果2
$(function(){
	var indexa = 0;
	$(".xiaot").click(function(){
		clearInterval(zxcvtimer);
		var nowaIndex = $(this).index();
		qiehuana(nowaIndex-1);
		if(nowaIndex>=indexa){
			var c = nowaIndex - indexa;
			for( var i=0 ; i < c  ;i++ ){toRighta();}
		}
		else{
			var d = indexa - nowaIndex;
			for( var i=1; i <= d  ;i++ ){toLefta();}
		}
		zxcv();
		
	});
	function toRighta(){
		$(".shanb").stop(true,true).animate({"left":"-100%"},function(){
				$(".shanb .dat").first().appendTo($(".shanb"));
				$(".shanb").css("left",0);
				indexa == 3 ? indexa = 0 : indexa++;
		});
	}
	function toLefta(){
		$(".shanb .dat").last().prependTo($(".shanb"));
			$(".shanb").stop(true,true).css("left","-100%");
			$(".shanb").animate({"left":0});
			indexa == 0 ? indexa = 3 : indexa--;
	}
	function qiehuana(indexa){
		if (indexa == 3){
			$(".xiaot").eq(0).css("outline","6px solid #EC6B0E").siblings().css("outline","6px solid #CADEE7");
			$(".xiaot").eq(0).children().show();
			$(".xiaot").eq(0).siblings().children().hide();
		}else{
			$(".xiaot").eq(indexa+1).css("outline","6px solid #EC6B0E").siblings().css("outline","6px solid #CADEE7");
			$(".xiaot").eq(indexa+1).children().show();
			$(".xiaot").eq(indexa+1).siblings().children().hide();
		}
	}
	function zxcv(){
		 zxcvtimer = setInterval(() => {
			toRighta();
			qiehuana(indexa);
		},3000)
	}
	zxcv();
});
// 风琴页面
$(function(){
	$(".kew").click(function(){
		$(".chux").slideUp();
		$(this).next().slideDown();
		$(".kew").css("background-color","#FEA800");
		$(this).css("background-color","#EC6B0E");
	});
});
// 轮播效果3
$(function(){
	var index = 0 ;
	$(".butmb2").click(function(){
		clearInterval(timer);
		index == 6 ? index = 0 : index++;
		toRightm();
		run()
	});
	$(".butmb1").click(function(){
		clearInterval(timer);
		index == 0 ? index = 6 : index--;
		toLeftm();
		run()
	});
	function run() {
		timer = setInterval(() =>{
		toRightm()
	},4000);
	};
	run()
	function toRightm(){
		$(".eight_").stop(true,true).animate({"left":"-240px"},function(){
				$(".eight_ li").first().appendTo($(".eight_"));
				$(".eight_").css("left","6px");
			});
	}
	function toLeftm(){
		$(".eight_ li").stop(true,true).last().prependTo($(".eight_"));
			$(".eight_").css("left","-240px");
			$(".eight_").animate({"left":"6px"});
	}
});
// 弹出窗口
$(function(){
	$(".dog1").click(function(){
		$(".tiaoc1").show();
	});
	$(".dog2").click(function(){
		$(".tiaoc2").show();
	});
	$(".dog3").click(function(){
		$(".tiaoc3").show();
	});
	$(".dog4").click(function(){
		$(".tiaoc4").show();
	});
	$(".chah").click(function(){
		$(this).parent().parent().hide();
	});
});