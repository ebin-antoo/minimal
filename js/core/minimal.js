$(document).ready(function(){ 

  //vegar bg
  $('#header').vegas({
      slides: [
          { src: './assets//img/minimal_bg.jpg'}
      ]
  });

  //window height    
  var vph_1 =  $(window).height();
  $("#header").css('height', vph_1 + "px");

});