const express = require('express');
const cors = require('cors');
const app = express();
const path = '/api/v1';
const port = 3100;

app.use(cors());
app.use(express.json());

const prediosRoutes = require('../routers/predios.routes');
const propietariosRoutes = require('../routers/propietarios.routes');
const construccionesRoutes = require('../routers/construcciones.routes');
const terrenosRoutes = require('../routers/terrenos.routes');

app.use(`${path}/predios`, prediosRoutes);
app.use(`${path}/predios/propietarios`, propietariosRoutes);
app.use(`${path}/predios/construcciones`, construccionesRoutes);
app.use(`${path}/predios/terrenos`, terrenosRoutes);

app.listen(port, () => console.log(`Servidor en el puerto ${port}. Para acceder use la url: localhost:${port}`));