(function ($) {
	
    'use strict';	
			var tpj=jQuery;
			var revapi26;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_one").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_one");
				}else{
					revapi26 = tpj("#rev_slider_one").show().revolution({
						sliderType:"standard",
						jsFileLocation:"revolution/js/",
						sliderLayout:"fullwidth",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								touchOnDesktop:"off",
								swipe_threshold: 75,
								swipe_min_touches: 50,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							
							arrows: {
								style: "nav-home-1",
								enable: true,
								hide_onmobile: false,
								hide_onleave: false,
								left: {
									h_align: "left",
									v_align: "bottom",
									h_offset: 365,
									v_offset: 50
								},
								right: {
									h_align: "left",
									v_align: "bottom",
									h_offset: 465,
									v_offset: 50
								}
							},
							bullets: {
								enable:true,
								hide_onmobile:false,
								style:"bullet-home-1",
								
								hide_onleave:false,
								direction:"horizontal",
								h_align:"left",
								v_align:"bottom",
								h_offset:50,
								v_offset:60,
								space:5,
								tmp:''
							}							
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1200,1024,778,480],
						gridheight:[809,768,600,567],
						lazyType:"none",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:2000,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "30px",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/

})(jQuery);