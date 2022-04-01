// 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="collapse"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
const collapse = () => {
    if($(document).width() > 768){ $('.parrafos').addClass('show'); }
    else{ $('.parrafos').removeClass('show'); }
}

$(function () {

    $(document).scroll(function () {
        $('nav').attr('style', `background-color: rgba(0,0,0,${window.scrollY / window.innerHeight})`);
    });

    collapse();
    $(window).resize(() => collapse());

    $(`i[data-bs-toggle="collapse"]`).hover(function () {
        if ($($(this).data('bs-target')).hasClass('show')){ return $(this).attr('data-bs-original-title', 'Ocultar') }
        $(this).attr('data-bs-original-title', 'Mostrar')
    })
});