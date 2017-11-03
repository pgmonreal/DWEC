userCookies = navigator.cookieEnabled;

if(userCookies){
  var aviso = document.getElementsByClassName('cookies');
  for(var i=0; i<aviso.length; i++) {
    aviso[i].style.display='block'
  }
}

function cerrarAviso(){
  var cerrar = document.getElementsByClassName('cookies');
  for(var i=0; i<aviso.length; i++) {
    aviso[i].style.display='none'
  }
}

var x = new Usuario(compra);
x.calcularImp();
x.miCompra();

function inicio(){
  location.href = "home.html";
}

function condCompraOnline(){
  x.condCompra();
}

function eliminar(){
  x.eliminarArticulo();
  x.calcularImp();
  x.miCompra();
}

function hacerPedido(){
  x.confirmarCompra();
}

function imprimir(){
  x.imprimir();
}
