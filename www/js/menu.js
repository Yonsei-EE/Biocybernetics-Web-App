var delay;
var animationName;
var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd';
var i;

$('#toggle-menu').on('click', function() {
  if ($('#menu').is(':not(.clickable)')) {
    // do nothing
  }
  else if ($('#test').is(':visible')) { // submenu close
    animationName = 'animated slideOutLeft';
    $('#container-toggle-menu').removeClass('clicked');
    $('#menu').removeClass('clicked');
    $('#carousel-home').slick('slickNext');
    $('#menu').removeClass('clickable');
    $('#submenu' + i).children().each(function(index, value) {
      // delay = 0.2 * index + 's';
      // $(this).css('-webkit-animation-delay', delay);
      $(this).addClass(animationName);
    });
    $('#submenu' + i + ' > li:last').one(animationEnd, function() {
      console.log('end');
      $('#submenu' + i).children().removeClass(animationName);
      $('.submenu').css('display', 'none');
      $('#menu').addClass('clickable');
      $('#test').css('display', 'none');
    });
  }
  else if ($('#menu').is(':hidden')) { // main menu open
    animationName = 'animated bounceInLeft';
    $('#container-toggle-menu').addClass('clicked');
    $('#main').addClass('clicked');
    $('#carousel-home').slick('slickNext');
    $('#menu > li').css('-webkit-animation-duration', '1s');
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
      $('#menu > li').css('-webkit-animation-delay', '');
      $('#menu > li').css('-webkit-animation-duration', '');
    });

  } else if ($('#menu').is('.clickable')) { // menu close
    animationName = 'animated slideOutLeft';
    $('.submenu').css('display', 'none');
    $('#container-toggle-menu').removeClass('clicked');
    $('#main').removeClass('clicked');
    $('#carousel-home').slick('slickNext');
    $('#menu').removeClass('clickable');
    $('#menu').children().each(function(index, value) {
      // delay = 0.2 * index + 's';
      // $(this).css('-webkit-animation-delay', delay);
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
  i = $(this).attr('id');
  if ($('#submenu' + i).length == 0 ) {
    // do nothing
  }
  else if ($('#menu').is('.clickable')) { // submenu control
    $('#menu').children().addClass('animated slideOutLeft').one(animationEnd, function() {
      $('#menu').css('display', 'none');
      $(this).removeClass('animated slideOutLeft');
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
        $('#menu').children().addClass('animated slideInLeft').one(animationEnd, function() {
          $(this).removeClass('animated slideInLeft');
          $(this).off();
        });
        $('#menu').css('display', 'initial');
        $('#test').css('display', 'none');
      })
    })
  }
})
