// 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
const collapse = () => {
    if ($(document).width() > 768){$('.parrafos').addClass('show'); }
    else{ $('.parrafos').removeClass('show'); }
}

$(function () {

    $(document).scroll(function(){
        $('nav').attr('style', `background-color: rgba(0,0,0,${window.scrollY/window.innerHeight})`);
    });

    collapse()
    $(window).resize(() => collapse())

});