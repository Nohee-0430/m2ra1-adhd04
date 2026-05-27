function verificarPar() {
                let n = parseInt(document.getElementById('num').value) || 0;
                if (n % 2 === 0) {
                    document.getElementById('res3').innerText = "El número " + n + " es Par.";
                } else {
                    document.getElementById('res3').innerText = "El número " + n + " es Impar.";
                }
            }