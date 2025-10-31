var hora_agora = new Date();
var hora_atual = hora_agora.getHours();

console.log(`A hora tual é ${hora_atual}`)

if (hora_atual < 12) {
    console.log(`Bom dia, a hora atual informada é ${hora_atual}`)
} else if (hora_atual <= 18) {
    console.log(`Boa tarde, a hora atual informada é ${hora_atual}`)
} else {
    console.log(`Boa noite...`)
}