// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.




$(window).scroll(function () {
 if ($(document).scrollTop() > 400){  
    $( '.nav-home').slideDown(200, 'easeInExpo');
  }
  else {
        $('.nav-home').slideUp(200, 'easeOutExpo');
  }

});



$('.click-down, .click-down-home').on('click', function(){
    $('html,body').animate({
        scrollTop: $('.hero-home, .project-hero').next('section').offset().top-30
    },
    'easeInExpo');
});

