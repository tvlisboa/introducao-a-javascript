function fatorial(number) {
    let fat = 1

    for (let cont = number; cont > 1; cont--) {
        fat *= cont
    }
    return fat
}

console.log(fatorial(5))