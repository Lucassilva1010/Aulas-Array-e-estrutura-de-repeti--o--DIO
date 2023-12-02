function adicao(x, y) {
    return x + y
}

function mult(x, y) {
    return x * y
}

function cal(op, x, y) {
    console.log(op(x, y))
}

cal(adicao, 100, 500)
cal(mult, 100, 500)