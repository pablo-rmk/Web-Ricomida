$(function () {

    //Alerta
    $('#botonAlerta, #botonAlerta2').click(function () {
        alert('El correo fue enviado correctamente.');
    });
    // Enable Tootips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    //Cambia color con doble click
    $('#ingredientes, #preparacion').on('dblclick', function () {
        $(this).css({
            'color': 'red'
        });
    });
    //Toggle
    $('.titulotarjeta').click(function(){
        $('.card-content').toggle();
    });

});
