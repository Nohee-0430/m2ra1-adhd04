function verificarPerfecto() {
                let n = parseInt(document.getElementById('numPerfecto').value) || 0;
                if (n <= 0) {
                    document.getElementById('resultadoPerfecto').innerText = "Ingresa un número positivo.";
                    return;
                }
                let suma = 0;
                for(let i = 1; i < n; i++) {
                    if (n % i === 0) suma += i;
                }
                if (suma === n) {
                    document.getElementById('resultadoPerfecto').innerText = n + " es un número Perfecto.";
                } else {
                    document.getElementById('resultadoPerfecto').innerText = n + " NO es un número Perfecto.";
                }
            }
