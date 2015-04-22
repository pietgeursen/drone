

$(document).ready(function(){
  var router = new Router();
  $(window).mousemove(function(e){
    router.mouse(e.pageX, e.pageY)
  });
});

function mouseHandler(e){
  console.log(e);
}
