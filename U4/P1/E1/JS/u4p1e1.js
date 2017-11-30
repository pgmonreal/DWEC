function metodo1(e){
  e.target.innerHTML = 'Has descubierto el metodo 1.';
}

onload = function(){
  miTitulo.ondblclick = function(e){
    e.target.innerHTML = 'Has descubierto el método 3.';
  }

  function metodo4(e){
    e.target.innerHTML = 'Has descubierto el método 4.';
  }
  miSubtitulo.onmousewheel = metodo4;
}

function metodo5(e){
  e.target.innerHTML = 'Has descubierto el método 5.';
}
