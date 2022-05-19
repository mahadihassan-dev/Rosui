$(function () {
    "use strict";
    // datepicker
    $('#pickyDate').datepicker();
    // slick-slider
    $('.slider_main').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $('.team_row').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $('.brand_row').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $('.blog_post_item').slick({
        infinite: true,
        autoplay: false,
        arrows: false,
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $('.fdbck_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client'
    });
    $('.client').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.fdbck_main',
        dots: true,
        centerPadding: 0,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });
    // variable for all selector
    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var totop = $('.totop');
    // nav-menu scrolling
    $('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
    // for search-bar
    $('.menu_right ul li i.fa-search').on('click', function () {
        $(this).hide();
        $('.menu_right ul li form .input-group').css({
            "opacity": 1
        });
    });
    // for back to top button
    $('.totop').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });
    // for nav-bar fixed to top
    var navOffset = $('nav.navbar').offset().top;
    $('nav.navbar').wrap('<div class="nav-wrapper"></div>');
    $('.nav-wrapper').height($('nav.navbar').outerHeight());
    //scrolling function
    $window.on('scroll', function () {

        var $scrolling = $(this).scrollTop()

        if ($scrolling > $sOfset) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
        // for nav-fix
        var $navmain = $('nav.navbar');
        var $navmainrght = $('.navbar-right');
        if ($scrolling >= navOffset) {
            $navmain.addClass('navbar-fixed-top');
            $navmainrght.css('margin-right', '0');
        } else {
            $navmain.removeClass('navbar-fixed-top');
            $navmainrght.css('margin-right', '-15px');
        }

    });
    //loading function
    $window.on('load', function () {
        $('#pre-loader').delay(1500).fadeOut(500);
    });
    // for video-version
    $(".player").mb_YTPlayer();

}) ;