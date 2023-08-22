let mySwiper = new Swiper(".swiper-container", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
  },
});

$(function () {

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body, html").animate(
      {
        scrollTop: position,
      },
      500,
      "swing"
    );
    return false;
  });

  var pageTop = $("#page-top");
  var win = $(window);
  var fv = $(".fv");
  var fvHeight = fv.outerHeight();
  pageTop.hide();
  win.on("load scroll", function () {
    var value = $(this).scrollTop();
    // var winHeight = win.height();
    if (value > 100) {
      pageTop.fadeIn(500);
    } else {
      pageTop.fadeOut(500);
    }

    if (value > fvHeight) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

  $(".burger-btn").on("click", function () {
    $(this).toggleClass("clicked");
    $(".header-navi").toggleClass("clicked");
    $("body").toggleClass("noscroll");
  });

  var winWidth = win.width();
  if (winWidth <= 768) {
    $(".header-navi ul li > a").on("click", function () {
      $(".burger-btn").removeClass("clicked");
      $(".header-navi").removeClass("clicked");
      $("body").removeClass("noscroll");
    });
  }
});

//同じ日付で2回目以降ならローディング画面非表示の設定

var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
var myD = new Date();//日付データを取得
var myYear = String(myD.getFullYear());//年
var myMonth = String(myD.getMonth() + 1);//月
var myDate = String(myD.getDate());//日
    
if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
        $(".loading-bg").css("display", "block");//１回目はローディングを表示
        $(".loading-bg").delay(4000).fadeOut(4000);
}else {
    $(".loading-bg").css("display", "none");//同日2回目のアクセスでローディング画面非表示
}  

$.ajax({
  url:
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSev73P3CvRDSZnQOH6r8mycg6-CSb-NYufdDYHm2BVFktkwzA/formResponse",
  data: { "entry.2005620554": name },
  type: "POST",
  dataType: "xml",
  statusCode: {
    0: function () {
      //Success message
    },
    200: function () {
      //Success Message
    },
  },
});
