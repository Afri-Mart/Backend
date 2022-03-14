const express = require("express");
const helmet = require("helmet");
//const cors = require("cors");

const authRouter = require("./api/auth/auth-router.js");
const usersRouter = require("./api/users/users-router.js");
const itemsRouter = require("./api/items/items-router");

const server = express();

server.use(helmet());
server.use(express.json());
//server.use(cors());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  res.header("Content-Type", "application/json");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  } else {
    next();
  }
});

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/items", itemsRouter);
process.on("uncaughtException", function (err) {
  console.log(err);
});
server.use("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Afrimart",
  });
});
server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
