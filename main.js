$(document).ready(function(){

    var messaggio = $('.messaggio.template').clone();

    messaggio.removeClass('template').addClass('mandato');

    messaggio.children('.testo-messaggio').text('ciao');

    $('main').append(messaggio);








// se clicchi sulla barra per scrivere compare il bottone invia
    $('.scrivi-messaggio input').click(function(){

        $('.mic').addClass('invisible');
        $('.button').addClass('visible');

    });

// se clicchi sul bottone invia, invia il messaggio e rimuove le classi precedentemente aggiunte al bottone invia e al microfono, facendo ricomparire quest ultimo.

    $('.button').click(function(){


        var messaggio_inviato = $('.scrivi-messaggio input').val();

        var messaggio = $('.messaggio.template').clone();

        messaggio.removeClass('template').addClass('mandato');

        messaggio.children('.testo-messaggio').text(messaggio_inviato);

        $('main').append(messaggio);

        $('.scrivi-messaggio input').val('');

        $('.mic').removeClass('invisible');
        $('.button').removeClass('visible');

        


    })


















})
