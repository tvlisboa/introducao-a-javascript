function contar() {
    let inicio = document.getElementById("txtinicio");
    let fim = document.getElementById("txtfim");
    let passo = document.getElementById("txtpassos");
    let res = document.getElementById("result")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Campos informados inválidos, verifique as informações e tente novamente")
    } else {
        res.innerHTML = "Contando..."

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0 || p <= 0) {
            window.alert("Dados invalidos")
            p = 1;
        }

        /**
         * Se o valor do meu inicio que 
         * esta passando o valor por parametro para o contador
         * for menor que o final
         * ele vai incrementar o que foi informado no passo
         * ate chegar no valor do final
         */

        if (i < f) {
            for (let cont = i; cont <= f; cont += p) {
                result.innerHTML += `${cont} \u{1F612}`
            }

            /**
         * Se o valor do meu inicio que 
         * esta passando o valor por parametro para o contador
         * for maior que o final
         * ele vai decrementar o que foi informado no passo
         * ate chegar no valor do final
         */

        } else {
            for (let cont = i; cont >= f; cont -= p) {
                result.innerHTML += `${cont} \u{1F612}`
            }
        }
        result.innerHTML += `\u{1F973}`
    }

}