function concatena(st1, st2){
  var stConcatenado;

  if(typeof(st1) === 'string' && typeof(st2)=== 'string'){
    stConcatenado = st1 + " " + st2;
  }else{
    stConcatenado = "anonymous";
  }

  return stConcatenado;
}

function saludador(nombre, concatena){
  var salida = concatena("Buenos dias", nombre);
  alert(salida);
}

var persona = prompt("¿A quien saludamos?");
saludador(persona, concatena);
