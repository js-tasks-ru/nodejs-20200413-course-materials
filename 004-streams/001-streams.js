const {
  Readable,
  Writable,
  Transform,
  Duplex,
} = require('stream');

const {Server} = require('net');

const server = new Server();

server.on('connection', socket => {

  console.log(`New connection: ${socket.address().address}`);

  socket.write('hello');

  socket.pipe(socket);

  socket.on('drain', () => {
    console.log('drain');
  })

  // socket.on('data', data => {
  //   socket.write(data)
  // });
})

server.listen(3000, () => {
  console.log('listening');
});
