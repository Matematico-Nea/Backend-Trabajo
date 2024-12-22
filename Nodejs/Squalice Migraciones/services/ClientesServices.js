const {clientes} = require("../models");
const obtenerClientesServices = ( async () => {
    try {
        let resultado = await clientes.findAll();
        return resultado;

    }
    catch (error) {
        console.log(error);
    }
});

module.exports = {obtenerClientesServices};