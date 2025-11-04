var agora = new Date()
var diaSemana = agora.getDay()

/**
 * DOMINGO
 * SEGUNDA
 * TERCA
 * QUARTA 
 * QUINTA 
 * SEXTA
 * SABADO
 */

console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log("Domingo")
        console.log("Finais de semana")
        break
    case 1:
        console.log("Segunda")
        console.log("Dias de semana")
        break
    case 2:
        console.log("Terca")
        console.log("Dias de semana")
        break
    case 3:
        console.log("Quarta")
        console.log("Dias de semana")
        break
    case 4:
        console.log("Quinta")
        console.log("Dias de semana")
        break
    case 5:
        console.log("Sexta")
        console.log("Dias de semana")
        break
    case 6:
        console.log("Sabado")
        console.log("Finais de semana")
        break
    default:
        console.log("Opcao invalida")
        break
}