$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true  
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, escreva sua mensagem'
        },
        highlight: function(element) {
            $(element).addClass('input-invalid');
        },
        unhighlight: function(element) {
            $(element).removeClass('input-invalid');
        },

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('.sobre a').click(function(event) {
        event.preventDefault();
        $('nav').slideUp();

        const destSobre = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: destSobre.offset().top
        }, 1000)
    })

    $('#mais-btn').click(function(event) {
        event.preventDefault();
        $('ul').slideToggle();
    })
})



