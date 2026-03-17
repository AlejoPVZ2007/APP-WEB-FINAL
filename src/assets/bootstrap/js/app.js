let tablaCreada = false;

function crearTabla() {

    const contenedor = document.getElementById("contenedorTabla");

    contenedor.innerHTML = `
        <div class="table-responsive">
            <table class="table table-striped table-bordered text-center" id="tablaEstudiantes">
                <thead class="table-dark">
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Promedio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    `;

    tablaCreada = true;
}

function agregarEstudiante(){

    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);

    if(nombre === "" || edad === "" || isNaN(nota1) || isNaN(nota2)){
        alert("Completa todos los campos correctamente");
        return;
    }

    if(!tablaCreada){
        crearTabla();
    }

    let promedio = ((nota1 + nota2)/2).toFixed(2);
    let tabla = document.querySelector("#tablaEstudiantes tbody");

    let fila = tabla.insertRow();

    fila.insertCell(0).innerHTML = `<span ondblclick="editarNombre(this)">${nombre}</span>`;
    fila.insertCell(1).innerText = edad;
    fila.insertCell(2).innerText = nota1;
    fila.insertCell(3).innerText = nota2;
    fila.insertCell(4).innerText = promedio;
    fila.insertCell(5).innerHTML =
        `<button class="btn btn-warning btn-sm me-2" onclick="editarFila(this)">Editar</button>
         <button class="btn btn-danger btn-sm" onclick="eliminarFila(this)">Eliminar</button>`;

    limpiarFormulario();
}

function editarFila(boton){

    let fila = boton.closest("tr");

    if(boton.innerText === "Editar"){

        for(let i = 0; i < 4; i++){
            let valor = fila.cells[i].innerText;
            fila.cells[i].innerHTML = `<input class="form-control form-control-sm" value="${valor}">`;
        }

        boton.innerText = "Guardar";
        boton.classList.remove("btn-warning");
        boton.classList.add("btn-success");

    } else {

        let nombre = fila.cells[0].querySelector("input").value;
        let edad = fila.cells[1].querySelector("input").value;
        let nota1 = parseFloat(fila.cells[2].querySelector("input").value);
        let nota2 = parseFloat(fila.cells[3].querySelector("input").value);

        if(nombre === "" || edad === "" || isNaN(nota1) || isNaN(nota2)){
            alert("Datos inválidos");
            return;
        }

        let promedio = ((nota1 + nota2)/2).toFixed(2);

        fila.cells[0].innerHTML = `<span ondblclick="editarNombre(this)" style="cursor:pointer">${nombre}</span>`;
        fila.cells[1].innerText = edad;
        fila.cells[2].innerText = nota1;
        fila.cells[3].innerText = nota2;
        fila.cells[4].innerText = promedio;

        boton.innerText = "Editar";
        boton.classList.remove("btn-success");
        boton.classList.add("btn-warning");
    }
}

function eliminarFila(boton){
    if(confirm("¿Seguro que deseas eliminar este estudiante?")){
        boton.closest("tr").remove();
    }
}

function limpiarFormulario(){
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
}

function editarNombre(elemento){

    let valorActual = elemento.innerText;

    elemento.innerHTML = `<input type="text" 
                            class="form-control form-control-sm" 
                            value="${valorActual}" 
                            onblur="guardarNombre(this)" 
                            onkeydown="if(event.key==='Enter') guardarNombre(this)">`;

    elemento.querySelector("input").focus();
}

function guardarNombre(input){

    let nuevoValor = input.value.trim();

    if(nuevoValor === ""){
        alert("El nombre no puede estar vacío");
        input.focus();
        return;
    }

    input.parentElement.innerHTML = 
        `<span ondblclick="editarNombre(this)">${nuevoValor}</span>`;
}


