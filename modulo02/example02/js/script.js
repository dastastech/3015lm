$(document).ready(function() {

    $('#btnCambiar').click( function() {

        $('h1').css('color','red')
                .css('background-color','gold')
                .css('font-size','5em')
                .css('font-family','Arial, Helvetica, sans-serif');

        $('p').css('color','blue')
            .css('font-size','34px');
            
    });

});