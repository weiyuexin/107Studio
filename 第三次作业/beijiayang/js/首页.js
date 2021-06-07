
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
		oul.animate({//animate动画效果，往左移310px//
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
	timeId = setInterval(slider, 1000);//setInterval自动//

	$('.wrap').mouseover(function() {/*光标点击小格子，图片自动轮播*/
		clearInterval(timeId);
	});

	$('.wrap').mouseout(function() {
		timeId = setInterval(slider, 1000);
	});
});
