import './styles.css'
import 'bootstrap';
import $ from 'jquery';
import Game from './game'

$(document).ready(function(){
  let game = new Game();

  for (var i = 10; i < 88; i += 2) {
    // if(i <= 36){
    //   $("#"+i).text("O");
    //   // $("#"+i).text(O);
    // } else if (i >= 61) {
    //   $("#"+i).text("X");
    // }

    $("#"+i).addClass("add-back");
    if(((i - 6) % 10) === 0 || ((i - 7) % 10) === 0)
      i += 1;
  };

  for (var i = 11; i < 88; i += 2) {
    $("#"+i).addClass("add-back2");
    if(((i - 6) % 10) === 0 || ((i - 7) % 10) === 0)
      i += 1;
  };

      debugger
});
