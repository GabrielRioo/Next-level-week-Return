import express from "express";
import { routes } from './routes';

const app = express();

app.use(express.json()); // vai na requisição e verifica se tem algum body JSON
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running!')
});