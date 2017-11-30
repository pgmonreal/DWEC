onload = function(){
  onkeydown = zoomImagen;
}

function zoomImagen(e){
  var imagen = document.getElementsByTagName("img")[0];
  if(e.keyCode == 107 && imagen.width < 1024){
    imagen.width = imagen.width + 25;
  }else if(e.keyCode == 109 && imagen.width > 150){
    imagen.width = imagen.width - 25;
  }
}
