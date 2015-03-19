
function generarTabla(){
  console.log("INFO","Entro aqui");
  var dimension = document.getElementById("opcionDim").value;
  console.log("DEBUG",dimension);
  var container = document.getElementById("tablaContainer");
  var width = container.offsetWidth;

  var htmlstr = "";
  for(var i = 0; i < dimension; i++){
    htmlstr += '<div class="row">';
    for(var j = 0; j < dimension; j++){
      //console.log("XY", "r: " + i + " c: " + j);
      htmlstr += '<div class="col" style="width:'+ (width  * 0.999 / dimension ) +'px;height:'+ (width   / dimension ) +'px;">' + "r: " + i + " c: " + j + "</div>";
    }
    htmlstr += "</div>";
  }
  console.log("result", htmlstr);


  container.innerHTML = htmlstr;

}
