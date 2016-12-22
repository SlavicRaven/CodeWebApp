var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html')
var pozycjeH5 = fs.readFileSync('pozycjeH5.css')
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    // GET HTML
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(index);
    // GET CSS
    res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
    res.end(pozycjeH5);
}).listen(process.env.PORT);