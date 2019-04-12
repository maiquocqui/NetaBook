'use strict';

$(document).ready(function () {
    console.log('COPYRIGHT © 2018, Quoc Qui Mai.');

    // login
    if ($('.login-tool .firstnav').length > 0) {
        $('.login-tool').addClass('logedin');
    }
    // end login

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('shadow');
        } else {
            $('header').removeClass('shadow');
        }
    });
    if ($(window).width() < 1200) {
        $('.btn-sidebar').on('click', function () {
            $('.main-menu').toggleClass('open');
            $('.overlay').fadeToggle(300);
        });
    }
    $('.btn-closemenu, .overlay').on('click', function () {
        $('.main-menu').removeClass('open');
        $('.overlay').fadeOut(300);
    });
    $('.btn-showsub').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.mega-sub').slideToggle(300);
    });
    $('.search-toggle').on('click', function () {
        $('.search').fadeToggle(300);
    });

    // SEARCH
    $('.search input').focus(function () {
        $('.search').addClass('shadow');
    });
    $('.search input').focusout(function () {
        $('.search').removeClass('shadow');
    });

    $('.btn-menumore').on('click', function () {
        $('.h-menu-wrap').fadeToggle(300);
    });

    if ($(window).width() > 1199) {
        $('.sidebar-menu').mouseenter(function () {
            $('main').addClass('hide');
        }).mouseleave(function () {
            $('main').removeClass('hide');
        });

        $('.h-menu .has-sub').mouseenter(function () {
            $('main').addClass('hide');
        }).mouseleave(function () {
            $('main').removeClass('hide');
        });
    }

    $('.homepage .sidebar-menu').mouseenter(function () {
        $('main').removeClass('hide');
    }).mouseleave(function () {
        $('main').removeClass('hide');
    });

    $('.product-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }]
    });
    $('.product-slick2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        fade: true,
        infinite: true
    });
    $('.keyword-slick').slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 10
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 8
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.slide-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slide-nav'
    });
    $('.slide-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slide-main',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.cart').on('click', '.cart-toggle', function () {
        $(this).toggleClass('active');
        $('.cart .cart-panel').fadeToggle(300);
    });
});