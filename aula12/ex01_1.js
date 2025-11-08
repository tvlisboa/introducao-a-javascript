var idade = 65;

if (idade < 16) {
    console.log("Menor de idade")
    console.log("Nao vota")
} else if (idade < 18 || idade >= 65) {
    console.log("Menor de idade")
    console.log("Ou")
    console.log("Idoso")
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatorio")
}