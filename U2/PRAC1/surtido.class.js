function Surtido(productos){
  this.productos = productos;

  this.masBarato = function(){
    this.productos.sort(function(a1, a2){
      return a1.precio - a2.precio;
    })
  }

  this.masCaro = function(){
    this.productos.sort(function(a1, a2){
      return a2.precio - a1.precio;
    })
  }

  this.esVegano = function(){
      return this.productos.filter(function(articulos){
      return articulos.vegano;
    });
  }

  

  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if(produ == undefined){
      for (var i = 0; i < this.productos.length; i++) {
        str+= "<div>"
        str+= "<img src='" + this.productos[i].foto + "' alt='"
        str+= this.productos[i].nombre + "'>";
        str+= "<p>Producto: " + this.productos[i].nombre + "</p>";
        str+= "<p>" + this.productos[i].descripcion + "</p>";
        str+= "<p><b>" + this.productos[i].precio + " €</b></p>";
        str+= "</div>"
      }
    }else{
      for (var i = 0; i < produ.length; i++) {
        str+= "<div>"
        str+= "<img src='" + produ[i].foto + "' alt='"
        str+= produ[i].nombre + "'>";
        str+= "<p>Producto: " + produ[i].nombre + "</p>";
        str+= "<p>" + produ[i].descripcion + "</p>";
        str+= "<p><b>" + produ[i].precio + " €</b></p>";
        str+= "</div>"
      }
    }
          cuerpo.innerHTML = str;
  }
}
