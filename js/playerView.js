var PlayerView = function(){

}

PlayerView.prototype = {
  render: function(player){
    // console.log(player.rotation)
    console.log(player.x);
    console.log(player.y);
    var $player = $(".player");
    // console.log($player)
    $player.css({transform: "rotate("+ player.rotation +"deg) translate("+ player.x +"px," + player.y + "px)" });
    // $player.css({transform: "translate("+ player.x +"px," + player.y + "px)" });

  }
}
