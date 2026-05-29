class PotenciaNumero {
    constructor(baseId, exponenteId, resultadoId) {
        this.base = document.getElementById(baseId);
        this.exponente = document.getElementById(exponenteId);
        this.resultado = document.getElementById(resultadoId);
    }

    obtenerBase() {
        return parseFloat(this.base.value) || 0;
    }

    obtenerExponente() {
        return parseFloat(this.exponente.value) || 0;
    }

    calcular() {
        return Math.pow(this.obtenerBase(), this.obtenerExponente());
    }

    mostrarResultado() {
        const base = this.obtenerBase();
        const exponente = this.obtenerExponente();
        this.resultado.innerText = `${base} elevado a ${exponente} es: ${this.calcular()}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const potencia = new PotenciaNumero('numBasePotencia', 'numExponentePotencia', 'resultadoPotencia');
    const boton = document.getElementById('btnCalcularPotencia');

    if (boton) {
        boton.addEventListener('click', () => potencia.mostrarResultado());
    }
});
