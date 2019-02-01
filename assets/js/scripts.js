const $j = jQuery.noConflict();

$j(document).ready(function () {
    if (window.location.protocol === 'https:') {
        return;
    }
    window.location = window.location.href.replace(/^http:/, 'https:');

    $j(window).on('scroll', function(){
        if ($j(window).scrollTop() >= ($j('#navbar').height() / 2)) {
            $j('body').addClass('fixed');
        } else {
            $j('body').removeClass('fixed');
        }
    });
});
