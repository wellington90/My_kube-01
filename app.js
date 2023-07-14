const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá, mundo!\n');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando em http://localhost:3000/');
});
