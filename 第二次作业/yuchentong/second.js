$(function(){
	function byId(id){
		return typeof(id)==="string"?document.getElementById(id):id;
	}


		var index=0,
		timer=null,
		pics=byId("banner").getElementsByTagName("div"),
		dots=byId("dots").getElementsByTagName("span"),
		prev=byId("prev"),
		next=byId("next"),
		len=pics.length;

		function slideImg(){
		var picture=byId("picture");
		picture.onmouseover=function(){
		if(timer){
			clearInterval(timer);
			}
		}
		picture.onmouseout=function(){
			var timer=setInterval(function(){
				index++;
				if(index>=len){
					index=0;
				}
				
				changeImg();
			},4000);
		}
		picture.onmouseout();
		for(var j=0;j<len;j++){
			dots[j].id=j;
			dots[j].onclick=function(){
				index=this.id;
				changeImg();
			}
		}
		next.onclick=function(){
			index++;
			if(index>=len){
				index=0;
			}
			changeImg();
		}
		prev.onclick=function(){
			index--;
			if(index<0){
				index=len-1;
			}
			changeImg();
		}
	}
	function changeImg(){
		for(var i=0;i<len;i++){
			pics[i].style.display="none";
			dots[i].className="";
		}
		pics[index].style.display='block';
		dots[index].className="active";
	}
	slideImg();
});

$(function(){
	var oul=$('.img3 ul');
	var oulhtml=oul.html();
	oul.html(oulhtml+oulhtml);
	var speed=-170;
	$('prev2').click(function(){
		speed=-170;
	});
	$('next2').click(function(){
		speed=170;
	});
	setInterval(function(){
		if(oul.css('left')=='-1020px'){
			oul.css('left','0px');
		}
		oul.css('left','+='+speed+'px');
	},2000)
});


$(function(){
	function byId(id){
		return typeof(id)==="string"?document.getElementById(id):id;
	}

	var index1=0,
	timer1=null,
	pics1=byId("img2im").getElementsByTagName("div"),
	dots1=byId("img2-li").getElementsByTagName("img"),
	len1=pics1.length;

	function slideImg(){
	var picture=byId("img2");
	picture.onmouseover=function(){
	if(timer1){
		clearInterval(timer1);
		}
	}
	picture.onmouseout=function(){
		var time1r=setInterval(function(){
			index1++;
			if(index1>=len1){
				index1=0;
			}
			
			changeImg();
		},5000);
	}
	picture.onmouseout();
	for(var j=0;j<len;j++){
		dots1[j].id=j;
		dots1[j].onclick=function(){
			index1=this.id;
			changeImg();
		}
	}
	next.onclick=function(){
		index1++;
		if(index1>=len1){
			index1=0;
		}
		changeImg();
	}
	prev.onclick=function(){
		index1--;
		if(index1<0){
			index1=len1-1;
		}
		changeImg();
	}
}
function changeImg(){
	for(var i=0;i<len1;i++){
		pics1[i].style.display="none";
		dots1[i].className="";
	}
	pics1[index1].style.display='block';
	dots1[index1].className="active2";
}
slideImg();
});