//WOW.prototype.addBox = function(element){
//    this.boxes.push(element);
//};
$(function() {
//    $('a[href*="#"]:not([href="#"])').click(function() {
//        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//            var target = $(this.hash);
//            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//                $('html, body').animate({
//                    scrollTop: target.offset().top
//                }, 1000);
//                return false;
//            }
//        }
//    });
//    $("#goUp").click(function(e){
//        e.preventDefault();
//        var curPos=$(document).scrollTop();
//        var scrollTime=curPos/1.73;
//        $("body,html").animate({"scrollTop":0},scrollTime);
//    });
//    var wow = new WOW({
//        offset: -20,
//        mobile: false
//    });
//    wow.init();
    if ($('body').height() < $(window).height()){
        $("footer").addClass("navbar-fixed-bottom");
    }
    fixedFooter = function(){
        // if ( $(".navbar-fixed-bottom") ) {
            if ( $('footer').height() + $('.main').height() + $('header').height() > $(window).height() ) {
                $("footer").removeClass("navbar-fixed-bottom");
            }
        // }
        // if ( $('.navbar-fixed-bottom').length == 0 ) {
        //     console.log($(window).height());
            if ($('body').height() <= $(window).height()){
                    $("footer").addClass("navbar-fixed-bottom");
            }
        // }
    };
    touchStartCtrl = function(e) {
        if (e.originalEvent.targetTouches) {
            e.preventDefault();
            xStart = e.originalEvent.targetTouches[0].clientX;
            yStart = e.originalEvent.targetTouches[0].clientY;
        }
    };
    touchEndCtrl = function(e) {
        if (e.originalEvent.changedTouches) {
            xFinish = e.originalEvent.changedTouches[0].clientX;
            yFinish = e.originalEvent.changedTouches[0].clientY;
            if (xStart - xFinish > 60 || yFinish - yStart > 60) { // swipe to previous
                var current = $('.current'),
                    next = $('.next'),
                    last = $('.last'),
                    block = last.next();
                if (next.length > 0) {
                    block.addClass('last');
                    last.removeClass('last').addClass('next');
                    next.removeClass('next').addClass('current');
                    current.removeClass('current');
                }
            } else if (xFinish - xStart > 60 || yStart - yFinish > 60) { // swipe to next
                var current = $('.current'),
                    next = $('.next'),
                    last = $('.last'),
                    block = current.prev();
                if (block.length > 0) {
                    block.addClass('current');
                    current.removeClass('current').addClass('next');
                    next.removeClass('next').addClass('last');
                    last.removeClass('last');
                }
            }
        }
    };

    $(window).resize(function(){
        fixedFooter();
    });
    $('video, audio').mediaelementplayer({
        // Do not forget to put a final slash (/)
        pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
        // this will allow the CDN to use Flash without restrictions 
        // (by default, this is set as `sameDomain`)
        shimScriptAccess: 'always'
                // more configuration
    });
    $('.mejs__container').addClass('clean');
    $('.mejs__container').each(function(){
        var background = $(this).find('video').css('background');
        $(this).on('click', function () {
            $(this).removeClass('clean').find('video').css('background','none');
            // if($(this).find('.mejs__playpause-button').hasClass('mejs__pause')) {
            //     $(this).find('video').css('background','none');
            // } else {
            //     $(this).find('video').css('background',background);
            // }
        });
    });
    $('.mobile-menu-wrapp').find('.navbar-toggle-wrap').on('click', function(){
        $('.mobile-menu-wrapp').toggleClass('collapsed').closest('.navbar').find('.navbar-collapse').toggleClass('collapse');
    });
    $('.mobile-menu-wrapp').find('.close-menu').on('click', function(){
        $('.mobile-menu-wrapp').addClass('collapsed').closest('.navbar').find('.navbar-collapse').addClass('collapse');
    });
    $('.flight-info').on('click', function () {
        var flight = $(this).closest('.list').find('.opened');
        flight.removeClass('opened').find('.flight-book').slideUp();
        $(this).closest('.flight').toggleClass('opened');

        var protect = $(this).closest('.flight').find('.flight-book');
        if (protect.css('display') === 'block') {
            console.log($('.main').height());
            $('.main').css('height', $('.main').height());
            protect.slideUp();
            $(this).closest('.flight').removeClass('opened');
            setTimeout(function(){
                $('.main').attr('style', function(i, style){
                    return style.replace(/height[^;]+;?/g, '');
                });
                fixedFooter();
            },400);
        } else {
            // $('.main').css('height', $('.main').height());
            protect.slideDown();
            // $('.main').attr('style', function(i, style)
            // {
            //     return style.replace(/height[^;]+;?/g, '');
            // });
            setTimeout(function(){
                fixedFooter();
            },400);
        }
    });
    var blocks = $('.blocks');
    var xStart, xFinish, yStart, yFinish;
    
    $('.caret').on('click', function() {
        var current = $('.current'),
            next = $('.next'),
            last = $('.last'),
            block = last.next();
        if (next.length > 0) {
            block.addClass('last');
            last.removeClass('last').addClass('next');
            next.removeClass('next').addClass('current');
            current.removeClass('current');
        }
    });
    blocks.on('touchstart', touchStartCtrl);
    blocks.on('touchend', touchEndCtrl);
});
