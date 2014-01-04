$( document ).ready(function() {

	$('.logo').click( function() {
		if ($('nav').hasClass('expand')) {
			$('nav').removeClass('expand');
		}
		else {
		$('nav').addClass('expand');
		}
	});

});
