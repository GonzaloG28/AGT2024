document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todas las imágenes con la clase 'open-modal'
    const images = document.querySelectorAll('.open-modal');

    // Agregar evento a cada imagen
    images.forEach((image, index) => {
        // Calcular el ID del modal correspondiente
        const modalId = `modal-${Math.floor(index / 4) + 1}`;
        const modal = document.getElementById(modalId);

        if (!modal) {
            console.warn(`Modal con ID "${modalId}" no encontrado.`);
            return; // Si no encuentra el modal, pasa a la siguiente imagen
        }

        const closeModalBtn = modal.querySelector('.close-btn');
        const modalImages = modal.querySelectorAll('img');

        // Evento para abrir el modal
        image.addEventListener('click', () => {
            // Actualizar la imagen activa en el modal
            modalImages.forEach((modalImage, modalIndex) => {
                modalImage.style.display = modalIndex === index % 4 ? 'block' : 'none';
            });

            modal.classList.add('active'); // Mostrar el modal
        });

        // Evento para cerrar el modal
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Cerrar el modal si se hace clic fuera de la imagen
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});