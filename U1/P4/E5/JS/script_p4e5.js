

var miCalculadora = function (){
  var operacion = prompt("Por favor, introduce tu operacion (Ej. 5+8):");
  var resultado = eval(operacion);

  if(isFinite(resultado)==false || isNaN(resultado)==true){
    console.warn("Error de sintaxis.");
  }else{
    document.write("Operaci&oacute;n correcta: " + operacion + " = " + resultado);
  }
}

miCalculadora();
