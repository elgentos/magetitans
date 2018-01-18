var $j = jQuery.noConflict();

$j(document).ready(function () {

	$j('.navbar-toggle').on('click', function() {
		$j(this).toggleClass('open');
	});

});