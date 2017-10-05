var arrayOriginal = [true, 2, "19", "hola", 32, 16, "Limon", false, "x", 8411];
var arraySoloNum = [];
var contador=0;

// Visualizar por pantalla arrayOriginal, su contenido y su tipo de dato.
for(var i=0; i<arrayOriginal.length; i++){
  document.write("arrayOriginal[" + i + "] = " + arrayOriginal[i] + " (" + typeof(arrayOriginal[i]) + ") <br>");
}

// Conversión en Number (o isNaN) y copia de los Number en arraySoloNum
for(var i=0; i<arrayOriginal.length; i++){
  arrayOriginal[i]=Number(arrayOriginal[i]);

  if(!isNaN(arrayOriginal[i])){
    arraySoloNum[contador] = arrayOriginal[i];
    contador++;
  }
}

// Visualizar en pantalla arraySoloNum, su contenido y su tipo de dato.
document.write("<br><hr><br>");

for(var i=0; i<arraySoloNum.length; i++){
  document.write("arraySoloNum[" + i + "] = " + arraySoloNum[i] + " (" + typeof(arraySoloNum[i]) + ") <br>");
}
