//Configuración inicial del tablero

var config = {
    position: 'start',
   
  }
  var board = Chessboard('myBoard', config)

// Funcionalidad de los botones

  function contraMaquina() {
    const script = document.createElement('script');
    script.src = 'playChessMaquina.js';
    document.body.appendChild(script);
    alert("!Gánale a la máquina!")
  }

  function contraOponente() {
    const script = document.createElement('script');
    script.src = 'playChessOponente.js';
    document.body.appendChild(script);
  }
  
  function reiniciar() {
    const script = document.createElement('script');
    script.src = 'playChessIndex.js';
    document.body.appendChild(script);
  }

