import * as http from "http";


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Ola mundo em TS');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('o servidor esta rodando em http://localhost:3000');
});