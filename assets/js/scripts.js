const $j = jQuery.noConflict();

$j(document).ready(function () {
    if (window.location.protocol === 'https:' || window.location.hostname === '127.0.0.1') {
        return;
    }
    window.location = window.location.href.replace(/^http:/, 'https:');
});
