class FactorialNumero {
    constructor(numeroId, resultadoId) {
        this.numero = document.getElementById(numeroId);
        this.resultado = document.getElementById(resultadoId);
    }

    obtenerNumero() {
        return parseInt(this.numero.value, 10) || 0;
    }

    calcular() {
        const numero = this.obtenerNumero();
        let factorial = 1;

        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }

        return factorial;
    }

    mostrarResultado() {
        const numero = this.obtenerNumero();

        if (numero < 0) {
            this.resultado.innerText = 'El factorial no esta definido para numeros negativos.';
            return;
        }

        this.resultado.innerText = `El factorial de ${numero} es: ${this.calcular()}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const factorial = new FactorialNumero('numFact', 'res7');
    const boton = document.getElementById('btnFactorial');

    if (boton) {
        boton.addEventListener('click', () => factorial.mostrarResultado());
    }
});
