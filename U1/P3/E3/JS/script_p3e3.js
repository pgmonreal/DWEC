var userNum = prompt("Por favor, introduce un número: ");

if(userNum % 2 == 0){
  document.write("<h2>" + userNum + " es un n&uacute;mero PAR." + "</h2>");
}
else if (userNum % 2 == 1) {
  document.write("<h2>" + userNum + " es un n&uacute;mero IMPAR." + "</h2>");
}
else{
  document.write("<h2>" + "¿Si?, Ahora resulta que " + userNum + " es un n&uacute;mero."+ "</h2>");
}
