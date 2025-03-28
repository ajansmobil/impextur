"use sctrict";

if ("undefined" == typeof jQuery)
  throw new Error("Corner Popup requires jQuery");
!(function (t) {
  t.fn.ocpopup = function (e) {
    var o;
    e = t.extend(
      {
        active: 1,
        variant: 1,
        slide: 1,
        slideTop: 1,
        timeOut: 0,
        delay: 0,
        closeBtn: 1,
        shadow: 1,
        link1: "#, _self",
        link2: "#, _self",
        popupImg: "",
        cookieImg: "",
        messageImg: "",
        header: "",
        text1: "",
        text2: "",
        button1: "",
        button2: "",
        button3: "",
        content: "",
        loadContent: "no",
        width: "300px",
        font: "'Open Sans', 'Halvetica', sans-serif",
        colors: "#543189",
        bgColor: "#fff",
        borderColor: "#efefef",
        textColor: "#181818",
        iconColor: "#543189",
        btnColor: "#543189",
        btnTextColor: "#fff",
        ocs: "0px",
        padding: 0,
        position: "right",
        escClose: 0,
        stickToBottom: 0,
        topCorner: 0,
        closeSVG:
          '<svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>',
        beforePopup: function () {},
        afterPopup: function () {},
        onBtnClick: function () {},
      },
      e,
    );

    function n() {
      0 == e.slide
        ? t(cp).fadeOut(400, function () {
            t(this).remove(), e.afterPopup.call(this);
          })
        : c();
    }

    function c() {
      1 == e.slideTop
        ? 0 == e.topCorner
          ? t(cp).removeClass("slide-top").addClass("slide-top-rev")
          : t(cp).removeClass("slide-bottom").addClass("slide-bottom-rev")
        : 1 == e.slide && "right" == e.position
        ? t(cp).removeClass("slide-left").addClass("slide-left-rev")
        : 1 == e.slide && "left" == e.position
        ? t(cp).removeClass("slide-right").addClass("slide-right-rev")
        : 1 == e.slide &&
          "center" == e.position &&
          (0 == e.topCorner
            ? t(cp).removeClass("slide-top").addClass("slide-top-rev")
            : t(cp).removeClass("slide-bottom").addClass("slide-bottom-rev")),
        (cpTemp = t(cp)),
        (cpTemp.animation = "none"),
        cpTemp.offsetHeight,
        (cpTemp.animation = null),
        cpTemp.one(
          "webkitAnimationEnd oanimationend msAnimationEnd animationend",
          function (o) {
            cpTemp.remove(), e.afterPopup.call(this);
          },
        );
    }
    (cp = "#onc-popup"),
      t(cp).length && t(cp).remove(),
      0 != e.active &&
        (t("<div/>", {
          id: "onc-popup",
          class: "popup-xs",
        }).appendTo("body"),
        "%" == e.width.substr(-1)
          ? ((widthPercent = !0), (noPercents = e.width.slice(0, -1)))
          : ((widthPercent = !1),
            e.width.match(/^\d+$/)
              ? (noUnit = e.width)
              : (noUnit = e.width.replace(/\D/g, ""))),
        700 < noUnit || (1 == widthPercent && 50 < noPercents)
          ? ((columnOne = "p-sm-2"), (columnTwo = "p-sm-10"))
          : 450 < noUnit || (1 == widthPercent && 25 < noPercents)
          ? ((columnOne = "p-sm-3"), (columnTwo = "p-sm-9"))
          : (popupContent =
              '<div class="p-col p-xs-12 p-sm-12"><div class="onc-title"><div class="onc-title-icon"></div><div class="onc-title-txt"></div> <div class="onc-close">' +
              e.closeSVG +
              '</div></div><div class="onc-container-2">' +
              e.content +
              "</div></div>"),
        (function () {
          e.beforePopup.call(this),
            0 == e.slide
              ? (t(cp)
                  .html(popupContent)
                  .css("display", "flex")
                  .hide()
                  .fadeIn(800),
                0 != e.delay &&
                  (t(cp).hide(),
                  setTimeout(function () {
                    t(cp).fadeIn(800);
                  }, e.delay)))
              : 1 == e.slideTop
              ? 0 == e.topCorner
                ? t(cp).addClass("slide-top")
                : t(cp).addClass("slide-bottom")
              : 1 == e.slide && "right" == e.position
              ? t(cp).addClass("slide-left")
              : 1 == e.slide && "left" == e.position
              ? t(cp).addClass("slide-right")
              : 1 == e.slide &&
                "center" == e.position &&
                (0 == e.topCorner
                  ? t(cp).addClass("slide-top")
                  : t(cp).addClass("slide-bottom")),
            t(cp).html(popupContent).css("display", "flex").show(),
            0 != e.delay &&
              (t(cp).hide(),
              setTimeout(function () {
                t(cp).show();
              }, e.delay));
        })(),
        10 == e.variant &&
          "no" !== e.loadContent &&
          t(".onc-container-2").load(e.loadContent),
        0 != e.topCorner
          ? (t(cp).addClass("onc-top"), (verticalPosition = "top"))
          : (t(cp).removeClass("onc-top"), (verticalPosition = "bottom")),
        1 !== e.closeBtn &&
          (t(".onc-close").remove(),
          768 < t(window).width() && t(cp).css("right", "70px"),
          t(".onc-container").css({
            bottom: "15px",
            "padding-top": "30px",
          }),
          t(".onc-container-1").css({
            bottom: "0",
            "padding-bottom": "10px",
            "padding-top": "20px",
          }),
          t(".onc-container-2").css({
            bottom: "12px",
            "padding-top": "30px",
          })),
        1 !== e.shadow && t(cp).css("box-shadow", "none"),
        "'Open Sans', 'Halvetica', sans-serif" !== e.font &&
          t(cp).css("font-family", e.font),
        "#543189" !== e.colors &&
          (t(".onc-btn, .onc-btn-cookie, .onc-btn-close").css(
            "background-color",
            e.colors,
          ),
          t(".onc-head, .cookie-more").css("color", e.colors),
          t(cp).after(
            "<style>#onc-popup .onc-close:after{background-color:" +
              e.colors +
              ";}\n#onc-popup .onc-close:before{background-color:" +
              e.colors +
              ";} </style>",
          )),
        "#fff" !== e.bgColor && t(cp).css("background-color", e.bgColor),
        "#efefef" !== e.borderColor && t(cp).css("border-color", e.borderColor),
        "#181818" !== e.textColor &&
          t(".onc-text, .onc-head, .onc-container").css("color", e.textColor),
        "#543189" !== e.iconColor &&
          (t("body").append("<style></style>"),
          t("style").html(
            "#onc-popup .onc-close:after{background-color:" +
              e.iconColor +
              ";}\n#onc-popup .onc-close:before{background-color:" +
              e.iconColor +
              ";",
          )),
        "#543189" !== e.btnColor &&
          t(".onc-btn, .onc-btn-close, .onc-btn-cookie").css(
            "background-color",
            e.btnColor,
          ),
        "#fff" !== e.btnTextColor &&
          t(".onc-btn, .onc-btn-close, .onc-btn-cookie").css(
            "color",
            e.btnTextColor,
          ),
        "0px" !== e.ocs && t(cp).css("border-radius", e.ocs),
        0 !== e.padding &&
          (5 <= e.variant
            ? t(
                ".onc-container, .onc-container-1, .onc-container-2, .onc-container-3",
              ).css({
                padding: e.padding,
              })
            : t(
                ".onc-container, .onc-container-1, .onc-container-2, .onc-container-3",
              ).css({
                padding: e.padding,
                "padding-left": "0px",
              }),
          t(".p-col").first().css("padding-left", e.padding)),
        "right" !== e.position &&
          ("left" == e.position && 768 < t(window).width()
            ? t(cp).css({
                right: "initial",
                left: "25px",
              })
            : t(cp).css({
                right: "initial",
                left: "25px",
                margin: "0 auto",
              })),
        0 !== e.stickToBottom &&
          768 < t(window).width() &&
          (t(cp).css(verticalPosition, "0"),
          "right" == e.position
            ? t(cp).css({
                right: "initial",
              })
            : "left" == e.position &&
              t(cp).css({
                left: "25px",
              })),
        0 !== e.timeOut &&
          ((o = e.timeOut),
          setTimeout(function () {
            0 == e.slide
              ? t(cp).fadeOut(400, function () {
                  t(this).remove(), e.afterPopup.call(this);
                })
              : c();
          }, o)),
        t(document).on("click", ".onc-close", function () {
          n();
        }),
        t(document).on("click", ".onc-btn, .onc-btn-close", function () {
          ("function(){}" != e.onBtnClick && "function (){}" != e.onBtnClick) ||
            (n(), (window.location = t(this).attr("href")));
        }),
        t(document).on("click", ".onc-btn-cookie", function () {
          n(),
            (function (o, e, n) {
              var c = new Date();
              c.setTime(c.getTime() + 24 * n * 60 * 60 * 1e3);
              var t = "; expires=" + c.toGMTString();
              document.cookie = o + "=" + e + t + "; path=/";
            })("cp-cookies-accepted", "Yes", 365);
        }),
        t(document).on(
          "click",
          ".onc-btn, .onc-btn-close, .onc-btn-cookie",
          function () {
            ("function(){}" == e.onBtnClick &&
              "function (){}" == e.onBtnClick) ||
              (o.preventDefault(), e.onBtnClick.call(this));
          },
        ),
        t(document).keyup(function (o) {
          0 == e.escClose || ("Escape" !== o.key && 27 != o.keyCode) || n();
        }),
        (t.fn.ocpopup.popupClose = function (o) {
          setTimeout(n, o);
        }),
        (t.fn.ocpopup.popupHide = function (o) {
          t(cp).delay(o).fadeOut(400);
        }),
        (t.fn.ocpopup.popupShow = function (o) {
          t(cp).delay(o).fadeIn(800);
        }));
  };
})(jQuery);
