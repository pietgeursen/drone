var Router = function(){
  this.playerController = new PlayerController();
}

Router.prototype = {
  mouse: function(x,y){
    this.playerController.mouseAt(x,y);
  },
  key: function(key){

    switch(key){
      case "D":
        this.playerController.right();
      break;
      case "W":
        this.playerController.up();
      break;
      case "S":
        this.playerController.down();
      break;
      case "A":
        this.playerController.left();
      break;
    }
  }
}
