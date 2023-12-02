const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];


lista.forEach(valor => {
    console.log('Esse é o: ' + (valor + 1))

});


///O que fica entre parentese no foreach, é chamado de Callbak
lista.forEach((value, i, listref) => {
    console.log(value, i, listref)
})