jQuery(document).ready(function($) {

$(".menu-icon").on("click", function() {
  	$(this).toggleClass("active");
  	$('.nav').toggleClass("active");
});

$(".acc_button").on("click", function() {
  $(this).closest(".accordion").toggleClass("open");
});

$(function() {
    $(".post")
      .eq(0)
      .addClass("active");
    var total = $(".post").length;
    var current = 0;
    $("#moveRight").on("click", function() {
      var next = current;
      current = current + 1;
      setSlide(next, current);
    });
    $("#moveLeft").on("click", function() {
      var prev = current;
      current = current - 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next) {
      var slide = current;
      if (next > total - 1) {
        slide = 0;
        current = 0;
      }
      if (next < 0) {
        slide = total - 1;
        current = total - 1;
      }
      $(".post")
        .eq(prev)
        .removeClass("active");
      $(".post")
        .eq(slide)
        .addClass("active");
      setTimeout(function() {}, 800);

      console.log("current " + current);
      console.log("prev " + prev);
    }
  });

    $('.change').each(function(){

    var text = $(this).children('.change_num').text();

    if( text.length > 1 ){

      var neg = "-";
      var pos = "+";

      if( text.indexOf(neg) != -1 ){
        $(this).addClass('down');
      } else if( text.indexOf(pos) != -1 ) {
        $(this).addClass('up');
      }

    }
  })


});
