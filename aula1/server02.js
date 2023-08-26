const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'public', 'index.html');

    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1><p>Pagina nao encontrada</p></h1>');
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log('Rodando no servidor http://localhost:3001');
});