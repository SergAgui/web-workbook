'use strict';

$(document).ready(function() {
  $('.draggable').draggable({
    revert: "invalid"
  });
  $('#dropArea1, #dropArea2, #dropArea3').droppable({
    drop: function(event, ui){
      //drag is to get the value of the current block that is moved
      var drag = $(ui.draggable).data('block');

      //last is to get the value of the last block that was placed
      var last = $(this).children().last().data('block');

      //if the drag'd block's value is larger than the last block in the row, then the move is illegal
      if (drag > last){
        $(ui.draggable).draggable( "option", "revert", true );
      }else{
        $(ui.draggable).appendTo($(this)).attr('style', 'position: relative');
      };

      checkWin1();

    }
  });
});

function checkWin1(){
  if($('[data-stack=3]').children().length == 4){
    $('#announce-game-won').text('Winner!')
  };
};
