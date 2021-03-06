var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// ルーティング
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});


// socket
io.on('connection', (socket) => {
  console.log('ユーザーが参加しました');

  socket.on('disconnect', () => {
    console.log('ユーザーが退場しました');
  });
  
  socket.on('chat message', (msg) => {
    console.log(msg);
    io.emit('chat message', msg);
  });
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
