document.write("<h1>Rebajas</h1>");

// Inicio Solicitud precio del articulo. //
var precioValido = 0;

do{
  var precioSin = prompt("Por favor, introduce el precio del articulo: ");

  if(precioSin > 0 || precioSin < 1000000){
    precioValido = 1;
  }
  else{
    alert("Se ha introducido un caracter no válido. Por favor, reintroduce el precio.");
    precioValido = 0;
  }

}while(precioValido == 0);
// Fin Solicitud precio del articulo. //

// Solicitud de la cantidad a descontar. //
var descValido = 0;

do{
  var descuento = prompt("Por favor, introduce el porcentaje a descontar (0-100): ");

  if(descuento >= 0 || descuento <=100){
    descValido = 1;
  }
  else{
    alert("El valor introducido no puede aplicar ningún descuento. Re-introducelo.");
    descValido = 0;
  }

}while(descValido == 0);
// Fin de la cantidad a descontar. //

// Calculo del descuento //
var operador1 = descuento/100;
var operador2 = 1-operador1;
var precioDefinitivo = precioSin*operador2;
// Fin Calculo del descuento //

// Impresión en pantalla //
document.write("<p><h2>Precio antes: <s>" + precioSin + " euros.</s></h2></p>");
document.write("<h1>Ahora por solo: " + precioDefinitivo + " euros.</h1>");
