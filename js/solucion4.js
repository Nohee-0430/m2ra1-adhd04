class MayorMenorTresNumeros {
    constructor(n1Id, n2Id, n3Id, resultadoId) {
        this.n1 = document.getElementById(n1Id);
        this.n2 = document.getElementById(n2Id);
        this.n3 = document.getElementById(n3Id);
        this.resultado = document.getElementById(resultadoId);
    }

    obtenerNumeros() {
        return [
            parseFloat(this.n1.value) || 0,
            parseFloat(this.n2.value) || 0,
            parseFloat(this.n3.value) || 0
        ];
    }

    calcular() {
        const numeros = this.obtenerNumeros();
        return {
            mayor: Math.max(...numeros),
            menor: Math.min(...numeros)
        };
    }

    mostrarResultado() {
        const { mayor, menor } = this.calcular();
        this.resultado.innerText = `Mayor: ${mayor} | Menor: ${menor}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mayorMenor = new MayorMenorTresNumeros('numMayorMenorUno', 'numMayorMenorDos', 'numMayorMenorTres', 'resultadoMayorMenor');
    const boton = document.getElementById('btnCalcularMayorMenor');

    if (boton) {
        boton.addEventListener('click', () => mayorMenor.mostrarResultado());
    }
});
