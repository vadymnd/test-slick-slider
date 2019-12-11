  $('.wrapper__slider').slick({
      slidesPerRow: 3,
      rows: 2,
      infinite: true,
      // mobileFirst: true,
      dots: true,
      arrows: true,
      prevArrow: $('.wrapper__navigation__btn-back'),
      nextArrow: $('.wrapper__navigation__btn-forward'),
      appendDots: $('.wrapper__navigation__dots'),
      responsive: [{
              breakpoint: 1024,
              settings: {
                  rows: 2,
                  slidesPerRow: 2,
              }
          },
          {
              breakpoint: 680,
              settings: {
                  centerMode: true,
                  rows: 1,
                  slidesPerRow: 1,
                  arrows: false,
                  variableWidth: true
              }
          }
      ]
  });