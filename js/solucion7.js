function calcularFactorial() {
                let n = parseInt(document.getElementById('numFact').value) || 0;
                if (n < 0) {
                    document.getElementById('res7').innerText = "El factorial no está definido para números negativos.";
                    return;
                }
                let fact = 1;
                for(let i = 1; i <= n; i++) {
                    fact *= i;
                }
                document.getElementById('res7').innerText = "El factorial de " + n + " es: " + fact;
            }