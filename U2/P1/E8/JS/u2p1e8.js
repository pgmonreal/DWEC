var frase = "Esto es un string";
var frase1 = "   y con esto es un string mas largo   ";

var frasefinal = frase.concat(" ", frase1.trim());
console.log(frasefinal);

frasefinal = frasefinal.replace("largo", "bonito");
console.log(frasefinal);

frasefinal = frasefinal.concat("i".repeat(20));
console.log(frasefinal);
