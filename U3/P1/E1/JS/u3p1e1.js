var body = document.body.children;

body[0].innerHTML = "Esto es un fiesta.";
body[1].innerHTML = "Esto era un ejemplo.";
body[2].innerHTML = "Esto ya no se ni lo que era...";

document.title = "Nuevo titulo.";

for(var i=0; i<body.length; i++){
  body[i].style.color = "blue";
}

for(var i=0; i<body.length; i++){
  console.log(body[i]);
}
