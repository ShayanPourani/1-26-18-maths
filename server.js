var http = require('http');
http.createServer(function(request, response) {
  response.write(greeting('Stranger'));
  var x = [];
  for (var i = 0; i < 25 ; i++) {
    x.push(Math.floor(Math.random()*100)+1);
  }
  var sum = 0
  for (var i = 0; i < x.length; i++){
    sum += x[i];
  }
  response.write('<div>The sum is '+sum+'</div>');
  response.write('<div>The average is '+sum/x.length+'</div>');
  response.write(x.join('<br>'));
  response.end("")
}).listen(8080);
function greeting(name) {
  return '<h1>Hi, '+name+'</h1>';
}