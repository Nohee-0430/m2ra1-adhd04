
// Función para voltear la tarjeta de Transformaciones (Card 3)
function toggleTransform() {
    const card = document.getElementById('card-transform');
    if (card) {
        card.classList.toggle('is-flipped');
    }
}

// Acción para el elemento interactivo de la Card 1 (Caja de demo)
document.addEventListener('DOMContentLoaded', () => {
    const demoCaja = document.getElementById('demo-caja');
    if (demoCaja) {
        demoCaja.onclick = function () {
            // Cambia entre morado y azul
            this.style.backgroundColor = this.style.backgroundColor === 'rgb(139, 92, 246)' ? '#3b82f6' : '#8b5cf6';
        };
    }
});
