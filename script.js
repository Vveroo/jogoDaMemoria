const cartas = document.querySelector('.carta');
const cartas = document.querySelector('.cartasMemoria');
    const cartas = document.querySelectorAll('.carta');
const cartas = document.querySelectorAll('.carta');

let virada = false;
let bloqueio = false; 
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

cartas.forEach(carta => carta.addEventListene('click', virar));       const cartas = document.querySelectorAll('.carta');
       const cartas = document.querySelectorAll('.carta');

        let virada = false;
        let bloqueio = false; 
        let primeira, segunda;
    let virada = false;
    let bloqueio = false; 
    let primeira, segunda;

        function virar() {
            if (bloqueio) return;
            if (this === primeira) return;

            this.classList.add('virada');

            if (!virada) {
                virada = true;
                primeira = this;
                return;
            }

            segunda = this;
            bloqueio = true; 
            checarPares();
        }

        function checarPares() {
            if (primeira.dataset.framework === segunda.dataset.framework) {
                desabilitar();
            } else {
                desvirar();
            }
        }

        function desabilitar() {
            primeira.removeEventListener('click', virar);
            segunda.removeEventListener('click', virar);
            resetarCartas();
        }

        function desvirar() {
            setTimeout(() => {
                primeira.classList.remove('virada');
                segunda.classList.remove('virada');
                resetarCartas();
            }, 1500);
        }

        function resetarCartas() {
            virada = false;
            bloqueio = false;
            primeira = null;
            segunda = null;
        }

        (function embaralhar() {
            cartas.forEach(carta => {
                let aleatorio = Math.floor(Math.random() * cartas.length);
                carta.style.order = aleatorio;
            });
        })();

        cartas.forEach(carta => carta.addEventListener('click', virar));