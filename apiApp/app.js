const express = require("express");
const Route = require('./routes/clienteRoutes');

const app = express();
const port= 5526;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(`${__dirname}/public`))

app.use('/', Route);

app.listen(port, () => {
  console.log(`Servidor respondendo na porta ${port}`);
});