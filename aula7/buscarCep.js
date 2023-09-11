const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

function logar(objectData, type = 1) {
  if (type === 1) { // Log de informação 
    console.log(objectData);
  } else {
    console.error(objectData);
  }
}

const date = new Date();

async function getCEPInfo(cepParams) {
  logar(`INICIOU O PROCESSO - ${date} \n`);
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cepParams}/json/`);
    const cepData = response.data;

    logar(`OBTEVE OS DADOS DO CEP ${cepData.cep} \n`);

    const { cep, logradouro, bairro, localidade, uf } = cepData;

    logar(`FINALIZOU O PROCESSO - ${date} \n`);

    return { cep, logradouro, bairro, localidade, uf };

  } catch (error) {
    logar(error, 2);
    return { message: `Infelizmente o cep ${cepParams} não foi encontrado!` };
  }
}


app.get('/procuracep/:cep', async (req, res) => {
  const cep = req.params.cep;
  const data = await getCEPInfo(cep);
  res.json({ data: data });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});