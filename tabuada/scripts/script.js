function tabuada() {
    let num = document.querySelector('input#txtnum');
    let tab = document.querySelector('select#seltab');

    if (num.value.length == 0) {
        alert('Por favor, digite um número.');
    } else {
        let n = Number(num.value);
        let cont = 1;
        tab.innerHTML = '';

        while (cont <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${cont} = ${n*cont}`;
            tab.appendChild(item);
            cont++;
        }
    }
}