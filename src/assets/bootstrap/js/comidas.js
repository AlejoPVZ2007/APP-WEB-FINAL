// Función para agregar platillo al carrito
function agregarPlatillo() {
    // Obtener valores del formulario
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let distrito = document.getElementById("distrito").value.trim();

    // Validación de campos vacíos
    if (nombre === "" || correo === "" || telefono === "" || distrito === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Seleccionamos el tbody de la tabla existente
    let tabla = document.querySelector("#carrito2 tbody");

    // Insertar nueva fila en la tabla
    let fila = tabla.insertRow();
    fila.insertCell(0).innerText = nombre;
    fila.insertCell(1).innerText = correo;
    fila.insertCell(2).innerText = telefono;
    fila.insertCell(3).innerText = distrito;
    fila.insertCell(4).innerHTML = `
    <button type="button" class="btn btn-warning btn-sm me-2">Editar</button>
    <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
    <button type="button" class="btn btn-primary btn-sm me-2" onclick="comprarPlatillo(event)">Carrito</button>
`;

    // Limpiar el formulario
    limpiarFormulario();

    // Cerrar modal (si usas un modal para agregar los datos)
    let modal = bootstrap.Modal.getInstance(document.getElementById("modalFormulario"));
    modal.hide();
}

// Delegación de eventos para Editar y Eliminar
document.querySelector("#carrito2 tbody").addEventListener("click", function (event) {
    const boton = event.target;  // El botón que se hizo clic

    // Si el botón tiene la clase "btn-danger", es el botón de eliminar
    if (boton.classList.contains("btn-danger")) {
        // Confirmación de eliminación
        if (confirm("¿Seguro que deseas eliminar este contacto?")) {
            // Eliminar la fila completa
            boton.closest("tr").remove();
            console.log("Fila eliminada");  // Agregamos un log para depuración
        }
    }

    // Si el botón tiene la clase "btn-warning", es el botón de editar
    if (boton.classList.contains("btn-warning")) {
        editarFila(boton);
    }
});

// Función para editar una fila
function editarFila(boton) {
    let fila = boton.closest("tr");

    // Si el botón está en modo "Editar"
    if (boton.innerText === "Editar") {
        // Convertir celdas en inputs para que el usuario pueda editar
        for (let i = 0; i < 4; i++) {  // 0 a 3 = Nombre, Correo, Teléfono, Distrito
            let valor = fila.cells[i].innerText;
            fila.cells[i].innerHTML = `<input class="form-control form-control-sm" value="${valor}">`;
        }

        // Cambiar el texto del botón a "Guardar"
        boton.innerText = "Guardar";
        boton.classList.replace("btn-warning", "btn-success");
    } else {
        // Guardamos los cambios editados
        let nombre = fila.cells[0].querySelector("input").value.trim();
        let correo = fila.cells[1].querySelector("input").value.trim();
        let telefono = fila.cells[2].querySelector("input").value.trim();
        let distrito = fila.cells[3].querySelector("input").value.trim();

        // Validación de campos vacíos después de editar
        if (nombre === "" || correo === "" || telefono === "" || distrito === "") {
            alert("Datos inválidos");
            return;
        }

        // Actualizar las celdas con los nuevos valores
        fila.cells[0].innerText = nombre;
        fila.cells[1].innerText = correo;
        fila.cells[2].innerText = telefono;
        fila.cells[3].innerText = distrito;

        // Cambiar el botón de nuevo a "Editar"
        boton.innerText = "Editar";
        boton.classList.replace("btn-success", "btn-warning");
    }
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("distrito").value = "";
}

function comprarPlatillo(event) {
    window.location.href = "contactos.html";  
}