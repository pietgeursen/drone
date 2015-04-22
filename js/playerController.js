var PlayerController = function(){
  this.model = new PlayerModel(50,50);

  this.moveRate = 10;

}

PlayerController.prototype = {
  mouseAt: function(x, y){
    this.model.targetAt(x,y);
    this.model.pointToTarget();
  },
  left: function(){
    this.model.move(-this.moveRate, 0);
  },
  right: function(){
    this.model.move(this.moveRate, 0);
  },
  up: function(){
    this.model.move(0,-this.moveRate);
  },
  down: function(){
    this.model.move(0,this.moveRate);
  }

};
