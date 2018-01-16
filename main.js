const mongoose = require('mongoose');
const config = require('./config');

mongoose.connection.on('connected', function (ref) {
  console.log('Connected to ' + config.db + ' DB!');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.error('Failed to connect to DB ' + config.db + ' on startup ', err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log(
    'Mongoose default connection to DB :' + config.db + ' disconnected'
  );
  // connect()
});

var gracefulExit = function () {
  mongoose.connection.close(function () {
    console.log(
      'Mongoose default connection with DB :' +
      config.db +
      ' is disconnected through app termination'
    );
    process.exit(0);
  });
};

var connect = function () {
  try {
    //options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
    //mongoose.connect(config.getDBURL(config.db));
    mongoose.connect(config.db, { useMongoClient: true });
    console.log('Trying to connect to DB ' + config.db);

    port = process.env.port || 3000;
    ip = process.env.ip;

    const app = require('./app');
    app.listen(config.port, ip, () => {
      console.log(`Servidor levantado en puerto ${config.port}`);
    });
  } catch (err) {
    console.log('Sever initialization failed: ', err.message);
  }
};
connect();
/*
  mongoose.connect(config.db, { useMongoClient: true }, (err, res) => {
      var MongoStore = require("connect-mongodb");


      if (err) console.log(`Error al conectar con la base de datos. Error: ${err}`);
      else console.log('Conectado a la base de datos');

      const app = require('./app');
      app.listen(config.port, () => {
          console.log(`Servidor levantado en puerto ${config.port}`);
      });
  });
  */