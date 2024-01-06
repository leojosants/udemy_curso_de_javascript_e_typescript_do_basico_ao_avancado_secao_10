const express = require('express');
const app = express();
const port = Number(3000);
const routes = require('./routes');

app.use(express.urlencoded({
    extended: true,
}));

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
    console.log(`Acessar http://localhost:${port}`);
});