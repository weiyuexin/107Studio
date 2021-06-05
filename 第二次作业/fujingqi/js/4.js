let len_1 = $(".carousel_1 img").length;//4
					let cutIdx_1 = 0;
					let slide_1 = () => {
						if ($(".carousel_1").is(":animated")) return;
						cutIdx_1++;
						$(".carousel_1").animate({
							left: -584 * cutIdx_1
						}, function() {
							if (cutIdx_1 == len_1 - 1) {
								cutIdx_1 = 0;
								$(".carousel_1").css({
									"left": 0
								})
							}
						})
					}
					let timer_1 = setInterval(slide_1, 2000)
					$(".bannerf_1").on('mouseenter', function() {
						clearInterval(timer_1)
					})
					$(".bannerf_1").on('mouseleave', function() {
						timer_1 = setInterval(slide_1, 2000)
					})