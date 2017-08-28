$(function(){
	setTimeout("loading()",1000);
    

    //监听动画加戟完毕后执行下一步操作
	var box = document.getElementById("tan_box_left");
	box.addEventListener("webkitAnimationEnd", function(){ //动画重复运动时的事件 
		$(".tan_box_left").hide();
  		$(".pao_title").hide();
  		$(".shou_ta").show();
	}, false); 
	var handler = document.getElementById("shou_ta");
	handler.addEventListener("webkitAnimationEnd", function(){
		$(".shou_ta").removeClass("fadeInUp");
  		$(".shou_ta").addClass("box_right");
  		$(".waibu_he").addClass("box_right"); //盒子右边滑动	
	},false);


	 var ToRightThen = document.getElementsByClassName("waibu_he")[0];
	 console.log(ToRightThen)
	 ToRightThen.addEventListener("webkitAnimationEnd", function(){
		$(".shou_ta").hide();
  		$(".waibu_he").hide();
  		
  		$(".tan_box_right").show();
        $(".pao_title2").show();
        $(".bling2").show();
	},false);

	 var PaoTitle2 =document.getElementsByClassName("pao_title2")[0];
	 PaoTitle2.addEventListener("webkitAnimationEnd", function(){
	 	$(".tmall").show();
		$(".tan_box_right").hide();
        $(".pao_title2").hide();
	 },false);

	 var Tmall =document.getElementsByClassName("tmall")[0];
	 Tmall.addEventListener("webkitAnimationEnd", function(){
	 	$(".tamll_pao").show();
	 },false);

	 $('#start_but').bind("click",function(){
	 	$('.meng_box').show()
	 })
	
})

function loading() {
	$("#page1").animate({
		bottom: "100%"}, function() {
		$(this).hide();
	});
	$("#page2").animate({
		top:0
	},function(){
		$(this).show()
	})
}



