function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 5 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`;
        img.src = './images/morning.jpg';
        document.body.style.background = '#43698D';
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`;
        img.src = './images/afternoon.jpg';
        document.body.style.background = '#A97979';
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`;
        img.src = './images/night.jpg';
        document.body.style.background = '#151E22';
    }
}