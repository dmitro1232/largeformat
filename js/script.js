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
        focusOnSelect: true
    });
});



////
/////    МАСКА ТЕЛЕФОНА
/////
// $(document).ready(function () {
//     $("#phone").mask("+38 (099) 99-99-999");
// });



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
    // $('.wrp-dh').toggleClass('wrp-dh-show');
});





// var acc = document.getElementsByClassName("parameters__title");
// var i;
// var cont = document.getElementsByClassName("parameters__content");

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("parameters__content-active");
//         var parameters__content = this.nextElementSibling;
//         if (parameters__content.style.maxHeight) {
//             // parameters__content.style.maxHeight = null;
//         } else {
//             parameters__content.style.maxHeight = parameters__content.scrollHeight + "px";
//         }
//     });
// }
//END PARAMETERS














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