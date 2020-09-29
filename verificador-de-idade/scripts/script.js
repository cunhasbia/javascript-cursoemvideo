function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './images/homem_crianca.jpg');
            } else if (idade < 28) {
                //jovem
                img.setAttribute('src', './images/homem_jovem.jpg');
            } else if (idade < 45) {
                //adulto
                img.setAttribute('src', './images/homem_adulto.jpg');
            } else {
                //idoso
                img.setAttribute('src', './images/homem_idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './images/mulher_crianca.jpg');
            } else if (idade < 28) {
                //jovem
                img.setAttribute('src', './images/mulher_jovem.jpg');
            } else if (idade < 45) {
                //adulta
                img.setAttribute('src', './images/mulher_adulta.jpg');
            } else {
                //idosa
                img.setAttribute('src', './images/mulher_idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}