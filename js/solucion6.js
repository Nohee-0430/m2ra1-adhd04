class TextoInvertido {
    constructor(textoId, resultadoId) {
        this.texto = document.getElementById(textoId);
        this.resultado = document.getElementById(resultadoId);
    }

    invertir() {
        return this.texto.value.split('').reverse().join('');
    }

    mostrarResultado() {
        this.resultado.innerText = `Texto inverso: ${this.invertir()}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textoInvertido = new TextoInvertido('texto', 'res6');
    const boton = document.getElementById('btnInvertirTexto');

    if (boton) {
        boton.addEventListener('click', () => textoInvertido.mostrarResultado());
    }
});
