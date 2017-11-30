function imprimeDatos(){
  document.write("<br><br>Código: " + this.codigo);
  document.write("<br>Nombre: " + this.nombre);
  document.write("<br>Precio: " + this.precio);
}

function Producto(codigo, nombre, ingredientes){
  this.codigo = codigo;
  this.nombre = nombre;
  var precio = (Math.random()*2+1);
  this.precio = precio.toFixed(2);
  this.ingredientes = ingredientes.sort();
  this.imprimeDatos = imprimeDatos;
}

Producto.prototype.verIngredientes = function(){
  var ventana = window.open("", "", "width=300,height=300");
  ventana.document.write("<br>Ingredientes: ");
  for(var i=0; i < this.ingredientes.length; i++){
    ventana.document.write("<br>" + this.ingredientes[i]);
  }
  ventana.document.write("<br><br><button onclick='window.close()'>Cerrar</button>");
}

Producto.prototype.borraIngredientes = function(){
  if(this.ingredientes.length > 1){
    this.ingredientes.pop();
  }else{
    alert("No es posible eliminar ingredientes de " + this.nombre + " porque solo queda 1.");
  }
}

Producto.prototype.buscaInfo = function(){
  var url = 'https://www.google.es/search?q=' + this.nombre;
  window.open(url, "", "width=500, height=500");
}

var prod1 = new Producto("1", "Pizza Hawaiana", ["Queso", "Tomates", "Jamon", "Piña", "Champiñones"]);
var prod2 = new Producto("2", "Cocacola", ["Agua", "Azucar", "Saborizante de caramelo"]);
var prod3 = new Producto("3", "Bocadillo", ["Pan", "Pechuga de pollo", "Bravas", "All-i-oli"]);

var productos = new Array(prod1, prod2, prod3);

for(i=0; i<productos.length; i++){
  productos[i].imprimeDatos();
  document.write("<br><input type='button' name='botonBorrar' value='Ver ingredientes' onclick='productos[" + i + "].verIngredientes()'>");
  document.write("<input type='button' name='botonBorrar' value='Eliminar ingrediente' onclick='productos[" + i + "].borraIngredientes()'>");
  document.write("<input type='button' name='botonInfo' value='Más información' onclick='productos[" + i + "].buscaInfo()'>");
}
