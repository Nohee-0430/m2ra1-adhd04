function verificarPerfecto() {
                let n = parseInt(document.getElementById('numPerf').value) || 0;
                if (n <= 0) {
                    document.getElementById('res8').innerText = "Ingresa un número positivo.";
                    return;
                }
                let suma = 0;
                for(let i = 1; i < n; i++) {
                    if (n % i === 0) suma += i;
                }
                if (suma === n) {
                    document.getElementById('res8').innerText = n + " es un número Perfecto.";
                } else {
                    document.getElementById('res8').innerText = n + " NO es un número Perfecto.";
                }
            }