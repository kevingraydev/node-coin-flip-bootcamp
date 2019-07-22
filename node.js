const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {  //turns your computer into a server. Creates an HTTP Server Object.
  fs.readFile('demofile.html', function(err, data) {  //this is pointing to the html file. and having a function act on it. first read thefile.
    res.writeHead(200, {'Content-Type': 'text/html'}); //writeHead?
    res.write(data); //write?
    res.end();
  });
}).listen(8000); //what does the listen 800 do? what is its purpose

//this is really similar to a fetch`
