function invertirTexto() {
                let txt = document.getElementById('texto').value;
                let inverso = txt.split('').reverse().join('');
                document.getElementById('res6').innerText = "Texto inverso: " + inverso;
            }