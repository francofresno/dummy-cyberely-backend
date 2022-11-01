const express = require("express");
const { crearResponse } = require("../../utils/utils");
const {
  crearUsuario,
  crearComentario,
  obtenerComentariosDe,
  obtenerUsuarioPorNombre,
  cambiarContraseña,
} = require("../services/db");
const router = express.Router();

router.post("/crearUsuario", async function (req, res) {
  const { nombre, contraseña, email } = req.body;
  const response = await crearUsuario(nombre, contraseña, email);
  res.status(200).send(crearResponse(response));
});

router.get("/hacerComentario", async function (req, res) {
  const { usuarioId, comentario, social, nombre } = req.query;
  const response = await crearComentario(usuarioId, comentario, social, nombre);
  res.status(200).send(crearResponse(response));
});

router.get("/comentarios", async function (req, res) {
  const { usuarioId } = req.query;
  const response = await obtenerComentariosDe(usuarioId);
  res.status(200).send(crearResponse(response));
});

router.get("/", async function (req, res) {
  const { nombre } = req.query;
  const response = await obtenerUsuarioPorNombre(nombre);
  res.status(200).send(crearResponse(response));
});

router.get("/changePassword", async function (req, res) {
  const { newPassword, usuarioId } = req.query;
  await cambiarContraseña(newPassword, usuarioId);
  res.status(200).send(crearResponse("Password successfully changed"));
});

module.exports = router;
