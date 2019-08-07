import $ from 'jquery';

$(document).ready(function () {
  $('.product-list.hit').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.slik-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false
      },
      {
        breakpoint: 2028,
        settings: "unslick"
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});


$(document).ready(function () {
  $('.sell-out-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
});

// $(document).ready(function () {
//   $('.producer-list').slick({
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false,
//   });
// });

//   window.addEventListener("resize", function() {
//     if (window.width() < 1024) {
//       $('.slik-slider').slick();
//     }
//     else {    
//         $('.slik-slider').slick('unslick');
//     }
//   });

window.addEventListener("resize", function () {
  if ($(window).width() > 1023) {
    $('.slik-slider div > .product-item').unwrap();
  }
});

$(document).ready(function () {
  if ($(window).width() > 1023) {
    $('.slik-slider div > .product-item').unwrap();
  }
});


