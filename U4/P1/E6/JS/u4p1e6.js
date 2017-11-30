onload = function (){
  var texto = document.getElementsByTagName("p")[0];
  var textoContenido = texto.textContent;
  var textoEs = "minusculas";

onkeydown = function (e){
  if(e.shiftKey && textoEs == "minusculas"){
    textoContenido = textoContenido.toUpperCase();
    texto.innerHTML = textoContenido;
    textoEs = "mayusculas";
  }else{
    textoContenido = textoContenido.toLowerCase();
    texto.innerHTML = textoContenido;
    textoEs = "minusculas";
  }
}

}
