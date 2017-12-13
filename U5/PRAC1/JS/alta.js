onload = function () {
  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

  var nom = getCookie("nombre");
  var apellidos = getCookie("apellidos");
  var correo = localStorage.getItem("email");
  var documento = sessionStorage.getItem("dni");

  var spans = document.querySelectorAll("span");
  spans[0].textContent = nom;
  spans[1].textContent = apellidos;
  spans[2].textContent = documento;
  spans[3].textContent = correo;
}
