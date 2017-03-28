var http = require('http');
var HttpDispatcher  = require('httpdispatcher');
var dispatcher = new HttpDispatcher();
var server = http.createServer(handleRequest);
const PORT=8080; 

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server is running');
});

dispatcher.onGet("/data", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify({
        id: 0,
        data: 'data'
    }));
});
