var PlayerController = function(){
  this.model = new PlayerModel(50,50);
  this.view = new PlayerView();

}

PlayerController.prototype = {
  mouseAt: function(x, y){
    this.model.targetAt(x,y);
    this.model.pointToTarget();
    this.view.render(this.model);
  }
};
