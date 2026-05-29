class ContadorVocales {
    constructor(textoId, resultadoId) {
        this.texto = document.getElementById(textoId);
        this.resultado = document.getElementById(resultadoId);
    }

    contar() {
        const vocales = this.texto.value.match(/[aeiouáéíóúü]/gi);
        return vocales ? vocales.length : 0;
    }

    mostrarResultado() {
        this.resultado.innerText = `Cantidad de vocales: ${this.contar()}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contador = new ContadorVocales('textoVocales', 'res10');
    const boton = document.getElementById('btnContarVocales');

    if (boton) {
        boton.addEventListener('click', () => contador.mostrarResultado());
    }
});
