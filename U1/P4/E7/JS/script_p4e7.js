function queDiaEs(vector){
    do{
    var diaUsuario = prompt("Por favor, introduce un número del día de la semana (1-7)") || 4;

    if(isNaN(diaUsuario)){
      alert("Valor de tipo texto no era esperado. Reintroduce un valor entre 1 y 7.");
    }else if (diaUsuario < 1 || diaUsuario > 7) {
      alert("El valor está fuera de rango. Por favor, reintroduce un valor entre 1 y 7.");
    }

    }while(isNaN(diaUsuario) || diaUsuario < 1 || diaUsuario > 7);

    document.write("<p>El d&iacute;a n&uacute;mero " + diaUsuario + " de la semana es " + vector[diaUsuario-1] + ".")
}

/* Inicio creación del vector */
var diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
/* Fin creación del vector */

/* Inicio impresión (en pantalla) del vector */
document.write("<ul>");
for(var i=0 in diasSemana){
  document.write("<li>" + diasSemana[i] + "</li>");
}
document.write("</ul>");
/* Fin impresión (en pantalla) del vector */

/* Inicio llamada a la función */
queDiaEs(diasSemana);
/* Fin llamada a la función */
