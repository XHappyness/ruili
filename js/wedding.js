$("#wed .left img.sw1").click(function(){
	$("#wed .left hr").css("display","none");//隐藏横线
	$(this).attr("src","images/hlcb/but1a.gif");
	$("#wed .left img.sw2").attr("src","images/hlcb/but2.gif");
	$("#wed .left div.group1").removeClass("group1").addClass("group");
});
$("#wed .left img.sw2").click(function(){
	$("#wed .left hr").css("display","block");//显示横线
	$(this).attr("src","images/hlcb/but2a.gif");
	$("#wed .left img.sw1").attr("src","images/hlcb/but1.gif");
	$("#wed .left div.group").removeClass("group").addClass("group1");
});
