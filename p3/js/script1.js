//alert("Hola desde Archivo Externo");
var clicks = 0;
var clicksby10 = 0;
function digaHola(){
    clicks ++;
    var mensajeDiv = document.getElementById("mensajes");
    mensajeDiv.innerHTML =
        "Clicks Realizados son " + clicks;
    if((clicks % 10) == 0){
        mensajeDiv.innerHTML +=
            "<br/>Van " + (clicks / 10) + " Decenas";
    }
}

function diceRol(){
    var suma = 0;
    for(var i = 0; i < 10 ; i++){
        var valorAleatoreo = Math.floor(Math.random() * 6) + 1;
        suma += valorAleatoreo;
    }
    console.log(suma/10);
}
