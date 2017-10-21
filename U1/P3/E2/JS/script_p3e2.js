var x = 3/0;
var y = 0/0;
var z = null;
var a = undefined;

var suma1 = x++;
var suma2 = y++;
var suma3 = z++;
var suma4 = a++;

document.write("<div> La variable x tiene el valor " + x + " y es de tipo " + typeof(x) + ". </div>");
document.write("<div> La variable y tiene el valor " + y + " y es de tipo " + typeof(y) + ". </div>");
document.write("<div> La variable z tiene el valor " + z + " y es de tipo " + typeof(z) + ". </div>");
document.write("<div> La variable a tiene el valor " + a + " y es de tipo " + typeof(a) + ". </div>");



document.write("<div><br /> La variable suma1 tiene el valor " + suma1 + " y es de tipo " + typeof(suma1) + ". </div>");
document.write("<div> La variable suma2 tiene el valor " + suma2 + " y es de tipo " + typeof(suma2) + ". </div>");
document.write("<div> La variable suma3 tiene el valor " + suma3 + " y es de tipo " + typeof(suma3) + ". </div>");
document.write("<div> La variable suma4 tiene el valor " + suma4 + " y es de tipo " + typeof(suma4) + ". </div>");
