var Router = function(){
  this.playerController = new PlayerController();
}

Router.prototype = {
  mouse: function(x,y){
    this.playerController.mouseAt(x,y);
  }

}
