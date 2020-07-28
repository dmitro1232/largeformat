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



// модалка, с инфой о заказе 

$('.alert-ico').click(function () {
    $('.alert-ico').removeClass('alert-ico-active');
    $(this).toggleClass('alert-ico-active');
    $('.alert-1').hide();
    $(this).next().show();
});
$('.alert-1__close').click(function(){
    $('.alert-ico-active').next().hide();
    $('.alert-ico').removeClass('alert-ico-active');
});

