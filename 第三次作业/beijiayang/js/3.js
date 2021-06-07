$(function(){


    /**
     * 下拉菜单
     */
    var nav_list = $(".nav_list");
    var nav_list_ol = $(".nav_list ol");

    nav_list.hover(function(){
        nav_list_ol.stop(false,true);//stop用于 停止当前animate动画效果
        $(this).addClass("current");
        $(this).find(".nav_list_child").slideDown(0);//sildeDown/Up是向上向下展开 括号里可以是展开的 时间延迟
 
    },function(){
        $(this).removeClass("current");
        $(this).find(".nav_list_child").slideUp(0);//sildeDown/Up是向上向下展开 括号里可以是展开的 时间延迟
    });
});



$(function() {//第一个轮播图//
	var oul = $('.wrap ul');
	var ali = $('.wrap ul li');
	var numLi = $('.wrap ol li');
	var aliWidth = $('.wrap ul li').eq(0).width();
	var _now = 0;
	var _now2 = 0;
	var timeId;

	numLi.click(function() {
		var index = $(this).index();
		_now = index;
		_now2 = index;
		$(this).addClass('current').siblings().removeClass();//点击一个，去掉另一个背景色//
		oul.animate({//animate动画效果，往左移1920px//
			'left': -aliWidth * index
		}, 310);
	});


function slider() {//如果到了最后一个 换成前面第一张//
		if (_now == numLi.size() - 1) {
			ali.eq(0).css({
				'position': 'relative',
				'left': oul.width()
			});
			_now = 0;
		} else {
			_now++;
		}

		_now2++;

		numLi.eq(_now).addClass('current').siblings().removeClass();
		oul.animate({
			'left': -aliWidth * _now2
		}, 310, function() {

			if (_now == 0) {
				ali.eq(0).css('position', 'static');
				oul.css('left', 0);
				_now2 = 0;
			}
		});
	}
	timeId = setInterval(slider, 2000);//setInterval自动//

	$('.wrap').mouseover(function() {/*光标点击小格子，图片自动轮播*/
		clearInterval(timeId);
	});

	$('.wrap').mouseout(function() {
		timeId = setInterval(slider, 2000);
	});
});