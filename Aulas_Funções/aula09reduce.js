const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaTodosNumeros = lista.reduce((prev, c) => {
    return prev + c
}, 0)
console.log(somaTodosNumeros)