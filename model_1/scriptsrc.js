function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `As horas atuais são: ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = "imgs/manha.jpg"
        document.body.style.background = "#e3ddcf"
    } else if (hora >= 12 && hora < 18) {
        img.src = "imgs/tarde.jpg"
        document.body.style.background = "#cd9b5e"
    } else {
        img.src = "imgs/noite.jpg"
        document.body.style.background = "#604a70"
    }
}
