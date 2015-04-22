var Vector2 = function(x,y){
  this.x = x;
  this.y = y;
}

Vector2.prototype = {
    add: function(other){
      this.x += other.x;
      this.y += other.y;
    },
    subtract: function(){
      this.x -= other.x;
      this.y -= other.y;
    }

};
