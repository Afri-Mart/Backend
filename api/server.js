const express = require("express");

const server = express();

server.use(express.json());

const usersRouter = require("./users/users-router");

server.use("/api/users", usersRouter);

server.use("*", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
