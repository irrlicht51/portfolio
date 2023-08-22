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

  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
        $(".loading-bg").css("display", "none");
    } else {
      /*
        初回アクセス時の処理
      */
        $(".loading-bg").delay(4000).fadeOut(4000);
    }
  }
  webStorage();
}); 

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
