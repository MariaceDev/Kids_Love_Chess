

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

  // Obtener la posición actual del tablero
  const position = board.position();
      
  
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

function updateStatus () {
  var status = ''

// Jaque mate
  if (game.isCheckmate()) {
    status = 'Game over, ' + moveColor + ' is in checkmate.'
  }

  // Empate
  else if (game.isDraw()) {
    status = 'Game over, drawn position'
  }

  // Todavía en juego
  else {
    status = moveColor + ' to move'

    // Jaque
    if (game.isCheck()) {
      status += ', ' + moveColor + ' is in check'
    }
  }
 
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


board = Chessboard('myBoard', config)





