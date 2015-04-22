

$(document).ready(function(){
  var router = new Router();
  $(document).mousemove(function(e){
    router.mouse(e.pageX, e.pageY)
  });

  $(document).keydown(function(e){
    router.key(String.fromCharCode(e.which));
  });
});

function mouseHandler(e){
  console.log(e);
}
