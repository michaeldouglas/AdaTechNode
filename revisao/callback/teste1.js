const fs = require('fs');
const path = require('path');

function lerArquivoCallback(arquivo, callback) {
  const caminhoDoArquivo = path.join(__dirname, arquivo);
  fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  })
}

function outraFuncao(err, data) {
  if (err) {
    console.error('Erro ao ler o arquivo: ', err);
    return;
  }
  console.log('Conteudo do arquivo: ', data)
}

lerArquivoCallback('arquivo.txt', outraFuncao);