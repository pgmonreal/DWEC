onload = function (){
  var imagen = document.getElementsByTagName("img")[0];

  function enImagen(){
    imagen.src = "img/husky2.png";
  }

  function fueraImagen(){
    imagen.src = "img/husky1.png";
  }

  imagen.addEventListener("mouseover", enImagen);
  imagen.addEventListener("mouseout", fueraImagen);

  var estado = document.getElementById("estado");
  var estado_img = document.getElementById("estado_img");

  estado.onclick = function(e){
    e.preventDefault();
    imagen.removeEventListener("mouseover", enImagen);
    imagen.removeEventListener("mouseout", fueraImagen);
    estado_img.src = "img/off.png";
  }
}
