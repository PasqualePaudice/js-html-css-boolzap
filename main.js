$(document).ready(function(){

    var messaggio = $('.messaggio.template').clone();

    messaggio.removeClass('template').addClass('mandato');

    messaggio.children('.testo-messaggio').text('ciao');

    $('.schermata-messaggi').append(messaggio);



    $(document).on('click', '.delete',function(){

        $('.finestra-delete').removeClass('invisible');
        $('.finestra-delete').addClass('visible');



    });

    $(document).on('mouseleave','.finestra-delete', function(){
        $('.finestra-delete').removeClass('visible');
        $('.finestra-delete').addClass('invisible');
    })

    $(document).on('click','.finestra-delete span', function(){
        $(this).closest('.messaggio').addClass('invisible');
    });





// se clicchi sulla barra per scrivere compare il bottone invia
    $('.scrivi-messaggio input').click(function(){

        $('.mic').addClass('invisible');
        $('.button').addClass('visible');

    });

// se clicchi sul bottone invia, invia il messaggio e rimuove le classi precedentemente aggiunte al bottone invia e al microfono, facendo ricomparire quest ultimo.

    $('.button').click(function(){


        var messaggio_inviato = $('.main.visible .messaggio-da-inviare').val();

        var messaggio = $('.messaggio.template').clone();

        messaggio.removeClass('template').addClass('mandato');

        messaggio.children('.testo-messaggio').text(messaggio_inviato);

        $('.main.visible .schermata-messaggi').append(messaggio);


        $('.messaggio-da-inviare').val('');

        $('.mic').removeClass('invisible');
        $('.button').removeClass('visible');


        //funzione che permette di ricevere il messaggio "ok" dopo il nostro invio
        setTimeout(function(){

        var messaggioRicevuto = $('.messaggio.ricevuto:first-child').clone();

        messaggioRicevuto.appendTo('.main.visible .schermata-messaggi').html('ok');


        },1000);




    }
    );

    $(".scrivi-messaggio").keypress(function(e) {

        if(e.which == 13) {
        scrivi_messaggio();
    }

    });



    $('.casella-ricerca .cerca').click(ricerca());


    $(".ricerca ").keypress(function(e) {

        if(e.which == 13) {
            ricerca ();
        }

    });


    $('.anteprima-chat').click(function(){

        $('.main').removeClass('visible');
        $('.main').addClass('invisible');

        var nome = $(this ).find('strong').text();

        $('.main[data-codice="' + nome + '"] .head-name h3').text(nome)


        $('.main[data-codice="' + nome + '"]').removeClass('invisible');
        $('.main[data-codice="' + nome + '"]').addClass('visible');




    })








    function scrivi_messaggio(){

        var messaggio_inviato = $('.main.visible .messaggio-da-inviare').val();

        var messaggio = $('.messaggio.template').clone();

        messaggio.removeClass('template').addClass('mandato');

        messaggio.children('.testo-messaggio').text(messaggio_inviato);

        $('.main.visible .schermata-messaggi').append(messaggio);


        $('.messaggio-da-inviare').val('');

        $('.mic').removeClass('invisible');
        $('.button').removeClass('visible');


        //funzione che permette di ricevere il messaggio "ok" dopo il nostro invio
        setTimeout(function(){

        var messaggioRicevuto = $('.messaggio.ricevuto:first-child').clone();

        messaggioRicevuto.appendTo('.main.visible .schermata-messaggi').html('ok');


        },1000);




    }










// Funzione di ricerca dei contatti
    function ricerca(){



        var nome_cercato = $('.casella-ricerca input').val();


        var nome_da_cercare = $(' .tutte_chat .nome strong');

        nome_da_cercare.each(function(){

            nome_singolo = $(this).text();


            if(nome_cercato.toLowerCase() != 0){

            if (nome_cercato.toLowerCase() == nome_singolo.toLowerCase() || nome_singolo.toLowerCase().includes(nome_cercato.toLowerCase())){

                $(this).closest('.anteprima-chat').addClass('visible');
                $(this).closest('.anteprima-chat').removeClass('invisible');

                console.log('si');


            }else{
                $(this).closest('.anteprima-chat').addClass('invisible');
                $(this).closest('.anteprima-chat').removeClass('visible');

                console.log('no');

            }}else{
                $(this).closest('.anteprima-chat').addClass('visible');
                $(this).closest('.anteprima-chat').removeClass('invisible');
            }

        })





    }


















})
