function verificarPrimo() {
                let n = parseInt(document.getElementById('numPrimo').value) || 0;
                if (n <= 1) {
                    document.getElementById('resultadoPrimo').innerText = n + " NO es un número Primo.";
                    return;
                }
                let esPrimo = true;
                for(let i = 2; i <= Math.sqrt(n); i++) {
                    if(n % i === 0) {
                        esPrimo = false;
                        break;
                    }
                }
                if (esPrimo) {
                    document.getElementById('resultadoPrimo').innerText = n + " es un número Primo.";
                } else {
                    document.getElementById('resultadoPrimo').innerText = n + " NO es un número Primo.";
                }
            }
