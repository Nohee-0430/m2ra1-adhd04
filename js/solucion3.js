function verificarPar() {
                let n = parseInt(document.getElementById('numParImpar').value) || 0;
                if (n % 2 === 0) {
                    document.getElementById('resultadoParImpar').innerText = "El número " + n + " es Par.";
                } else {
                    document.getElementById('resultadoParImpar').innerText = "El número " + n + " es Impar.";
                }
            }
