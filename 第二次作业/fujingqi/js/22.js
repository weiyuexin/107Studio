 						    $(function(){  
						        $(".simg_1").click(function(){  
						            var _this_1 = $(this);
						            imgShow("#outerdiv_1", "#innerdiv_1", "#bigimg_1", _this_1);  
						        });  
						    });  
						    function imgShow(outerdiv_1, innerdiv_1, bigimg_1, _this_1){  
						        var src_1 = _this_1.attr("src"); 
						        $(bigimg_1).attr("src", src);  
						        $("<img/>").attr("src", src).load(function(){  
						            var windowW_1 = $(window).width();
						            var windowH_1 = $(window).height();
						            var realWidth_1 = this.width;
						            var realHeight_1 = this.height; 
						            var imgWidth_1, imgHeight_1;  
						            var scale_1 = 0.8;  
						            if(realHeight_1>windowH_1*scale_1) {
						                imgHeight_1 = windowH_1*scale_1;
						                imgWidth_1 = imgHeight_1/realHeight_1*realWidth_1;  
						                if(imgWidth_1>windowW_1*scale_1) {  
						                    imgWidth_1 = windowW_1*scale_1;
						                }  
						            } else if(realWidth_1>windowW_1*scale_1) {
						                imgWidth_1 = windowW_1*scale_1; 
						                            imgHeight_1 = imgWidth_1/realWidth_1*realHeight_1;
						            } else {
						                imgWidth_1 = realWidth_1;  
						                imgHeight_1 = realHeight_1;  
						            }  
						                    $(bigimg).css("width",imgWidth); 
						              
						            var w_1 = (windowW_1-imgWidth_1)/2;
						            var h_1 = (windowH_1-imgHeight_1)/2;
						            $(innerdiv_1).css({"top":h, "left":w});
						            $(outerdiv_1).fadeIn("fast");
						        });  
						          
						        $(outerdiv_1).click(function(){
						            $(this).fadeOut("fast");  
						        });  
						    }  
