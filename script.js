// Función para actualizar la hora y fecha cada segundo
function actualizarFechaHora() {
    const fecha = new Date();
    
    // Obtener la fecha en formato dd/mm/yyyy
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    const fechaActual = `${dia}/${mes}/${anio}`;

    // Obtener la hora en formato hh:mm:ss
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
    const horaActual = `${horas}:${minutos}:${segundos}`;

    // Actualizar los elementos HTML
    document.getElementById('fecha').textContent = fechaActual;
    document.getElementById('hora').textContent = horaActual;
}

// Función para obtener la localización del usuario
function obtenerLocalizacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarPosicion, mostrarError);
    } else {
        document.getElementById('localizacion').textContent = "La geolocalización no es soportada por este navegador.";
    }
}

// Función para mostrar la posición del usuario
function mostrarPosicion(posicion) {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;
    document.getElementById('localizacion').textContent = `Latitud: ${latitud.toFixed(2)}, Longitud: ${longitud.toFixed(2)}`;
}

// Función para manejar errores en la geolocalización
function mostrarError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('localizacion').textContent = "Permiso denegado para obtener la localización.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('localizacion').textContent = "La información de localización no está disponible.";
            break;
        case error.TIMEOUT:
            document.getElementById('localizacion').textContent = "La solicitud de localización ha caducado.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('localizacion').textContent = "Un error desconocido ha ocurrido.";
            break;
    }
}

// Inicializar la actualización de la hora y la obtención de la localización
setInterval(actualizarFechaHora, 1000);  // Actualizar cada segundo
obtenerLocalizacion();
