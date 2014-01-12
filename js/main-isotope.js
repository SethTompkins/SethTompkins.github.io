$( document ).ready(function() {

	var $container = $('.inner-container');

	$('.logo').click( function() {
		if ($('nav').hasClass('expand')) {
			$('nav').removeClass('expand');
		}
		else {
		$('nav').addClass('expand');
		}
	});

	$(window).load(function(){

		$container.isotope({
	  		itemSelector: '.item',
	  		// layout mode options
	  		masonry: {
	  			gutter: 0
	  		}
		});
	});

});
