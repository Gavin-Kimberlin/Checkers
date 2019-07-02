import Player from './Player.js'
import $ from 'jquery';


export default class Game{
  constructor(){
    this.player1 = new Player('1', 'O', 1);
    this.player2 = new Player('2','X', -1);
  }

  checkMove(currentIndex, moveIndex){
    let valid = true;
    this.player1.pieces.forEach(function(piece){
      if(moveIndex[0] === piece[0] && moveIndex[1] === piece[1])
        valid = false;
    })
    this.player2.pieces.forEach(function(piece){
      if(moveIndex[0] === piece[0] && moveIndex[1] === piece[1])
        valid = false;
    })

    return valid;
  }

  movePlayer(num, currentIndex, moveIndex){
    $('#print').text('');
    if (!this.checkMove(currentIndex, moveIndex)) {
      $('#print').text('Player can\'t move here!');
      return;
    }
    if (num === '1') {
      this.player1.movePlayer(currentIndex, moveIndex)
    }else {
      this.player2.movePlayer(currentIndex, moveIndex)
    }
  }
}
