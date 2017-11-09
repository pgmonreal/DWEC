onload = function (){
  var parrafos = document.getElementById("contiene_ps");
  parrafos = parrafos.getElementsByTagName("p");

  for(var i=0; i<parrafos.length; i++){
    parrafos[i].innerHTML = "Este párrafo es el número " + (i+1);
  }
}

function recorreTag(){
  var parrafos = document.getElementById("contiene_ps");
  parrafos = parrafos.getElementsByTagName("p");
  var color = document.getElementById("txtColor").value;
  for(var i=0; i<parrafos.length; i++){
    parrafos[i].style.color = color;
  }
}
