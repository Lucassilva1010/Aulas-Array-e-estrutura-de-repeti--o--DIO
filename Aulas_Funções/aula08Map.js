class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const listaPessoas = [new Pessoa('Lucas'), new Pessoa('Antonella'), new Pessoa('Anastacia')]

console.log(listaPessoas)

//Metodo antigo que serveria para conveter um objeto em uma lista
const nList = [];

for (let i = 0; i < listaPessoas.length; i++) {
    const element = listaPessoas[i];

    nList.push(element.nome);

}
console.log('----------------')
console.log(nList);

//usando o MAp apra convertert um objeto em uma lista

console.log('----Novo Metodo----')
const l = listaPessoas.map((atrib, indice) => {
    return `${indice} - ${atrib.nome}`
})

console.log(l)