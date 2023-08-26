const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{"teste": "teste"}');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Meu servidor web roda em: http://localhost:${PORT}`);
  // console.log('Meu servidor web roda em: http://localhost:3000');
});