// Coche Principal
var coche = new Object();

coche.pintar = function(){
  this.color = "White";
}

coche.marca = "Peugeot";
coche.ruedas = 4;
coche.plazas = 5;
coche.color = "Black";

//Coche 1
var coche1 = new Object();

coche1.pintar = function(){
  this.color = "White";
}

coche1.marca = "Citroen";
coche1.ruedas = 4;
coche1.plazas = 5;
coche1.color = "Grey";

//Coche 2
var coche2 = new Object();

coche2.pintar = function(){
  this.color = "White";
}

coche2.marca = "BMW";
coche2.ruedas = 4;
coche2.plazas = 7;
coche2.color = "Blue";

//Eliminar atributo Plazas de coche.
coche.eliminarPlazas = function(){
  delete coche.plazas;
}
