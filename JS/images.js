var images = ['https://i.imgur.com/xguf8Ud.png', 'https://i.imgur.com/8wD35uH.png'];

var index  = 0;
var $top   = $('body');

setInterval(function() {
   $top.animate({ opacity: 0 }, 500, function() {
     $top.css('background', 'url('+images[++index]+')');
     $top.animate({ opacity: 1 }, 100, function() {
       if(index === images.length) index = 0;
     });
   });
}, 6000);
