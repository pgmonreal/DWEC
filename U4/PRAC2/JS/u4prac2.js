function bloquearEnviar(){
  var botonEnviar = document.getElementById('enviar');
  botonEnviar.value = "Enviando...";
  botonEnviar.disabled = true;
}

function seleccionUsuario(seccion){
  var seccionUp = seccion.toUpperCase();
  var v = window.open("", "_blank", "width=800, height=500");
  v.document.write('<html><head><title>¡Hola!</title></head><body><h1>Bienvenido a ' + seccionUp + '</h1><img src="img/' + seccion + '.jpg" alt="'+seccion+'"></html>');
}


onload = function(){
  function conBordeMorado(e){
    e.target.style.outline = "purple 2px solid";
  }

  function sinBorde(e){
    e.target.style.outline = "";
  }

  var elementosInputs = document.getElementsByTagName("input");
  var elementosSelect = document.getElementsByTagName("select");

  for(var i=0; i<elementosInputs.length; i++){
    elementosInputs[i].addEventListener("focus", conBordeMorado);
  }

  for(var i=0; i<elementosInputs.length; i++){
    elementosInputs[i].addEventListener("blur", sinBorde);
  }

  elementosSelect[0].addEventListener("focus", conBordeMorado);
  elementosSelect[0].addEventListener("blur", sinBorde);

/* *************************************************************************** */

  /* Inicio validación formulario */
  var formulario = document.forms[0];
  formulario.onsubmit = function(){
    var errores = document.getElementsByClassName('errores')[0];
    var listaErrores = "";
    var ret = true;

    /* Validamos el nombre */
    var nom = document.getElementsByName('nombre')[0].value;
    if (nom == null || nom.length == 0 || !(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/.test(nom))){
      listaErrores += "Error detectado en el NOMBRE. <br />";
      ret = false;
    }

    /* Validamos los apellidos */
    var apellidos = document.getElementsByName('apellidos')[0].value;
    if (apellidos == null || apellidos.length == 0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
      listaErrores += "Error detectado en los APELLIDOS. <br />";
      ret = false;
    }

    /* Validamos el correo electrónico */
    var correo = document.getElementsByName('email')[0].value;
    if(!/^\w+@\w+\.\w+$/.test(correo)){
      listaErrores += "Error detectado en el EMAIL. <br/>";
      ret = false;
    }

    var validaCorreo = document.getElementsByName('email')[1].value;
    if(correo != validaCorreo){
      listaErrores += "Error detectado en el EMAIL. No coincide en la verificación. <br/>";
      ret = false;
    }

    /* Validamos el DNI */
    var dni = document.getElementsByName('dni')[0].value;
    if(!/^\d{8}[a-zA-Z]$/.test(dni)){
      listaErrores += "Error detectado en el DNI. <br />";
      ret = false;
    }

    /* Validamos la fecha de nacimiento */
    var fecha = (document.getElementsByName('fecha')[0].value).split('-');
    var anyo = fecha[0]; var mes = fecha[1]; var dia = fecha[2];
    var fechaNac  = new Date(anyo, (mes-1), dia);

    var ahora = new Date();
    var edad = ahora.getFullYear() - anyo - 1;

    if(ahora.getMonth + 1 - mes > 0){
      edad++;
    }

    if(isNaN(fechaNac) || dia <1 || dia > 31 || mes < 1 || mes > 12 || anyo < 0 || anyo >= ahora.getFullYear()){
      listaErrores += "Error detectado en FECHA NACIMIENTO. <br />";
      ret = false;
    }else if (edad < 18){
      listaErrores += "Lo sentimos, eres menor de edad. Vuelve en " + (18 - edad) + " años.<br />";
      ret = false;
    }

    /* Validamos el selector SECCION FAVORITA */
    var favorita = document.getElementsByName('seccion')[0].selectedIndex;
    if(favorita == null || favorita == 0){
      listaErrores += "Error detectado en el SECCION FAVORITA. <br />";
      ret = false;
    }

    var metodoPago = formulario.metodo.value;
    if (metodoPago != "efectivo" && metodoPago != "tarjeta"){
      listaErrores += "Error detectado en METODO PREFERIDO DE PAGO. <br />";
      ret = false;
    }

    if(!cond.checked){
      listaErrores += "Lee y acepta las condiciones de alta. <br />";
      ret = false;
    }

    if(ret){
      listaErrores = "El alta se ha completado correctamente.";
      errores.style.color = "green";

      bloquearEnviar();
      var sec = document.getElementsByName('seccion')[0].value;
      seleccionUsuario(sec);
    }else{
      errores.style.color = "red";
      errores.style.fontWeight = "bold";
    }

    errores.innerHTML = listaErrores;
    return ret;
  }
}
