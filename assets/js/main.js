(function($){
    'use strict'
    $.exists = function(selector){
        return $(selector).length > 0
    } 

    $(window).on('load', function(){
        preloader()
    })

    // ready function
    $(function(){
        dynamicBackground()
        stickyHeader()
    })

    // preloader--------------

    function preloader() {
        $('.fz_preloader_in').fadeOut();
        $('.fz_preloader').delay(150).fadeOut('slow')
    }


    // --------dynamicBackground
    function dynamicBackground() {
        $('[data-src]').each(function(){
            let src = $(this).attr('data-src')
            console.log(src);
            $(this).css({
                'background-image': `url('${src}')`
            })
        })
    }

    // -----------stickyHeader
    function stickyHeader(){
        let $window = $(window)
        let lastScrollTop = 0;
        let $header = $('.fz_sticky_header')
        let headerHeight = $header.outerHeight() + 30

        $window.scroll(function(){
          let windowTop = $window.scrollTop()
         

          if(windowTop >= headerHeight) {
            $header.addClass('fz_gescout_sticky')
            //   console.log('windotop , headerscroll', windowTop , lastScrollTop);
          } else{
            // console.log('windotop , headerscroll else', windowTop , lastScrollTop);
            $header.removeClass('fz_gescout_sticky')
            $header.removeClass('fz_gescout_show')
          }
        if($header.hasClass('fz_gescout_sticky')){
            if(windowTop < lastScrollTop){
                $header.addClass('fz_gescout_show')
            }else{
                // console.log('lassss');
                $header.removeClass('fz_gescout_show')
            }
        }
        lastScrollTop = windowTop
        })
    }


})(jQuery)