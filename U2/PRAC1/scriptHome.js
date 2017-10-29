var p = new Surtido(productos);
// var miCompra = [productos[0], productos[3]];
p.dibujarSurtido();

function recarga(){
  window.location.reload();
}

function verPorPrecioMas(p){
  p.masBarato();
  p.dibujarSurtido();
}

function verPorPrecioMenos(p){
  p.masCaro();
  p.dibujarSurtido();
}

function verVegano(){
  p.dibujarSurtido(p.esVegano());
}

function condCompraOnline(){
  
}
