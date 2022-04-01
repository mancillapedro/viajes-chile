// 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="collapse"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const icons = $(`i[data-bs-toggle="collapse"]`);

const collapse = (icons) => {
    if ($(document).width() < 768) {
        icons.addClass('collapsed');
        $('.parrafos').removeClass('show');
    }
}

const iconsTool = (icons) => icons.attr('data-bs-original-title', `${icons.hasClass('collapsed') ? 'Mostrar' : 'Ocultar' }`)

$(function () {
    $(document).scroll(function () { $('nav').attr('style', `background-color: rgba(0,0,0,${window.scrollY / window.innerHeight})`); });

    collapse(icons);
    $(window).resize(function () { collapse(icons) });

    iconsTool(icons);
    $(`i[data-bs-toggle="collapse"]`).hover(function () { iconsTool($(this)) });
});