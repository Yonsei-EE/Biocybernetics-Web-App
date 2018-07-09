var delay;
var animationName;
var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd';
var i;

$('#toggle-menu').on('click', function() {
  if ($('#menu').is(':not(.clickable)')) {
    // do nothing
  }
  else if ($('#test').is(':visible')) {
    animationName = 'animated bounceOutLeft';
    $('.submenu > li').css('-webkit-animation-duration', '1s');
    $('#container-menu').removeClass('clicked');
    $('#menu').removeClass('clickable');
    $('#submenu' + i).children().each(function(index, value) {
      delay = 0.2 * index + 's';
      $(this).css('-webkit-animation-delay', delay);
      $(this).addClass(animationName);
    });
    $('#submenu' + i + ' > li:last').one(animationEnd, function() {
      console.log('end');
      $('#submenu' + i).children().removeClass(animationName);
      $('#submenu' + i).children().css('-webkit-animation-delay', '');
      $('.submenu > li').css('-webkit-animation-duration', '.2s');
      $('.submenu').css('display', 'none');
      $('#menu').addClass('clickable');
      $('#test').css('display', 'none');
    });
  }
  else if ($('#menu').is(':hidden')) {
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
      $('#menu').children().css('-webkit-animation-delay', '');
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

$('.category').on('click', function() {
  if ($('#menu').is('.clickable')) {
    i = $(this).attr('id');
    $('#menu').children().css('-webkit-animation-duration', '.2s');
    $('#menu').children().addClass('animated slideOutLeft').one(animationEnd, function() {
      $('#menu').css('display', 'none');
      $(this).removeClass('animated slideOutLeft');
      $(this).css('-webkit-animation-duration', '1s');
      $(this).off();
      $('#submenu' + i).children().addClass('animated slideInRight').one(animationEnd, function() {
        $(this).removeClass('animated slideInRight');
        $(this).off();
      });
      $('#submenu' + i).css('display', 'initial');
      $('#test').css('display', 'initial');
    });
    $('#submenu' + i + ' > li > .back').on('click', function() {
      $('#submenu' + i).children().addClass('animated slideOutRight').one(animationEnd, function() {
        $('#submenu' + i).css('display', 'none');
        $(this).removeClass('animated slideOutRight');
        $(this).off();
        $('#menu').children().css('-webkit-animation-duration', '.2s');
        $('#menu').children().addClass('animated slideInLeft').one(animationEnd, function() {
          $(this).removeClass('animated slideInLeft');
          $(this).css('-webkit-animation-duration', '1s');
          $(this).off();
        });
        $('#menu').css('display', 'initial');
        $('#test').css('display', 'none');
      })
    })
  }
})
