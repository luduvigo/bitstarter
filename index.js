var express = require('express');
var favicon = require('serve-favicon');

var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(favicon(__dirname + '/favicon.ico'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {

  var fs = require('fs');
  fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    } else {        
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }
});
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
