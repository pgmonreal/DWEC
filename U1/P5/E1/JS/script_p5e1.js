/* Función que contiene el vector con el surtido */
function generaSurtido(){
  var surtido = ["periodicos", "revistas", "fasciculos", "patatas", "golosinas", "helados", "transporte", "recargamovil"];
  return surtido;
}

/* Funcion que contiene el vector con los precios */
function consultaPrecios(x){
  var precio = [1, 2, 5.99, 0.45, 0.05, 2.90, 10, 5];
  return precio[x];
}

/* Función para mostrar cada precio y su articulo */
function mostrarSurtidoPrecio(surtido){
  var i = 0;

  document.write("<table>");
  document.write("<tr>");
  for(i=0; i<surtido.length; i++){
    if(consultaPrecios(i)>0){
      document.write('<td><img src="img/' + surtido[i] + '.jpg" alt="' + surtido[i] + '" width="120" height="120"</img></td>' )
    }
  }
  document.write("</tr>");
  document.write("</table>");

  document.write("<table>");
  document.write("<tr>");
  for(i=0; i<surtido.length; i++){
    if(consultaPrecios(i)>0){
      if(consultaPrecios(i)<1){
        precioCentimos = consultaPrecios(i)*100;
        document.write('<td width="120" align="center"><h2>' + precioCentimos + 'cts.</h2></td>');
      }else{
        document.write('<td width="120" align="center"><h2>' + consultaPrecios(i) + '€</h2></td>');
      }
    }
  }
  document.write("</tr>");
  document.write("</table>");
}

var surtido = generaSurtido();
mostrarSurtidoPrecio(surtido)
