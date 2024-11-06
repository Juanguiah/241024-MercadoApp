//Manipulacion del DOM
// La manipulación del DOM (Document Object Model), se refiere a la capacidad 
// de modificar estructura, contenido y estilo de un documento HTML.

//Formas de acceder a un elemento DOM

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskInputValue = taskInput.value.trim();
    //trim quita los espacios en blanco al inicio y al final

    if(taskInputValue !== ''){
        tasks.push({
            id: Date.now(),
            text: taskInputValue,
            completed:false
        })
        renderTask();
        taskInput.value = "";
    }
}

//Funcion para mostrar las tasks en pantalla:
function renderTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";// Limpiar la lista existente. En un innerHTML de un elemento HTML, 
    //estás obteniendo una representación de cadena de todo el contenido HTML 
    //dentro de ese elemento, incluyendo sus etiquetas, atributos y texto.
    tasks.forEach((data, index) =>{
        //Crear el elemento de la lista
        const li = document.createElement("li");
        li.classList.add("alinear-izquierda"); // Agregar la clase de alineación

        // Crear el texto de la tarea
        const taskText = document.createElement("span");
        taskText.textContent = data.text;

        // Aplicar estilo si la tarea está completada
        if(data.completed){
            li.style.textDecoration = "line-through";
        }

        // Crear el botón de completar
        const completeButton = document.createElement("button");
        completeButton.textContent = data.completed ? "Desmarcar" : "Completar";
        completeButton.addEventListener("click", () => toggleComplete(index));

        // Crear el botón de eliminar
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => deleteTask(index));

        // Agregar elementos de la lista a cada tarea:
        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        // Agregar el elemento de la lista al contenedor
        taskList.appendChild(li);
    })
}

function toggleComplete(index){
    // Cambiar el estado de 'completed' de la tarea
    tasks[index].completed = !tasks[index].completed;
    // Volver a renderizar la lista para reflejar los cambios
    renderTask();
}

function deleteTask(index){
    tasks.splice(index, 1); // Eliminar la tarea del arreglo
    renderTask(); // Volver a renderizar la lista
}
