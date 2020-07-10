$(document).ready(function () {
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



    $('.gal-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.gal-nav'
    });
    $('.gal-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gal-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});



document.ondragstart = noselect;
// запрет на перетаскивание
document.onselectstart = noselect;
// запрет на выделение элементов страницы
document.oncontextmenu = noselect;
// запрет на выведение контекстного меню
function noselect() {
    return false;
}




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
// $('.o-info__btn').click(function () {
//     $('.o-specif').toggleClass('o-specif-active');
// });


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