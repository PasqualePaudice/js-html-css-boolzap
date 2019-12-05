$(document).ready(function(){


    var messaggio1 = $('.messaggio.template').clone();

    messaggio1.removeClass('template').addClass('ricevuto');

    messaggio1.children('.testo-messaggio').text('ciao,come va?');

    messaggio1.find('.delete').css('backgroundColor','white');
    messaggio1.find('.delete').css('box-shadow','none');

    $('.schermata-messaggi').append(messaggio1);

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
    $(document).on('click', '.button', function(){
        scrivi_messaggio();
    })

    $(".ricerca input").keyup(function(){

        ricerca();

  });

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







    $('.tutte_chat .anteprima-chat').click(function(){


        $('.anteprima-chat').removeClass('active');
        $(this).addClass('active');

        $('.main').removeClass('visible');
        $('.main').addClass('invisible');

        var nome = $(this ).find('strong').text();

        $('.main[data-codice="' + nome + '"] .head-name h3').text(nome)


        $('.main[data-codice="' + nome + '"]').removeClass('invisible');
        $('.main[data-codice="' + nome + '"]').addClass('visible');




    })

























});

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

    var messaggioRicevuto = $('.messaggio.template').clone();

    messaggioRicevuto.removeClass('template').addClass('ricevuto')
    messaggioRicevuto.appendTo('.main.visible .schermata-messaggi').html('ok');


    },1000);

    $('.tutte_chat .anteprima-chat.active').prependTo('.tutte_chat');




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
