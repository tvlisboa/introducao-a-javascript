for (var i = 1; i < 10; i++) {
    console.log(`Uso do for ${i}`)
}

console.log("Iniciando o programa.")
console.log("Remova todos numeros multiplos de 11")
for (var c = 1; c < 100; c++) {
    if (c % 11 == 0) {
        continue
    }
    console.log(c)
}

console.log("Fim do programa.")


console.log("Iniciando programa")
console.log("Quando encontrar primeiro numero divisivel  saia do contador")
for (var d = 20; d < 100; d++) {
    if (d % 11 == 0) {
        break
    }
    console.log(d)
}