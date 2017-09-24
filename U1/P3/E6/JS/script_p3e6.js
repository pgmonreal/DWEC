function multiplicar(var1, var2){
  var resultado = var1*var2;
  return resultado;
}

do{
  var tabla = prompt("¿Qué tabla quieres aprender hoy (del 0 al 9)?");

  if(tabla < 0 || tabla > 9){
    alert("Por favor, introduce un número comprendido entre 0 y 9.")
  }

}while(tabla < 0 || tabla > 9);

for(var i=0; i<=10; i++){
  var resultado = multiplicar(tabla, i);
  document.write("<p>" + tabla + " x " + i + " = " + resultado + "</p>");
}
