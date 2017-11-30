onload = function(){
  onkeydown = mostrarChar;
}

function mostrarChar(e){
  panel.innerHTML = '';
  var imprimir = '';
  imprimir = "Has pulsado la tecla " + e.keyCode + " que corresponde al caracter " + e.key;
  if(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey){
    console.log("Tecla especial marcada: " + e.key);
    imprimir += "<br>Se ha marcado una tecla especial, mira en la consola.";
  }
  panel.innerHTML += imprimir;
}
