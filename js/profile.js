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



$('.table-sort__head tr th').click(function () {
    $(this).toggleClass('sort-active');
});

$('.alert-ico').click(function () {
    $('.alert-ico').removeClass('alert-ico-active');
});

$('.alert-ico').click(function () {
    $(this).toggleClass('alert-ico-active');
    $('.alert-1').show();
});


