/*
 * Script para Animaciones de Scroll (Intersection Observer)
 * Proyecto: Gladys del Campo
 */

document.addEventListener("DOMContentLoaded", function() {

    // 1. Selecciona todos los elementos que queremos animar
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    // 2. Si no hay elementos, no hagas nada
    if (!animatedElements) {
        return;
    }

    // 3. Opciones para el "observador"
    const observerOptions = {
        root: null, // Observa en relación al viewport
        rootMargin: "0px",
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    // 4. Esta es la función que se ejecuta cuando un elemento entra en pantalla
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                // Añade la clase 'is-visible' que activa el CSS
                entry.target.classList.add("is-visible");

                // Deja de observar este elemento (la animación solo ocurre una vez)
                observer.unobserve(entry.target);
            }
        });
    }

    // 5. Crea el observador
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // 6. Le dice al observador que vigile cada uno de nuestros elementos
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});