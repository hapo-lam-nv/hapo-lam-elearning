$(document).ready(function() {
    // show close message
    $(".hapo-wrap-icon").click(function() {
        $(".hapo-wrap-content-mes").toggle(0, function() {
            if ($(".hapo-fixed").css("z-index") <= 2) {
                $(".hapo-fixed").css("z-index", "3");
            } else {
                $(".hapo-fixed").css("z-index", "0");
            }
        });
    });

    $(".hapo-close").click(function() {
        $(".hapo-wrap-content-mes").hide();
        $(".hapo-fixed").css("z-index", "1");
    });
    //show slider
    $(".hapo-wrap-slider").eq(0).css("visibility", "visible");
    // slider animation
    var index = 0;

    function show(n) {
        console.log(n);
        var slider_len = $(".hapo-wrap-slider").length;
        $(".hapo-wrap-slider").css("visibility", "hidden");
        if (n < 0) {
            index = slider_len - 1;
        }
        if (n >= slider_len) {
            index = 0;
        }
        console.log(index);
        $(".hapo-wrap-slider").eq(index).css("visibility", "visible");
    }

    function flusSlider(n) {
        show((index += n));
    }

    $(".right_icon").click(function() {
        flusSlider(1);
        // alert("right");
    });
    $(".left_icon").click(function() {
        flusSlider(-1);
        // alert("left");
    });
});