var $j = jQuery.noConflict();

$j(document).ready(function () {

	// $j('.navbar-toggle').on('click', function() {
	// 	$j(this).toggleClass('open');
	// });

	if (window.location.protocol === 'https:') {
		return;
	}
	window.location = window.location.href.replace(/^http:/, 'https:');

});
