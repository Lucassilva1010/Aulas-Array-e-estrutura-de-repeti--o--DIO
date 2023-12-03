const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaPar = lista.filter((numero) => {
    return (numero % 2 === 0);
})

console.log(listaPar)


const listaImpar = lista.filter((n) => {
    return (n % 2)
})
console.log(listaImpar)