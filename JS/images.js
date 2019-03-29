var images = ['http://lorempixel.com/500/500/nature/4', 'http://lorempixel.com/500/500/nature/2', 'http://lorempixel.com/500/500/nature/3'];

var index  = 0;
var $top   = $('#top-area');

setInterval(function() {
   $top.animate({ opacity: 0 }, 500, function() {
     $top.css('background', 'url('+images[++index]+')');
     $top.animate({ opacity: 1 }, 500, function() {
       if(index === images.length) index = 0;
     });
   });
}, 6000);
