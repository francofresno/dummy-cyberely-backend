// const crearResponse = (mensaje, hayErrores = false) => ({
//   error: hayErrores,
//   mensaje: mensaje,
// });

const crearResponse = (mensaje, hayErrores = false) => mensaje;

module.exports = { crearResponse };
