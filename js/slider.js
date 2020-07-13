$(document).ready(function(){
  
    $('.img').click(function(){
    var image = $(this).attr('data-img');
    $('#image').attr('src',image);
  });
    
  $(".slider-gallery-block-item").click(function() {
    $(".slider-gallery-block-item").removeClass('active-opacity');
    $(this).addClass('active-opacity');
  });  
    
  });
  

    var slideCount = $('.slider-gallery-block-item').length;
    var slideWidth = $('.slider-gallery-block-item').width();
	var slideHeight = $('.slider-gallery-block-item').height();
	var sliderUlWidth = slideCount * slideWidth;

function moveLeft() {
    $('.slider-gallery-block').animate({
        left: + slideWidth
    }, 200, function () {
        $('.slider-gallery-block-item:last-child').prependTo('.slider-gallery-block');
        $('.slider-gallery-block').css('left', '');
    });
};

function moveRight() {
    $('.slider-gallery-block').animate({
        left: - slideWidth
    }, 200, function () {
        $('.slider-gallery-block-item:first-child').appendTo('.slider-gallery-block');
        $('.slider-gallery-block').css('left', '');
        
    });
};

$('.nav-arrow-up').click(function () {
    moveLeft();
    var image = $('.img').attr('data-img');
    $('#image').attr('src',image); 
    // $(".slider-gallery-block-item").removeClass('active-opacity');
    // $('.slider-gallery-block-item').addClass('active-opacity');
    
});

$('.nav-arrow-down').click(function () {
    moveRight();
    var image = $('.img').attr('data-img');
    $('#image').attr('src',image);
});
/*-------------------------------------
Img POPUP
 -------------------------------------*/
if (document.querySelector('.img_popup')) {
    $(document).ready(function() {
        var imgPopup = $('.img_popup');
        var imgPopupFull = $('.img_popup_full');
        var imgCont  = $('.nav-zoom img');
        var popupImage = $('.img_popup img');
        var closeBtn = $('.close_btn');
        imgCont.on('click', function() {
        var img_src = $('.slider-gallery-img').children('img').attr('src');
        imgPopupFull.children('img').attr('src', img_src);
        imgPopup.addClass('opened');
        });
        $(imgPopup, closeBtn).on('click', function() {
        imgPopup.removeClass('opened');
        imgPopupFull.children('img').attr('src', '');
        });
        popupImage.on('click', function(e) {
        e.stopPropagation();
        });
    });
}
// $(".slider-gallery-img").mouseover(function(){
//     $(".slider-nav").addClass('opacity');
//   });
// $(".slider-gallery-img").mouseleave(function(){
//     $(".slider-nav").removeClass('opacity');
//   });
