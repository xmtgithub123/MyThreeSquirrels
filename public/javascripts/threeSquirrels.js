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




//游戏game
$(document).ready(function(){
   
    var win = (parseInt($(".conten").css("width"))) - 60;
    $(".mo").css("height", $(document).height());//屏幕设备的高度 
    $(".couten").css("height", $(document).height());//屏幕设备的高度 
    $(".sen a").click(function(){
      $(".mo").css("display", "none")
    });
 
  var add = function() {

        var hb = parseInt(Math.random() * (3 - 1) + 1); //获取 1<= x < 3 的数字 
        var Wh = parseInt(Math.random() * (70 - 30) + 20);//获取 20<= x <60 的数字 
        var Left = parseInt(Math.random() * (win - 0) + 0);//获取 0<= x <315 的数字 
        var rot = (parseInt(Math.random() * (45 - (-45)) - 45)) + "deg"; // 获取 -45度 <= x < 45度的数字 
        // console.log(rot)
        num++;
       // alert(num)
        $(".couten").append("<li class='li" + num + "' ><a href='javascript:;'><img src='images/bottombg_" + hb + ".png'></a></li>");
        
        $(".li" + num).css({
            "left": Left,
        });
        $(".li" + num + " a img").css({
            "width": Wh,
            "transform": "rot ate(" + rot + ")",
            "-webkit-transform": "rotate(" + rot + ")",
            "-ms-transform": "rotate(" + rot + ")", /* Internet Explorer */
            "-moz-transform": "rotate(" + rot + ")", /* Firefox */
            "-webkit-transform": "rotate(" + rot + ")",/* Safari 和 Chrome */
            "-o-transform": "rotate(" + rot + ")" /* Opera */
        }); 
        $(".li" + num).animate(
            {'top':$(window).height()+20
        },5000,function(){
            //删掉已经显示的红包
            this.remove()
        });
        //点击红包的时候弹出模态层
        $(".li" + num).click(function(){
            $(".mo").css("display", "block")
        });
        setTimeout(add,200)
    }   
    var over = function(){
        alert("over")
        $(".couten").hide()
    }


        //增加红包
        var num = 0;
        // setTimeout(add,3000);
        add();

})