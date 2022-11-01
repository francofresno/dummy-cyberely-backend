const express = require("express");
const router = express.Router();
const { crearResponse } = require("../../utils/utils");

router.get("/", async function (req, res) {
  const origin = req.get("origin");
  res.set("Access-Control-Allow-Origin", origin);

  const { q } = req.query;
  res.status(200).send(crearResponse(q));
});

module.exports = router;
