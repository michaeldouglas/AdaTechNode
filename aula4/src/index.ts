import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`A API esta rodando na porta ${PORT}`);
});