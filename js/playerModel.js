var PlayerModel = function(x,y){
  this.x = x;
  this.y = y;
  this.targetX = 0;
  this.targetY = 0;
  this.rotation = 0;
}

PlayerModel.prototype = {
  pointToTarget: function(){
    var o = this.targetY - this.y;
    var a = this.targetX - this.x;

    var rads = Math.atan2(o,a);
    var degs = rads * 180.0 / Math.PI + 180;
    this.rotation = degs;
  },

  targetAt: function(x,y){
    this.targetX = x;
    this.targetY = y;
  }

};
