const express = require('express');
var cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {};

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  routes() {
    // this.app.use(this.paths.auth, require('../routes/auth.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }
}

module.exports = Server;
