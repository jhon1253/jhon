document.addEventListener('DOMContentLoaded', function() {
    const tareas = document.getElementById('tareas');
    const entradaTarea = document.getElementById('entradaTarea');
    const listaTareas = document.getElementById('listaTareas');
  
    tareas.addEventListener('submit', function(event) {
      event.preventDefault();
      if (entradaTarea.value !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.innerText = entradaTarea.value;
        nuevaTarea.addEventListener('click', function() {
          this.remove();
        });
        listaTareas.appendChild(nuevaTarea);
        entradaTarea.value = '';
      }
    });
  });