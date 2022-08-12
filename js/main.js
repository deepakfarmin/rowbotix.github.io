/*
Author       : Belal Hossain.
Template Name: Formula - Material Design Agency Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
	
		/*PRELOADER JS*/
			$(window).load(function() { 
				$('.status').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/

		/* START MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	
			$(window).scroll(function() {
			  if ($(this).scrollTop() >0) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/* END MENU JS */
		
		/*START MIXITUP JS*/
			
			$('.portfolio_item_area').mixItUp();
			
		/*END MIXITUP JS*/
		
		/*START COUNDOWN JS*/
		$('#counterup').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/*END COUNDOWN JS */
		
		/* START SCROLL-TOP JS */
		
			$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});
			
			$('.scrollup').click(function () {
				$("html, body").animate({
					scrollTop:0
				},600);
				return false;
			});		
		
		/* START SCROLL-TOP JS */
		

	}); 	

	/*  Stellar for background scrolling  */
		(function () {

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 
			} else {
				$(window).stellar({
					horizontalScrolling: false,
					responsive: true
				});
			}

		}());
	/* End Stellar for background scrolling  */		
		
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);