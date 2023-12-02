const nomes = {
    nome: 'lucas',
    nome2: 'Anastacia'
}

const idades = {
    idade: 33,
    idade2: 34
}


function teste(obj) {
    console.log(obj, this.nome);
    console.log(obj, this.idade2);
}

teste.apply(nomes, ['ola...'])
teste.apply(idades, ['ola...'])

