var miVector = ["Pollo", "Nata", "Curry", "Tikka"];
console.log("Muestro el vector original (4 elementos): \n" + miVector.toString());

/* Agrego 2 elementos al final del vector y lo muestro por consola: */
miVector.push("Cebolla");
miVector.push("Pimiento");
console.log("\nMuestro el vector con 2 nuevos elementos al final: \n" + miVector.toString());

/* Agrego 2 elementos al principio del vector y lo muestro por consola: */
miVector.unshift("Ajo");
miVector.unshift("Basmati");
console.log("\nMuestro el vector con 2 nuevos elementos al principio: \n" + miVector.toString());

/* Elimina las posiciones de la 3 a la 5 (incluidas) */
miVector.splice(3,3);
console.log("\nMuestro el vector los elementos del 3 al 5 nuevos eliminados: \n" + miVector.toString());

/* Inserta el número 10 y el 25 entre el penúltimo y el último */
miVector.splice(4,0,10,25);
console.log("\nMuestro el vector con los num 10 y 25 insertados entre la\npenultima y ultima posición: \n"
+ miVector.toString());

/* Muestra el array del paso anterior, pero con los elementos separados por "==>" utilizando join(). */
console.log("\nMuestro el vector con todos sus elementos separados por ==>: \n");
console.log(miVector.join("==>"));

/* Copia el array anterior en otra variable e invierte el orden de los elementos con esa segunda variable. */
var backupVector = miVector;
backupVector.reverse();
console.log("\n'\Copiamos'\ el vector original en una nueva variable e invertimos el nuevo array: \n");
console.log(backupVector);

/* Muestra los dos arrays (directamente, sin join() ni toString()).
¿Puedes explicar qué ha pasado con los dos arrays y por qué?*/
console.log("\nMostramos ambos vectores sin join ni toString: \n");
console.log(miVector);
console.log(backupVector);
console.log("Respuesta: No hemos hecho una copia del array, si no que estamos apuntando en la nueva\nvariable la referencia de memoria donde está almacenado el array inicial.");

/* Consulta en qué índice del array está el 25 y en qué índice está un elemento que no esté en el array. */
console.log("\nPosicion del número 10: " + miVector.indexOf(10));
console.log("Posicion del número 19: " + miVector.indexOf(19));
