$(document).ready(function () {
    $('#carousel-home').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        cssEase: 'cubic-bezier(.17,.88,.42,1.14)',
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        centerMode: true,
        centerPadding: '20vw',
        slide: 'div',
        responsive: [
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              centerPadding: '0vw',
              cssEase: 'ease-in-out',
              speed: 500
            }
          }
        ]
    });
    $('body').addClass('ready');
});
