$(document).ready(function () {
    $('#carousel-home').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false,
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

$('#container-carousel-home').css('margin-top','calc(34vh - ' + $('.labPoster').outerHeight(true)/2 + 'px)');
$('#background').css('margin','calc(50vh - ' + $('#background').height()/2 + 'px) auto');

if($(window).width()<480)
  $('#container-carousel-home').css('margin-left','calc(50vw - ' + $('.labPoster').width()/2 + 'px)');
else {
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

$(window).on('resize', _.debounce(function(){
  $('#container-carousel-home').css('margin-top','calc(34vh - ' + $('.labPoster').outerHeight(true)/2 + 'px)');
  $('#background').css('margin','calc(50vh - ' + $('#background').height()/2 + 'px) auto');
  if($(window).width()<480)
    $('#container-carousel-home').css('margin-left','calc(50vw - ' + $('.labPoster').width()/2 + 'px)');
  else
    $('#container-carousel-home').css('margin-left','auto');
}, 100));
});
    