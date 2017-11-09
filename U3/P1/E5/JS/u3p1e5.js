// function modificarSize(){
//   var titulo = document.querySelector("h1");
//   var parrafos = document.querySelectorAll("p");
//
//   titulo.style.fontSize = document.getElementById("combo").value;
//
//   for(var i=0; i<parrafos.length; i++){
//     parrafos[i].style.fontSize = document.getElementById("combo").value;
//   }
// }
onload = function (){
  var p_a_destruir = document.querySelector("p");
  document.body.removeChild(p_a_destruir);
}
