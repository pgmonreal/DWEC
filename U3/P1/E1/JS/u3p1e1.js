var body = document.body.children;

body[2].textContent = body[2].textContent.replace('un', 'una').replace('título','fiesta');
body[3].textContent = body[3].textContent = "Esto era un ejemplo.";
body[4].textContent = body[4].textContent = "Esto ya no se ni lo que era...";

document.title = "Nuevo titulo.";

for(var i=0; i<body.length; i++){
  body[i].style.color = "blue";
}

for(var i=0; i<body.length; i++){
  console.log(body[i]);
}
