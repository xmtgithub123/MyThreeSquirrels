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
	 //console.log(ToRightThen)
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


     //点击开始拼按钮、显示遮罩
	 $('#start_but').bind("click",function(){
	 	$('.meng_box').show()
        start_but_fuc();
	 })

     //点击蒙层，其消失
     $('.meng_box').bind("click",function() {
        $(this).hide();
     })
	
    $('#mybut_right').bind("click",function(){
        mybut_right_fuc()
    })
})


var temple = 1;//盒子类型有3个
var fuyu = 0;//祝福语8个
var buble = 0;//气泡6个
var word = "";//气泡上的文字
var timeID;
var substring;//选择盒子款示 点击右前头

function mybut_right_fuc(){
    var oldTemple = temple ;
    temple--;
    if(temple == 0) temple=3;
    var innerhtml = "";
    var innerhtml2 = "";


}
//显示步骤
function start_but_fuc() {
    $("#first_box").hide();
    $("#animate_box").hide();
    $("#second_box").show();
    $("#start_pin").show(); 
    $(".xuanze_name").show();
    $(".word_bg").css("z-index","3");
}

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



