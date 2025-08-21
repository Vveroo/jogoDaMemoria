const cartas = document.querySelector('.cartas-memoria');

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

