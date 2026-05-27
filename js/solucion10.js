function contarVocales() {
                let txt = document.getElementById('textoVocales').value.toLowerCase();
                let vocales = txt.match(/[aeiouáéíóúü]/gi);
                let cantidad = vocales ? vocales.length : 0;
                document.getElementById('res10').innerText = "Cantidad de vocales: " + cantidad;
            }