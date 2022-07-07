// var app = require("express")();
// var http = require("http").createServer(app);
// var io = require("socket.io")(http);

// app.get("/", (req, res) => res.send("hello server!"));

// io.on("connection", (socket) => {
//   console.log("a user connected");
  
// socket.on('message', (msg) => {
//     console.log(msg);
//     socket.broadcast.emit('message-broadcast', msg);
//    });
// });

// http.listen(3000, () => {
//   console.log("listening on *:3000");
// });


const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});

httpServer.listen(port, () => console.log(`listening on port ${port}`));