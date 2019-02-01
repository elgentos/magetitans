const $j = jQuery.noConflict();

$j(document).ready(function () {
    if (window.location.protocol === 'https:') {
        return;
    }
    window.location = window.location.href.replace(/^http:/, 'https:');
});
