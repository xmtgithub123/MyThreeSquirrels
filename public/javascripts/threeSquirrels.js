

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
            window.setTimeout(function(){},1000)
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
            $progress.html('')
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
    var ts,wh,ts,top;

    $(function(){
        FastClick.attach(document.body); 
        var pageHeight = $(window).height() ;
        $('.game_body').height(pageHeight - 240);
        $('.phtot_show').height($('#autographPage').height() - 240)
        $('.img_container').height($('#autographPage').height() - 240 - 55)

        

        var imgArr = [1,2,3];
        var val = imgArr[Math.floor(Math.random()*imgArr.length)]
        $('.gameAgain').bind('click',function(){
          window.location.reload(true)
        })
        $('.GetPhoto').bind('click',function(){
            $('#gamePage').hide();
            $('#autographPage').show();
            $('.img_container').append("<img src=\"image/photo_"+ val +".png\" class=\"animated fadeInDown photo_img\"\">")
        })
        $('#getMore').bind('click',function(){
            var imgNumb = [1,2,3];
            var data = imgNumb[Math.floor(Math.random()*imgNumb.length)]
            $('.photo_img').attr(
                'src','image/photo_'+data+'.png'
            )           
        })  
        $('#toBuy').bind("click",function(){
            alert('点击购买元气')
        })
    })


    
   
    
    
    function random(){
        Wh = parseInt(Math.random() * (70 - 30) + 20);//获取 20<= x <60 的数字
        ts = parseInt(Math.random() * 13 + 1);//获取 1<= x <=13 的数字
        top = (parseInt(Math.random() * (-160 - (-60)) - 50));
    }


     function add() {
        num ++; 
        // if(num==15){
        //     num=1;
        // }
        for(var i=0;i<5;i++){
            random(); 
            if(numz>0){
                $('.track_ul_'+i).append("<li class='li_" + num + "' onclick='itemsFunc(this)'><a  href='javascript:;'><img src='image/ts_" + ts + ".png' class='ts_" + ts + "' ></a></li>");
            }
        }
        $(".li_" + num).animate(
            {
                'top':$(window).height() + 20
            },8000,function(){
                //删掉已经显示的红包
            this.remove()
        });

         $(".li_" + num).click(function(){

         });

       
        // var timerArr = [450,350,400,480];
        // var val = timerArr[Math.floor(Math.random()*timerArr.length)]
        setTimeout(add,500);
    }
   add()
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
        console.log(targetNumb)
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
                        //如果点击了炸弹游戏结束

                        $(e)[0].innerHTML = " <img src=\"image/4_04.png\" class=\"ts_\" + targetNumb>";
                        
                
            }
            

    }   

    //倒数计时
    function backward() {
        
        numz = parseFloat( numz - 0.1).toFixed(1);//倒计时保留一位小数
        if(numz>=0){
           var numzSplit = numz.split('')
           // console.log(numzSplit[0]+'-'+numzSplit[2])
           var old_time_second = numzSplit[0];
           $('.time_m_first').hide();
           $('.time_m_second').attr('class','time_m_second').addClass('time_'+numzSplit[0]);
           $('.time_s').attr('class','time_s').addClass('time_'+numzSplit[2]);
            //$(".game_time").html(numz+"s");


            $('.ts_13').bind('click',function(){
                //alert('click bomb')
                $('.game_body').hide();
                $('.game_mask').show();
                $('.game_result_unsuccess').show();
                if(ctime != null){
                     clearTimeout(ctime);
                     ctime = null;
                }
            })
            if(len==8){
                if(ctime != null){
                     clearTimeout(ctime);
                     ctime = null;
                }

                var newNumz = numz;
               // clearTimeout(ctime);
                
                //$('.game_time').html(newNumz+"s");
                $('.game_mask').show();
                $('.game_result_success').show();
                return false;
            }
        }
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
   backward();
    
 
    
        