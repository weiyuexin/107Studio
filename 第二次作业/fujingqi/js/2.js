let len = $("img").length;
			let cutIdx = 0;
			let slide = () => {
				if ($(".carousel").is(":animated")) return;
				cutIdx++;
				$(".carousel").animate({
					left: -1575 * cutIdx
				}, function() {
					if (cutIdx == len - 1) {
						cutIdx = 0;
						$(".carousel").css({
							"left": 0
						})
					}
					$(".indications>li").eq(cutIdx).addClass("actives").siblings().removeClass('actives');
				})
			}
			let timer = setInterval(slide, 2000)
			$(".bannerf").on('mouseenter', function() {
				clearInterval(timer)
			})
			$(".bannerf").on("mouseleave", function() {
				timer = setInterval(slide, 2000)
			})
			$(".left-arrow").on('click', function() {
				if ($(".carousel").is(":animated")) return;
				// cutIdx--;
				if (--cutIdx < 0) {
					cutIdx = len - 3;
					$(".carousel").css({
						left: -1575 * (len - 2)
					})
				}
				$(".carousel").animate({
					left: -1575 * cutIdx
				})
				$(".indications>li").eq(cutIdx).addClass("actives").siblings().removeClass('actives');
			})
			$(".right-arrow").on('click', function() {
				slide()
			})
			$(".indications>li").on('click', function() {
				cutIdx = $(this).index();
				$(".carousel").animate({
					left: -1575 * cutIdx
				})
				$(".indicationss>li").eq(cutIdx).addClass("actives").siblings().removeClass('actives');
			})