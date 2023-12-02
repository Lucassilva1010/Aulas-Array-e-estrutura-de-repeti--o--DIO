//Function Declaration - Chamada também de função Literal
function novaFunc() {
    console.log(this);
}

// Arrow Function - Função anonima
//Muito utulizada e também chamada de Expression 
const anonima = () => {
    console.log(this);
}

//A grande diferença é que nas funções Expression, elas não m/aceitam o THIS
const obg = {
    nome: 'Teste',
    novaFunc,
    anonima

}

obg.novaFunc();
obg.anonima();
