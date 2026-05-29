function calcularArea() {
                let b = parseFloat(document.getElementById('numBase').value) || 0;
                let a = parseFloat(document.getElementById('numAltura').value) || 0;
                let area = (b * a) / 2;
                document.getElementById('resultadoArea').innerText = "El área es: " + area;
            }
