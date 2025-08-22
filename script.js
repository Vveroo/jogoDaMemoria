const cartas = document.querySelectorAll('.carta');
 
//js funcionnando
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