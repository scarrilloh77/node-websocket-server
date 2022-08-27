const express = require('express');
var cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server); // Servidor de sockets

    this.paths = {};

    this.middlewares();
    this.routes();

    // Sockets
    this.sockets();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  routes() {
    // this.app.use(this.paths.auth, require('../routes/auth.routes'));
  }

  sockets() {
    this.io.on('connection', (socket) => {
      // console.log('Cliente conectado', socket.id);
      socket.on('disconnect', () => {
        // console.log('Cliente desconectado', socket.id);
      });

      socket.on('enviar-mensaje', (payload, callback) => {
        // console.log(payload);
        // this.io.emit('enviar-mensaje', payload);
        const id = 123456789;
        callback({ id, fecha: new Date().getTime() });
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }
}

module.exports = Server;
