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
