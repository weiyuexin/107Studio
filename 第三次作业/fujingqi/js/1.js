$(function(){
	var $subbox1 = $('.subbox1')
	var $list = $('.list')
	var $points = $('.banner_point>span')
	var img_width = 355
	var time = 400 //一张翻页总时间
	var item_time = 20
	var imgcount = $points.length
	
	setInterval(function(){
		nextpage(true)
	},1000)
	
	function nextpage(next){
		var offset = 0
		offset = next ? -img_width : img_width
		var itemoffset = offset/(time/item_time)
		var currleft = $list.position().left
		var targetleft = currleft + offset
		var Intervalid = setInterval(function(){
			currleft += itemoffset
			if(currleft === targetleft){
				clearInterval(Intervalid)
				if(currleft===-(imgcount+1)*img_width){
					currleft = -img_width
				}
				else if(currleft===0){
					currleft = -imgcount * img_width
				}
				
			}
			$list.css('left',currleft)
		}.item_time)
	}
})
