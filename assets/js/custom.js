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

	// IsoTope
	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows',
		getSortData: {
		  name: '.name',
		  symbol: '.symbol',
		  number: '.number parseInt',
		  category: '[data-category]',
		  weight: function( itemElem ) {
			var weight = $( itemElem ).find('.weight').text();
			return parseFloat( weight.replace( /[\(\)]/g, '') );
		  }
		}
	});
  
	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
		  var number = $(this).find('.number').text();
		  return parseInt( number, 10 ) > 50;
		},
		// show if name ends with -ium
		ium: function() {
		  var name = $(this).find('.name').text();
		  return name.match( /ium$/ );
		}
	};
  
	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
   
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
		  $buttonGroup.find('.is-checked').removeClass('is-checked');
		  $( this ).addClass('is-checked');
		});
	});
	

});

	