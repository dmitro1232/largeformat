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

$('.rwd-table tr th').click(function () {
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


$('.prof-nav__item').click(function () {
    $('.prof-nav__item').removeClass('li-active');
    $(this).toggleClass('li-active');
});

let btnBox = document.querySelector('.prof-nav__list'),
    btn = document.querySelectorAll('.prof-nav__link'),
    tabContent = document.querySelectorAll('.tab-content');

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show-content');
        tabContent[i].classList.add('hide-content');
    }
}
hideTabContent(1);

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide-content')) {
        tabContent[b].classList.remove('hide-content');
        tabContent[b].classList.add('show-content');
    }
}

btnBox.addEventListener('click', function (event) {
    let target = event.target;

    if (target && target.classList.contains('prof-nav__link')) {
        for (let i = 0; i < tabContent.length; i++) {
            if (target == btn[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});



// кловировать блоки
$(".profile-data").clone().appendTo(".mt1");
$(".profile-data-contact").clone().appendTo(".mt2");
$(".pay-address").clone().appendTo(".mt3");
$(".profile-set-notifi").clone().appendTo(".mt4");


$('.prof-nav__item').click(function () {
    $('.prof-nav__item').removeClass('pr-ni-active');
    $('.prof-nav__item').removeClass('it-act');
    $(this).toggleClass('pr-ni-active');
    $(this).toggleClass('it-act');
});