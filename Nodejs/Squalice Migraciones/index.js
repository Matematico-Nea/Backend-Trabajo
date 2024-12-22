const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const clientesRoutes = require("./routes/ClientesRoutes");

app.use('/api', clientesRoutes);

app.listen(PORT, () => console.log(`Escuchando el servidor en el puerto: http://localhost:${PORT}`));