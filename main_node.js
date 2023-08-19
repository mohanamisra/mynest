//doesnt work yet

var http = require('http');
var fs = require('fs');
var url = require('url');


const DIR_NAME = "C:\\Users\\AryanD\\WebDev\\mynest";

http.createServer(function (req, res) {
  fs.readFile('public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  var q = url.parse(req.url, true).query;
  console.log(req.url);
}).listen(8080); 