const { Client } = require('pg');
require('dotenv').config({path: '../.env' || './.env'});

const clientGenerator = ({ user, host, database, password, port }) => {
    return new Client({user, host, database, password: password || 'root', port});
};

const client = clientGenerator(process.env);

client.connect()
    .then(() => {
        console.log('Conectado a la base de datos: ' + process.env.database);
    }).catch(err => {
        console.error('Error de conexion: ', err.message);
    });

module.exports = client;