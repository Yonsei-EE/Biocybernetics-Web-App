var delay;
var animationName;
var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd';
var transitionEnd = 'transitionend oTransitionEnd mozTransitionEnd webkitTransitionEnd MSTransitionEnd';
var i;
var page = 'home';

function submenuClose() {
  animationName = 'animated fadeOut';
  // reduce toggle menu, expand main
  $('#container-toggle-menu').removeClass('clicked');
  $('#container-carousel-home').removeClass('clicked');
  $('#main').removeClass('clicked');
  // carousel fix
  // $('#carousel-home').slick('slickGoTo', $('#carousel-home').slick('slickCurrentSlide'));
  // disable clicking during animation
  $('#menu').removeClass('clickable');
  // add animation
  $('#submenu' + i).children().each(function (index, value) {
    delay = 0.6 + 's'; //0.2 * index + 's';
    $(this).css('-webkit-animation-delay', delay);
    $(this).addClass(animationName);
  });
  //$('#container-toggle-menu').one(transitionEnd, function() {
  $('#submenu' + i + ' > li:last').one(animationEnd, function () {
    // reset changes
    $('#container-submenu' + i).css('display', 'none');
    $('#submenu' + i).css('display', 'none');
    $('#menu').addClass('clickable');
    $('#submenu' + i).children().removeClass(animationName);
    $('#submenu' + i).children().css('-webkit-animation-delay', '');
    $(this).off();
  });
}

function mainmenuOpen() {
  animationName = 'animated fadeIn';
    // expand toggle menu and reduce main
    $('#container-toggle-menu').addClass('clicked');
    $('#container-carousel-home').addClass('clicked');
    $('#main').addClass('clicked');
    // carousel fix
    // $('#carousel-home').slick('slickGoTo', $('#carousel-home').slick('slickCurrentSlide'));
    // display menu
    $('.container-menu').css('display', 'block');
    $('#menu').css('display', 'initial');
    // disable clicking during animation
    $('#menu').removeClass('clickable');
    // add animation
    $('#menu > li').css('-webkit-animation-duration', '1s');
    $('#menu').children().each(function (index, value) {
      delay = '.6s';//0.2 * index + 's';
      $(this).css('-webkit-animation-delay', delay);
      $(this).addClass(animationName).one(animationEnd, function () {
        $(this).removeClass(animationName);
        $(this).off();
      });
    });
    //$('#container-toggle-menu').one(transitionEnd, function() {
    $('#menu > li:last').one(animationEnd, function () {
      // reset changes
      $('#menu').addClass('clickable');
      $('#menu > li').css('-webkit-animation-delay', '');
      $('#menu > li').css('-webkit-animation-duration', '');
      $(this).off();
    });
}

function mainmenuClose() {
  animationName = 'animated fadeOut';
  // reduce toggle menu and expand main
  $('#container-toggle-menu').removeClass('clicked');
  $('#container-carousel-home').removeClass('clicked');
  $('#main').removeClass('clicked');
  // carousel fix
  // $('#carousel-home').slick('slickGoTo', $('#carousel-home').slick('slickCurrentSlide'));
  // disable clicking during animation
  $('#menu').removeClass('clickable');
  // add animation
  $('#menu').children().each(function (index, value) {
    delay = 0.6 + 's'; //0.2 * index + 's';
    $(this).css('-webkit-animation-delay', delay);
    $(this).addClass(animationName);
  });
  //$('#container-toggle-menu').one(transitionEnd, function() {
  $('#menu > li:last').one(animationEnd, function () {
    // reset changes
    $('.container-menu').css('display', 'none');
    $('#menu').css('display', 'none');
    $('#menu').addClass('clickable');
    $('#menu').children().removeClass(animationName);
    $('#menu').children().css('-webkit-animation-delay', '');
    $(this).off();
  });
}

function getMargin(selectorName) {
  if($(window).width()<480)
    return '0px';
  else
    return 'calc(34vh - ' + $(selectorName).outerHeight()/2 + 'px)';
}

// main menu control
$('#toggle-menu').on('click', function () {
  if ($('#menu').is(':not(.clickable)')) {
    // do nothing
  }
  // submenu close
  else if ($('#submenu' + i).is(':visible')) {
    submenuClose();
  }
  // main menu open
  else if ($('#menu').is(':hidden')) {
    mainmenuOpen();
    // main menu close
  } else if ($('#menu').is('.clickable')) {
    mainmenuClose();
  }
});

// submenu control
$('.category').on('click', function () {
  i = $(this).attr('id');
  if ($('#submenu' + i).length == 0) {
    // do nothing
  }
  else if ($('#menu').is('.clickable')) {
    // add animation to menu
    $('#menu').children().addClass('animated slideOutLeft').one(animationEnd, function () {
      // reset changes
      $('.container-menu').css('display', 'none');
      $('#menu').css('display', 'none');
      $(this).removeClass('animated slideOutLeft');
      $(this).off();
      // open submenu
      $('#container-submenu' + i).css('display', 'block');
      $('#submenu' + i).css('display', 'initial');
      // add animation to submenu
      $('#submenu' + i).children().addClass('animated slideInRight').one(animationEnd, function () {
        $(this).removeClass('animated slideInRight');
        $(this).off();
      });
    });
    // add animation to 'back'
    $('#submenu' + i + ' > li > .back').on('click', function () {
      $('#submenu' + i).children().addClass('animated slideOutRight').one(animationEnd, function () {
        // reset changes
        $('#container-submenu' + i).css('display', 'none');
        $('#submenu' + i).css('display', 'none');
        $(this).removeClass('animated slideOutRight');
        $(this).off();
        // open menu
        $('.container-menu').css('display','block')
        $('#menu').css('display', 'initial');
        // add animation to menu
        $('#menu').children().addClass('animated slideInLeft').one(animationEnd, function () {
          $(this).removeClass('animated slideInLeft');
          $(this).off();
        });
      })
    })
  }
})

// select category
$('.selectable').on('click', function() {
  if ($('#menu').is(':not(.clickable)')) {
  }
  else {
    $('.selected').removeClass('selected').next().removeClass('blob');
    $(this).addClass('selected').next().addClass('blob');
    if($(this).parent('li').parent('.submenu').attr('id'))
      $('#' + $(this).parent('li').parent('.submenu').attr('id').slice(-1)).addClass('selected').next().addClass('blob');
    if ($('#submenu' + i).is(':visible')) {
      submenuClose();
    }
    else if ($('#menu').is('.clickable')) {
      mainmenuClose();
    }
  }
})

$('#1').on('click', function() {
if($('#container-carousel-home').css('display')=='none')
  window.location.href = "file:///home/jiseung/Git/Biocybernetics-Web-App/www/index.html";

if($(window).width()>480) {
  if(page!='home'){
    if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#professorPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#phdPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#msPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#internPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#alumniPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#publicationsPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#labPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $('#researchPage').css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#container-carousel-home').css({'-webkit-animation-delay':'0s'}).removeClass('animated slideOutRight').addClass('animated slideInRight').one(animationEnd, function() {
          $(this).removeClass('animated slideInRight');
          $(this).off();
        });
      })
    }
    page = 'home';
  }
}
});

$('#professor').on('click', function() {
  if(page!='professor'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#professorPage').css('display','grid');
        $('#professorPage').css('margin-top',getMargin('#professorPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    
    page = 'professor';
  }
});

$('#phd').on('click', function() {
  if(page!='phd'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#phdPage').css('display','grid');
        $('#phdPage').css('margin-top',getMargin('#phdPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    page = 'phd';
  }
});

$('#ms').on('click', function() {
  if(page!='ms'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#msPage').css('display','grid');
        $('#msPage').css('margin-top',getMargin('#msPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    page = 'ms';
  }
});

$('#intern').on('click', function() {
  if(page!='intern'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#internPage').css('display','grid');
        $('#internPage').css('margin-top',getMargin('#internPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    page = 'intern';
  }
});

$('#alumni').on('click', function() {
  if($(window).width()<480)
    $('#container-carousel-home').css('display', 'none');
  if(page!='alumni'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#alumniPage').css('display','grid');
        $('#alumniPage').css('margin-top',getMargin('#alumniPage')).addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    page = 'alumni';
  }
});

$('#journel_conference').on('click', function() {
  if(page!='publications'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#publicationsPage').css('display','grid');
        $('#publicationsPage').addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    page = 'publications';
  }
});

$('#laboratory').on('click', function() {
  if(page!='lab'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    else if(page=='bioRobotics' || page=='cognitiveScience' || page=="machineLearning") {
      $('#researchPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#labPage').css('display','grid');
        $('#labPage').addClass('animated slideInDown2').one(animationEnd, function() {
          $(this).removeClass('animated slideInDown2');
          $(this).off();
        })
      })
    }
    page = 'lab';
  }
});

$('#bioRobotics').on('click', function() {
  if(page!='research'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    page = 'bioRobotics';
  }

  else if(page!='bioRobotics') {
    //change title and content to biorobotics
  }
});

$('#cognitiveScience').on('click', function() {
  if(page!='research'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    page = 'cognitiveScience';
  }

  else if(page!='cognitiveScience') {
    //change title and content to cognitiveScience
  }
});

$('#machineLearning').on('click', function() {
  if(page!='research'){
    if(page=='home') {
      $('#container-carousel-home').css({'-webkit-animation-delay':'1s'}).addClass('animated slideOutRight').one(animationEnd, function() {
        if($(window).width()<480)
          $('#container-carousel-home').css('display', 'none');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      });
    }
    else if(page=='professor') {
      $('#professorPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='phd') {
      $('#phdPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='ms') {
      $('#msPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='intern') {
      $('#internPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='alumni') {
      $('#alumniPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='publications') {
      $('#publicationsPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutDown2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutDown2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    else if(page=='lab') {
      $('#labPage').css('-webkit-animation-delay', '1s').addClass('animated slideOutUp2').one(animationEnd, function() {
        $(this).css({'display':'none','-webkit-animation-delay':'0s'}).removeClass('animated slideOutUp2');
        $(this).off();
        $('#researchPage').css('display','grid');
        $('#researchPage').addClass('animated slideInUp2').one(animationEnd, function() {
          $(this).removeClass('animated slideInUp2');
          $(this).off();
        })
      })
    }
    page = 'machineLearning';
  }

  else if(page!='machineLearning') {
    //change title and content to machineLearning
  }
});