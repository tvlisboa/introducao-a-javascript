function tabuada() {
    let number = document.getElementById("txtnumber");
    let tab = document.getElementById("seltab")

    /**
     * Verificacao caso usuario deixe o campo de numero vazio
     * informa ao usuario para digitar um numero valido
     */

    if (number.value.length == 0) {
        window.alert("Insira um numero valido.")
    } else {
        let num1 = Number(number.value)
        let cont = 1;
        tab.innerHTML = '';

        /**
         * Enquanto meu contador for menor que 10
         * faca o seguinte bloco de codigo
         */

        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${num1} x ${cont} = ${num1 * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}