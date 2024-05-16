(function($){
    'use strict'
    $.exists = function(selector){
        return $(selector).length > 0
    } 


    // ready function
    $(function(){
        dynamicBackground()
    })


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
})(jQuery)