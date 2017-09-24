var d = new Date();
var esteAnyo = d.getFullYear();

var esValido = 0;
var intentos = 0;

do{
    var edadUser = prompt("Por favor, introduce tu año de nacimiento: ");
    var edad = esteAnyo - edadUser;

    if(edad >= 18){
      document.write("<h1>¡Hola mayor de edad!</h1>");
      esValido = 1;
    }
    else if(edad >= 0 && edad < 18){
      document.write("<h1>Eres menor de edad.</h1>");
      esValido = 1;
    }
    else{
        alert("Valor no valido introducido. Por favor, reintroduce tu año de nacimiento.");
        intentos++;

      if(intentos == 3){
        document.write("Se han producido varios errores consecutivos. Operaci&oacute;n abortada.")
      }
    }
}while(esValido == 0 && intentos !=3);
