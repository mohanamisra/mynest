//doesnt work yet

var http = require('http');
var fs = require('fs');
var express= require('express');
var url = require('url');
var app = express();



const DIR_NAME = "C:\\Users\\AryanD\\WebDev\\mynest";
app.use(express.static('public'));
app.get('/',(req,res) => {
  fs.readFile('public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

http.createServer(function (req, res) {
  fs.readFile('public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  var q = url.parse(req.url, true).query;
}).listen(8080); 