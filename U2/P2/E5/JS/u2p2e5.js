/* Recupero los constructores y el array con los estudiantes
   del ejercicio 6 de la práctica 1 de la unidad 2 */
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

function Estudiante(nombre, apellidos, estudios, notaMedia){
  Persona.call(this,nombre,apellidos);
  this.estudios = estudios;
  this.notaMedia = notaMedia.toFixed(2);

  this.Recuperar = function(){
    this.notaMedia = 5;
  }
}

var Lista = [3];
Lista[0] = new Estudiante("Saray", "Garcia", "1PYE", 6.535);
Lista[1] = new Estudiante("Domingo", "Perez", "2MEC", 7.560);
Lista[2] = new Estudiante("Carlos", "Serneguet", "1JAP", 3.805);
/* Fin recuperación constructor y vector */

console.log("Muestro (solo nombre y nota) el vector con los estudiantes original:");
for(var i = 0; i<Lista.length; i++){
  console.log(Lista[i].nombre + ". Nota media: " + Lista[i].notaMedia);
}

Lista.sort(function(e1, e2){
  return e1.notaMedia - e2.notaMedia;
})

console.log("\nMuestro (solo nombre y nota) el vector ordenado de menor a mayor:");
for(var i = 0; i<Lista.length; i++){
  console.log(Lista[i].nombre + ". Nota media: " + Lista[i].notaMedia);
}
