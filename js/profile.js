$('.profile-menu__item').click(function () {
    $('.profile-menu__item').removeClass('item-active');
    $(this).toggleClass('item-active');
});




$('.lk-mob-btn').click(function () {
    $('.profile-menu').toggleClass('profile-menu-mobactive');
    $('.shadw').toggleClass('shadw-active');
});
$('.mbclos').click(function () {
    $('.profile-menu').removeClass('profile-menu-mobactive');
    $('.shadw').removeClass('shadw-active');
});



$('table thead tr th').click(function () {
    $(this).toggleClass('sort-active');
});



// модалка, с инфой о заказе 

$('.alert-ico').click(function () {
    $('.alert-ico').removeClass('alert-ico-active');
    $(this).toggleClass('alert-ico-active');
    $('.alert-1').hide();
    $(this).next().show();
    // для мобилы 
    $('.mob-table .alert-1').hide();
    $(this).next().show();
});
$('.alert-1__close').click(function () {
    $('.alert-ico-active').next().hide();
    $('.alert-ico').removeClass('alert-ico-active');
});

// $('.showmob-tabme').click(function () {
//     $('.mob-table').css('display', 'flex');
//     $('.mob-table').hide();
//     $(this).next().show();
// });
var windowsize = $(window).width();
$(window).resize(function () {
    var windowsize = $(window).width();
});
if (windowsize < 480) {
    $('.showmob-tabme').click(function () {
        $('.mob-table').css('display', 'flex');
        $('.mob-table').hide();
        $(this).next().show();
    });
}



$('#styled-checkbox-4').on('click', function () {
    if ($(this).is(':checked')) {
        $('.fr-hd').toggleClass('fr-hd-active');
    } else {
        $('.fr-hd').removeClass('fr-hd-active');
    }
})
