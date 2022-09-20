$(function () {
    //模拟placeholder
    $("textarea,input[type='text']").focus(function () {
        $(this).next(".placeholder").hide();
    });
    $("textarea,input[type='text']").blur(function () {
        if ($(this).val() == "") {
            $(this).next(".placeholder").show();
        }
    });
    $(".placeholder").on("click", function () {
        $(this).hide().siblings("input,textarea").focus();
    });

    if ($("#leftNewsNav").is(":visible")) {
        var newsNavTop = $("#leftNewsNav").offset().top;
    }


    //资讯定位
    $("#leftNewsNav").width($("#leftNewsNav").width());
    $(window).scroll(function () {
        var scrollT = $(window).scrollTop();
        var windowH = $(window).height();
        $(".right-news-list").height(windowH - 160).width($(".right-news-list").width());
        var rightBottom = $(".footer").offset().top - windowH;
        //定位左侧资讯导航
        if (scrollT >= newsNavTop) {
            $("#leftNewsNav").addClass("fixed")
        } else {
            $("#leftNewsNav").removeClass("fixed")
        }

        //定位右侧资讯
        if ($("#inMain").is(":visible")) {
            if (scrollT >= $("#inMain").offset().top + 165 && scrollT <= rightBottom) {
                $(".right-news").css({
                    position: "fixed",
                    top: 0
                })
            } else if (scrollT >= rightBottom) {
                $(".right-news").css({
                    position: "absolute",
                    bottom: 0,
                    top: 'auto'
                })
            } else {
                $(".right-news").css({
                    position: "inherit",
                    bottom: 0,
                    top: 'auto'
                })
            }
        }
    });

    //首页banner
    function bannerShow() {

        $("#animation").css("opacity", "0");
        $("#animation").animate({
            opacity: "1",
            marginTop: "100"
        }, 1000);

    }

    bannerShow()

    //表格斑马
    $(".p-table tbody tr:odd td").css({
        backgroundColor: "#f6f6f6",
        height: "35px",
        "line-height": "35px"
    });

    //绑定账户切换
    
    $(".my-zhanghu li.last").on('click', function () {
        $(".ceng-pc, .pay-type-bank").css('display', "block");
    });
    $(".pay-type-bank ul li").click(function () {
        $(".pay-type-bank ul li a").removeClass("on");
        $(this).find("a").addClass("on");
        if ($(this).index() == 1 || $(this).index() == 2) {
            $(".bank-number-div ,.bank-name-div").css("display", "none");
        } else if ($(this).index() == 0) {
            $(".bank-number-div ,.bank-name-div").css("display", "block");
        }
    });
    $(".btn02-pc").on("click", function () {
        $(".ceng-pc, .pay-type-bank").css('display', "none");
    });

    //首页banner
    function bannerShow() {
       
            $("#animation").css("opacity", "0");
            $("#animation").animate({
                opacity: "1",
                marginTop: "100"
            }, 1000);
    }

    //首页数字翻滚
    function numberscroll() {
        var options = {  
            useEasing: true,
              useGrouping: true,
              separator: ',',
              decimal: '.',
              prefix: '',
              suffix: ''
        };
        var demo = new CountUp("ser-num1", 0, 85, 0, 2.5, options);
        demo.start();
        var demo1 = new CountUp("ser-num2", 0, 300, 0, 2.5, options);
        demo1.start();
        var demo2 = new CountUp("ser-num3", 0, 100, 0, 2.5, options);
        demo2.start();
        var demo3 = new CountUp("ser-num4", 0, 367, 0, 2.5, options);
        demo3.start();
        var demos = new CountUp("ser-s-num1", 0, 85, 0, 2.5, options);
        demos.start();
        var demos1 = new CountUp("ser-s-num2", 0, 300, 0, 2.5, options);
        demos1.start();
        var demos2 = new CountUp("ser-s-num3", 0, 100, 0, 2.5, options);
        demos2.start();
        var demos3 = new CountUp("ser-s-num4", 0, 367, 0, 2.5, options);
        demos3.start();
    }
    var numBtn = true;
    $(window).scroll(function () {
        var iTop = $(window).scrollTop()

        if (iTop > 500 && numBtn&& $("#animation").is(":visible")) {

            numberscroll()

            numBtn = false

            return false

        } else {

            return false

        }

    })


    //项目详情弹框
    
    $(".join").click(function(){
        $(".mic,.success-tips").show();
    })
    $(".close-btn").click(function(){
        $(".mic,.success-tips").hide();
    })
})