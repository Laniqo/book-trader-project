ver http = require('http');
var fs = require('fs');
var extract = require("./extract");

//error handling of URL
var handleError = function(err, res){
  res.writeHead(404);
  res.end();
}
var server = http.createServer(function(req, res){

  var filePath = extract(req.url);

  fs.readFile(filePath, function(err, data){
    if(err){
      handleError(err, res);
      return;
    }
    else{
    res.end(data);
    }
  });
});

server.listen(3000);