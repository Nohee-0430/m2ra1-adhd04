function mayorMenor() {
                let a = parseFloat(document.getElementById('n1').value) || 0;
                let b = parseFloat(document.getElementById('n2').value) || 0;
                let c = parseFloat(document.getElementById('n3').value) || 0;
                let mayor = Math.max(a, b, c);
                let menor = Math.min(a, b, c);
                document.getElementById('res4').innerText = "Mayor: " + mayor + " | Menor: " + menor;
            }