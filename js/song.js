$(document).ready(function(){
				$("#singer").hover(function(){
					document.onmousewheel = function(){return false};//禁用页面滚定条下拉
					var lTime = new Date();
					$("#singer").bind("mousewheel",function(event,delta,deltaX,deltaY){
						/*	
							@  event 当前事件(滚轮事件)  
							@  delta 当值1时：向上滚动  -1时:向下滚动  
							@  deltaX, deltaY分别是滚轮滚动的坐标值
						*/				
						if (new Date()-lTime>500){
							lTime = new Date();
							var arrWidth = [],arrHeight = [],arrTop = [],arrLeft = [],arrZIndex = [];
	
							for (var i=0;i<13;i++)
							{
								arrWidth[i] = $("#singer img").eq(i).css("width");
								arrHeight[i] = $("#singer img").eq(i).css("height");
								arrTop[i] = $("#singer img").eq(i).css("top");
								arrLeft[i] = $("#singer img").eq(i).css("left");
								arrZIndex[i] = $("#singer img").eq(i).css("z-index");
							}
	
							
							for (var i=0;i<13;i++)
							{
								if (delta == -1)
								{
									var a = i-1;
									if(a<0)a=12;
								}else{
									var a = i+1;
									if(a>12)a=0;
								}
								
								$("#singer img").eq(i).animate({
									"width":arrWidth[a],
									"height":arrHeight[a],
									"top":arrTop[a],
									"left":arrLeft[a],
									"z-index":arrZIndex[a]
								},500);
							}
						}	
					});
				},function(){
					document.onmousewheel = function(){return true};//激活页面滚定条下拉
					$("#singer").unbind("mousewheel");
				});
});