const nome = 'Lucas Augusto da Silva';
const usuario = 'l';
var result = 0;
for (let index = 0; index < nome.length; index++) {
    if (nome[index] == usuario || nome[index] == usuario.toUpperCase()) {
        console.log('No no nome contem a letra A a!, na posição ' + index)
        result++;
    }
}

console.log(`Ela se repete : ${result}`);