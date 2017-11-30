onload = function(){
  var seleccion = document.getElementById("mascota_programmer");
  seleccion.addEventListener("change", cambioImagen);
}


function cambioImagen(){
  var seleccion = document.getElementById("mascota_programmer");
  var imagen = document.getElementsByTagName("img")[0];
  imagen.src = "img/" + seleccion.value + ".jpg";
}
