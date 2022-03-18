/*var nome = window.document.getElementById(nome)  -> element by id, busca um elemento no html*/
var nome = window.document.getElementById('nome')
/*getElementById ele busca pelo id o nome*/

var okNome = false
/*para verifica a condição*/

function validarNome (){
let txtNome = document.getElementById('txtNome')
    if(nome.value.length < 2){
        //alert('Olá Mundo!!')
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'red'
        okNome = false
    }
    else{
        txtNome.innerHTML = 'nome válido'
        txtNome.style.color = 'green'
        okNome = true

        
    }


}

function enviar() {
    if (okNome == true) {
        alert('Mensagem enviada com sucesso!!')
    } else {
        alert('Preencha corretamente!')

    }
}

