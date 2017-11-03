var $loading = $('#loading')
var $progress = $('#progress')
var prg = 0

var timer = 0
progress([80, 90], [1, 3], 100)  // 使用数组来表示随机数的区间

window.onload = function () {
  progress(100, [1, 5], 10, function () {
    window.setTimeout(function () {
      // 延迟了一秒再隐藏loading
      $loading.hide();
      $('#loadingPage').hide();
      $('#welcomePage').show();
    }, 1000);
  });
var preload = new Array(
    "image/4_04.png",
    "image/4_bg.png",
    "image/again.png",
    "image/gamerule.png",
    "image/get_photo.png",
    "image/getmore.png",
    "image/go.png",
    "image/loading.png",
    "image/more.png",
    "image/open.png",
    "image/photo_1.png",
    "image/photo_2.png",
    "image/photo_3.png",
    "image/readygo.gif",
    "image/result_0.png",
    "image/result_1.png",
    "image/result_10.png",
    "image/right.png",
    "image/sprit.png",
    "image/tfbodys.png",
    "image/tobuy.png",
    "image/ts_1.png",
    "image/ts_2.png",
    "image/ts_3.png",
    "image/ts_4.png",
    "image/ts_5.png",
    "image/ts_6.png",
    "image/ts_7.png",
    "image/ts_8.png",
    "image/ts_9.png",
    "image/ts_10.png",
    "image/ts_11.png",
    "image/ts_12.png",
    "image/ts_13.png",
    "image/welcome.gif",
    "image/youhuijuan.png"
    );
    
    for (i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
    }



  
};

function progress(dist, speed, delay, callback) {
  var _dist = random(dist);
  var _delay = random(delay);
  var _speed = random(speed);
  window.clearTimeout(timer);
  timer = window.setTimeout(function () {
    if (prg + _speed >= _dist) {
      window.clearTimeout(timer);
      prg = _dist;
      callback && callback();
    } else {
      prg += _speed;
      progress(_dist, speed, delay, callback);
    }
    $progress.css('width', parseInt(prg) + '%');
  }, _delay);
}

function random (n) {
  if (typeof n === 'object') {
    var times = n[1] - n[0]
    var offset = n[0]
    return Math.random() * times + offset
  } else {
    return n
  }
}

        var ts_1=0; //蔓越莓
        var ts_2=0; //蓝莓干
        var ts_3=0;//南瓜子
        var ts_4=0;//脱衣核桃仁
        var ts_5=0;//山核桃
        var ts_6=0;//腰果
        var ts_7=0;//巴旦木
        var ts_8=0;//榛子
        var ts_13=0;//炸弹
        var num =0;//坚果松鼠增加
        var numz = 10.0; //10s倒计时
        var imgNumb = 0;
        var len=0; //已选中的坚果数
        var ctime = null;//计时器
        var addTime = null;
        var ts=0;wh=0,ts=0,top=0;
        var flag = 0;
        var pn=0;
        var images = new Array();
    
    $(function(){

        //alert(111)
        FastClick.attach(document.body); 
        var pageHeight = $(window).height() ;
        $('.game_body').height(pageHeight - 240 - 30);
        $('.photo_show').height($('#autographPage').height() - 120) //如果头部低部需要留120px 则高度为-240
        // $('.img_container').height($('#autographPage').height() - 120);
        $('.dis_body').height($('#welcomePage').height() -240)

        var imgArr = [1,2,3];
        var val = imgArr[Math.floor(Math.random()*imgArr.length)]
       
        $('.gameAgain').bind('click',function(){//游戏失败再来一次
            $('.game_mask').hide()
            $('.game_result_unsuccess').hide();
            $('.game_box').show();
            initGame();

        })
       

        //开启元气之旅
        $('#openGame').bind('click',function(){
            $('.game_mask').show();
            $('.game_rule_show').show();
        })
        //点击马上开始
        $('#goToGame').bind('click',function(){
            $('.game_rule_show').hide();
            $('.readygo_page').show();

        })
        $('.readygo').bind('click',function(){ //点击开始进入游戏
            $('#readyGoPage').hide();
            $('.game_result_unsuccess').hide();
            $('.game_mask').hide();
            $('.game_mask').hide();
            $('#welcomePage').hide();
            $('#gamePage').show();
           initGame();
            
        })
        $('.GetPhoto').bind('click',function(){ //获得TFbodys照片
            $('#gamePage').hide();
            $('#autographPage').show();
            $('.img_container').append("<img src=\"image/photo_"+ val +".png\" class=\"animated fadeInDown photo_img\"\">")
        })
        $('#getMore').bind('click',function(){//随机切换TFbodys照片
            var imgNumb = [1,2,3];
            var data = imgNumb[Math.floor(Math.random()*imgNumb.length)]
            pn++;
            var old = pn;
            // console.log(pn)
            if(pn==4){
                pn=1;
            }
            if(old=4){
                old = 1;
            }
            $('.photo_img').attr(
                'src','image/photo_'+pn+'.png'
            )           
        })  
        $('#toBuy').bind("click",function(){//点击购买元气
            alert('点击购买元气')
        })
        $('.youhuijiuan').bind("click",function(){ //点击优惠卷事件
            alert('领取成功！')
        })

        preloadimages();

    })
     
    //初始化游戏
    function initGame(){
        num =0;//坚果松鼠增加
        numz = 10.0; //10s倒计时
        imgNumb = 0;
        len=0; //已选中的坚果数
        ctime = null;//计时器
        addTime = null;
        for(var i=1;i<9;i++) { //初始化里，上一次点击过的坚果清空
                // console.log($('.type_'+i).hasClass('type_active_'+i))
            if($('.type_'+i).hasClass('type_active_'+i))
                $('.type_'+i).removeClass('type_active_'+i)
        }

        setTrackFunc();
       backward();

    }
    
    //随机函数
    function randoms(){
        Wh = parseInt(Math.random() * (70 - 30) + 20);//获取 20<= x <60 的数字
        ts = parseInt(Math.random() * 13 + 1);//获取 1<= x <=13 的数字
        top = (parseInt(Math.random() * (-160 - (-60)) - 50));
    }

    //开始游戏时调用
    function setTrackFunc(){  
        for(var i =1;i<5;i++){
            addLi(i)
        }
    }
    // 增加下滑元素
    function addLi(n){
        // console.log(num)
        num ++; 
        randoms();   
        if(numz>0){
            var topArr = [-120,-160,-140,-180]; //
            var topVaule = topArr[Math.floor(Math.random()*topArr.length)]

            var stopMinutesArr = [400,900,800,700,600,500,1000];
            var stopMinutesValue = stopMinutesArr[Math.floor(Math.random()*stopMinutesArr.length)];//设置每列断断续续滑落 
            // style=\"top:"+topVaule+"px\"
            $('.track_ul_'+n).append("<li class='li_" + num + "' onclick='itemsFunc(this)' style=\"top:"+topVaule+"px\"><a href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
        
            //没到结束时，如果点击了炸弹则游戏over
            $('.ts_13').bind('click',function(){
                
                $('.game_mask').show();
                $('.game_result_unsuccess').show();
               
                if(addTime != null){
                     clearTimeout(addTime);
                     addTime = null;
                }
                $(".track_ul_"+n).children().remove();
                return false;
            })
            //  if(len==8){ //当在时间内len=8时，停止下滑
            //     if(ctime != null){
            //          clearTimeout(ctime);
            //          ctime = null;
            //          return false;
            //     }
            //     return false;
            // }
            //未结束时，如果上面图标已点亮了8个，则游戏成功
            if(len==8){

                var newNumz = numz;
               // clearTimeout(ctime);
                $('.game_mask').show();
                $('.game_result_success').show();
                var useTime  = parseFloat( 10.0 - numz).toFixed(1); //游戏成功用时多长时间;
                $('.use_time').text(useTime+"s");
                // $('.use_percent').text(xxx+'%'); //战胜全国xx%的人;
                if(ctime != null){
                     clearTimeout(ctime);
                     ctime = null;
                     return false;
                }
                
            }


        }
        
        $(".track_ul_"+n).children().animate(
            {
                'top':$(window).height() + 20
            },5500,function(){
            //删掉已经显示的元素
            this.remove()
        });
        if(numz==0){  //当在时间为0时，停止下滑
            if(addTime != null){
                 clearTimeout(addTime);
                 addTime = null;
            }
            $(".track_ul_"+n).children().remove()
            return false;
        }
        if(num%2==0){  //停几秒再掉落
            var addTime =setTimeout(function(){
                addLi(n)
            },stopMinutesValue);
                
        }
        else {
            var addTime = setTimeout(function(){
                addLi(n)
            },450);
        }
        // var addTime = setTimeout(function(){
        //         addLi(n)
        //     },450); //匀速掉落
    }

    //8种坚果下落已点击事件
    function itemsFunc(e){
        // console.log($(e).children())
        var $itemParent =$(e).children();
        var targetClass = $itemParent.children()[0].className
        // console.log(targetClass)
        var targetClassArr = targetClass.split('_');
        var targetNumb = targetClassArr[1];
        if(targetNumb>0 && targetNumb<9){ //点击了坚果 显示对勾
            $itemParent.append("<img src='image/right.png' class='right'>");
        }
        //console.log(targetNumb)
        //点击了相应的坚果 对应坚果点亮效果
        switch(targetNumb){
            case '1':  
                    var isHasClass = $(".type_1").hasClass("type_active_1")
                    if(!isHasClass)  {
                        $('.type_1').addClass('type_active_1');
                          len ++;
                    }
                    break;
            case '2':  
                    
                    var isHasClass = $(".type_2").hasClass("type_active_2") 
                    if(!isHasClass)  {
                        $('.type_2').addClass('type_active_2');
                          len ++;
                    }
                   break;
            case '3':  
                    
                    var isHasClass = $(".type_3").hasClass("type_active_3") 
                    if(!isHasClass)  {
                        $('.type_3').addClass('type_active_3');
                          len ++;
                    }
                    
                     
                    break;
            case '4':  
                    var isHasClass = $(".type_4").hasClass("type_active_4")
                    if(!isHasClass)  {
                        $('.type_4').addClass('type_active_4');
                          len ++;
                    }
                   
                    break;
            case '5':  
                    var isHasClass = $(".type_5").hasClass("type_active_5")
                    if(!isHasClass)  {
                        $('.type_5').addClass('type_active_5');
                          len ++;
                    }
                    
                    break;
            case '6':  
                    var isHasClass = $(".type_6").hasClass("type_active_6")  
                    if(!isHasClass)  {
                        $('.type_6').addClass('type_active_6');
                          len ++;
                    }
                    
                    break;
            case '7':  
                    
                    var isHasClass = $(".type_7").hasClass("type_active_7") 
                    if(!isHasClass)  {
                        $('.type_7').addClass('type_active_7');
                          len ++;
                    }
                   
                    
                    break;
            case '8':  
                    var isHasClass = $(".type_8").hasClass("type_active_8")  
                    if(!isHasClass)  {
                        $('.type_8').addClass('type_active_8');
                          len ++;
                    }
                  
                    break;
            // case '13':
            //         //如果点击了炸弹则显示爆炸效果
            //         $(e)[0].innerHTML = " <img src=\"image/4_04.png\" class=\"ts_\" + targetNumb>";
            //         break;
        }  

    }   

    //倒数计时
    function backward() {
        // console.log(numz)
        numz = parseFloat( numz - 0.1).toFixed(1);//倒计时保留一位小数
        //10s倒计时 如果没到时间的情况 
        if(numz>0){
           var numzSplit = numz.split('')
           var old_time_second = numzSplit[0];
           $('.time_m_first').hide();
           $('.time_m_second').attr('class','time_m_second').addClass('time_'+numzSplit[0]);
           $('.time_s').attr('class','time_s').addClass('time_'+numzSplit[2]);
           // $(".game_time").html(numz+"s");

           $('.ts_13').bind('click',function(){
                $(this).attr('src','image/4_04.png')
                if(ctime != null){
                     clearTimeout(ctime);
                     ctime = null;
                     
                }
                 return false;
            })
            //未结束时，如果上面图标已点亮了8个，则游戏成功
            if(len==8){

                var newNumz = numz;
               // clearTimeout(ctime);
                $('.game_mask').show();
                $('.game_result_success').show();
                var useTime  = parseFloat( 10.0 - numz).toFixed(1); //游戏成功用时多长时间;
                $('.use_time').text(useTime+"s");
                // $('.use_percent').text(xxx+'%'); //战胜全国xx%的人;
                if(ctime != null){
                     clearTimeout(ctime);
                     ctime = null;
                     return false;
                }
                
            }

        }
        //如果时间已到，如果已集齐8个则游戏成功，否则失败
        if(numz==0){

            $('.game_box').hide();
            if(len<8){
                $('.game_mask').show();
                $('.game_result_unsuccess').show();

            }
            if(len==8){
                clearTimeout(ctime);
                $('.game_mask').show();
                $('.game_result_success').show();
            }
            if(ctime != null){
                 clearTimeout(ctime);
                 ctime = null;
                 return false;
            }
            return false;
        }
        ctime = setTimeout(backward,100);
        
    }


    function preloadimages(){

    }
   //backward();
    
 // var preload = new Array(
 //            "image/4_04.png",
 //            "image/4_bg.png",
 //            "image/again.png",
 //            "image/gamerule.png",
 //            "image/get_photo.png",
 //            "image/getmore.png",
 //            "image/go.png",
 //            "image/loading.png",
 //            "image/more.png",
 //            "image/open.png",
 //            "image/photo_1.png",
 //            "image/photo_2.png",
 //            "image/photo_3.png",
 //            "image/readygo.gif",
 //            "image/result_0.png",
 //            "image/result_1.png",
 //            "image/result_10.png",
 //            "image/right.png",
 //            "image/sprit.png",
 //            "image/tfbodys.png",
 //            "image/tobuy.png",
 //            "image/ts_1.png",
 //            "image/ts_2.png",
 //            "image/ts_3.png",
 //            "image/ts_4.png",
 //            "image/ts_5.png",
 //            "image/ts_6.png",
 //            "image/ts_7.png",
 //            "image/ts_8.png",
 //            "image/ts_9.png",
 //            "image/ts_10.png",
 //            "image/ts_11.png",
 //            "image/ts_12.png",
 //            "image/ts_13.png",
 //            "image/welcome.gif",
 //            "image/youhuijuan.png",
 //        )
 //        for (i = 0; i < preload.length; i++) {
 //            images[i] = new Image();
 //            images[i].src = preload[i];
 //        }
    
    
   