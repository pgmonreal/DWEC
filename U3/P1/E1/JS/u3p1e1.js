var body = document.body.children;

body[0].innerHTML = "Esto es un fiesta.";
body[1].innerHTML = "Esto es un fiesta.";
body[2].innerHTML = "Esto es un fiesta.";

document.title = "Nuevo titulo.";

for(var i=0; i<body.length; i++){
  body[i].style.color = "blue";
}

for(var i=0; i<body.length; i++){
  console.log(body[i]);
}
