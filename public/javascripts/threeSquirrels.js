
    var $loading = $('#loading')
    var $progress = $('#progress')
    var prg = 0 //进度初始值

    var timer = 0
    var now = new Date()  // 记录当前时间
    var timeout = 5000  // 超时时间

    progress([80, 90], [1, 3], 100)

    window.onload  =function(){
        complete()
    }
    if (now - loadingStartTime > timeout) {  // 超时
        complete()
    } else {
        window.setTimeout(function() {
            complete()
        },timeout - (now - loadingStartTime))
    }

    function complete () {  // 封装完成进度功能
        progress(100, [1, 5], 10,function(){
            window.setTimeout(function(){
                $('#loadingPage').hide()
            },1000)
        })
    }
    function progress (dist, speed, delay, callback) {
        var _dist = random(dist)
        var _delay = random(delay)
        var _speed = random(speed)
        window.clearTimeout(timer)
        timer = window.setTimeout(function(){
            if (prg + _speed >= _dist) {
                window.clearTimeout(timer)
                prg = _dist
                callback && callback()
            } else {
                prg += _speed
                progress (_dist, speed, delay, callback)
            }
            $progress.css('width',parseInt(prg) + '%')
            
        },_delay)
        
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
    var clicknumb =0;
    var ts=0;wh=0,ts=0,top=0;
    var flag = 0;

    $(function(){
        FastClick.attach(document.body); 
        var pageHeight = $(window).height() ;
        $('.game_body').height(pageHeight - 240 -120);
        $('.photo_show').height($('#autographPage').height() - 240)
        $('.img_container').height($('#autographPage').height() - 240 - 55)

         // $('#welcomePage,#gamePage,#autographPage').css('display','none')

        var imgArr = [1,2,3];
        var val = imgArr[Math.floor(Math.random()*imgArr.length)]
       

        $('.gameAgain').bind('click',function(){//游戏失败再来一次
            alert('one')
        })

        //开启元气之旅
        $('#openGame').bind('click',function(){
            $('.game_mask').show();
            $('.game_rule_show').show();
        })
        //点击马上开始
        $('#goToGame').bind('click',function(){
            $('.game_rule_show').hide();
            $('.game_box_3').show();

        })
        $('.readygo').bind('click',function(){ //点击开始进入游戏
            $('.game_mask').hide();
            $('#welcomePage').hide();
            $('#gamePage').show();
                setTrackFunc();
                backward();

        })
        $('.GetPhoto').bind('click',function(){ //获得TFbodys照片
            $('#gamePage').hide();
            $('#autographPage').show();
            $('.img_container').append("<img src=\"image/photo_"+ val +".png\" class=\"animated fadeInDown photo_img\"\">")
        })
        $('#getMore').bind('click',function(){//随机切换TFbodys照片
            var imgNumb = [1,2,3];
            var data = imgNumb[Math.floor(Math.random()*imgNumb.length)]
            $('.photo_img').attr(
                'src','image/photo_'+data+'.png'
            )           
        })  
        $('#toBuy').bind("click",function(){//点击购买元气
            alert('点击购买元气')
        })
        $('.youhuijiuan').bind("click",function(){ //点击优惠卷事件
            alert('领取成功！')
        })
        
    })


    
    //随机函数
    function randoms(){
        Wh = parseInt(Math.random() * (70 - 30) + 20);//获取 20<= x <60 的数字
        ts = parseInt(Math.random() * 13 + 1);//获取 1<= x <=13 的数字
        top = (parseInt(Math.random() * (-160 - (-60)) - 50));
    }

    //开始游戏时调用
    function setTrackFunc(){  
        for(var i =1;i<5;i++){
            console.log(23333)
            addLi(i)
        }
    }
    // 增加下滑元素
    function addLi(n){
        num++;
        randoms();   
        if(numz>0){
            var topArr = [-120,-140,-130,-150]; //
            var topVaule = topArr[Math.floor(Math.random()*topArr.length)]

            var stopMinutesArr = [400,900,800,700,600,500,1000];
            var stopMinutesValue = stopMinutesArr[Math.floor(Math.random()*stopMinutesArr.length)];//设置每列断断续续滑落 
            // style=\"top:"+topVaule+"px\"
            $('.track_ul_'+n).append("<li class='li_" + num + "' onclick='itemsFunc(this)' style=\"top:"+topVaule+"px\"><a href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
        }
        $(".track_ul_"+n).children().animate(
            {
                'top':$(window).height() + 20
            },5500,function(){
            //删掉已经显示的元素
            this.remove()
        });

        if(num%2==0){
            setTimeout(function(){
                addLi(n)
            },stopMinutesValue);
                
        }
        else {
            var addTime = setTimeout(function(){
                addLi(n)
            },450);
        }
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
        // console.log(targetNumb)
        //点击了相应的坚果 对应坚果点亮效果
        switch(targetNumb){
            case '1':  
                    if(ts_1==0){
                        $('.type_1').addClass('type_active_1');
                         ts_1 =1;
                         len ++;

                    }
                   
                    break;
            case '2':  
                   // 
                   if(ts_2 ==0){
                        $('.type_2').addClass("type_active_2");
                         ts_2 =1;
                         len ++;
                   }
                  
                   break;
            case '3':  
                     if(ts_3 ==0){
                        $('.type_3').addClass("type_active_3");
                        ts_3 =1;
                        len ++;
                     }
                     
                    break;
            case '4':  
                    if(ts_4==0){
                        $('.type_4').addClass("type_active_4");
                         ts_4 =1;
                         len ++;
                    }
                   
                    break;
            case '5':  
                   if(ts_5==0){
                        $('.type_5').addClass("type_active_5");
                        ts_5 =1;
                        len ++;
                    }
                    
                    break;
            case '6':  
                    if(ts_6==0){
                        $('.type_6').addClass("type_active_6");
                        ts_6 =1;
                        len ++;
                    }
                    
                    break;
            case '7':  
                    if(ts_7==0){
                        $('.type_7').addClass("type_active_7");
                        ts_7 =1;
                        len ++;
                    }
                    
                    break;
            case '8':  
                   if(ts_8==0){
                        $('.type_8').addClass("type_active_8");
                        ts_8 =1;
                        len ++;
                    }
                    break;
            case '13':
                    //如果点击了炸弹则显示爆炸效果
                    $(e)[0].innerHTML = " <img src=\"image/4_04.png\" class=\"ts_\" + targetNumb>";
        }  

    }   

    //倒数计时
    function backward(type) {
        numz = parseFloat( numz - 0.1).toFixed(1);//倒计时保留一位小数
        //10s倒计时 如果没到时间的情况 
        if(numz>=0){
           var numzSplit = numz.split('')
           var old_time_second = numzSplit[0];
           $('.time_m_first').hide();
           $('.time_m_second').attr('class','time_m_second').addClass('time_'+numzSplit[0]);
           $('.time_s').attr('class','time_s').addClass('time_'+numzSplit[2]);
            //$(".game_time").html(numz+"s");

            //没到结束时，如果点击了炸弹则游戏over
            $('.ts_13').bind('click',function(){
                $(this).attr('src','<img src="image/4_04.png">')
                $('.game_mask').show();
                // $('.game_body').delay(500).hide(0)
                $('.game_result_unsuccess').show();
                if(ctime != null){
                     clearTimeout(ctime);
                     ctime = null;
                }
            })
            //未结束时，如果上面图标已点亮了8个，则游戏成功
            if(len==8){
                if(ctime != null){
                     clearTimeout(ctime);
                     ctime = null;
                }
                var newNumz = numz;
               // clearTimeout(ctime);
                $('.game_mask').show();
                $('.game_result_success').show();
                var useTime  = parseFloat( 10.0 - numz).toFixed(1); //游戏成功用时多长时间;
                $('.use_time').text(useTime+"s");
                // $('.use_percent').text(xxx+'%'); //战胜全国xx%的人;
                return false;
            }
        }
        //如果时间已到，如果已集齐8个则游戏成功，否则失败
        if(numz==0){
            //clearTimeout(ctime);
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
        }
        ctime = setTimeout(backward,100);
        
    }
   //backward();
    
 
    
    
    // function add() {
    //     num ++; 
    //     // if(num==15){
    //     //     num=1;
    //     // }
    //     for(var i=0;i<5;i++){
    //         random();                 
    //         // style=\"top:"+top+"px\">
    //         if(numz>0){
    //             var topArr = [-100,-120,-140,-150];
    //             var topVaule = topArr[Math.floor(Math.random()*topArr.length)]
    //             // style=\"top:-150px\"
    //             $('.track_ul_'+i).append("<li class='li_" + num + "' onclick='itemsFunc(this)'><a href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
    //         }
    //     }
    //     $(".li_" + num).animate(
    //         {
    //             'top':$(window).height() + 20
    //         },7000,function(){
    //         //删掉已经显示的红包
    //         this.remove()
    //     });
    //     // var timerArr = [460,480,500,520];
    //     // var val = timerArr[Math.floor(Math.random()*timerArr.length)]
    //     setTimeout(add,600);
    // }


     // function addLi_1(){
    //      num ++; 
    //      random();   
    //       if(numz>0){
    //          var topArr = [-120,-140,-130,-150];
    //             var topVaule = topArr[Math.floor(Math.random()*topArr.length)]
    //             // style=\"top:"+topVaule+"px\"
    //          $('.track_ul_1').append("<li class='li_" + num + "' onclick='itemsFunc(this)' ><a href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
                
    //       }
    //      $(".track_ul_1").children().animate(
    //         {
    //             'top':$(window).height() + 20
    //         },5000,function(){
    //         //删掉已经显示的红包
    //         this.remove()
    //     });
        
    //     if(num%2==0){
    //         console.log(num)
    //         setTimeout(addLi_1,900);
                
    //     }
    //     else {
    //          var addTime = setTimeout(addLi_1,650);
    //     }
    // }
    //   function addLi_2(){
    //      num ++; 
    //      random();   
    //       if(numz>0){
    //         var topArr = [-120,-140,-130,-150];
    //         var topVaule = topArr[Math.floor(Math.random()*topArr.length)]
    //         $('.track_ul_2').append("<li class='li_" + num + "' onclick='itemsFunc(this)'><a href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
                
    //       }
    //      $(".track_ul_2").children().animate(
    //         {
    //             'top':$(window).height() + 20
    //         },5000,function(){
    //         //删掉已经显示的红包
    //         this.remove()
    //     });
    //     if(num%2==0){
    //         console.log(num)
    //         setTimeout(addLi_2,1500);
                
    //     }
    //     else {
    //          var addTime = setTimeout(addLi_2,600);
    //     }
    // }
    // function addLi_3(){
    //      num ++; 
    //      random();   
    //       if(numz>0){
    //          var topArr = [-120,-140,-130,-150];
    //             var topVaule = topArr[Math.floor(Math.random()*topArr.length)]
    //          $('.track_ul_3').append("<li class='li_" + num + "' onclick='itemsFunc(this)'><a href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
    //       }
    //      $(".track_ul_3").children().animate(
    //         {
    //             'top':$(window).height() + 20
    //         },6000,function(){
    //         //删掉已经显示的红包
    //         this.remove()
    //     });

    //      setTimeout(addLi_3,600);
    // }
    // function addLi_4(){
    //      num ++; 
    //      random();   
    //       if(numz>0){
    //          var topArr = [-120,-140,-130,-150];
    //             var topVaule = topArr[Math.floor(Math.random()*topArr.length)]
    //          $('.track_ul_4').append("<li class='li_" + num + "' onclick='itemsFunc(this)'><a href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
                
    //       }
    //      $(".track_ul_4").children().animate(
    //         {
    //             'top':$(window).height() + 20
    //         },6000,function(){
    //         //删掉已经显示的红包
    //         this.remove()
    //     });

    //      if(num%4==0){
    //         console.log(num)
    //         setTimeout(addLi_4,2000);
                
    //     }
    //     else {
    //          var addTime = setTimeout(addLi_4,650);
    //     }
    // }