const express = require('express');
const app = express();
const port = Number(3000);

app.use(express.urlencoded({
    extended: true,
}));

app.get('/', (request, response) => {
    response.send(`
        <form action='/' method='POST'>
            <label for='name'>Nome</label>
            <input type='text' name='name' id='name' />
            <button type='submit'>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (request, response) => {
    console.log(request.params);
    console.log(request.query);
    response.send(request.query.nome);
});

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(`O que recebi foi: ${request.body.name}`);
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
    console.log(`Acessar http://localhost:${port}`);
});