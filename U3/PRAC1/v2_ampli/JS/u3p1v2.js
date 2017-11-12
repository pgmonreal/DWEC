function anadirElemento(){
  var texto = document.getElementsByName("producto")[0];
  var color = document.getElementById("selector");
  var linea = document.createElement("p");
  var div = document.createElement("div");

  if(texto.value && color.value!=0){
    linea.innerHTML = texto.value;
    linea.style.color = color.value;
    linea.setAttribute("onclick", "eliminarElemento()");

    if(document.getElementById(selector.options[selector.selectedIndex].text.toLowerCase())<1){
      var idNom = selector.options[selector.selectedIndex].text.toLowerCase();
      div.setAttribute("id", idNom);
      div.style.border = "solid 2px " + color.value;
      document.body.appendChild(div);
      div.appendChild(linea);
    }else if(document.getElementById(selector.options[selector.selectedIndex].text.toLowerCase())) {
      var categoria = document.getElementById(selector.options[selector.selectedIndex].text.toLowerCase());
      categoria.appendChild(linea);
    }

    texto.value = "";
    selector.selectedIndex=0;
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
    if(eliminar.parentNode.children.length>1){
      eliminar.parentNode.removeChild(eliminar);
    }else {
      eliminar.parentNode.remove();
    }
  }
}

function borrarLista(){
  var listaCompleta = document.querySelectorAll("div");

  for(var i=0; i<listaCompleta.length; i++){
    listaCompleta[i].parentNode.removeChild(listaCompleta[i]);
  }

}
