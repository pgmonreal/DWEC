var frase = "Esto es un string";

document.write('<ol type="a">');
document.write('<li>La longitud del string es: ' + frase.length + '</li>');
document.write('<li>El car&aacute;cter que ocupa la posici&oacute;n 7 es: ' + frase.charAt(7) + '</li>');
document.write('<li>El &iacute;ndice en el que est&aacute; la &uacute;ltima t es: ' + frase.lastIndexOf("t") + '</li>');
document.write('<li>La transformaci&oacute;n a min&uacute;sculas del string es: ' + frase.toLowerCase() + '</li>');
document.write('<li>La transformaci&oacute;n a may&uacute;sculas del string es: ' + frase.toUpperCase() + '</li>');
document.write('<li>Las palabras separadas por comas que componen la frase son: ' + frase.split(" ") + '</li>');
document.write('<li>Las posiciones de la 11 a la 18 de frase son: ' + frase.charAt(11) + '(11) ' + frase.charAt(18) + '(18)</li>');
document.write('</ol>');
