
    $('.pic_tabs').find('a.btn').each(function (i) {

        $(this).hover(function () {

            $(this).addClass('active').siblings('a.btn').removeClass('active');

            $('.pic_cons_box').animate({'left': -$('.pic_cons').width() * i}, 200);

        });

    });
    $(".bt").each(function(){
//            console.log($(".bt"));
        $(".bt").mouseenter(function (){
            $(".bt").eq($(this).index()).addClass("active").siblings().removeClass('active');
//                $(".oul").hide().eq($(this).index()).show();
            $(".phone-1s").siblings().removeClass('on').eq($(this).index()).addClass("on");
        })
    })

    // 获取要操作的元素

    var lis=document.querySelectorAll('li');
    var oStyle=document.querySelector('style');
    for(var i=0;i<lis.length;i++){
        (function (i) {
            window.setTimeout(function () {
                oStyle.innerHTML+="#box ul li:nth-child("+(i+1)+"){transform:rotateY("+(lis.length-1-i)*30+"deg) translateZ(400px);transition:.7s;transition-delay:"+(i*0.1)+"s}"
            },i*100);
        })(i)
    }

    $(".bts").each(function(){
//            console.log($(".btn"));
        $(".bts").mouseenter(function (){
            $(".bts").eq($(this).index()).addClass("active").siblings().removeClass('active');
//                $(".ouls").hide().eq($(this).index()).show();
            $(".ouls").siblings().removeClass('ulobj').eq($(this).index()).addClass("ulobj");
        })
    })

