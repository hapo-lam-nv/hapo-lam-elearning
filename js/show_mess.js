$(document).ready(function () {
  //show slider
  $(".hapo-wrap-slider").eq(0).css("visibility", "visible");
  // slider animation
  var index = 0;

  function show(n) {
    console.log(n);
    var slider_len = $(".hapo-wrap-slider").length;
    $(".hapo-wrap-slider").css("visibility", "hidden");
    $(".hapo-wrap-slider").css("animation-name", "");
    if (n < 0) {
      index = slider_len - 1;
    }
    if (n >= slider_len) {
      index = 0;
    }
    console.log(index);
    $(".hapo-wrap-slider").eq(index).css("visibility", "visible");
    $(".hapo-wrap-slider").eq(index).css("animation-name", "slide_show");
  }

  function flusSlider(n) {
    show((index += n));
  }

  $(".right_icon").click(function () {
    flusSlider(1);
    // alert("right");
  });
  $(".left_icon").click(function () {
    flusSlider(-1);
    // alert("left");
  });
});
