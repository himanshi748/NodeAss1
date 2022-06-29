const http = require('http');

const server = http.createServer(function(req,res){
	res.write("<h1>This is my First server file </h1>");
	res.write("<h1> server  file </h1>");
	res.write(JSON.stringify({NAME:"Himanshi"}))
	res.end("<h1>end the rquest</h1>")
})
server.listen(5000);