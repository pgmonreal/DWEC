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
function mostrarSurtidoPrecio(surtido, ver){
  var i = 0;

  document.write('<table id="formatear">');
  document.write("<tr>");
  for(i=0; i<surtido.length; i++){
    if(consultaPrecios(i)>0){
      if(ver==0){
        document.write('<td><img src="img/' + surtido[i] + '.jpg" alt="' + surtido[i] + '" width="120" height="120" onclick="mostrarSurtidoPrecio(surtido, 1)"></img></td>' );
      }else{
        document.write('<td><img src="img/' + surtido[i] + '.jpg" alt="' + surtido[i] + '" width="120" height="120"></img></td>' );
      }
    }
  }
  document.write("</tr>");
  document.write("</table>");

  if(ver==1){
    limpiar();
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
}

function limpiar() {
var elim = document.getElementById("formatear");
while (elim.hasChildNodes()){
  elim.removeChild(elim.firstChild);
}
}

var surtido = generaSurtido();
