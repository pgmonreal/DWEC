var compra = [
  {
    nombre:'Pescado',
    descripcion: 'Salmón fresco. Envase de 500gr.',
    foto:'http://adiochiropracticclinic.com/wp-content/uploads/sites/39/2016/02/omega3.jpg',
    precio: 8,
    vegano: false
  },
  {
    nombre:'Galletas',
    descripcion: 'Deliciosas galletas de avena con cookies de chocolate',
    foto:'http://mxcdn.ar-cdn.com/recipes/originals/e08c641d-3ce5-44fa-959c-167e397b8890.jpg',
    precio: 1.80,
    vegano: true
  },
  {
    nombre:'Camiseta',
    descripcion: 'Camiseta 100% algodón en colores oscuros',
    foto:'http://www.regalosfrikis.com/wp-content/uploads/2014/08/regalos-frikis-camiseta-soy-informatico.jpg',
    precio: 15,
    vegano: true
  },
  {
    nombre:'Café',
    descripcion: 'Café Molido Fortaleza. Paquete 454g',
    foto:'https://media2.ocu.org//images/CE9E19F522012DD79E635A40B861F4F8C3DAB876/w150-c4/hf31300041604001.jpg',
    precio: 5.30,
    vegano: true
  }
];

function Usuario(compra){
  this.compra = compra;

  this.id = (((Math.random)*1000)+1);
  this.idioma = window.navigator.language || navigator.browserLanguage;
  this.navegador = navigator.userAgent;
  this.compra = compra;
  this.importe = 0.0;

  this.calcularImp = function(){
    this.importe = this.compra.reduce(function (sum, pvp){
      return sum = sum + pvp.precio;
    },0)
  }

  this.eliminarArticulo = function(){
    if(this.compra.length > 0){
      this.compra.pop();
    }
  }

  this.confirmarCompra = function(){
    var cantidad = this.compra.length;
    var importe = this.importe;
    var decision = confirm("Total " + cantidad + " articulos. Importe: " + importe + " euros.\nEsta ud. conforme?");
    if(decision){
      location.href = "pedidoOK.html";
    }else{
      alert("Operación cancelada.");
      location.href = "home.html";
    }
  }

  this.imprimir = function(){
    window.print();
  }

  this.condCompra = function(){
    var v = window.open("", "_blank", "width=400, height=100");
    v.document.write('<html><head><title>Condiciones de compra</title></head><body><p>La parte contratante de la primera parte será considerada como la parte contratante de la primera parte.</p></body><button type="button" onclick="window.close()">Cerrar</button></html>');
  }

  this.miCompra = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if(produ == undefined){
      for (var i = 0; i < this.compra.length; i++) {
        str+= "<div>"
        str+= "<img src='" + this.compra[i].foto + "' alt='"
        str+= this.compra[i].nombre + "'>";
        str+= "<p>Producto: " + this.compra[i].nombre + "</p>";
        str+= "<p>" + this.compra[i].descripcion + "</p>";
        str+= "<p><b>" + this.compra[i].precio + " €</b></p>";
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
      str+= "<hr>"
      str+= "<p>Importe: " + this.importe + " €</p>"
          cuerpo.innerHTML = str;
  }
}
