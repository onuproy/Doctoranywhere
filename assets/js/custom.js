jQuery(document).ready(function(){ 

	// Home owlCarousel
	jQuery('.blog_slider').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		autoplay:false,
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots:false,
		responsive:{
			0:{
				items:2,
			},
			414:{
				items:3,
			
			},
			768:{
				items:2,
			},
			1200:{
				items:3,
			}
		}
	});	

});

	