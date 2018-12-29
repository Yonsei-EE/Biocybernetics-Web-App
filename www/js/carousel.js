$(document).ready(function () {
    $('#carousel-home').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'cubic-bezier(.17,.88,.42,1.14)',
        speed: 1500,
        centerMode: true,
        draggable: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              dots: false,
              centerMode: false,
              slidesToShow: 1,
              cssEase: 'ease-in-out',
              speed: 500
            }
          }
        ]
    });


var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd MSAnimationEnd';
var animationName = 'animated slideInRight2';

function addDescriptionEvent() {
  $(this).next('.itemDescription').css('display', 'block').addClass('animated fadeInUp').one(animationEnd, function() {
    $(this).removeClass('animated fadeInUp');
  });
  $('.slick-dots').offset({top: $(window).height() * 0.95 - $('.slick-dots').height()});
  $('#carousel-control').offset({top: $('.slick-dots').offset().top});
}

function removeDescriptionEvent() {
  $(this).next('.itemDescription').css('display', 'none').removeClass('animated fadeInUp');
  $('.slick-dots').offset({top: $(window).height() * 0.95 - $('.slick-dots').height()});
  $('#carousel-control').offset({top: $('.slick-dots').offset().top});
}

$('#controlLeftArrow').on('click', function() {$('#carousel-home').slick('slickPrev');});
$('#controlRightArrow').on('click', function() {$('#carousel-home').slick('slickNext');});

if($(window).width()>480) {
  $('.labPoster').hover(addDescriptionEvent, removeDescriptionEvent);
  $('.itemDescription').css({'display':'none','height': '35px'});
  $('#container-carousel-home').css('margin-top','calc(34vh - ' + $('.labPoster').outerHeight(true)/2 + 'px)');
  $('#carousel-control').css({'grid-template-columns' : $('.slick-dots').height() + 'px ' + $('.slick-dots').height() + 'px','height' : $('.slick-dots').height()});
  $('.slick-dots').offset({top: $(window).height() * 0.95 - $('.slick-dots').height()});
  $('#carousel-control').offset({top: $('.slick-dots').offset().top});

  // carousel step in
  for(i=2;i>-3;i--) {
    delay = 0.4*(-1*i+2) - 0.5 + 's';
    $("[data-slick-index='" + i + "']").css('-webkit-animation-delay', delay);
    $("[data-slick-index='" + i + "']").addClass(animationName);
  }
  $("[data-slick-index='-2']").one(animationEnd, function() {
    $('.item').removeClass(animationName)
  });
}
else {
  $('.labPoster').unbind('mouseenter mouseleave');
  $('.itemDescription').css({'display':'block','height': 'calc(84vh - ' + $('.labPoster').height() + 'px - 2em - 23px)'});
  $('#container-carousel-home').css('margin-top','0px');
  $('.slick-dots').offset({top: $(window).height() * 0.95 - $('.slick-dots').height()});
  $('.itemDescription').css({'display':'block','height': 'calc(84vh - ' + $('.labPoster').height() + 'px - 2em - 23px)'});
}

$(window).on('resize', _.debounce(function(){
  if($(window).width()>480) {
    $('.labPoster').hover(addDescriptionEvent, removeDescriptionEvent);
    $('.itemDescription').css({'display':'none','height': '35px'});
    $('#container-carousel-home').css('margin-top','calc(34vh - ' + $('.labPoster').outerHeight(true)/2 + 'px)');
    $('#carousel-control').css('grid-template-columns', $('.slick-dots').height() + 'px ' + $('.slick-dots').height() + 'px');
    $('.slick-dots').offset({top: $(window).height() * 0.95 - $('.slick-dots').height()});
    $('#carousel-control').offset({top: $('.slick-dots').offset().top});
    $('#container-carousel-home').css('margin-left','auto');
  }
  else {
    $('.labPoster').unbind('mouseenter mouseleave');
    $('.itemDescription').css({'display':'block','height': 'calc(84vh - ' + $('.labPoster').height() + 'px - 2em - 23px)'});
    $('#container-carousel-home').css('margin-top','0px');
    $('#carousel-control').css({'grid-template-columns' : '23px 23px', 'top' : '0px'});
    $('.slick-dots').offset({top: $(window).height() * 0.95 - $('.slick-dots').height()});
    $('.controlArrow').css('width','23px');
    $('#container-carousel-home').css('margin-left','calc(50vw - ' + $('.labPoster').width()/2 + 'px)');
  }

  if($('#container-toggle').width()!=$('.container-menu-ultimate').width()) {
    $('#container-toggle').css('width', $('.container-menu-ultimate').width() + 'px');
  }
}, 100));
});

