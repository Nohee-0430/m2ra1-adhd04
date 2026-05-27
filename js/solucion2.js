function calcularArea() {
                let b = parseFloat(document.getElementById('base').value) || 0;
                let a = parseFloat(document.getElementById('altura').value) || 0;
                let area = (b * a) / 2;
                document.getElementById('res2').innerText = "El área es: " + area;
            }