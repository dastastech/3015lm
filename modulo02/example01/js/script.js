  // alert('Hola Mundo!!'); // Pause till user hit "OK"
  const boton = document.getElementById('btn');
  boton.addEventListener('click', cambiarTexto);

  function cambiarTexto() {
      const elementoH1 = document.getElementsByClassName('aviso');
      for (i=0; i<=1; i = i + 1) {
          elementoH1[i].innerHTML = 'TITULO PRINCIPAL';
          elementoH1[i].style.color = 'red';
          elementoH1[i].style.fontFamily = 'sans-serif';
          elementoH1[i].style.fontSize = '5em';
      }        
  }