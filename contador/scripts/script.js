function contar() {
    let inicio = document.querySelector('input#txtinicio');
    let fim = document.querySelector('input#txtfim');
    let passo = document.querySelector('input#txtpasso');
    let res = document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! Faltam dados.';
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1:');
            p = 1;
        }

        if (i < f) {
            // Contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        } else {
            // Contagem regressiva
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        }
        res.innerHTML += ` FIM! \u{1F3C1}`;
    }
}