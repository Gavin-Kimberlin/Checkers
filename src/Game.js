import Player from './Player.js'

export default class Game{
  constructor(){
    this.player1 = new Player('1', 'O');
    this.player2 = new Player('2','X');
  }

}
