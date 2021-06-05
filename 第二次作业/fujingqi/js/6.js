let len2 = $("img").length;
let cutIdx2 = 0;
slide1 = () => {
	if ($(".carousel_2").is(":animated")) return;
	cutIdx2++;
	$(".carousel_2").animate({
		left: -252 * cutIdx2
	}, function() {
		if (cutIdx2 == len2 - 28) {
			cutIdx2 = 0;
			$(".carousel_2").css({
				"left": 0
			})
		}
	})
}
let timer2 = setInterval(() => {
	cutIdx2++;
	if (cutIdx2 == 7) {
		cutIdx2 = 0;
		$(".carousel_2").css({
			left: -252 * cutIdx2
		})
	} else {
		$(".carousel_2").animate({
			left: -252 * cutIdx2
		})
	}
}, 2000)
$(".BOX").on('mouseenter', function() {
	clearInterval(timer2)
})
$(".BOX").on('mouseleave', function() {
	timer2 = setInterval(() => {
		cutIdx2++;
		if (cutIdx2 >= len2) {
			cutIdx2 = 0;
			$(".carousel_2").css({
				left: -252 * cutIdx2
			})
		} else {
			$(".carousel_2").animate({
				left: -252 * cutIdx2
			})
		}
	}, 2000)
})
$(".left-arrowS").on('click', function() {
	if ($(".carousel_2").is(":animated")) return;
	if (--cutIdx2 < 0) {
		cutIdx2 = len2 - 25;
		$(".carousel_2").css({
			left: -252 * (len2 - 2)
		})
	}
	$(".carousel_2").animate({
		left: -252 * cutIdx2
	})
})
$(".right-arrowS").on('click', function() {
			slide1()
