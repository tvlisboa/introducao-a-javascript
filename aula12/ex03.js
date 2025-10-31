var agora = new Date();
var diaSemana = agora.getDay()

/**
 * 0 = DOMINGO
 * 1 = SEGUNDA
 * 2 = TERCA
 * 3 = QUARTA
 * 4 = QUITA
 * 5 = SEXTA
 * 6 = SABADO
 * 7 = DOMINGO
 */

console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log("DOMINGO")
        console.log("Fim de semana")
        break
    case 1:
        console.log("SEGUNDA - FEIRA")
        console.log("Dia de semana")
        break
    case 2:
        console.log("TERCA - FEIRA")
        console.log("Dia de semana")
        break
    case 3:
        console.log("QUARTA - FEIRA")
        console.log("Dia de semana")
        break
    case 4:
        console.log("QUINTA - FEIRA")
        console.log("Dia de semana")
        break
    case 5:
        console.log("SEXTA - FEIRA")
        console.log("Dia de semana")
        break
    case 6:
        console.log("SABADO")
        console.log("FIM DE SEMANA")
        break
    default:
        console.log("OPCAO INVALIDA")
        break
}

switch (diaSemana) {
    case 0:
        console.log("SABADO")
        console.log("FIM DE SEMANA")
    case 1:
        console.log("DOMINGO")
        console.log("FIM DE SEMANA")
        break
}