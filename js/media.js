// JavaScript Document
$(function () {
    $(".header").append("<em class='hd-tiger'></em>");
    $("body").append("<div class='hd-layer'><div>");

    $(".hd-tiger").on("touchend", function () {
        $("body").toggleClass("nav-show");
    });
    $(".hd-layer").on("touchend", function () {
        $("body").removeClass("nav-show")
    });


    //资讯导航

    var aHNavLi = $(".hand-nav li");
    aHNavLi.on("touchend", function () {
        var index = $(this).index();
        if (index == 0) {
            $(".main-left").show();
            $(".right-news-list").hide().css({
                "height": "auto",
                "width": "auto",
            });
        };
        if (index > 0) {
            index = index - 1;
            $(".main-left").hide();
            $(".right-news-list").show().css("height", "auto");
            $(".right-news-list").find("ul").eq(index).show().siblings().hide();
        }
        $(this).addClass("active").siblings().removeClass("active");
    })
});