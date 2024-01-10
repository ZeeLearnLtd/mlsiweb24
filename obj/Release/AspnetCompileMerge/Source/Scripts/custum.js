$(function () {
    ///////////////// PreLoader
    $(window).load(function () {
        $('#preloader').delay(350).fadeOut('slow');
        //$('body').delay(350).css({ 'overflow': 'visible' });
    });

    $('[data-toggle="popover"]').popover();

    //////////////////////// Top Menu

    if (window.matchMedia('(min-width: 1280px)').matches) {
        var ico = $('<i class="fa fa-angle-down"></i>');
        var icoinn = $('<i class="fa fa-angle-right"></i>');
        $('#TopNavBar .FirstLevel > li:has(ul) > a').append(ico);
        $('#TopNavBar li ul li:has(ul) > a').append(icoinn);
    } else {
         var ico = $('<i class="fa fa-plus"></i>');
         var icoinn = $('<i class="fa fa-plus"></i>');
         $('#TopNavBar .FirstLevel > li:has(ul)').prepend(ico);
         $('#TopNavBar li ul li:has(ul)').prepend(icoinn);
    }

   

    $('#TopNavBar li:has(ul)').addClass("HasUl");

    $('#TopNavBar li:has(ul) > i').on('click', function () {
        var element = $(this).parent('li');
        element.toggleClass("open");
        element.children('ul').animate({ height: "toggle", opacity: "toggle" }, "fast");
        element.children('ul').find('ul').slideUp();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').find('ul').slideUp();
        element.siblings('li').removeClass("open");
        element.siblings('li').find('li').removeClass("open");
    });

    $('a#ToggleMenu').on('click', function (e) {
        $('html').toggleClass('open-menu');
        $('#ToggleMenu').toggleClass("change");
        return false;
    });
    $('div#overlay, #TopNavBar a[href]').on('click', function () {
        $('html').removeClass('open-menu');
        $('#ToggleMenu').toggleClass("change");
    });

    //$(window).bind("load resize", function (e) {
    //    if (window.matchMedia('(max-width: 991px)').matches) {
    //        $(".RightSide > ul").appendTo("#TopNavBar");
    //        $(".top-left > ul, .top-right > ul:not(.UserPhoto)").appendTo("#TopNavBar");
    //    } else {

    //    }
    //});

    //////////////////////// Header Fixed

    var headerHeight = $('header').height();
    $(window).on('scroll', {
        previousTop: 0
    },
    function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            if (currentTop > 0 && $('header').hasClass('is-fixed')) {
                $('header').addClass('is-visible');
            } else {
                $('header').removeClass('is-visible is-fixed');
            }
        } else if (currentTop > this.previousTop) {
            $('header').removeClass('is-visible');
            if (currentTop > headerHeight && !$('header').hasClass('is-fixed')) $('header').addClass('is-fixed');
        }
        this.previousTop = currentTop;
    });

    //var stickyNavTop = $('#header').offset().top;
    //$(window).scroll(function () {
    //    if ($(window).scrollTop() > stickyNavTop) {
    //        $('#header').addClass('fixed');
    //    }
    //    else {
    //        $('#header').removeClass('fixed');
    //    }
    //});

    //////////////////////// Jump to ID

    //$('a[href^="#"]:not([data-toggle])').click(function () {
    //    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 80 });
    //    return false;
    //    e.preventDefault();
    //});
    $('a.scrollto').click(function () {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 80 });
        return false;
        e.preventDefault();
    });

    //////////////////////// owl Carousel
   
    $('#Banners').owlCarousel({
        loop: true,
        margin: 0,
        navSpeed: 500,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: false,
        responsive: {
            0: {
                nav: false,
                dots: true
            },
            480: {},
            640: {},
            768: {},
            1000: {
                nav: true,
                dots: false,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
            }
        }
    });

   
    $('#LifeatMLSI').owlCarousel({
        loop: true,
        margin: 30,
        navSpeed: 500,
        items: 2,
        //dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: false,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            480: { items: 2 },
            640: { items: 2 },
            768: { items: 2 },
            1000: {
                items: 3,
                dots: false,
                nav: true,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
            }
        }
    });

    $('.ProgrammesCarousel').owlCarousel({
        loop: false,
        margin: 20,
        navSpeed: 500,
        items: 3,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: false,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            480: { items: 2 },
            640: { items: 2 },
            768: { items: 3 },
            1000: {
                items: 3,
                dots: false,
                nav: false,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
            }
        }
    });
    $('#Testmonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        navSpeed: 500,
        items: 3,
        dots: true,
        autoplay: false,
        center: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: false,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            480: { items: 2 },
            640: { items: 2 },
            768: { items: 3 },
            1000: {
                items: 3,
                dots: false,
                nav: true,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
            }
        }
    });
    $('#NewsCarousel').owlCarousel({
        loop: false,
        margin: 20,
        navSpeed: 500,
        items: 3,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: false,
        responsive: {
            0: {
                nav: false,
                dots: true,
                items: 1
            },
            480: { items: 2 },
            640: { items: 2 },
            768: { items: 3 },
            1000: {
                items: 3,
                dots: false,
                nav: false,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
            }
        }
    });

    $('.AnnouncementPopup').owlCarousel({
        loop: true,
        margin: 0,
        navSpeed: 1000,
        items: 1,
        smartSpeed: 1400,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        lazyLoad: true,
        responsiveClass: false,
        dots: true,
        responsive: {
            0: {
                //nav: false
            },
            480: {},
            640: {},
            768: {},
            1000: {
                dots: true,
                nav: false,
                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
            }
        }
    });

    ////////////////////////////////////////////// Animated carousel

    var owl = $('#Banners');
    // add animate.css class(es) to the elements to be animated
    function setAnimation1(_elem, _InOut) {
        // Store all animationend event name in a string.
        // cf animate.css documentation
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each(function () {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

            $elem.addClass($animationType).one(animationEndEvent, function () {
                $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
            });
        });
    }

    // Fired before current slide change
    owl.on('change.owl.carousel', function (event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-out]");
        setAnimation1($elemsToanim, 'out');
    });
    // Fired after current slide has been changed
    owl.on('changed.owl.carousel', function (event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var $elemsToanim = $currentItem.find("[data-animation-in]");
        setAnimation1($elemsToanim, 'in');
    });

    ////////////////////////////////

    $(".counter").each(function () {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4e3, easing: "swing", step: function (n) {
                $(this).text(Math.ceil(n))
            }
        })
    });


    /////////////////////////
    $(window).bind("load resize", function (e) {
        OpenAnnouncement();
    });
    function OpenAnnouncement() {
        if (window.matchMedia('(min-width: 991px)').matches) {
            var myelement = $(this).attr("data-target");
            $(".OpenAnnouncement").on('click', function () {
                var myelement = $(this).attr("data-target")
                //$(myelement).animate({ height: "toggle", opacity: "toggle" }, 300);
                //$(this).toggleClass("Selected");
                $(myelement).toggleClass("Hidergtpopup");
                $(this).toggleClass("CloseAnnouncement");
            });
            $('#TwitterPopup .popupclose').click(function () {
                $('#TwitterPopup').toggleClass("Hidergtpopup");
                $('.OpenAnnouncement[title=twitter]').toggleClass("CloseAnnouncement");
            });
            $('#FacebookPopup').click(function () {
                $('#FacebookPopup').toggleClass("Hidergtpopup");
                $('.OpenAnnouncement[title=facebook]').toggleClass("CloseAnnouncement");
            });
            $('#AnnouncementPopup').click(function () {
                $('#AnnouncementPopup').addClass("Hidergtpopup");
                $('.OpenAnnouncement[title=Announcement]').addClass("CloseAnnouncement");
            });
            //$('.popupclose').click(function () {
            //    $('.rgtpopup').addClass("Hidergtpopup");
            //    $('.OpenAnnouncement').addClass("CloseAnnouncement");
            //});
            //$('.OpenAnnouncement').click(function () {
            //    $('.rgtpopup').removeClass("Hidergtpopup");
            //    $('.OpenAnnouncement').removeClass("CloseAnnouncement");
            //});
        } else {
            $('.popupclose').click(function () {
                $('.rgtpopup').removeClass("Hidergtpopup");
                $('.OpenAnnouncement').removeClass("CloseAnnouncement");
            });

            $('.OpenAnnouncement').click(function () {
                $('.rgtpopup').addClass("Hidergtpopup");
                $('.OpenAnnouncement').addClass("CloseAnnouncement");
            });
        }
    }

    /////////////////// back to Top
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });


    ////////////////// Cookies
    //$('body').addClass('CookiesMsgshow');
    ////var CookiesMsg = $('#CookiesMsg').height();
    ////$('.CookiesMsgshow').css("padding-bottom", CookiesMsg);
    //$(".CookiesMsgshow button").on('click', function (e) {
    //    $("body").removeClass("CookiesMsgshow");
    //    //$("body").css("padding-bottom", "0");
    //});

    //////////////////  Input effect
    $('.InputgroupBdr input:not([type=button]), .InputgroupBdr select, .InputgroupBdr textarea, .Inputgroup input:not([type=button]), .Inputgroup select, .Inputgroup textarea').on('focus change', function () {
        $(this).parents('.InputgroupBdr, .Inputgroup').addClass('field-focus');
    });
    $('.InputgroupBdr input:not([type=button]), .InputgroupBdr select, .InputgroupBdr textarea, .Inputgroup input:not([type=button]), .Inputgroup select, .Inputgroup textarea').blur(function () {
        $(this).parents('.InputgroupBdr, .Inputgroup').removeClass('field-focus')
        if ((jQuery.trim($(this).val()).length > 0)) { // && $(this)[0].checkValidity()
            $(this).parents('.InputgroupBdr, .Inputgroup').addClass('field-fill-text');
        } else {
            $(this).parents('.InputgroupBdr, .Inputgroup').removeClass('field-fill-text');
        }
        //if ($(this)[0].checkValidity()) { // &&
        //    $(this).parents('.inputeffect').addClass('is-valid');
        //} else {
        //    $(this).parents('.inputeffect').removeClass('is-valid');
        //}
    });

});


/////////////////////////////
function YoutubeOpen() {
    window.open("https://www.youtube.com/@mountliteraschoolinternati503", "_blank");
}
/////////////////////////////