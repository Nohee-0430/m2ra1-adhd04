class ContadorVocales {
    constructor(textoId, resultadoId) {
        this.texto = document.getElementById(textoId);
        this.resultado = document.getElementById(resultadoId);
    }

    contar() {
        const vocales = this.texto.value.match(/[aeiou\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc]/gi);
        return vocales ? vocales.length : 0;
    }

    mostrarResultado() {
        this.resultado.innerText = `Cantidad de vocales: ${this.contar()}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contador = new ContadorVocales('txtVocales', 'resultadoVocales');
    const boton = document.getElementById('btnContarVocales');

    if (boton) {
        boton.addEventListener('click', () => contador.mostrarResultado());
    }
});

