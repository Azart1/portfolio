$(document).ready(function(){
    $('.sliders__inner').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: false,
        autoplaySpeed: 6000,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/icon_arrow-left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="img/icon_arrow-right.svg"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows:false,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow:1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
      
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consult]').on('click', function() {
      $('.overlay, #consult').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consult, #order, #thanks').fadeOut('slow');
    });

    $('.button_catalog-item').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());   
        $('.overlay, #order').fadeIn('slow');
      })
    })

    function valideForms(form) {      
    $(form).validate({
      rules: {
        name:"required",
        number:"required",
        email:{
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста введите свое имя",
        number: "Пожалуйста введите свой номер телефона",
        email: {
          required: "Пожалуйста введите свой e-mail адрес",
          email: "Ваш e-mail адрес должен быть в формате name@domain.com"
        }
      }
    });
    }
    valideForms('#consult form');
    valideForms('#order form');
    valideForms('#consultation-form');
/*
    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#consult, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
  });*/


  // smooth scroll and pageup
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1400) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });
  });
   
      