var misVacaciones = prompt("Introduce la fecha de tus proximas vacaciones (AÑO/MES/DIA): ");
var fechaUsuario = misVacaciones.split('/');

if(fechaUsuario.length < 3 || fechaUsuario.length > 3
  || fechaUsuario[0].length > 4 || isNaN(fechaUsuario[0])
  || fechaUsuario[1].length > 2 || fechaUsuario[1] < 1 || fechaUsuario[1] > 12 || isNaN(fechaUsuario[1])
  || fechaUsuario[2].length > 2 || fechaUsuario[2] < 1 || fechaUsuario[2] > 31 || isNaN(fechaUsuario[2])){
  alert("No se ha introducido una fecha correcta.");
}else{
  var fechaTipoDate = new Date();
  fechaTipoDate.setFullYear(fechaUsuario[0]);
  fechaTipoDate.setMonth(fechaUsuario[1]-1);
  fechaTipoDate.setDate(fechaUsuario[2]);
  fechaTipoDate.setHours(0);
  fechaTipoDate.setMinutes(0);
  fechaTipoDate.setSeconds(0);
}

//Adquiero milisegundos transcurridos desde 1/1/1970 hasta hoy.
var ahora = new Date();
ahora = ahora.getTime();
//Adquiero milisegundos transcurridos desde 1/1/1970 hasta fecha de vacaciones
fechaTipoDate = fechaTipoDate.getTime();
//Transformo en días
var tiempoRestante = (((fechaTipoDate-ahora)/60000)/60)/24;
tiempoRestante = tiempoRestante.toFixed(0);

//Devuelvo un resultado según el resultado
if(tiempoRestante > 0){
  console.log("Quedan " + tiempoRestante + " días para el comienzo de tus vacaciones.");
}else if(tiempoRestante == 0){
  console.log("Mañana comienzan tus vacaciones.");
}else{
  console.error("Tus vacaciones ya se han agotado.");
}
