function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagemmanha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` <strong>Hora atual é ${hora} horas </strong>`

    if (hora >= 0 && hora < 12) {
        img.src = "imgs/manha.jpg"
        document.body.style.background = "#FFF4E0"
    } else if (hora > 12 && hora <= 18) {
        img.src = "imgs/tarde.jpg"
        document.body.style.background = "#9BB5BF"
    } else {
        img.src = "imgs/noite.jpg"
        document.body.style.background = "#534A8C"
    }
}
