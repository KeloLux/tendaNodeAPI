const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');

mongoose.createConnection(config.db, (err, res) => {
    if (err) return console.log(`Error al conectar con la base de datos. Error: ${err}`);
    console.log('Conectado a la base de datos');
    app.listen(config.port, () => {
        console.log(`Servidor levantado en puerto ${config.port}`);
    });
});