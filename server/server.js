var http = require('http');
var static = require("node-static");
var CONFIG = require("./config");

console.log("CONFIG:", CONFIG);

var fileServer = new static.Server(CONFIG.STATIC_SERVER.ROOT);

var s = http.createServer(function (req, res) {
  console.log("Service static file", req.url);
  fileServer.serve(req, res);
});

s.listen(CONFIG.PORT, CONFIG.HOST);

s.on("listening", function() {
  console.log("LISTENING", CONFIG.PORT, CONFIG.HOST);
});