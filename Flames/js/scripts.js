(function( $ ) {
    "use strict";
    
    $('.woocommerce-form-coupon-toggle .showcoupon').on("click", function(){
        $(this).toggleClass( "active" );
        if ($(this).hasClass( "active" )) {
            $('.woocommerce-form-coupon').stop(true, true).slideDown();
        }else{
            $('.woocommerce-form-coupon').stop(true, true).slideUp();
        }
    });
    /* ========================================== 
	Sticky Header 1
	========================================== */
	$(window).on("scroll", function(){
		if ( $( '#site-header' ).hasClass( "sticky-header" ) ) {
			var site_header = $('#site-header').outerHeight() + 30;	
			
		    if ($(window).scrollTop() >= site_header) {	    	
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').addClass('is-stuck');	        
		    }else {
		        $('.sticky-header .octf-main-header, .mobile-header-sticky .header_mobile').removeClass('is-stuck');		              
		    }
		}
	});

    /* ========================================== 
    Search on Header
    ========================================== */
    $('.toggle_search').on("click", function(){
        $(this).toggleClass( "active" );
        $('.h-search-form-field').toggleClass('show');
        if ($(this).find('i').hasClass( "flaticon-search" )) {
            $('.toggle_search > i').removeClass( "flaticon-search" ).addClass("flaticon-close");
        }else{
            $('.toggle_search > i').removeClass( "flaticon-close" ).addClass("flaticon-search");
        }
        $('.h-search-form-inner > form > input.search-field').focus();
    });

    /* ========================================== 
    Back To Top
    ========================================== */
    if ($('#back-to-top').length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        }); 
    }

    /* Counter */
    $(window).on('scroll', function() {
        $('.ot-counter').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });

        $('.ot-counter2').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
        
        $('.ot-progress').each(function() {
            var pos_y = $(this).offset().top;
            var value = $(this).find(".progress-bar").data('percent');
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find(".progress-bar").css({
                    'width': value
                }, "slow");
            }
        });

        $('.circle-progress').each(function() {
            var bar_color = $(this).data('color');
            var bar_hei   = $(this).data('height');
            var bar_size  = $(this).data('size');
            var pos_y = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find('.inner-bar').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent)) + '%';
                    }
                });
            }
        });
    });


    $('.ot-accordions').each( function () {
        var allPanels = $(this).find('.acc-content');
        $(this).find('.acc-toggle').on( 'click', function(){

            var $this = $(this),
                $target = $this.next();

            if(!$target.hasClass('active')){
                allPanels.removeClass('active').slideUp(300);
                allPanels.parent().removeClass('current');
                $target.addClass('active').slideDown(300);
                $target.parent().addClass('current');
            }

            return false;
        });
        $(this).find('.acc-toggle:first').trigger('click');
    });


    $('.ot-tabs').each(function() {
        $(this).find('.tabs-heading li').first().addClass('current');
        $(this).find('.tab-content').first().addClass('current');
    });

    $('.tabs-heading li').on( 'click', function(){
        var tab_id = $(this).attr('data-tab');
        $(this).siblings().removeClass('current');
        $(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    $('.message-box > i').on( 'click', function() {
        $(this).parent().fadeOut();
    });

    $('.ot-countdown').each( function() {
        var date   = $(this).data('date'),
            zone   = $(this).data('zone'),
            day    = $(this).data('day'),
            days   = $(this).data('days'),
            hour   = $(this).data('hour'),
            hours  = $(this).data('hours'),
            min    = $(this).data('min'),
            mins   = $(this).data('mins'),
            second = $(this).data('second'),
            seconds = $(this).data('seconds');
        $(this).countdown({
            date: date,
            offset: zone,
            day: day,
            days: days,
            hour: hour,
            hours: hours,
            minute: min,
            minutes: mins,
            second: second,
            seconds: seconds
        }, function () {
            alert('Done!');
        });
    });


    /*Popup Video*/
    var $video_play = $('.btn-play');
    if ($video_play.length > 0 ) {
        $video_play.magnificPopup({
            type: 'iframe',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: true,
            callbacks: {
            beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
        });
    }

    
    
    $(".link-image-action").magnificPopup({
        type: "image"
    });


    /*Portfolio Filter*/
    $(window).on('load', function () {
        if( $('#projects_grid').length > 0 ){
            var $container = $('#projects_grid'); 
            $container.isotope({ 
                itemSelector : '.project-item', 
                layoutMode : 'masonry'
            });

            var $optionSets = $('.project_filters'),
                $optionLinks = $optionSets.find('a');

            $optionLinks.click(function(){
                var $this = $(this);

                if ( $this.hasClass('selected') ) {
                    return false;
                }
                var $optionSet = $this.parents('.project_filters');
                    $optionSets.find('.selected').removeClass('selected');
                    $this.addClass('selected');

                var selector = $(this).attr('data-filter');
                    $container.isotope({ 
                        filter: selector 
                    });
                return false;
            });
        };    
    });


    
        // Initialize popup as usual
        $('.image-link').magnificPopup({ 
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below

            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function 

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
                }        
            },
            image: {
                // options for image content type
                titleSrc: 'title'
            },
            gallery: {
                // options for gallery
                enabled: true
            },
        });// JavaScript Document

    /* --------------------------------------------------
    * Client logo
    * --------------------------------------------------*/
    $('.home-client-carousel').owlCarousel({
        loop:true,
        margin:80,
        nav:false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },          
            767:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
    
    /* --------------------------------------------------
    * project carousel
    * --------------------------------------------------*/

     $(".project-slider").owlCarousel({
        stagePadding: 365,
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1400:{
                stagePadding: 365,
                items:2
            },
            1200:{
                stagePadding: false,
                items:3
            },
            992:{
                stagePadding: false,
                items:2
            },
            767:{
                stagePadding: false,
                items:2
            },
            0:{
                stagePadding: false,
                items:1
            }
        }
     });

     $(".simple-slider").owlCarousel({
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1000:{
                items:2
            },
            600:{
                items:2
            },
            0:{
                items:1
            }
        }
     });

     $('.single-product').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        dots: false,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });


    /*Gallery Post*/
    $(".gallery-post").owlCarousel({
        items:1,
        nav:true,
        dots: false,
        auto: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive: []
    });

    /* --------------------------------------------------
    * Testimonial carousel
    * --------------------------------------------------*/
     $(".ot-testimonials-slider").owlCarousel({
        nav:true,
        dots: false,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1000:{
                items:2
            },
            767:{
                nav:false,
                dots: true,
                items:2
            },
            0:{
                nav:false,
                dots: true,
                items:1
            }
        }
     });
    /* --------------------------------------------------
    * industis carousel
    * --------------------------------------------------*/

     $(".ot-industries-slider").owlCarousel({
        stagePadding: 365,
        items:2,
        nav:false,
        dots: true,
        loop:true,
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive:{
            1600:{
                stagePadding: 365,
                items:2
            },
            1200:{
                stagePadding: 200,
                items:2
            },
            992:{
                stagePadding: false,
                items:2
            },
            0:{
                stagePadding: false,
                items:1
            }
        }
     });
     
    $(window).on('load', function(){
    $('.projects-grid').each( function(){
        var $container = $(this); 
        $container.isotope({ 
            itemSelector : '.project-item', 
            animationEngine : 'css',
        });

        var $optionSets = $('.project_filters'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.on('click', function(){
            var $this = $(this);

            if ( $this.hasClass('selected') ) {
                return false;
            }
            var $optionSet = $this.parents('.project_filters');
                $optionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');

            var selector = $(this).attr('data-filter');
                $container.isotope({ 
                    filter: selector 
                });
            return false;
        });
    });
    });


})( jQuery );

