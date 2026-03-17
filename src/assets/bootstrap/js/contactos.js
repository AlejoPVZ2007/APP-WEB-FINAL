function agregarPlatillo()
{

    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;

    if(nombre=="" || descripcion=="" || precio=="" || cantidad=="" || categoria==""){
    alert("Complete todos los campos");
    return;
    }

    let subtotal = precio * cantidad;

    let tabla = document.querySelector("#tablaCarrito tbody");

    let fila = tabla.insertRow();

    fila.insertCell(0).innerText = nombre;
    fila.insertCell(1).innerText = descripcion;
    fila.insertCell(2).innerText = precio;
    fila.insertCell(3).innerText = cantidad;
    fila.insertCell(4).innerText = categoria;
    fila.insertCell(5).innerText = subtotal;

    fila.insertCell(6).innerHTML = `
    <button class="btn btn-warning btn-sm" onclick="editarFila(this)">Editar</button>
    <button class="btn btn-danger btn-sm" onclick="eliminarFila(this)">Eliminar</button>
    `;

    limpiarFormulario();
}

function editarFila(boton) {
    let fila = boton.closest("tr");
    if (boton.innerText === "Editar") {
        for (let i = 0; i < 5; i++) { // 0 a 4 = nombre, descripción, precio, cantidad, categoría
            let valor = fila.cells[i].innerText;
            fila.cells[i].innerHTML = `<input class="form-control form-control-sm" value="${valor}">`;
        }
        boton.innerText = "Guardar";
        boton.classList.replace("btn-warning", "btn-success");
    } else {
        let nombre = fila.cells[0].querySelector("input").value.trim();
        let descripcion = fila.cells[1].querySelector("input").value.trim();
        let precio = fila.cells[2].querySelector("input").value.trim();
        let cantidad = fila.cells[3].querySelector("input").value.trim();
        let categoria = fila.cells[4].querySelector("input").value.trim(); // <-- CORREGIDO

        if (!nombre || !descripcion || !precio || !cantidad || !categoria) {
            alert("Completa todos los campos");
            return;
        }

        fila.cells[0].innerText = nombre;
        fila.cells[1].innerText = descripcion;
        fila.cells[2].innerText = parseFloat(precio).toFixed(2);
        fila.cells[3].innerText = cantidad;
        fila.cells[4].innerText = categoria;

        // Actualizar subtotal automáticamente
        fila.cells[5].innerText = (parseFloat(precio) * parseInt(cantidad)).toFixed(2);

        boton.innerText = "Editar";
        boton.classList.replace("btn-success", "btn-warning");
    }
}

function eliminarFila(boton) {
    boton.closest("tr").remove();
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "";

}