const { Client } = require("pg");

const credentials = {
  user: "cyberelytest_user",
  host: "cderl2la4992md3pq92g",
  database: "cyberelytest",
  password: "Jo23k7OYM514Deh88fnp7D2lolbN2Qte",
  connectionString:
    "postgres://cyberelytest_user:Jo23k7OYM514Deh88fnp7D2lolbN2Qte@dpg-cderl2la4992md3pq92g-a.oregon-postgres.render.com/cyberelytest",
  port: 5432,
  ssl: true,
};

async function hacerQuery(query) {
  const client = new Client(credentials);
  await client.connect();
  const now = await client.query(query);
  await client.end();

  return now;
}

const crearUsuario = async (nombre, contraseña, email) => {
  const clientResult = await hacerQuery(
    `INSERT INTO usuarios (nombre, password, email) VALUES ('${nombre}','${contraseña}','${email}')`
  );
  return clientResult;
};

const crearComentario = async (usuarioId, comentario, social, nombre) => {
  const clientResult = await hacerQuery(
    `INSERT INTO comentario (usuario_id, nombreComentario, comentario, redSocial) VALUES (${usuarioId},'${nombre}','${comentario}','${social}')`
  );
  return clientResult;
};

const obtenerComentariosDe = async (usuarioId) => {
  const clientResult = await hacerQuery(`SELECT * FROM comentario WHERE usuario_id = ${usuarioId}`);
  return clientResult;
};

module.exports = { crearUsuario, crearComentario, obtenerComentariosDe };
