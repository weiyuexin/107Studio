$(function(){
			var smlis = $('.kkk ul li');
			smlis.mouseover(function(){
				$(this).addClass('carousel_4').siblings().removeClass('carousel_4');
				var thisSrc = $(this).children().attr('src');
				$('.carousel_1 img').attr('src',thisSrc);
			});
		});