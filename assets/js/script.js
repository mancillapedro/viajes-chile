// 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {

    $(document).scroll(function () {
        if (window.scrollY >= window.innerHeight) return $('nav').attr('style', 'background-color: rgba(0,0,0,0.9)');
        $('nav').attr('style', 'background-color: rgba(#000,0)');
    });

});