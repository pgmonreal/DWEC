onload = function (){
  infoTamano();
}

window.addEventListener("resize", infoTamano);

function infoTamano(){
  var tamanoVentana = document.getElementById("tamanoVentana");
  var w = window.outerWidth;
  var h = window.outerHeight;

  var tamano = "<h2>Tamaño de la ventana</h2><h1>" + w + " x " + h + "</h1>";
  tamanoVentana.innerHTML = tamano;
}
