
function pop_up(mensaje) {
    alert(mensaje);
}

const formulario = document.getElementById("formularioContacto");


formulario.addEventListener("submit", function(evento) {

    // Evita que la pagina se recargue
    evento.preventDefault();

    // Mostramos el mensaje
    pop_up("Mensaje enviado correctamente");

    // Limpiamos el formulario
    formulario.reset();

});
```
