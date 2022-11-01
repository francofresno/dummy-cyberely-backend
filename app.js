const express = require("express");
const cors = require("cors");
const usuarios = require("./src/routes/usuarios");

const app = express();
const PORT = 5000;

const whitelist = ["http://localhost:3000", "https://cyberely-front.onrender.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", "http://localhost:3000");
  res.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.append("Access-Control-Allow-Credentials", true);
  res.append("Content-Type", "application/json");
  next();
});

app.use("/usuarios", usuarios);

app.listen(PORT, function () {
  console.log(`Server started in port ${PORT}`);
});

module.exports = { app };
