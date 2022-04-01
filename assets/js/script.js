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

// habilitar tooltip pero en collapse
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="collapse"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {
    const icons = $(`i[data-bs-toggle="collapse"]`);

    const iconsTool = (icons) => icons.attr('data-bs-original-title', `${icons.hasClass('collapsed') ? 'Mostrar' : 'Ocultar'}`)

    const collapse = (icons) => {
        const parrafos = $('.parrafos');
        const colCenter = $('#col-center')
        if ($(document).width() < 768) {
            icons.addClass('collapsed');
            parrafos.removeClass('show ');
            colCenter.removeClass('d-flex flex-column-reverse');
            return;
        }
        icons.removeClass('collapsed');
        parrafos.addClass('show');
        colCenter.addClass('d-flex flex-column-reverse');
    }

    // navbar efecto
    $(document).scroll(function () { $('nav').attr('style', `background-color: rgba(0,0,0,${window.scrollY / window.innerHeight})`); });

    // ocultar/mostrar parrafos
    collapse(icons);
    $(window).resize(function () { collapse(icons) });

    // cambio de title de tooltip
    iconsTool(icons);
    $(`i[data-bs-toggle="collapse"]`).hover(function () { iconsTool($(this)) });

});