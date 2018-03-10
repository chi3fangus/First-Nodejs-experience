const http = require('http');

let port = 8000

http.createServer(function (req, res){
    res.write('Hello Magnum!'); //write a request
    res.end(); //end the response
    }).listen(port); //the server object listener 