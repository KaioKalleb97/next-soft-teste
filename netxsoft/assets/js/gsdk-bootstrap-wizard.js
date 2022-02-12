searchVisible = 0;
transparent = true;

// CONSTANTTES
const URL = `http://127.0.0.1:3333`
var table = {}

const cadastrar = (cpf_id) => {
    $.post(`${URL}/usuario`, {
        cpf: cpf_id, nome: $('#nome').val(), email: $('#email').val(), telefone: $('#telefone').val(), logradouro: $('#logradouro').val(),
        numero: $('#numero').val(), complemento: $('#complemento').val(), bairro: $('#bairro').val(), cidade: $('#cidade').val(), estado: $('#estado').val()
    }, function (data) {
        Swal.fire({
            icon: 'success',
            title: 'Salvo com sucesso',
            showConfirmButton: false,
            timer: 1500
        })
        $(':input', '#perfil-from')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');
        $(".delete-pf").hide()
        $(".dados-perfil").hide()
        $(".dados-buscas").show()
        $('.cadastropf').val("")
        table.ajax.reload();


    }, "json");
}

const atualizar = (cpf_id) => {
    $.ajax({
        url: `${URL}/usuario/${cpf_id}`,
        type: 'PUT',
        data: {
            cpf: cpf_id, nome: $('#nome').val(), email: $('#email').val(), telefone: $('#telefone').val(), logradouro: $('#logradouro').val(),
            numero: $('#numero').val(), complemento: $('#complemento').val(), bairro: $('#bairro').val(), cidade: $('#cidade').val(), estado: $('#estado').val()
        },
        success: function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Atualizado com sucesso',
                showConfirmButton: false,
                timer: 1500
            })
            $(':input', '#perfil-from')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .removeAttr('checked')
                .removeAttr('selected');
            $(".delete-pf").hide()
            $(".dados-perfil").hide()
            $(".dados-buscas").show()
            $('.cadastropf').val("")
            table.ajax.reload();

        }
    });
}

const deletar = (cpf_id) => {
    $.ajax({
        url: `${URL}/usuario/${cpf_id}`,
        type: 'DELETE',
        data: {},
        success: function (data) {
            Swal.fire(
                'Deletado!',
                'Seu perfil foi deletado.',
                'success'
            )
            $(':input', '#perfil-from')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .removeAttr('checked')
                .removeAttr('selected');
            $(".delete-pf").hide()
            $(".dados-perfil").hide()
            $(".dados-buscas").show()
            $('.cadastropf').val("");
            table.ajax.reload();


        }
    });
}

const buscarDados = () => {
    table = $('#baselocal').DataTable({
        "ajax": `${URL}/usuarios`,
        "columns": [
            { "data": "nome" },
            { "data": "cpf" },
            { "data": "email" },
            { "data": "telefone" }
        ],
        "language": {
            "lengthMenu": "Mostrar _MENU_ registro por pagina",
            "zeroRecords": "Não encontramos nada - desculpe",
            "info": "Mostrando pagina _PAGE_ of _PAGES_",
            "infoEmpty": "Não há dados disponiveis",
            "infoFiltered": "(filtrado total de _MAX_ registros )"
        }
    });
}

const voltar = (tipo) => {
    $(':input', '#perfil-from')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
    $(".delete-pf").hide()
    $(".dados-perfil").hide()
    $(".dados-buscas").show()
    $('.cadastropf').val("")
}

$(document).ready(function () {

    $(".buscar-cpf").click(function () {
        var valid = $('.cadastropf').val();
        $(`.cpf-erro-1`).remove()
        if (valid == '') {
            $('.cadastropf').after(`<label for="postcode" generated="true" class="error cpf-erro-1">Por favor digite um cpf</label>`)
            return false
        }
        if (valid.length != 11 && valid != '') {
            $('.cadastropf').after(`<label for="postcode" generated="true" class="error cpf-erro-1">Digite um cpf valido</label>`)
            return false
        }

        $.get(`${URL}/usuario/${valid}`, function (e) {
            //Verifica se trouxe resultado ou não
            if (e.Resultados === 0) {
                $(".dados-buscas").hide()
                $(".dados-perfil").show()
                $(".tipo-perfil").text("Cadastrar ")
                $('#cpf').val(valid)
                $("#cpf").prop("disabled", false);
            } else {
                $(".dados-buscas").hide()
                $(".dados-perfil").show()
                $(".tipo-perfil").text("Atualizar ")
                $(".delete-pf").show()
                for (const [key, value] of Object.entries(e)) {
                    $(`#${key}`).val(value)
                }
                $("#cpf").prop("disabled", true);
            }
        }).fail(function () {

        });

    });

    $(".salvar-lm").click(function () {
        var valid = $('#cpf').val();
        $(`.cpf-erro-1`).remove()
        if (valid == '') {
            $('#cpf').after(`<label for="postcode" generated="true" class="error cpf-erro-1">Por favor digite um cpf</label>`)
            return false
        }
        if (valid.length != 11 && valid != '') {
            $('#cpf').after(`<label for="postcode" generated="true" class="error cpf-erro-1">Digite um cpf valido</label>`)
            return false
        }
        if ($(".tipo-perfil").text() === "Cadastrar ") {
            cadastrar(valid)
        } else {
            atualizar(valid)
        }
    });

    $(".delete-pf").click(function () {
        var valid = $('#cpf').val();
        $(`.cpf-erro-1`).remove()
        if (valid == '') {
            $('#cpf').after(`<label for="postcode" generated="true" class="error cpf-erro-1">Por favor digite um cpf</label>`)
            return false
        }
        if (valid.length != 11 && valid != '') {
            $('#cpf').after(`<label for="postcode" generated="true" class="error cpf-erro-1">Digite um cpf valido</label>`)
            return false
        }
        Swal.fire({
            title: 'Você tem certeza?',
            text: "Você não vai porder reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                deletar(valid)
            }
        })

    });

    $(".voltar-btn").click(function () {
        voltar()
    });

    buscarDados()
});