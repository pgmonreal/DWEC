var a1 = [4, 21, 33, 12, 9, 54];

console.log("Array original: " + a1);

a1.forEach(function(num, index, array){
  array[index] = num*2;
})

console.log("Array multiplicado x2 (con forEach): " + a1 + "\n\n");

/* (b) Imprimir por pantalla el array resultante del ejercicio 6 (indica el
índice y los atributos del objeto correspondiente al elemento en el que estamos). */

/* Recupero el ejercicio 6 */
var a = ["Hola", 19, true, "Londres", 2, "PopTarts", false, 13];

var b = a.map(function(num){
  return num*2;
});

b = b.filter(function(num){
  return num % 2 == 0;
})
/* Fin recuperación ejercicio 6 */

b.forEach(function(num, index, array){
  console.log("Indice " + index + " en [" + array + "] es " + num);
})
