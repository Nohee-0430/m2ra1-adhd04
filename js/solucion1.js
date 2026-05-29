class PromedioTresNumeros {
    constructor(num1Id, num2Id, num3Id, resultadoId) {
        this.num1 = document.getElementById(num1Id);
        this.num2 = document.getElementById(num2Id);
        this.num3 = document.getElementById(num3Id);
        this.resultado = document.getElementById(resultadoId);
    }

    obtenerNumero(campo) {
        return parseFloat(campo.value) || 0;
    }

    calcular() {
        const n1 = this.obtenerNumero(this.num1);
        const n2 = this.obtenerNumero(this.num2);
        const n3 = this.obtenerNumero(this.num3);
        return (n1 + n2 + n3) / 3;
    }

    mostrarResultado() {
        const promedio = this.calcular();
        this.resultado.innerText = `El promedio es: ${promedio.toFixed(2)}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const promedio = new PromedioTresNumeros('num1', 'num2', 'num3', 'res1');
    const boton = document.getElementById('btnPromedio');

    if (boton) {
        boton.addEventListener('click', () => promedio.mostrarResultado());
    }
});
