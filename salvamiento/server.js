const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Ruta para servir imágenes locales
server.use('/img', express.static(path.join(__dirname, 'img')));

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
