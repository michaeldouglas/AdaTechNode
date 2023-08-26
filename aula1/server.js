const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', 86400);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{"teste": "terminar a aula pelo amor de deus"}');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Meu servidor web roda em: http://localhost:${PORT}`);
  // console.log('Meu servidor web roda em: http://localhost:3000');
});