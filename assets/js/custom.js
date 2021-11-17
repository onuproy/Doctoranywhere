$(document).ready(function(){ 

		/*********** Nav menu ***************/
		$('.open-close-icon').click(function(){
			$('.menubar-area').slideToggle();
			return false;
		});
		$('.bar-area i').click(function(){
			$('.menubar-area').slideToggle();
			return false;
		});
		$('.open-content').click(function(){
			$('.open-content').hide();
			$('.close-content').show();
			return false;
		});
		$('.close-content').click(function(){
			$('.open-content').show();
			$('.close-content').hide();
			return false;
		});
		
		$('.toogle-icon-item').click(function(){
			$('.icon-item').toggleClass('show-icon');
			return false;
		});
		$('.toogle-icon-item').click(function(){
			$('.color-icon-area').toggleClass('icon-click-area');
			return false;
		});
		
		
		/*********** translate ***************/
		$('.google-translate').click(function(){
			$('#google_translate_element').slideToggle();
			return false;
		});
		

		$('.toogle-area').click(function(){
			$('.header-bottom').slideToggle();
			return false;
		});
		
		$('.toogle-area1').click(function(){
			$('.header-bottom').slideToggle();
			return false;
		});
		
		$('.mobile-right-header-area i').click(function(){
			$('.mobile-search-area').slideToggle();
			return false;
		});
		$('.sticky-search-area').click(function(){
			$('.mobile-search-area').slideToggle();
			return false;
		});
		 $('.dropdown').on('click', function(e){
			if(Modernizr.mq('screen and (max-width:991px)')) {
				e.preventDefault();
				$(this).next($('.megamneu-area')).slideToggle();
			}
		})
		
		
		$('.check-box-area').click(function(){
			$('.check-box-area').removeClass('check-box-area2');
			$(this).addClass('check-box-area2');
		});
		$('.check-item').click(function(){
			$('.check-item').removeClass('check-item2');
			$(this).addClass('check-item2');
		});
		
		$('.logo-slider-item ').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplay:true,
			navText:['<i class="fas fa-angle-left" aria-hidden="true"></i>','<i class="fas fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
			responsive:{
				0:{
					items:2,
					margin:15,
				},
				414:{
					items:3,
					margin:15,
				},
				575:{
					items:4,
					margin:15,
				},
				1200:{
					items:5
				}
			}
		})	
		
		$('.vote-banner-area').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			autoplay:true,
			items:1,
		})
		
		$( "#tabs" ).tabs();
		 
	    $('.scroll-top a').click(function() {
			$('html, body').animate({
			  scrollTop: 0
			}, 800);
			return false;
		});
});

		/*********** font size ***************/
		var $affectedElements = $(".main p,.main h1,.main h2,.main h3,.main h4,.main h5,.main li a,.main li span, span.someClass"); // Can be extended, ex. $("div, p, span.someClass")

		// Storing the original size in a data attribute so size can be reset
		$affectedElements.each( function(){
		  var $this = $(this);
		  $this.data("orig-size", $this.css("font-size") );
		});

		$("#btn-increase").click(function(){
		if (size > 13) {
		  changeFontSize(1);
			return false;
		}
		})

		$("#btn-decrease").click(function(){
			if (size > 19) {
		  changeFontSize(-1);
			return false;
			}
		})

		$("#btn-orig").click(function(){
		  $affectedElements.each( function(){
				var $this = $(this);
				$this.css( "font-size" , $this.data("orig-size") );
		   });
		})

		function changeFontSize(direction){
			$affectedElements.each( function(){
				var $this = $(this);
				$this.css( "font-size" , parseInt($this.css("font-size"))+direction );
			});
		}


		/*********** contrast ***************/
		  function changeFilter(contraste) {
			switch(contraste) {
			  case 0:
				  document.getElementById("page-top").style.filter = "grayscale(100%)";
				  break;
			  case 1:
				  document.getElementById("page-top").style.filter = "hue-rotate(90deg)";
				  break;
			  case 2:
				  document.getElementById("page-top").style.filter = "invert(200%)";
				  break;
			  case 3:
				  document.getElementById("page-top").style.filter = "none";
				  break;
			  }
		  }
		  
		$(window).scroll(function(){
			if ( $(this).scrollTop() >= 50 ){
				$('.scroll-top').fadeIn(200); 
			}else{
				$('.scroll-top').fadeOut(200);  
			}
		  }); 
		  
		   $(window).on("scroll", function () {
				if ($(this).scrollTop() > 300) {
					$(".header-menu-area").addClass("header-sticky");
				}
				else {
					$(".header-menu-area").removeClass("header-sticky");
				}
			}) 
			
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > 200) {
					$(".header-area").addClass("sticky");
				}
				else {
					$(".header-area").removeClass("sticky");
				}
			})
			
			window.onscroll = function() {myFunction()};
				var header = document.getElementById("mobile-header-menu-area1");
				var sticky = header.offsetTop;
				function myFunction() {
					if (window.pageYOffset > sticky) {
					header.classList.add("mobile-header-sticky");
				} else {
					header.classList.remove("mobile-header-sticky");
				}
			} 

	