/* Creamos un array con distintos tipos de dato */
var a = ["Hola", 19, true, "Londres", 2, "PopTarts", false, 13];

var b = a.map(function(num){
  return num*2;
});

console.log("Array original: " + a);
console.log("\nArray convertido con map() sin filter(): " + b);

b = b.filter(function(num){
  return num % 2 == 0;
})

console.log("\nArray final incl. filter(): " + b);
