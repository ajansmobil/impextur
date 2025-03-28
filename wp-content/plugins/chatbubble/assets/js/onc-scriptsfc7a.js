(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // Some defaults
    var toggleMethod = "data-onc-toggle",
      menuState = "data-onc-state",
      mainButtonClass = "onc-cb-menu-start";

    // Internal references
    var elemsToClick, elemsToHover, mainButton, target, currentState;

    var onc_cb_menu = document.getElementById("onc-cb-menu");
    if (onc_cb_menu) {
      var toggle_method = onc_cb_menu.getAttribute("data-onc-toggle");
    }

    function getElemsByToggleMethod(selector) {
      return document.querySelectorAll(
        "[" + toggleMethod + '="' + selector + '"]',
      );
    }

    // The open/close action is performed by toggling an attribute on the menu main element.
    function toggleButton(evt) {
      target = evt.target;
      while (target && !target.getAttribute(toggleMethod)) {
        target = target.parentNode;
        if (!target) {
          return;
        }
      }
      currentState =
        target.getAttribute(menuState) === "open" ? "closed" : "open";
      target.setAttribute(menuState, currentState);
    }

    function closePopup() {
      // Change bubble icon back to the original icon
      var ori_icon = jQuery(".onc-icon-chats").find("img").data("ori-src");
      jQuery(".onc-icon-chats")
        .find("img")
        .attr("src", ori_icon)
        .addClass("onc-rotate");
      setTimeout(function () {
        jQuery(".onc-icon-chats")
          .find("img")
          .attr("src", ori_icon)
          .removeClass("onc-rotate");
      }, 500);
      onc_cb_menu.setAttribute("data-onc-item", "");
      //  re activate hover if the original trigger method is hover
      if (onc_cb_menu.getAttribute("data-onc-ori") != "click") {
        onc_cb_menu.setAttribute("data-onc-toggle", "hover");
        toggle_method = "hover";
      }
    }

    // if trigger method is click, toggle all bubbles
    jQuery(document).on("click", ".onc-cb-menu-start", function (evt) {
      if (toggle_method == "click") {
        if (onc_cb_menu.getAttribute("data-onc-state") == "open") {
          if (!onc_cb_menu.getAttribute("data-onc-ori") == "click") {
            onc_cb_menu.setAttribute("data-onc-toggle", "hover");
            toggle_method = "hover";
          }
        }
        toggleButton(evt);
      }
    });

    // if trigger method is hover, show all bubbles
    jQuery(document).on("mouseenter", ".onc-cb-menu-start", function (evt) {
      if (toggle_method == "hover") {
        toggleButton(evt);
      }
    });

    // if trigger method is hover, hide all bubbles
    jQuery(document).on("mouseleave", ".onc-cb-menu-start", function (evt) {
      if (toggle_method == "hover") {
        toggleButton(evt);
      }
    });

    // One bubble is clicked
    jQuery(document).on("click", ".onc-button", function () {
      // close all bubble items when one is clicked
      onc_cb_menu.setAttribute("data-onc-toggle", "click");
      toggle_method = "click";
      onc_cb_menu.setAttribute("data-onc-state", "closed");
      if (jQuery("#onc-popup").length) {
        jQuery.fn.ocpopup.popupHide();
      }
      // get & show popup content relevent to the clicked item
      var clicked_item = jQuery(this).data("onc-item");
      var mif = jQuery("#onc-popup-cont-" + clicked_item);
      if (mif.length) {
        // Change bubble icon to clicked item icon
        var clicked_icon = jQuery(this).find("img").attr("src");
        jQuery(".onc-icon-chats").find("img").attr("src", clicked_icon);
        onc_cb_menu.setAttribute("data-onc-item", clicked_item);

        var onc_popup_position = onc_cb_menu.getAttribute(
          "data-onc-popup-position",
        );
        var popup_position = "right";
        if (onc_popup_position == "br") {
          popup_position = "right";
        } else if (onc_popup_position == "bl") {
          popup_position = "left";
        }
        // open popup
        jQuery.fn.ocpopup({
          position: popup_position,
          content: mif.html(),
        });
      } else if (jQuery(this).attr("data-js")) {
        // Change bubble icon to clicked item icon
        var clicked_icon = jQuery(this).find("img").attr("src");
        jQuery(".onc-icon-chats").find("img").attr("src", clicked_icon);
        onc_cb_menu.setAttribute("data-onc-item", clicked_item);

        if (jQuery(this).data("js") == "facebook-cc") {
          jQuery("#onc-cb-menu").hide();
          jQuery(".fb-root-container").show();
          if (jQuery("#onc-cb-menu").hasClass("is-mobile")) {
            FB.CustomerChat.show(false);
          } else {
            FB.CustomerChat.show(true);
          }
        }
      } else {
        var clicked_item_link = jQuery(this).data("href");
        if (clicked_item_link.substring(0, 4) == "http") {
          var href_target = "_blank";
        } else {
          var href_target = "_self";
        }
        // Change bubble icon back to the original icon
        var ori_icon = jQuery(".onc-icon-chats").find("img").data("ori-src");
        jQuery(".onc-icon-chats")
          .find("img")
          .attr("src", ori_icon)
          .addClass("onc-rotate");
        setTimeout(function () {
          jQuery(".onc-icon-chats")
            .find("img")
            .attr("src", ori_icon)
            .removeClass("onc-rotate");
        }, 500);
        onc_cb_menu.setAttribute("data-onc-item", "");
        if (clicked_item_link) {
          window.open(clicked_item_link, href_target);
        }
        //  re activate hover if the original trigger method is hover
        if (onc_cb_menu.getAttribute("data-onc-ori") != "click") {
          onc_cb_menu.setAttribute("data-onc-toggle", "hover");
          toggle_method = "hover";
        }
      }

      // Set popup title
      if (mif.length) {
        var clicked_label = jQuery(this).data("onc-label");
        jQuery("#onc-popup").addClass("onc-popup-" + clicked_item);
        jQuery(".onc-title-icon").html('<img src="' + clicked_icon + '">');
        jQuery(".onc-title-txt").html(clicked_label);
      }
    });

    jQuery(document).on("click", ".onc-close", function () {
      closePopup();
    });

    if (jQuery("#fb-root").length) {
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: "v9.0",
        });
        FB.Event.subscribe("customerchat.dialogHide", function () {
          jQuery(".fb-root-container").hide();
          jQuery("#onc-cb-menu").show();
          closePopup();
          FB.CustomerChat.hide();
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    }
  });
})(jQuery);
