const route = require('express').Router();
const {obtenerClientesControllers} = require('../controllers/CLientesControllers.js');
route.get("/",obtenerClientesControllers)


module.exports = route;