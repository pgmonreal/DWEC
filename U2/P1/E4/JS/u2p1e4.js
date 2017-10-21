function Persona(nombre, apellidos){
  this.nombre = nombre || "Anónimo";
  this.apellidos = apellidos;

  this.saluda = function(){
    console.log("Hola, me llamo " + this.nombre + " " + this.apellidos + ".");
  }
}

var pedro = new Persona("Pedro", "Garcia");
var alguien = new Persona("", "Ramirez");

console.log(pedro);
console.log(pedro.saluda());
console.log(pedro instanceof Persona);
console.log("--------------------------------------------------------------");
console.log(alguien);
console.log(alguien.saluda());
console.log(alguien instanceof Persona);
