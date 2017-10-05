var mayorEdad = function(x){
  var edad = x || 18;

  if(edad >= 18){
    console.log('si');
  }
  else{
    console.log('no');
  }
}

mayorEdad(27);
mayorEdad(16);
mayorEdad();
