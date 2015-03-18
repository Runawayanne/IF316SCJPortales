//Javascript para obtener datos de un formulario

function enviarFormulario(){
  //funcion que obtiene los datos del formulario.
  console.log("INFO", "Entró a enviarFormulario");
  var nombre = document.getElementById("txtNombre");
  var btn = document.getElementById("btnProcesar");

  var nombreValue = nombre.value;
  console.log("data", nombreValue);
  var msg = document.getElementById("msgHolder");
  msg.innerHTML += nombreValue + " <br/>";
}
