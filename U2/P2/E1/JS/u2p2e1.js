var ahora = new Date();
var nombreDia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

console.log("Muestra por consola el día (del 1 al 31):");
console.log(ahora.getDate());

console.log("\nMuestra por consola el mes (del 1 al 12):");
console.log(ahora.getMonth()+1);

console.log("\nMuestra por consola el año:");
console.log(ahora.getFullYear());

console.log("\nMuestra el día de la semana (Lunes, Martes, …):");
console.log(nombreDia[ahora.getDay()-1]);

console.log("\nMuestra la fecha completa con formato dd/mm/aaaa:");
console.log(ahora.toLocaleDateString());

console.log("\nMuestra las horas (de 0 a 23):");
console.log(ahora.getHours());

console.log("\nMuestra la fecha completa con formato dd/mm/aaaa HH:MM:SS:");
console.log(ahora.toLocaleDateString() + " " + ahora.toLocaleTimeString());
