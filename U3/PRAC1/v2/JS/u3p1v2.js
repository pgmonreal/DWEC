function anadirElemento(){
  var texto = document.getElementsByName("producto")[0];
  var color = document.getElementById("selector");
  var linea = document.createElement("p");

  if(texto.value && color.value!=0){
    linea.innerHTML = texto.value;
    linea.style.color = color.value;
    document.body.appendChild(linea);
    linea.setAttribute("onclick", "eliminarElemento()");
  }else if (!texto.value) {
    alert("No has introducido ningún producto.");
  }else if (color.value == 0){
    alert("No has seleccionado ninguna categoría.")
  }else{
    alert("Error desconocido.");
  }
}

function eliminarElemento(){
  var eliminar = document.querySelector("p:hover");
  var decision = confirm("¿Deseas eliminar " + eliminar.textContent + "?");
  if(decision){
    document.body.removeChild(eliminar);
  }
}
