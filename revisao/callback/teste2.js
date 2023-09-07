const fs = require('fs');
const path = require('path');

function lerArquivoPromise(arquivo) {
  const caminhoDoArquivo = path.join(__dirname, arquivo);

  return new Promise((resolve, reject) => {
    fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

// Função assíncrona para consumir a Promise
async function lerArquivoAsync() {//ENFILERE
  try {
    const conteudo = await lerArquivoPromise('arquivo.txt'); // ESPERE
    console.log('Conteúdo do arquivo:', conteudo);
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
  }
}

// Chamar a função assíncrona
lerArquivoAsync();
