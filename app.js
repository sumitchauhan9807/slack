var express = require('express');
var app = express();

app.get('/', function (req, res) {
	   res.send('Hello World');
})

app.get('/sumit', function (req, res) {
	res.send('Hello i am sumit');
})
var server = app.listen(5000, function () {
	   var host = server.address().address
	   var port = server.address().port
	   
	   console.log("Example app listening at http://%s:%s", host, port)
})
