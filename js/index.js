document.getElementById('filter-icon').addEventListener('click', function() {
    this.classList.toggle('active');
});


    document.addEventListener("DOMContentLoaded", function() {
        // Selecciona el elemento del dropdown
        var dropdown = document.querySelector('.dropdown');

        // Agrega un listener para el evento click en el dropdown
        dropdown.addEventListener('click', function(event) {
            // Detiene la propagación del evento para evitar que se cierre el dropdown
            event.stopPropagation();
        });

        // Agrega un listener para el evento click en el documento
        document.addEventListener('click', function() {
            // Cierra el dropdown cuando se hace clic fuera de él
            var dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        });
    });

