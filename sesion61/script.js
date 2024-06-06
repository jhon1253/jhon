document.addEventListener('DOMContentLoaded', function() {
    const tareas = document.getElementById('tareas');
    const tareaUsuario = document.getElementById('tareaUsuario');
    const tareasPendientes = document.getElementById('tareasPendientes');
  
    tareas.addEventListener('submit', function(evento) {
      evento.preventDefault();
      if (tareaUsuario.value !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = tareaUsuario.value;
        nuevaTarea.addEventListener('click', function() {
          this.remove();
        });
        tareasPendientes.appendChild(nuevaTarea);
        tareaUsuario.value = '';
      }
    });
  });
