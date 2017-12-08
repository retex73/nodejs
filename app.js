var http = require('http');
// File server for reading / writing files
var fs = require('fs');







var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  // myReadStream.pipe(res);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }
  else if (req.url === '/api/ninjas'){
    var ninjas = [
      {
        name: 'ryu',
        age: 29
      },
      {
        name: 'yoshi',
        age: 32
      }
    ];

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  }
  else {
    res.writeHead(400, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // var myObj = {
  //   name: 'Ryu',
  //   job: 'Ninja',
  //   age: 29
  // }

  // res.end(JSON.stringify(myObj));
  // res.end('Feed me popcorn');
});


server.listen(3000, '127.0.0.1');
console.log('Server listening on port 3000');
