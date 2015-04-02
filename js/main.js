
/* fix vertical when not overflow
call fullscreenFix() if .fullscreen content changes */
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

/* resize background images */
function backgroundResize(){
    var windowH = $(window).height();
    $(".background").each(function(i){
        var path = $(this);
        // variables
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat(path.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if(path.hasClass("parallax")){
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if(contW > imgW){
            imgW = contW;
            imgH = imgW / ratio;
        }
        //
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
    });
}
$(window).resize(backgroundResize);
$(window).focus(backgroundResize);
backgroundResize();

//typed
$(function(){
      $(".type").typed({
        strings: ["Develop", "Create", "Design"],
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 700,
      });
  });

$(function(){
	$('#st-container').hasClass('st-container st-effect-8',
		$('button.cmn-toggle-switch').removeClass('active')
	);
});

$('div.st-pusher').click(function(){
	$('button.cmn-toggle-switch').removeClass('active');
});

$(document).scroll(function() {
  //detect when user scroll to top and set position to relative else sets position to fixed
  $("#st-trigger-effects").css({
    "top": "0",
    "position": $(this).scrollTop() > 140 ? "fixed" : "relative"
  });
});