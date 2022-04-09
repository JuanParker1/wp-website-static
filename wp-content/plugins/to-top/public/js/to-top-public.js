(function($) {
    "use strict";
    $(function() {
        var container = $("#to_top_scrollup").css({
            'opacity': 0
        });
        var data = to_top_options;

        var mouse_over = false;
        var hideEventID = 0;

        var fnHide = function() {
            clearTimeout(hideEventID);
            if (container.is(":visible")) {
                container.stop().fadeTo(200, 0, function() {
                    container.hide();
                    mouse_over = false;
                });
            }
        };

        var fnHideEvent = function() {
            if (!mouse_over && data.enable_autohide == 1 ) {
                clearTimeout(hideEventID);
                hideEventID = setTimeout(function() {
                    fnHide();
                }, data.autohide_time * 1000);
            }
        };

        var scrollHandled = false;
        var fnScroll = function() {
            if (scrollHandled)
                return;

            scrollHandled = true;

            if ($(window).scrollTop() > data.scroll_offset) {
                container.stop().css("opacity", mouse_over ? 1 : parseFloat(data.icon_opacity/100)).show();

                    fnHideEvent();

            } else {
                fnHide();
            }

            scrollHandled = false;
        };

        if ("undefined" != typeof to_top_options.enable_hide_small_device && "1" == to_top_options.enable_hide_small_device) {
            if ($(window).width() > to_top_options.small_device_max_width) {
                $(window).scroll(fnScroll);
                $(document).scroll(fnScroll);
            }
        }else{
            $(window).scroll(fnScroll);
            $(document).scroll(fnScroll);
        }

        container
            .hover(function() {
                clearTimeout(hideEventID);
                mouse_over = true;
                $(this).css("opacity", 1);
            }, function() {
                $(this).css("opacity", parseFloat(data.icon_opacity/100));
                mouse_over = false;
                fnHideEvent();
            })
            .click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
    });
})(jQuery);