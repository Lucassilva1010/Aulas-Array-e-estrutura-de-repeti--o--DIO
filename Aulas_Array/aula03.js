const media = [];

media.push(7)
media.push(10)
media.push(6)
media.push(10)

let soma = 0;
for (let i = 0; i < media.length; i++) {
    //let notas = media[i];
    soma += media[i];
    //soma += notas;

}

console.log('Soma:' + soma);
const result = soma / media.length;
console.log('A média é: ' + result);