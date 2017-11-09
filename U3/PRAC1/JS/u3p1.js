/******* Comenzamos la creación del formulario por JavaScript *******/

/* Instanciamos el body y el DIV que contendrá el formulario */
var formulario = document.getElementById("miForm");
var miBody = document.body;

/* Creamos el input donde el usuario introducirá el nombre
del producto, añadimos atributos y lo hacemos hijo  */
var producto = document.createElement('input');
producto.setAttribute("type","text");
producto.setAttribute("id", "producto");
producto.setAttribute("value", "");
formulario.appendChild(producto);

/* Creamos el selector donde el usuario tendrá todas las
categorias a las que vincular su producto */
var categorias = document.createElement('select');
categorias.setAttribute("id", "categorias");

/* Creamos las distintas opciones para el elemento select */
var opcion1 = document.createElement('option');
opcion1.setAttribute("value", 0);
opcion1.setAttribute("label", "Escoge una categoria");
categorias.appendChild(opcion1);

var opcion2 = document.createElement('option');
opcion2.setAttribute("value", "orange");
opcion2.setAttribute("label", "Panaderia");
categorias.appendChild(opcion2);

var opcion3 = document.createElement('option');
opcion3.setAttribute("value", "lime");
opcion3.setAttribute("label", "Fruta y verdura");
categorias.appendChild(opcion3);

var opcion4 = document.createElement('option');
opcion4.setAttribute("value", "blue");
opcion4.setAttribute("label", "Pescaderia");
categorias.appendChild(opcion4);

var opcion5 = document.createElement('option');
opcion5.setAttribute("value", "cyan");
opcion5.setAttribute("label", "Congelados");
categorias.appendChild(opcion5);

var opcion6 = document.createElement('option');
opcion6.setAttribute("value", "red");
opcion6.setAttribute("label", "Charcuteria");
categorias.appendChild(opcion6);

var opcion7 = document.createElement('option');
opcion7.setAttribute("value", "pink");
opcion7.setAttribute("label", "Higiene y hogar");
categorias.appendChild(opcion7);

/* Hacemos del selector hijo del div formulario */
formulario.appendChild(categorias);

/* Creamos los botones de añadir y eliminar */
var confirmar = document.createElement('input');
confirmar.setAttribute("type", "button");
confirmar.setAttribute("id", "enviar");
confirmar.setAttribute("onclick", "anadirElemento()");
confirmar.setAttribute("value", "Añadir Elemento");
formulario.appendChild(confirmar);

var borrar = document.createElement('input');
borrar.setAttribute("type", "button");
borrar.setAttribute("id", "eliminar");
borrar.setAttribute("value", "Borrar Lista");
formulario.appendChild(borrar);

miBody.innerHTML+= "<hr>";

function anadirElemento(){
  if(document.getElementById("producto").value.length == 0){
    alert(categorias.value)
  }else{
    alert("OK");
  }
}
