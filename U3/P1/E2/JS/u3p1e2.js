var miH = document.getElementsByTagName("h1")[0];
miH.innerHTML = "Sugerencias (y Reclamaciones)";

var destacados = document.querySelector(".destacado");
destacados.style.fontWeight = "bold";

var resultado = document.getElementById("resultado");
resultado.style.display = "none";

var sugerencia = document.getElementsByName("sugerencia")[0];
sugerencia.setAttribute("required", "required");

function mostrar(){
  resultado.style.display = "block";
}
