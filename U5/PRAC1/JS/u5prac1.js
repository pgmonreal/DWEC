onload = function(){
  var formulario = document.forms[0];

  formulario.onsubmit = function(){

    var errores = document.getElementsByClassName('errores')[0];
    var listaErrores = "";
    var ret = true;

    var nom = document.getElementsByName('nombre')[0].value;
    if (nom == null || nom.length == 0){
      listaErrores += "Campo vacio: NOMBRE. <br />";
      ret = false;
    }

    var apellidos = document.getElementsByName('apellidos')[0].value;
    if (apellidos == null || apellidos.length == 0){
      listaErrores += "Campo vacio: APELLIDOS. <br />";
      ret = false;
    }

    var correo = document.getElementsByName('email')[0].value;
    if(correo == ""){
      listaErrores += "Campo vacio: EMAIL. <br/>";
      ret = false;
    }

    var validaCorreo = document.getElementsByName('email')[1].value;
    if(validaCorreo == ""){
      listaErrores += "Campo vacio: REPETIR EMAIL <br/>";
      ret = false;
    }

    var dni = document.getElementsByName("dni")[0].value;

    var fecha = document.getElementsByName('fecha')[0].value;
    if(!fecha){
      listaErrores += "Campo vacio: FECHA NACIMIENTO. <br />";
      ret = false;
    }

    var favorita = document.getElementsByName('seccion')[0].selectedIndex;
    if(favorita == null || favorita == 0){
      listaErrores += "Campo vacio: SECCION FAVORITA. <br />";
      ret = false;
    }

    var metodoPago = formulario.metodo.value;
    if (metodoPago != "efectivo" && metodoPago != "tarjeta"){
      listaErrores += "Campo vacio: METODO PREFERIDO DE PAGO. <br />";
      ret = false;
    }

    if(!cond.checked){
      listaErrores += "Campo no seleccionado: Lee y acepta las condiciones de alta. <br />";
      ret = false;
    }

    if(ret){
      listaErrores = "El alta se ha completado correctamente.";
      errores.style.color = "green";

      document.cookie = "nombre =" + nom + ";max-age=" + 3600*24*365 + ";path =/;";
      document.cookie = "apellidos = " + apellidos + ";max-age=" + 3600*24*365 + ";path =/;";
      localStorage.setItem("email", correo);
      sessionStorage.dni = dni;


    }else{
      errores.style.color = "red";
      errores.style.fontWeight = "bold";
    }

    errores.innerHTML = listaErrores;
    return ret;

  }
}
