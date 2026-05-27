function calcularPotencia() {
                let b = parseFloat(document.getElementById('basePot').value) || 0;
                let e = parseFloat(document.getElementById('exp').value) || 0;
                let res = Math.pow(b, e);
                document.getElementById('res5').innerText = b + " elevado a " + e + " es: " + res;
            }