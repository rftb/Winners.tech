jQuery( document ).ready(function($) {

  var viewport = {
        'w' : $( window ).width(),
        'h' : $( window ).height()
        };

  $('.scroll').height(viewport.h-40);

  $('ol.timeline').find('a').on('click', function(e){
    e.preventDefault();
    $('ol.timeline').find('a').removeClass('active');
    $(this).addClass('active');
    $( "#details" ).load( $(this).attr('href'), function() {
      console.log('ok');
    });
  });
});