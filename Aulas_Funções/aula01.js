//Isso é uma Function Declareiton - Função declarada
//Esse tipo de function pode ser chamada de qualquer luar do codigo que vai da certo, mesmo antes da sua declaração
function Nome() {
    console.log('Lucas')
}

//Isso é uma função Express - Um função  criada a partir de uma variavel
//Ela não pode ser chamada antes da sua criação 

const mostrNome = function () {

    console.log('Ola Lucas')
}


Nome();
mostrNome()