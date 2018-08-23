$(document).ready(function () {
    $('#carousel-home').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        cssEase: 'cubic-bezier(.17,.88,.42,1.14)',
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
    
    $('body').addClass('ready');
    if($(window).width()>480)
      $('#container-carousel-home').css('margin-top','calc(35vh - ' + $('.item').outerHeight()/2 + 'px)');
});
