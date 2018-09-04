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
    
    animationName = 'animated slideInRight2';
    for(i=2;i>-3;i--) {
      delay = 0.4*(-1*i+2) + 0.5 + 's';
      $("[data-slick-index='" + i + "']").css('-webkit-animation-delay', delay);
      $("[data-slick-index='" + i + "']").addClass(animationName);
    }

    if($(window).width()>480)
      $('#container-carousel-home').css('margin-top','calc(35vh - ' + $('.item').outerHeight()/2 + 'px)');
});