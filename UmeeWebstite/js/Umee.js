$(document).on('ready', function() {
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: "unslick"
      }
    ]
  });
});