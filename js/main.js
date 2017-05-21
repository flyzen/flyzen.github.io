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
    $(window).resize(function(){
        if ( $(".navbar-fixed-bottom") ) {
            if ($('.navbar-fixed-bottom').height() + $('.main').height() > $(window).height()) {
                $(".navbar-fixed-bottom").removeClass("navbar-fixed-bottom");
            }
        }
        if ( !$('.navbar-fixed-bottom') ) {
            if ($('body').height() <= $(window).height()){
                    $("footer").addClass("navbar-fixed-bottom");
            }
        }
    });
    $('.mobile-menu-wrapp').find('.navbar-toggle-wrap').on('click', function(){
        $('.mobile-menu-wrapp').toggleClass('collapsed').closest('.navbar').find('.navbar-collapse').toggleClass('collapse');
    });
    $('.mobile-menu-wrapp').find('.close-menu').on('click', function(){
        $('.mobile-menu-wrapp').addClass('collapsed').closest('.navbar').find('.navbar-collapse').addClass('collapse');
    })
});
