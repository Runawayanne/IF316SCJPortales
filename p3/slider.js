var imagenes = new Array();
var current = 0;
function inicializarSlider(){
  imagenes = document.getElementsByClassName("img");
  imagenes[1].style.opacity = "0";
  imagenes[2].style.opacity = "0";
}

function showImage(index){
  var realIndex = index - 1;
  var destiny = 0;
  var origin = 1;
  var delta = 1/20;
  if (realIndex != current ){
    function setOpacity(){
      destiny += delta;
      origin -= delta;
      imagenes[realIndex].style.opacity=destiny;
      imagenes[current].style.opacity=origin;
      if(destiny < 1){
        setTimeout(fn,1000/20);
      }else{
        current = realIndex;
      }
    }
    var fn = setOpacity
    setTimeout(fn,1000/20);
  }
  return false;
}
