jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>600){
            $('.fixed-js').addClass('fixed');
        }
        else if ($(this).scrollTop()<150){
            $('.fixed-js').removeClass('fixed');
        }
    });
});

$('.toggle').on('click', function() {
    $('.toggle').toggleClass('active');
    $('.menu__hidden').toggleClass('active');
    $('body').toggleClass('fixed');
});

$(document).ready(function () {
    jQuery(function($){
        $(".tel").mask("9-999-999-99-99");
    });

    $('.command__wrapper').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,

        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });

    var slider =  $('.conditions__carusel').slick({
        centerMode: true,
        dots: true,
        centerPadding: 'auto',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    variableWidth: false,
                    centerPadding: '80px'
                }
            },

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]

    });

    var dot = $(".conditions__dot");
    slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        dot.removeClass("active").eq(nextSlide).addClass("active")
    });

    dot.on("click", function() {
        var i = dot.index(this);
        slider.slick("slickGoTo", i)
    });


    $('.next-shift__slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });

    if (  jQuery(window).width() < 1100 ) {
        $('.mobail-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            dotsClass: 'mobail-slider__dots'
        });
    }

    $('.faq-block__btn--answer').on('click', function() {
        $('.faq-block__inner').removeClass('active');
        $('.faq-block__answer').removeClass('active');
        $('.faq-block__btn--answer').removeClass('hidden');
        $('.faq-block__btn--roll-up').addClass('hidden');

        $(this).closest('.faq-block__inner').addClass('active');
        $(this).siblings('.faq-block__answer').addClass('active');
        $(this).closest('.faq-block__btn--answer').addClass('hidden');
        $(this).siblings('.faq-block__btn--roll-up').removeClass('hidden');
    });

    $('.faq-block__btn--roll-up').on('click', function() {
        $('.faq-block__answer').removeClass('active');
        $('.faq-block__btn--roll-up').addClass('hidden');
        $('.faq-block__btn--answer').removeClass('hidden');
        $(this).closest('.faq-block__inner').removeClass('active');
    });

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.729012, 37.629215],
                zoom: 16,
                controls: ['smallMapDefaultSet']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="map__text">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: ''
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.729012, 37.629215], {
                iconContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: 'img/general/map.png',
                // Размеры метки.
                iconImageSize: [54, 61],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [30, 7],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });


        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);

        myMap.behaviors
            .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    });
});


