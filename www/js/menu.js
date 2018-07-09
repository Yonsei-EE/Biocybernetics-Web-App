var delay;
var animationName;
var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd';

$('#toggle-menu').on('click', function() {
  if ($('#menu').is(':hidden')) {
    animationName = 'animated bounceInLeft';
    $('#container-menu').addClass('clicked');
    $('#menu').css('display', 'initial');
    $('#menu').removeClass('clickable');
    $('#menu').children().each(function(index, value) {
      delay = 0.2 * index + 's';
      $(this).css('-webkit-animation-delay', delay);
      $(this).addClass(animationName).one(animationEnd, function() {
        $(this).removeClass(animationName);
        $(this).off();
      });
    });
    $('#menu > li:last').one(animationEnd, function() {
      $('#menu').addClass('clickable');
    });
  } else if ($('#menu').is('.clickable')) {
    animationName = 'animated bounceOutLeft';
    $('.submenu').css('display', 'none');
    $('#container-menu').removeClass('clicked');
    $('#menu').removeClass('clickable');
    $('#menu').children().each(function(index, value) {
      delay = 0.2 * index + 's';
      $(this).css('-webkit-animation-delay', delay);
      $(this).addClass(animationName);
    });
    $('#menu > li:last').one(animationEnd, function() {
      $('#menu').children().removeClass(animationName);
      $('#menu').addClass('clickable');
      $('#menu').css('display', 'none');
    });
  }
});

$('.angle > a').on('click', function() {
  var menu = $(this).parent('i').parent('li');
  if (menu.children('ul').is(':hidden')) {
    // animationName = 'animated fadeInDown';
    // // menu.children('i').addClass('fa-angle-down');
    // // menu.children('i').removeClass('fa-angle-right');
    menu.children('ul').css('display', 'initial');
    // menu.children('ul').removeClass('clickable');
    // menu.children('ul').children('li').addClass(animationName).one(animationEnd, function() {
    //   $(this).parent('ul').addClass('clickable')
    //   $(this).removeClass(animationName);
    //   $(this).off();
    // });
  } else if (menu.children('ul').is('.clickable')) {
    menu.children('ul').css('display', 'none');
    // animationName = 'animated fadeOutUp';
    // // menu.children('i').addClass('fa-angle-right');
    // // menu.children('i').removeClass('fa-angle-up');
    // menu.children('ul').removeClass('clickable');
    // menu.children('ul').children('li').addClass(animationName).one(animationEnd, function() {
    //   $(this).parent('ul').addClass('clickable')
    //   $(this).parent('ul').css('display', 'none');
    //   $(this).removeClass(animationName);
    //   $(this).off();
    // });
  }
});
