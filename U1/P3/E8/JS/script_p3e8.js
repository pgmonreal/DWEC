// Función Rebajas //
function rebajar(precioOriginal, porcentajeDesc){
  var precioFin=(precioOriginal*(porcentajeDesc/100));
  return precioFin;
}
// Función Rebajas //

// Inicio Solicitud precio del articulo. //
do{
  var precio = prompt("Por favor, introduce el precio del articulo: ");

  if(isNaN(precio) || precio < 1){
    alert("Se ha introducido un caracter no válido. Por favor, reintroduce el precio.");
  }
}while(isNaN(precio) || precio < 1);
// Fin Solicitud precio del articulo. //

// Inicio solicitud del porcentaje a descontar. //
do{
  var descuento = prompt("Por favor, introduce el porcentaje a descontar (0-100): ");

  if(isNaN(descuento) || descuento < 1){
    alert("El valor introducido no puede aplicar ningún descuento. Re-introducelo.");
  }
}while(isNaN(descuento) || descuento < 1);
// Fin solicitud del porcentaje a descontar. //

precioRebajado = precio - rebajar(precio, descuento);

document.write("<h1>Rebajas</h1>");
// Impresión en pantalla //
document.write("<p><h2>Precio antes: <s>" + precio + " euros.</s></h2></p>");
document.write("<h1>Ahora por solo: " + precioRebajado + " euros.</h1>");
