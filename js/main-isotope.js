$( document ).ready(function() {

	$('.logo').click( function() {
		if ($('nav').hasClass('expand')) {
			$('nav').removeClass('expand');
		}
		else {
		$('nav').addClass('expand');
		}
	});

	$('.inner-container').isotope({
  		itemSelector: '.item',
  		// layout mode options
  		masonry: {
  			gutter: 0
  		}
	});

});
