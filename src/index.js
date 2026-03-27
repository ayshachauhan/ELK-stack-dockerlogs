// server.js
const logger = require('./logger');
const express = require('express');
const app = express();
const pinoHttp = require('pino-http');

app.use(pinoHttp({ logger }));

app.get('/', (req, res) => {
  req.log.info({
    msg: "API hit",
    route: "/",
    method: req.method
  });
  const testErr = new Error('This is a test error');
  req.log.error({
    err: testErr,
    route: '/',
    method: req.method
  })
  res.send("Hello");
});

app.listen(3000, () => logger.info("Server running on port 3000"));