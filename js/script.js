$(document).ready(function () {
    


    //login registration forms

    $('.re-lo-btn').click(function () {
        $('.re-lo-btn').removeClass('re-lo-btn-active');
        $(this).toggleClass('re-lo-btn-active');
    });
    $('.pa-res').click(function () {
        $('.login').hide();
        $('.pass-reset').show();
    });
    $('.cancel').click(function () {
        $('.login').show();
        $('.pass-reset').hide();
    });
    
    $('.registration').click(function () {
        $('.lsflx').hide();
        $('.from-reg').show();
    });
    $('.auth').click(function () {
        $('.lsflx').show();
        $('.from-reg').hide();
    });

    $('#next-reg-1').on('click', function () {

        $('.reg-step-line').css('background-size', '66.6% 100%');
        $('.reg-step__item:nth-child(2)').css('color', '#fff');
        $('.reg-step-1').hide();

        var value = $('#select-reg').val();
        if (
            value == 2
        ){
            $('.reg-step-2-roz').show();

        } else {
            $('.reg-step-2-opt').show();
        }
    });

    $('#next-reg-2-opt').on('click', function () {
        $('.reg-step-line').css('background-size', '100% 100%');
        $('.reg-step__item:nth-child(3)').css('color', '#fff');
        $('.reg-step-2-opt').hide();
        $('.reg-step-3-opt').show();
    });

    $('#next-reg-2-roz').on('click', function () {
        $('.reg-step-line').css('background-size', '100% 100%');
        $('.reg-step__item:nth-child(3)').css('color', '#fff');
        $('.reg-step-2-roz').hide();
        $('.reg-step-3-roz').show();
    });

    //END login registration forms




    $('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: false,
            }
        }]
    });



    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-itm',
        prevArrow: $('.prev-prod'),
        nextArrow: $('.next-prod')
    });
    $('.slider-itm').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-big',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 490,
            settings: {
                slidesToShow: 4,
            }
        }]
    });






    // step sclicks
    $('.step-content').hide();
    $('.step-content1').show();

    $('.step1_btnMob').on('click', function () {
        $('.step-content').hide();
        $('.step-content2').fadeIn();
        $('.step-nav').css('background-size', '50%');
        $('.step_num1').text('✓');
        $('.step1').addClass('step-mobile');
        $('.step2').removeClass('step-mobile');
    });

    $('.step2_btnMob').on('click', function () {
        $('.step-content').hide();
        $('.step-content3').fadeIn();
        $('.step-nav').css('background-size', '75%');
        $('.step_num2').text('✓');
        $('.step2').addClass('step-mobile');
        $('.step3').removeClass('step-mobile');
    });

    $('.step3_btnMob').on('click', function () {
        if (

            $('.step_surname').val().trim().length >= 2 &&
            $('.step_name').val().trim().length >= 2 &&
            $('.step_adress').val().trim().length >= 3 &&
            $('.step_phone').val().trim().length >= 8 &&
            $('.step_email').val().trim().length >= 5) {
            $('.step-content').hide();
            $('.step-content4').fadeIn();
            $('.step-nav').css('background-size', '100%');
            $('.step_num3').text('✓');
            $('.step3').addClass('step-mobile');
            $('.step4').removeClass('step-mobile');
            // borders
            $('.step_surname').parent().css('border', '1px solid green');
            $('.step_name').parent().css('border', '1px solid green');
            $('.step_adress').parent().css('border', '1px solid green');
            $('.step_phone').parent().css('border', '1px solid green');
            $('.step_email').parent().css('border', '1px solid green');

        } else {

            if ($('.step_surname').val().trim().length < 2) {
                $('.step_surname').parent().css('border', '1px solid red');
            } else {
                $('.step_surname').parent().css('border', '1px solid green');
            }
            if ($('.step_name').val().trim().length < 2) {
                $('.step_name').parent().css('border', '1px solid red');
            } else {
                $('.step_name').parent().css('border', '1px solid green');
            }
            if ($('.step_adress').val().trim().length < 3) {
                $('.step_adress').parent().css('border', '1px solid red');
            } else {
                $('.step_adress').parent().css('border', '1px solid green');
            }
            if ($('.step_phone').val().trim().length < 8) {
                $('.step_phone').parent().css('border', '1px solid red');
            } else {
                $('.step_phone').parent().css('border', '1px solid green');
            }
            if ($('.step_email').val().trim().length < 5) {
                $('.step_email').parent().css('border', '1px solid red');
            } else {
                $('.step_email').parent().css('border', '1px solid green');
            }
        }
    });

    $('.step4_btnMob').on('click', function () {
        $('.step_num4').text('✓');
        $('.step__final').text('Спасибо за заявку');
        $('.step4_btnMob').fadeOut();
    });



    //функции кнопок "далее"
    $('.step1_btn').on('click', function () {
        $('.step-content').hide();
        $('.step-content2').fadeIn();
        $('.step-nav').css('background-size', '50%');
        $('.step_num1').text('✓');
        $('.step2').addClass('step-mobile');
    });
    $('.step2_btn').on('click', function () {
        $('.step-content').hide();
        $('.step-content3').fadeIn();
        $('.step-nav').css('background-size', '75%');
        $('.step_num2').text('✓');
        $('.step3').addClass('step-mobile');
    });

    $('.step3_btn').on('click', function () {
        if (
            $('.step_surname').val().trim().length >= 2 &&
            $('.step_name').val().trim().length >= 2 &&
            $('.step_adress').val().trim().length >= 3 &&
            $('.step_phone').val().trim().length >= 8 &&
            $('.step_email').val().trim().length >= 5) {
            $('.step-content').hide();
            $('.step-content4').fadeIn();
            $('.step-nav').css('background-size', '100%');

            $('.step_num3').text('✓');
            $('.step4').addClass('step-mobile');
            // borders
            $('.step_surname').parent().css('border', '1px solid green');
            $('.step_name').parent().css('border', '1px solid green');
            $('.step_adress').parent().css('border', '1px solid green');
            $('.step_phone').parent().css('border', '1px solid green');
            $('.step_email').parent().css('border', '1px solid green');
        } else {

            if ($('.step_surname').val().trim().length < 2) {
                $('.step_surname').parent().css('border', '1px solid red');
            } else {
                $('.step_surname').parent().css('border', '1px solid green');
            }
            if ($('.step_name').val().trim().length < 2) {
                $('.step_name').parent().css('border', '1px solid red');
            } else {
                $('.step_name').parent().css('border', '1px solid green');
            }
            if ($('.step_adress').val().trim().length < 3) {
                $('.step_adress').parent().css('border', '1px solid red');
            } else {
                $('.step_adress').parent().css('border', '1px solid green');
            }
            if ($('.step_phone').val().trim().length < 8) {
                $('.step_phone').parent().css('border', '1px solid red');
            } else {
                $('.step_phone').parent().css('border', '1px solid green');
            }
            if ($('.step_email').val().trim().length < 5) {
                $('.step_email').parent().css('border', '1px solid red');
            } else {
                $('.step_email').parent().css('border', '1px solid green');
            }
        }


    });
    $('.step4_btn').on('click', function () {
        // $('.step').css('border-right', '0'); //удаление полей step
        $('.step4_btn').fadeOut(); // исчезновение кнопки после клика
        $('.step_num4').text('✓');
        $('.step__final').text('Спасибо за заявку');
    });

    //функции кнопок "шаг1-2-3-4"



});



// document.ondragstart = noselect;
// // запрет на перетаскивание
// document.onselectstart = noselect;
// // запрет на выделение элементов страницы
// document.oncontextmenu = noselect;
// // запрет на выведение контекстного меню
// function noselect() {
//     return false;
// }




// Catalog
$('.btn-catalog').click(function () {
    $('.shadow').toggleClass('shadow-active');
    $('.catalog').toggleClass('catalog-active');
});
$('.shadow, .close').click(function () {
    $('.shadow').removeClass('shadow-active');
    $('.catalog').removeClass('catalog-active');
});
// Catalog END


// Request
$('.request-a').click(function () {
    $('.shadow-req').toggleClass('shadow-active');
    $('.request').toggleClass('request-active');
});
$('.shadow-req, .close-req').click(function () {
    $('.shadow-req').removeClass('shadow-active');
    $('.request').removeClass('request-active');
});
// Request END


// Mobile menu
$('.mob-menu-btn').click(function () {
    $('body').toggleClass('body-fixed');
    $('.mnu-mob-shad').toggleClass('mnu-mob-shad-active');
    $('.menu-mobile').toggleClass('menu-mobile-active');
});
$('.mnu-mob-shad, .mob-close').click(function () {
    $('body').removeClass('body-fixed');
    $('.mnu-mob-shad').removeClass('mnu-mob-shad-active');
    $('.menu-mobile').removeClass('menu-mobile-active');
});
// Mobile menu




$('.dropdown-text__read').click(function () {
    $(this).toggleClass('dropdown-text__read-active');
});

$('.dropdown-text__read').click(function () {
    $('.dropdown-text__droptxt').toggleClass('dropdown-text__droptxt-active');
});


// PARAMETERS
$('.parameters__title').click(function () {
    $(this).toggleClass('parameters__title-active');
});
$('.parameters__item').click(function () {
    $(this).toggleClass('parameters__content-active');
});
$('.parameters__content').click(function () {
    event.stopPropagation();
});
//END PARAMETERS

$(".radio-btn").click(function (e) {
    e.preventDefault();
    $(".radio-btn").removeClass('radio-btn-active');
    $(this).addClass('radio-btn-active');
});

$(".time-btn").click(function (e) {
    e.preventDefault();
    $(".time-btn").removeClass('time-btn-active');
    $(this).addClass('time-btn-active');
});




$('.bot-sec ').click(function () {
    $(this).toggleClass('bot-sec-active');
});
$('.o-specif').click(function () {
    event.stopPropagation();
});
$('.o-info__sum').click(function () {
    event.stopPropagation();
});











$('#styled-checkbox-4').on('click', function () {
    if ($(this).is(':checked')) {
        $('.no-disp').toggleClass('no-disp-active');
    } else {
        $('.no-disp').removeClass('no-disp-active');
    }
})









// youtube script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '400',
        width: '598',
        videoId: 'AkyQgpqRyBY', // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

var p = document.getElementById("player");
$(p).hide();

var t = document.getElementById("thumbnail");
t.src = "./img/video.png";

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $('.start-video').fadeIn('normal');
    }
}

$(document).on('click', '.start-video', function () {
    $(this).hide();
    $("#player").show();
    $("#thumbnail_container").hide();
    player.playVideo();
});

// youtube script END