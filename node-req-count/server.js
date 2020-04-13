var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // YOUR CODE HERE
    //response.writeHead(200, {});
    globalCounter[endpoint] = (globalCounter[endpoint] + 1) || 1;
    response.end();
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    var val = globalCounter[endpoint] || '';
    response.end(val.toString());
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
