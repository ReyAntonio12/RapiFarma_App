/* Guardar datos de registro */

function guardarDatos() {
    var nombre = document.getElementById('inputNombre').value;
    var email = document.getElementById('inputEmail').value;
    var numero = document.getElementById('inputNumbero').value;
  
    var datos = {
      nombre: nombre,
      email: email,
      numero: numero
    };
  
    localStorage.setItem('formularioDatos', JSON.stringify(datos));

    alert('¡Hola! Haz Enviado tus datos');
  }