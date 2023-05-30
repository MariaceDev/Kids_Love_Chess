

var board = null
var game = new Chess()
var whiteSquareGrey = '#B9DAB4'
var blackSquareGrey = '#47A742'


function removeGreySquares () {
  $('#myBoard .square-55d63').css('background', '')
}

function greySquare (square) {
  var $square = $('#myBoard .square-' + square)

  var background = whiteSquareGrey
  if ($square.hasClass('black-3c85d')) {
    background = blackSquareGrey
  }

  $square.css('background', background)
}

function onDragStart (source, piece) {
  //No puedes mover las piezas si has perdido o no es tu turno
  if (game.game_over()) return false
  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false
  }
}

function makeRandomMove () {
  var possibleMoves = game.moves()

  // game over
  if (possibleMoves.length === 0) return

  var randomIdx = Math.floor(Math.random() * possibleMoves.length)
  game.move(possibleMoves[randomIdx])
  board.position(game.fen())
}

function onDrop (source, target) {
  removeGreySquares()

  // Para comprobar si el movimiento es legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // Siempre promociona a reina, para simplificar
  })

  // Si el movimiento es ilegal hace snapback
  if (move === null) return 'snapback'

 
  window.setTimeout(makeRandomMove, 250)

}


function onMouseoverSquare (square, piece) {
  // Comprueba los posibles movimientos
  var moves = game.moves({
    square: square,
    verbose: true
  })

  if (moves.length === 0) return
  greySquare(square)

  for (var i = 0; i < moves.length; i++) {
    greySquare(moves[i].to)
  }
}

function onMouseoutSquare (square, piece) {
  removeGreySquares()
}

function onSnapEnd () {
  board.position(game.fen())
}




var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
}


board = Chessboard('myBoard', config);

document.querySelector(".girarTablero").addEventListener("click", function() {
  board.flip();
});


