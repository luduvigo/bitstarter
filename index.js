var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  //var buffer = new Buffer(fs.readFileSync("hello.index"), "utf-8")
  //response.send(buffer)

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
