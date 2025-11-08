var mesdoAno = new Date();
var mesAtual = mesdoAno.getMonth();

/**
 * Janeiro
 * Fevereiro
 * Marco 
 * Abril
 * Maio
 * Junho
 * Julho
 * Agosto
 * Setembro
 * Outubro
 * Novembro
 * Dezembro
 */

console.log(mesAtual)

switch (mesAtual) {
    case 1:
        console.log("Janeiro")
        console.log("Inicio do ano letivo")
        break
    case 2:
        console.log("Fevereiro")
        console.log("Temos carnaval")
        break
    case 3:
        console.log("Março")
        console.log("Dia da mulher")
        break
    case 4:
        console.log("Abril")
        console.log("Dia de tiradentes")
        break
    case 5:
        console.log("Maio")
        console.log("Dia do trabalhador")
        break
    case 6:
        console.log("Junho")
        console.log("Dia dos namorados")
        break
    case 7:
        console.log("Julho")
        console.log("Mes do rock")
        break
    case 8:
        console.log("Agosto")
        console.log("Mes do folclore")
        break
    case 9:
        console.log("Setembro")
        console.log("Mes da Independencia")
        break
    case 10:
        console.log("Outubro")
        console.log("Mes da crianca")
        break
    case 11:
        console.log("Novembro")
        console.log("Mes de Finados")
        break
    case 12:
        console.log("Dezembro")
        console.log("Final de Ano")
        console.log("Comoramos o ntal e Ano novo")
        break
    default:
        console.log("Opcao invalida")
        break
}
