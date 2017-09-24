var userNum = 0;

do{
  userNum = prompt("Introduce un número del 1 al 10: ");
}while(userNum <1 || userNum >10);

do{
  alert("Cuenta atrás iniciada: " + userNum);
  userNum-=1;
}while(userNum != 0);

document.write("Cuenta atr&aacute;s finalizada.")
