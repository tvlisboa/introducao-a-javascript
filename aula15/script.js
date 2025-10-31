function conferir() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('result')

    if (formAno.value.length == 0 || formAno.value > anoAtual || formAno.value < 0) {
        window.alert("Os dados informados estão inválidos")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(formAno.value)
        var genre = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genre = "MASCULINO"

            if (idade > 0 && idade < 12) {
                img.setAttribute('src', '')
            } else if (idade < 18) {
                img.setAttribute('src', '')
            } else if (idade < 55) {
                img.setAttribute('src', '')
            } else {
                img.setAttribute('src', '')
            }

        } else if (fsex[1].checked) {
            genre = "FEMININO"

            if (idade > 0 && idade <= 12) {
                img.setAttribute('src', '')
            } else if (idade < 18) {
                img.setAttribute('src', '')
            } else if (idade < 50) {
                img.setAttribute('src', '')
            } else {
                img.setAttribute('src', '')
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `DETECTAMOS ${genre} COM ${idade} ANOS`
        res.appendChild(img)
    }
}
