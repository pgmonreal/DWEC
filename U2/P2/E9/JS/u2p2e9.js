function mostrarHoraConsola(){
  var ahora = new Date();
  console.clear();
  console.log(ahora.toLocaleTimeString());
}

mostrarHoraConsola();
setInterval(mostrarHoraConsola, 5000);
