var express = require('express');
var parser = require('body-parser');
var path = require('path');

var helloRouter = require('./routers/helloRouter.js');

var port = 3000;
var app = express();

//=================== Middleware ===================//
app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));
//=================================================//

//==================== Routes =====================//
app.use('/api/hello', helloRouter);
//=================================================//

// serve static client-facing files
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

// spin up server
app.listen(port, function() {
  console.log('Listening on port', port);
});

// export app
module.exports = app;
