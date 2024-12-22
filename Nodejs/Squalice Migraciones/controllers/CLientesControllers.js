const {obtenerClientesServices} = require('../services/ClientesServices');


const obtenerClientesControllers = (async (req, res) => {
    try {
        let resultado = await obtenerClientesServices();
        res.json(resultado);
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {obtenerClientesControllers};