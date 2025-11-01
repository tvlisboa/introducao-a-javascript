function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formAno = window.document.getElementById('txtfbr')
    var resultado = window.document.getElementById('result')

    if (formAno.value.lenght == 0 || formAno.value > anoAtual || formAno.value <= 0) {
        window.alert(`Dados invalidos, confira e tente novamente`)
    } else {
        var model = document.getElementsByName('radmodel')
        var idadevel = anoAtual - Number(formAno.value)
        var combustivel = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (model[0].checked) {
            model = "HATCH"

            if (idadevel >= 0 && idadevel <= 5) {
                //novo
                img.setAttribute('src', '')
            } else if (idadevel > 5 && idadevel <= 10) {
                //seminovo
                img.setAttribute('src', '')
            } else if (idadevel > 10 && idadevel <= 20) {
                //usado
                img.setAttribute('src', '')
            } else {
                //velho
                img.setAttribute('src', '')
            }

        } else if (model[1].checked) {
            model = "SEDÃ"

            if (idadevel >= 0 && idadevel <= 5) {
                //novo
                img.setAttribute('src', '')
            } else if (idadevel > 5 && idadevel <= 10) {
                //seminovo
                img.setAttribute('src', '')
            } else if (idadevel > 10 && idadevel <= 20) {
                //usado
                img.setAttribute('src', '')
            } else {
                //velho
                img.setAttribute('src', '')
            }

        } else {
            model = "SUV"

            if (idadevel >= 0 && idadevel <= 5) {
                //novo
                img.setAttribute('src', '')
            } else if (idadevel > 5 && idadevel <= 10) {
                //seminovo
                img.setAttribute('src', '')
            } else if (idadevel > 10 && idadevel <= 20) {
                //usado
                img.setAttribute('src', '')
            } else {
                //velho
                img.setAttribute('src', '')
            }
        }
        resultado.innerHTML = `IDADE DO VEICULO: ${idadevel} E O MODELO INFORMADO É ${model}`
        resultado.appendChild(img)
    }
}