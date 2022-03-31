// 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {

    $(document).scroll(function(){
        $('nav').attr('style', `background-color: rgba(0,0,0,${window.scrollY/window.innerHeight})`);
    });

});