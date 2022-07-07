var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => res.send('hello server!'));
  http.listen(3000, () => {
  console.log('listening on *:3000');
});