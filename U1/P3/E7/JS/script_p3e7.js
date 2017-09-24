var fecha = new Date();
var dia = fecha.getDay();

switch (dia) {
  case 0:
    document.write("Hoy es domingo. D&iacute;a de campo o playa, ¿no?");
    break;
  case 1:
    document.write("Hoy es lunes. &Aacute;nimo, piensalo, para los ingleses ya es el segundo d&iacute;a de la semana.");
    break;
  case 2:
    document.write("Hoy es martes. Hoy ni te cases ni te embarques.");
    break;
  case 3:
    document.write("Hoy es mi&eacute;rcoles. ¡Vamos, ya llevas la mitad de la semana!");
    break;
  case 4:
    document.write("Hoy es jueves. ¡Ya lo tienes casi hecho!");
    break;
  case 5:
    document.write("¡Por fin es VIERNES!");
    break;
  case 6:
    document.write("Hoy es s&aacute;bado.");
    break;
  default:
    document.write("Error.");
    break;
}
