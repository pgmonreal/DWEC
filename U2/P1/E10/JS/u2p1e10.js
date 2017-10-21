/* El ejercicio 10 comienza en la línea 56 */
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

var pedro = new Persona("Pedro", "Garcia Monreal");
var alguien = new Persona("", "Ramirez Gomez");
var gema = new Persona("Gema", "Mora Campana");

console.log(pedro);
console.log(pedro.saluda());
console.log(pedro instanceof Persona);
console.log("--------------------------------------------------------------");
console.log(alguien);
console.log(alguien.saluda());
console.log(alguien instanceof Persona);

pedro.telefono = "612345678";

Persona.prototype.edad = Math.floor(Math.random() * 100) + 1;

function Estudiante(nombre, apellidos, estudios, notaMedia){
  Persona.call(this,nombre,apellidos);
  this.estudios = estudios;
  this.notaMedia = notaMedia.toFixed(2);

  this.Recuperar = function(){
    this.notaMedia = 5;
  }
}

var Lista = [3];
Lista[0] = new Estudiante("Saray", "Fernandez Garcia", "1PYE", 6.535);
Lista[1] = new Estudiante("Domingo", "Perez Pardo", "2MEC", 7.560);
Lista[2] = new Estudiante("Carlos", "Serneguet Beltra", "1JAP", 3.805);
console.log("--------------------------------------------------------------");
for(var i = 0; i<Lista.length; i++){
  console.log("El estudiante de " + Lista[i].estudios + ", " + Lista[i].nombre + " " + Lista[i].apellidos
  + " tiene una nota media de " + Lista[i].notaMedia + ".");
}
console.log("--------------------------------------------------------------");
for (var i in Lista) {
  var ap = Lista[i].apellidos.split(" ");
  console.log("Nombre: " + Lista[i].nombre + "; Apellido 1: " + ap[0] + "; Apellido 2: " + ap[1]);
}
console.log("--------------------------------------------------------------");
/* El ejercicio 10 comienza aquí */
Estudiante.prototype.crearPassword = function(){
  var ini_nom = this.nombre.charAt(0).toUpperCase();
  var apel_minus = this.apellidos.toLowerCase().replace("e", "3").replace("a", "4").split(" ", 1);
  var long_nom = this.nombre.length;
  Estudiante.prototype.password = ini_nom.concat(apel_minus, long_nom);
}
for (var z in Estudiante) {
  Lista[z].crearPassword();
}
