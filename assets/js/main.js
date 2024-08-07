(function ($) {
  'use strict'
  $.exists = function (selector) {
    return $(selector).length > 0
  }

  $(window).on('load', function () {
    preloader()
  })

  // ready function
  $(function () {
    dynamicBackground()
    stickyHeader()
    scrollUp()
    modalVideo()
    slickInt()
    mainNav()
    tabs()
    isotope()
    addActive()
    if ($.exists('.wow')) {
      new WOW().init();
    }
  })

  // preloader--------------

  function preloader() {
    $('.fz_preloader_in').fadeOut();
    $('.fz_preloader').delay(150).fadeOut('slow')
  }


  // --------dynamicBackground
  function dynamicBackground() {
    $('[data-src]').each(function () {
      let src = $(this).attr('data-src')
      // console.log(src);
      $(this).css({
        'background-image': `url('${src}')`
      })
    })
  }

  // -----------stickyHeader
  function stickyHeader() {
    let $window = $(window)
    let lastScrollTop = 0;
    let $header = $('.fz_sticky_header')
    let headerHeight = $header.outerHeight() + 30

    $window.scroll(function () {
      let windowTop = $window.scrollTop()


      if (windowTop >= headerHeight) {
        $header.addClass('fz_gescout_sticky')
        //   console.log('windotop , headerscroll', windowTop , lastScrollTop);
      } else {
        // console.log('windotop , headerscroll else', windowTop , lastScrollTop);
        $header.removeClass('fz_gescout_sticky')
        $header.removeClass('fz_gescout_show')
      }
      if ($header.hasClass('fz_gescout_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('fz_gescout_show')
        } else {
          // console.log('lassss');
          $header.removeClass('fz_gescout_show')
        }
      }
      lastScrollTop = windowTop
    })
  }


  // ------------scrollUp
  function scrollUp() {
    // console.log('hello');
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        // console.log($(this).scrollTop() );
        $('.fz_up_btn').fadeIn()
      } else {
        $('.fz_up_btn').fadeOut()
      }
    })
    $('.fz_up_btn').click(function () {
      $('html, body').animate({ scrollTop: 0 })
    })
  }


  // -----------------mobileNav
  function mainNav(){
    $('.fz_nav').append("<span class='fz_menu_toggle'><span></span></span>")
    $('.fz_menu_toggle').on('click', function(){
      $(this)
      .toggleClass('fz_toggle_active')
      .siblings('.fz_nav_list')
      .toggleClass('fz_active')
    })
  }


  // -----------------videomodal
  function modalVideo() {
    if ($.exists('.fz_video_open')) {

      $('body').append(`
            <div class="fz_video_popup">
              <div class="fz_video_popup-overlay"></div>
              <div class="fz_video_popup-content">
                <div class="fz_video_popup-layer"></div>
                <div class="fz_video_popup_container">
                  <div class="fz_video_popup-align">
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="about:blank"></iframe>
                    </div>
                  </div>
                  <div class="fz_video_popup_close"></div>
                </div>
              </div>
            </div>
          `);
      $(document).on('click', '.fz_video_open', function (e) {
        e.preventDefault();
        var video = $(this).attr('href');

        $('.fz_video_popup_container iframe').attr('src', `${video}`);

        $('.fz_video_popup').addClass('active');
      });
      $('.fz_video_popup_close, .fz_video_popup-layer').on(
        'click',
        function (e) {
          $('.fz_video_popup').removeClass('active');
          $('html').removeClass('overflow-hidden');
          $('.fz_video_popup_container iframe').attr('src', 'about:blank');
          e.preventDefault();
        },
      );
    }
  }

  // -------------slick slider
  function slickInt() {
    if ($.exists('.fz_caseStudy_slider')) {
      $('.fz_caseStudy_slider').each(function () {
        let $slickActive = $(this).find('.fz_slider_active')
        $slickActive.slick({

            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: false,
            prevArrow: $(this).find('.fz_slider_prev'),
            nextArrow: $(this).find('.fz_slider_next'),
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
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
          })
        });
      
    }
    if($.exists('.fz_team_slider')){
      $('.fz_team_slider').each(function(){
        let $slickActive = $(this).find('.fz_slider_active')
        $slickActive.slick({

          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: false,
          prevArrow: $(this).find('.fz_prev_btn'),
          nextArrow: $(this).find('.fz_next_btn'),
          responsive: [
            {
              breakpoint: 1224,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
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
        })
      })
    }
  }

  // -----------------------tabs---------------------------------------//
function tabs(){
  const  tabButtons = $('.fz_testimonial')

  for(let i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener('click', function(){
      let tabName = this.dataset.tab
      const tabcontent = $('.' + tabName)
      // console.log('tabContent' , tabcontent);

      let alltabContent = $('.tabContent')
      let alltabImg = $('.tabImg')
      // console.log(alltabImg);
      // console.log(alltabContent);
     
      for(let i = 0; i < alltabContent.length; i++){
        alltabContent[i].style.display = "none"
      }
      for(let i = 0; i < alltabImg.length; i++){
        alltabImg[i].style.display = "none"
      }
      for(let i = 0; i < tabButtons.length; i++){
        tabButtons[i].classList.remove('active')
      }

      tabcontent[0].style.display = "block"
      tabcontent[1].style.display = "block"
      this.classList.add('active')
    })
  }
  $('.fz_testimonial:first').click()
}

// init Isotope
function isotope(){
  let $grid = $('.item_details').isotope({
  });

  $('.item_menu').on( 'click', 'a', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  
  });
}
function addActive(){
  let items = $('.item_name')
// console.log(items);
items.each(function(){
  $(this).on('click', function(){
    items.removeClass('active')
    $(this).addClass('active')
  })
})
items[0].click()
}


})(jQuery)

