// 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    alert('¡Mensaje enviado!')
                }
                form.classList.add('was-validated')
            }, false)
        })
})()


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="collapse"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const icons = $(`i[data-bs-toggle="collapse"]`);

const collapse = (icons) => {
    if ($(document).width() < 768) {
        icons.addClass('collapsed');
        $('.parrafos').removeClass('show');
        return;
    }
    icons.removeClass('collapsed');
    $('.parrafos').addClass('show');
}

const iconsTool = (icons) => icons.attr('data-bs-original-title', `${icons.hasClass('collapsed') ? 'Mostrar' : 'Ocultar'}`)

$(function () {
    $(document).scroll(function () { $('nav').attr('style', `background-color: rgba(0,0,0,${window.scrollY / window.innerHeight})`); });

    collapse(icons);
    $(window).resize(function () { collapse(icons) });

    iconsTool(icons);
    $(`i[data-bs-toggle="collapse"]`).hover(function () { iconsTool($(this)) });

});