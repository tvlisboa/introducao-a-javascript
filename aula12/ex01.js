var idade = 16;

console.log(`A idade do usuario informado é ${idade}`)

if (idade < 16) {
    console.log("NAO VOTA")
} else if (idade < 18 || idade > 65) {
    console.log("OPCIONAL")
} else {
    console.log("OBRIGATORIO")
}

