//Configuración inicial del tablero

var config = {
    position: 'start',
   
  }
  var board = Chessboard('myBoard', config)

// Funcionalidad de los botones

  document.getElementById("maquina").addEventListener("click", function () {
    const script = document.createElement('script');
    script.src = 'playChessMaquina.js';
    document.body.appendChild(script);
    alert("!Gánale a la máquina!");
  
  });

  document.getElementById("oponente").addEventListener("click", function () {
    const script = document.createElement('script');
    script.src = 'playChessOponente.js';
    document.body.appendChild(script);
  });

  document.getElementById("reiniciar").addEventListener("click", function () {
   
    const script = document.createElement('script');
    script.src = 'playChessIndex.js';
    document.body.appendChild(script);
  });

  document.getElementById("girarTablero").addEventListener("click", function () {
    board.flip();
  });
  

