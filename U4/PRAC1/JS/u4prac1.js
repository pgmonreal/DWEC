window.onload = document.getElementById("cargando").style.display="none";

var regalos = document.getElementsByTagName("img");
var seleccion;

regalos[1].onmouseover = function(){
  seleccion = 1;
}

regalos[2].onmouseover = function(){
  seleccion = 2;
}

regalos[3].onmouseover = function(){
  seleccion = 3;
}

for(var i=0; i<regalos.length; i++){
  regalos[i].addEventListener("click", seleccionUsuario);
}

function seleccionUsuario(){
  descubrir(seleccion);
};

function wooh(){
  var video = document.getElementsByTagName("video")[0];
  video.play();
  video.style.display = "block";
  setTimeout(function(){ video.style.display = "none"; }, 14000);
}

document.body.addEventListener("mouseover", ocultarPistas);

oncontextmenu = function(e){
  e.preventDefault();
  var pista = document.getElementsByClassName("pista");
  for(var i=0; i<pista.length; i++){
    pista[i].style.display = "block";
  }
}

function ocultarPistas(){
  var pista = document.getElementsByClassName("pista");
  for(var i=0; i<pista.length; i++){
    pista[i].style.display = "none";
  }
}

function descubrir(seleccion){
  var regalos = document.getElementsByTagName("img");
  regalos[seleccion].src = "img/" + seleccion + ".gif";
  wooh();

  for(var i=0; i<regalos.length; i++){
    regalos[i].removeEventListener("click", seleccionUsuario);
  }

  for(var i=0; i<regalos.length; i++){
    regalos[i].addEventListener("click", function(){
      alertas(seleccion);
    });
  }

  alertas(seleccion);
}

function alertas(seleccion){
  if(seleccion == 1){
    alert("¡Te ha tocado un viaje a Nueva York!");
  }else if(seleccion == 2){
    alert("No te ha tocado nada, no te preocupes, por lo menos tienes salud.");
  }else if(seleccion == 3){
    alert("¡Te ha tocado 1 año de pizza GRATIS!");
  }
}
