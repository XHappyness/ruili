
	/*头部效果相关:
	 * 点击搜索图片时，搜索框要显示出来,
	 * 点击页面其他位置时，搜索框隐藏，搜索图片按钮显示
	 * */
	topStyle();

/*登录、注册 弹框效果*/
$("#top .topCon a.login").click(function(){
	$("#drag").css("display","block");
});

$("#drag .title").mousedown(function(e){
	var clickX = e.clientX;//点击位置坐标
	var clickY = e.clientY;
	var dragL = $("#drag").offset().left;//弹框原始坐标
	var dragT = $("#drag").offset().top;
	$(document.body).bind("mousemove",function(e){//为了少声明全局变量，同时可以使用局部变量，在本函数中绑定mousemove事件
		var moveX = e.clientX-clickX;//鼠标移动的坐标
		var moveY = e.clientY-clickY;
		var newL = dragL + moveX;//计算弹框新的位置
		var newT = dragT + moveY;
		$("#drag").css({left:newL,top:newT});
	});
});
$("#drag .title").mouseup(function(){
	$(document.body).unbind("mousemove");
});
//弹窗实现自动居中效果
autoPosition();
$(window).resize(autoPosition);

	/*导航new的效果，不建议设置定时器显示效果，会浪费网络资源，建议使用动态图片*/
	changeNewOpacity();
	var loop = window.setInterval(changeNewOpacity,2000);
	
	/*头部Flash效果*/
	var flashIndex = 1;
	var flashLoop = null;
	$("#flash ul.scroBtn li").mouseover(function(){
		window.clearInterval(flashLoop);
		$(this).addClass("hover").siblings("li").removeClass("hover");
		flashIndex = $(this).index();
		$("#flash .imgList").stop().animate({left:-flashIndex*750},500);//stop()是解决滑动较快时延迟的问题
	});
	$("#flash ul.scroBtn li").mouseout(function(){
		flashAutoplay();
	});
	//头部Flash：左边按钮
	$("#flash .prev").click(prev);
	//头部Flash：右边按钮
	$("#flash .next").click(next);
	flashAutoplay();
	
	/*“红人专栏”选项卡切换的效果*/
	/*$(".txtBtn ul li").mouseover(function(){
		$(this).addClass("hover").siblings("li.hover").removeClass("hover");
	 	var index = $(this).index();//获取索引值,就是当前元素在父元素的位置
		$(".imgCon ul li").eq(index).fadeIn().siblings("li").hide();
	});*/
	showDifferImage($(".txtBtn ul li"),"li","hover",$(".imgCon ul li"),"li");
	/*"热门排行"选项卡切换的效果*/
	/*$(".hotNews p.hotNewsBtn span").mouseover(function(){
		$(this).addClass("hover").siblings("span").removeClass("hover");
		var index = $(this).index();
		$(".hotNews .hotNewsSelecter ul").eq(index).fadeIn().siblings("ul").hide();
	});*/
	showDifferImage($(".hotNews p.hotNewsBtn span"),"span","hover",$(".hotNews .hotNewsSelecter ul"),"ul");
	/*动态添加新闻序列号
	var len = $(".hotNews  ul li").length/6;
	for(var i=0;i<len;i++){
		$(".hotNews  ul li").eq(i).find("span").text(i+1);
	}*/
	
	/*flash3*/
	var index1 = 0;
	var flash3Loop = null;
	//flash3点击按钮轮播图片
	$("ul.flash3Btn li").mouseover(function(){
		window.clearInterval(flash3Loop);//手动点击按钮式取消轮播效果
		index1 = $(this).index();
		$(this).addClass("hover").siblings("li").removeClass("hover");
		$(".flash3Scroll").stop().css("left",-280*index1+"px");
	});
	$(".flash3Btn li").mouseout(function(){
		autoPlay();
	});
	//flash3自动轮播图片
	autoPlay();
	
	
/*第一部分Flash2效果*/
var flash2Index = 1;
var flash2Loop = null;
//动画按钮轮播
$(".flash2 ul.flash2Btn li").mouseover(function(){
	window.clearInterval(flash2Loop);
	$(this).addClass("hover").siblings("li").removeClass("hover");
	flash2Index = $(this).index();
	$(".flash2 .imgList").stop().animate({left:-220*flash2Index},500);
});
$(".flash2 ul.flash2Btn li").mouseout(function(){
	flash2Autoplay();
});
//上一张图片
$("#part1 img.prev").click(prev1);
//下一张图片
$("#part1 img.next").click(next2);
flash2Autoplay();


/*瑞丽深度手风琴*/
$("#picSlip ul li").mouseover(function(){
	$(this).siblings("li").find("img.op").removeClass("op");
	$(this).find("img").addClass("op");
	
	$(this).stop().animate({width:538},500).siblings("li").stop().animate({width:106},500);
	
});


/*part2左边热门活动、达人精选、热图排行 选项卡*/
showDifferImage($(".part2-left1 p.p1 span"),"span","hover",$(".part2-left1>div"),"div");


/*part2左边第二部分美妆口碑和试用报告*/
$("#part2 .part2Left-common ul li").mouseover(function(){
	$(this).addClass("hover").siblings("li").removeClass("hover");
});

/*第三部分part3 图片轮播效果*/
//上一张图片按钮
$("#part3 img.imgLeft").click(function(){
	$("#part3 .part3-flash ul").prepend($("#part3 .part3-flash ul li:last"));
	$("#part3 .part3-flash ul").css("left","-480px");
	$("#part3 .part3-flash ul").stop().animate({left:"0px"},500);
	$("#part3 .part3-flash span").text($("#part3 .part3-flash ul li:first").attr("mark"));
});
//下一张图片按钮
$("#part3 img.imgRight").click(part3Next);
var part3Loop = null;
part3FlashAutoPlay();
//part3右边选项卡效果
showDifferImage($("#part3 .part3-right ul li"),"li","hover",$("#part3 .part3-right .con div.imgCon"),"div");
/*第三部分part3 底部的图片轮播效果*/
$("#part3 .part3-second-flash img.imgL").click(function(){
	$("#part3 .part3-second-flash ul").prepend($("#part3 .part3-second-flash ul li:last")).css("left","-165px");
	$("#part3 .part3-second-flash ul").stop().animate({left:0},500);
});
$("#part3 .part3-second-flash img.imgR").click(part3SconedNext);
var part3SecondLoop = null;
part3SecondAutoPlay();

/*第四部分part4 图片轮播效果*/
//上一张图片按钮
$("#part4 img.imgLeft").click(function(){
	$("#part4 .part3-flash ul").prepend($("#part4 .part3-flash ul li:last"));
	$("#part4 .part3-flash ul").css("left","-480px");
	$("#part4 .part3-flash ul").stop().animate({left:"0px"},500);
	$("#part4 .part3-flash span").text($("#part4 .part3-flash ul li:first").attr("mark"));
});
//下一张图片按钮
$("#part4 img.imgRight").click(part4Next);
var part4Loop = null;
part4FlashAutoPlay();
/*第四部分part4选项卡效果*/
showDifferImage($("#part4 .ypjd ul.txt li"),"li","hover",$("#part4 .ypjd ul.img li"),"li");
/*第四部分part4 二部分的图片轮播效果*/
$("#part4 .part3-second-flash img.imgL").click(function(){
	$("#part4 .part3-second-flash ul").prepend($("#part4 .part3-second-flash ul li:last")).css("left","-165px");
	$("#part4 .part3-second-flash ul").stop().animate({left:0},500);
});
$("#part4 .part3-second-flash img.imgR").click(part4SconedNext);
var part4SecondLoop = null;
part4SecondAutoPlay();
/*part4-3选项卡操作*/
showDifferImage($("#part4 .part4_3 .right ul.title li"),"li","hover",$("#part4 .part4_3 .right ul.con li"),"li");

/*底部选项卡操作*/
$("#footer ul.title li").click(function(){
	$(this).addClass("hover").siblings("li").removeClass("hover");
	var index = $(this).index();
	$("#footer ul.content li").eq(index).addClass("show").siblings("li").removeClass("show");
});














/*------------------------------------------------------------------------------------------------------------------------*/


/*drag自动弹窗水平居中*/
function autoPosition(){
	var leftLenght = ($(window).width()-$("#drag").width())/2;
	var topLenght = ($(window).height()-$("#drag").height())/2; //垂直居中
	$("#drag").css({left:leftLenght,top:topLenght});
}

/*头部flash动画*/
//flash上一张图片按钮单击触发事件
function prev(){
		flashIndex--;//flashIndex取值：1-9；0和10被隐藏
		if(flashIndex<1){
			flashIndex=9;
			//为了使图片从第一张平滑切换到第九张，在animate（）前的瞬间将最后面的图片1显示
			$("#flash .imgList").css("left","-7500px");
			$("#flash .imgList").stop().animate({left:-flashIndex*750},500);
			$("#flash ul.scroBtn li").eq(flashIndex).addClass("hover").siblings("li").removeClass("hover");
		}else{
			$("#flash .imgList").stop().animate({left:-flashIndex*750},500);
			$("#flash ul.scroBtn li").eq(flashIndex).addClass("hover").siblings("li").removeClass("hover");
		}
}
//flash下一张图片按钮单击触发事件
function next(){
		flashIndex++;/*flashIndex取值：1-9；0和10被隐藏*/
		if(flashIndex>9){
			flashIndex=1;
			/*为了使图片从第9张平滑切换到第1张，在animate（）前的瞬间将最前面的图片9显示*/
			$("#flash .imgList").css("left","0px");
			$("#flash .imgList").stop().animate({left:-flashIndex*750},500);
			$("#flash ul.scroBtn li").eq(flashIndex).addClass("hover").siblings("li").removeClass("hover");
		}else{
			$("#flash .imgList").stop().animate({left:-flashIndex*750},500);
			$("#flash ul.scroBtn li").eq(flashIndex).addClass("hover").siblings("li").removeClass("hover");
		}
}
//flash自动轮播图片,和下一张图片的单击所触发的事件一模一样
function flashAutoplay(){
	flashLoop=window.setInterval(next,3000);
};


/*flash2自动轮播图片,和下一张图片的单击所触发的事件一模一样*/
function flash2Autoplay(){
	flash2Loop = window.setInterval(next2,3000);
}
function prev1(){
	flash2Index--;
	if(flash2Index<1){
		flash2Index=5;
		$(".flash2 .imgList").css("left",-6*220+"px");
		$(".flash2 .imgList").stop().animate({left:-flash2Index*220},500);
		$(".flash2 ul.flash2Btn li").eq(flash2Index).addClass("hover").siblings("li").removeClass("hover");
	}else{
		$(".flash2 .imgList").stop().animate({left:-flash2Index*220},500);
		$(".flash2 ul.flash2Btn li").eq(flash2Index).addClass("hover").siblings("li").removeClass("hover");
	}
}
function next2(){
	flash2Index++;
	if(flash2Index>5){
		flash2Index=1;
		$(".flash2 .imgList").css("left","0px");
		$(".flash2 .imgList").stop().animate({left:-flash2Index*220},500);
		$(".flash2 ul.flash2Btn li").eq(flash2Index).addClass("hover").siblings("li").removeClass("hover");
	}else{
		$(".flash2 .imgList").stop().animate({left:-flash2Index*220},500);
		$(".flash2 ul.flash2Btn li").eq(flash2Index).addClass("hover").siblings("li").removeClass("hover");
	}
}



/*flash3自动轮播图片*/
function autoPlay(){
		flash3Loop = window.setInterval(function(){
			index1++;
			if(index1>=4){ index1=0; }
			$(".flash3Scroll").stop().css("left",-280*index1+"px");//stop（）为了滑动较快时产生的错误
			$("ul.flash3Btn li").eq(index1).addClass("hover").siblings("li").removeClass("hover");
		},1000);
}

/*第三部分part3 图片轮播效果*/
function part3FlashAutoPlay(){
	part3Loop = window.setInterval(part3Next,3000);
}
function part3Next(){
	$("#part3 .part3-flash ul").stop().animate({left:"-480px"},500,function(){
		$(this).css("left","0px");
		$(this).append($("#part3 .part3-flash ul li:first"));	
		$("#part3 .part3-flash span").text($("#part3 .part3-flash ul li:first").attr("mark"));
	});
}

/*第四部分part4 图片轮播效果*/
function part4FlashAutoPlay(){
	part4Loop = window.setInterval(part4Next,3000);
}
function part4Next(){
	$("#part4 .part3-flash ul").stop().animate({left:"-480px"},500,function(){
		$(this).css("left","0px");
		$(this).append($("#part4 .part3-flash ul li:first"));	
		$("#part4 .part3-flash span").text($("#part4 .part3-flash ul li:first").attr("mark"));
	});
}
/*第三部分part3底部 图片轮播效果*/
function part3SecondAutoPlay(){
	part3SecondLoop = window.setInterval(part3SconedNext,3000);
}
function part3SconedNext(){
	$("#part3 .part3-second-flash ul").stop().animate({left:"-165px"},500,function(){
		$(this).css("left","0px").append($("#part3 .part3-second-flash ul li:first"));
	});
}

/*第四部分part4底部 图片轮播效果*/
function part4SecondAutoPlay(){
	part4SecondLoop = window.setInterval(part4SconedNext,3000);
}
function part4SconedNext(){
	$("#part4 .part3-second-flash ul").stop().animate({left:"-165px"},500,function(){
		$(this).css("left","0px").append($("#part4 .part3-second-flash ul li:first"));
	});
}



//选项卡切换的效果
function showDifferImage(selectorObj,selectorElement,className,contextObj,contextElment){
	selectorObj.mouseover(function(){
		$(this).addClass(className).siblings(selectorElement).removeClass(className);
	 	var index = $(this).index();//获取索引值,就是当前元素在父元素的位置
		$(contextObj).eq(index).fadeIn().siblings(contextElment).hide();
	});
}


/*头部效果*/
function topStyle(){
	//点击搜索图片时，搜索框要显示出来
	$("img.seaImg").click(function(e){
		$(this).hide();
		$(".search").animate({width:"230px"},500);
		e.stopPropagation();//阻止事件冒泡
	});
	$("input.seaTxt").click(function(e){
		e.stopPropagation();//阻止事件冒泡
	});
	//点击页面其他位置时，搜索框隐藏，搜索图片按钮显示
	$(document).click(function(){
		$(".search").animate({width:"0px"},500,function(){
			$("img.seaImg").fadeIn();
		});//让搜索框的宽度在500ms内由500变到0，然后慢慢显示搜索图片按钮
	});
}

//使图片隐藏、显示交替
function changeNewOpacity(){
	$("img.new").animate({opacity:0},1000,function(){
		$("img.new").animate({opacity:1},1000);
	});
}
