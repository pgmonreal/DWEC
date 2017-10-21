var a = Number.MAX_VALUE;
document.write("El n&uacute;mero m&aacute;s grande en Javascript es: " + a);

var b = Number.MIN_VALUE;
document.write("<br>El n&uacute;mero m&aacute;s peque&ntilde;o en Javascript es: " + b);

var c = Math.sqrt(7);
document.write("<br>La ra&iacute;z cuadrada de 7 con precisi&oacute;n de 4 n&uacute;meros (contando entero y decimales) es: " + c.toPrecision(4));

var d = ((Math.PI)*(Math.pow(3,2)));
document.write("<br>El &aacute;rea de un c&iacute;rculo de radio 3 (con 2 n&uacute;meros decimales) es: " + d.toFixed(2));
