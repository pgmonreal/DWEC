function comparaCadenas(str1, str2){
  if(typeof str1 !== "string" || typeof str2 !== "string"){
    console.error("Se ha introducido valor que no es de tipo String.");
  }else{
    (str1.length<str2.length)?console.log('La cadena mas larga es la segunda con ' + str2.length + ' caracteres.'):console.log('La cadena mas larga es la primera con ' + str1.length + ' caracteres.');
  }

}

comparaCadenas(1, 5);
comparaCadenas("Hi, hello...", "Bye");
comparaCadenas("Hola", "Adios");
