function calcularPromedio() {
                let n1 = parseFloat(document.getElementById('num1').value) || 0;
                let n2 = parseFloat(document.getElementById('num2').value) || 0;
                let n3 = parseFloat(document.getElementById('num3').value) || 0;
                let prom = (n1 + n2 + n3) / 3;
                document.getElementById('res1').innerText = "El promedio es: " + prom.toFixed(2);
            }