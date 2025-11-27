let carros = ["COROLLA", "HB20", "CIVIC", "UNO", "JETTA"];

console.log(carros)
console.log(carros[2])
console.log(`Meu array com os seguintes informações ${carros} possui o tamanho de ${carros.length}`)

for (let position = 0; position <= carros.length; position++) {
    console.log(`A position ${position} possui o carro ${carros[position]}`)
}

/**
 * For otimizado para arrays e objects
 */

for (let position in carros) {
    console.log(`A position ${position} possui o seguinte carro associado ${carros[position]}`)
    console.log(carros[position])
}

/**
 * Vai procurar dentro do vetor um valor informado
 * dentro do parametro
 */

let veiculos = carros.indexOf("COROLLA")

if (position == null) {
    console.log("O veiculo nao foi encontrado")
} else {
    console.log(veiculos)
    console.log(`O veiculo informado está na posicao ${veiculos}`)
}
