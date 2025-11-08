var hora_atual = new Date()
var hora = hora_atual.getHours();

console.log(`A hora atual é ${hora}`)

if (hora < 12) {
    console.log(`Bom dia`)
    console.log(`A hora atual informada é ${hora}`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde`)
    console.log(`A hora atual informada é ${hora}`)
} else if (hora >= 18 && hora < 24) {
    console.log(`Boa noite`)
    console.log(`A hora atual informada é ${hora}`)
} else {
    console.log(`Boa madrugada`)
}