function loko(x) {
    return (y) => {
        return x + y
    }
}

console.log(loko(10)(20))

const numero = loko(200)

console.log(numero(100))