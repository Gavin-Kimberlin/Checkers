import $ from 'jquery';
export default class Player{
  constructor(name, symbol){
    this.pieces;
    if(name === '1'){
      this.pieces = [[1,0],[1,2],[1,4],[1,6],
      [2,1],[2,3],[2,5],[2,7],
      [3,0],[3,2],[3,4],[3,6]]

    }else{
      this.pieces =
        [[6,1],[6,3],[6,5],[6,7],
        [7,0],[7,2],[7,4],[7,6],
        [8,1],[8,3],[8,5],[8,7]]


    }
    console.log(this.pieces);
    this.name = name;
    this.symbol = symbol;
    this.printPlayer();

  }

  printPlayer(){
    this.pieces.forEach(function(piece){
      $("#"+piece[0]+piece[1]).text(this.symbol)
    }, this)
  }

  movePiece(currentIndex, moveIndex){
    this.pieces.push(moveIndex);
    this.pieces.remove(this.pieces.indexOf(currentIndex));
    $('#' + currentIndex[0] + currentIndex[1]).text('');
    $('#' + moveIndex[0] + moveIndex[1]).text(this.symbol);
  }
}
