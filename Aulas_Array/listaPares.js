const numeros = [];
numeros.push(1)
numeros.push(3)
numeros.push(50)
numeros.push(22)
numeros.push(33)

var qtd = 0;
var qtd2 = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(`Esse é um numero PAR - ${numeros[i]}, esse numero está no INDEX ${i}`)
        qtd++;
    } else {

        console.log(`Esse é um numero IMPAR - ${numeros[i]}`)
        qtd2++
    }

}

console.log(`Na lista possui ${qtd} de Numeros par(es)`)
console.log(`Na lista possui ${qtd2} de Numeros impar(es)`)