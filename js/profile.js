$('.profile-menu__item').click(function () {
    $('.profile-menu__item').removeClass('item-active');
    $(this).toggleClass('item-active');
});