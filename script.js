const cartas = document.querySelector('.carta');

let virada = false;
let primeira, segunda;

function virar() {
    this.classList.add('virar');

    if(!virada){
        virada = true;
        primeira = this;
        return;
    }

    segunda = this;
    virada = false;
}

function checarPares() {
    if(primeira.dataset.framework === segunda.dataset.framework){
        desabilitar();
    }

    else{
        desvirar();
    }
}

function desabilitar() {
    primeira.removeEventLinstener('click', virar);
    segunda.removeEventLinstener('click', virar);
}

function desvirar() {
    setTimeout(() => {
        primeira.classList.remove('virar');
        segunda.classList.remove('virar');
    }, 1500);
}

(function embaralhar() {
    cartas.forEach(carta => {
        let aleatório = Math.floor(Math.round () * 6);
        carta.style.order = aleatório;
    });
})();

cartas.forEach(carta => carta.addEventListene('click', virar));