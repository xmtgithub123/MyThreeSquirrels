$(function(){
	setTimeout("loading()",1000);

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
  		$(".waibu_he").addClass("box_right");	
	},false);

	
})

function loading() {
	$("#page1").animate({
		bottom: "100%"}, function() {
		$(this).hide();
	});
	$("#page2").animate({
		top:0},function(){
			$(this).show()
		})
}



