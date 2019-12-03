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


        //funzione che permette di ricevere il messaggio "ok" dopo il nostro invio
        setTimeout(function(){

        var messaggioRicevuto = $('.messaggio.ricevuto:first-child').clone();

        messaggioRicevuto.appendTo('main').html('ok');


        },1000);




    });



    $('.casella-ricerca .cerca').click(function(){



        var nome_cercato = $('.casella-ricerca input').val();


        var nome_da_cercare = $(' .tutte_chat .nome strong');

        nome_da_cercare.each(function(){

            nome_singolo = $(this).text();

            if (nome_cercato.toLowerCase() == nome_singolo.toLowerCase()){
                $(this).closest('.anteprima-chat').addClass('visible');
                $(this).closest('.anteprima-chat').removeClass('invisible');
                console.log('si');


            }else{
                $(this).closest('.anteprima-chat').addClass('invisible');
                $(this).closest('.anteprima-chat').removeClass('visible');

                console.log('no');

            }

        })





    })


















})
