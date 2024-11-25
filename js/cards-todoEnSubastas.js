
<!--Efecto boton card 1-->

    document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el botón
    const button = document.querySelector(".card_button--activated");

    // Función para mostrar la notificación
    const showNotification = () => {
    button.classList.add("open"); // Añade la clase "open" para activar el efecto
};

    // Función para ocultar la notificación
    const hideNotification = () => {
    button.classList.remove("open"); // Remueve la clase "open" para volver al estado inicial
};

    // Ejecutar el efecto automáticamente
    setTimeout(() => {
    showNotification(); // Muestra la notificación
    setTimeout(hideNotification, 3000); // Oculta la notificación después de 3 segundos
}, 1000); // Espera 1 segundo antes de mostrar la notificación
});

