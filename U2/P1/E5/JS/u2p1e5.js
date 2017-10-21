function Persona(nombre, apellidos){
  this.nombre = nombre || "Anónimo";
  this.apellidos = apellidos;

  this.saluda = function(){
    console.log("Hola, me llamo " + this.nombre + " " + this.apellidos + ".");
  }

  this.CumplirAnyo = function(){
    this.edad++;
  }
}

var pedro = new Persona("Pedro", "Garcia");
var alguien = new Persona("", "Ramirez");
var gema = new Persona("Gema", "Cano");

console.log(pedro);
console.log(pedro.saluda());
console.log(pedro instanceof Persona);
console.log("--------------------------------------------------------------");
console.log(alguien);
console.log(alguien.saluda());
console.log(alguien instanceof Persona);

pedro.telefono = "612345678";

Persona.prototype.edad = Math.floor(Math.random() * 100) + 1;

console.log(pedro.edad);
console.log(gema.edad);
console.log(alguien.edad);
pedro.CumplirAnyo();
gema.CumplirAnyo();
console.log(pedro.edad);
console.log(gema.edad);
