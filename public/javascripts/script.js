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
	    innerhtml = innerhtml + "  <div id=\"swiper_"+ temple +"\" class=\"pa swiper_all right100\"> ";
		innerhtml = innerhtml + "       <div id=\"word_"+ fuyu +"\" class=\"word pa\">";//空白文字
		innerhtml = innerhtml + "            <img src=\"http://wrigley.image.alimmdn.com/h5/neiheword_"+ fuyu +".png\">";
		innerhtml = innerhtml + "       </div>";
	    innerhtml = innerhtml + "       <div class=\"neihe_box pa\">";
	    innerhtml = innerhtml + "            <img src=\"http://wrigley.image.alimmdn.com/h5/neibox_"+ temple +".png\">"; //三个内盒
	    innerhtml = innerhtml + "       </div>";
	    innerhtml = innerhtml + "       <div class=\"comm_top pa\"><img src=\"http://wrigley.image.alimmdn.com/h5/myskittles_5732.png\"></div>";
	 	innerhtml = innerhtml + "       	<div id=\"pin_bottom_"+ fuyu +"\" class=\"pin_bottom pa\">";//密语名称
	 	if(fuyu!=0){
			innerhtml = innerhtml + "            	<img src=\"http://wrigley.image.alimmdn.com/h5/bottombg_"+ fuyu +".png\">";
		}
		innerhtml = innerhtml + "           </div>";
		
		innerhtml = innerhtml + "           <div id=\"pinto_"+ buble +"\" class=\"pinto pinto"+ buble +" pa\">";
		if(buble!=0){
		 	innerhtml = innerhtml + "       		<img src=\"http://wrigley.image.alimmdn.com/h5/pinto_"+ buble +".png\">";//气泡
		 }
	 	innerhtml = innerhtml + "           </div>";
	 	innerhtml = innerhtml + "           <div class=\"pa to_name\">";
	 	innerhtml = innerhtml + "       		<div class=\"pr to_font\">";
	 	innerhtml = innerhtml + "       			<font id=\"to_name\">";
	 	if(word!=""){
	 		innerhtml = innerhtml + word;       			
	 	}
	 	innerhtml = innerhtml + "       			</font>";//气泡文字
	 	innerhtml = innerhtml + "       		</div>";
	 	innerhtml = innerhtml + "       	</div>";
	    innerhtml = innerhtml + "  </div>";  

		innerhtml2 = innerhtml2 + "	  <div id=\"boxname_"+ temple + "\" class=\"box_name right100 pa\">";
		innerhtml2 = innerhtml2 + " 		<img src=\"http://wrigley.image.alimmdn.com/h5/kuanshi_" + temple + ".png\">";
		innerhtml2 = innerhtml2 + "   </div>";

    console.log(innerhtml)
    $(".swiper1_1").append(innerhtml);
    $(".swiper1_2").append(innerhtml2);
    $("#swiper_"+oldTemple).animate({
		left:"0"
	},100,function(){
		$("#swiper_"+oldTemple).hide().remove();
	});

	$("#swiper_"+temple).animate({
		left:"0"
	},100,function(){
		$("#swiper_"+temple).show();
	});
    
    $("#boxname_"+temple).animate({
		left:"0"
	},100,function(){
		$("#boxname_"+temple).show();
	});

	$("#boxname_"+oldTemple).animate({
		left:"130%"
	},100,function(){
		$("#boxname_"+oldTemple).remove();
	});


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



