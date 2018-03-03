$(document).ready(function () {
    $('.command__wrapper').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6
    });

    $('.conditions__carusel').slick({
        centerMode: true,
        centerPadding: 'auto',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.next-shift__slider').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });
});

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
