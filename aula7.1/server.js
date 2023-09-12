const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { DateTime } = require('luxon');

const harryUrl = 'https://hp-api.onrender.com/api/characters';
const itemsPerPage = 6;

async function getPersonanges(page = 1) {
  try {
    const response = await axios.get(harryUrl);
    const charactersData = response.data;

    const FilteredData = charactersData
      // .filter(values => values.dateOfBirth != null && values.image != '')
      .map(values => ({
        nome: values.name,
        idade:
          values.dateOfBirth != null ?
            DateTime.fromFormat(values.dateOfBirth, 'dd-MM-yyyy').toFormat('dd/MM/yyyy')
            : 'Não Informado',
        foto: values.image != '' ? values.image : 'https://semantic-ui.com/images/wireframe/image.png'
      }));

    const totalItems = FilteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (page < 1 || page > totalPages) {
      return { data: [], total: totalItems, currentPage: page, totalPages }
    }

    // page=1, page=2, page=3
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = FilteredData.slice(startIndex, endIndex);

    const nextPage = page < totalPages ? page + 1 : null;

    return { data: paginatedData, total: totalItems, currentPage: page, totalPages, nextPage };
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/api', async (req, res) => {
  const page = parseInt(req.query.page) || 1;

  try {
    const result = await getPersonanges(page);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Estou rodando em http://localhost:3000');
})