/* Creo el vector tal como se quedó en el ejercicio 3 */
miVector = ["Pimiento", 25, 10, "Cebolla", "Pollo", "Ajo", "Basmati"];

/* Si todos los elementos del array son de tipo Number */
console.log("Todos los elementos del vector son de tipo NUMBER:");
console.log(miVector.every(function(elemento){return isNaN(elemento);}))

console.log("\nHay algún elemento numerico menor de 20:");
console.log(miVector.some(function(elemento){return elemento < 20;}))

/* Utiliza el método reduce() para obtener la suma del array siguiente: */
var a = [4, 21, 33, 12, 9, 54];

function suma(total, num){
  return total + Math.round(num);
}

console.log("\nSuma de todos los números del vector a:");
console.log(a.reduce(suma, 0));
