function cartaPorEdad(edad){
  document.write("<ul>");
  (edad>0)?document.write("<li>Coca Cola, 3€</li>"):document.write("");
  (edad>0)?document.write("<li>Cafe, 5€</li>"):document.write("");
  (edad>=18)?document.write("<li>Martini, 9€</li>"):document.write("");
  (edad>=18)?document.write("<li>Whisky, 20€</li>"):document.write("");
  document.write("</ul>");
}

do{
  var edad = prompt("Introduce tu edad:");
}while(isNaN(edad) || edad < 0);

cartaPorEdad(edad);
