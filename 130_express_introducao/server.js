const express = require('express');
const app = express();
const port = Number(3000);

app.get('/', (request, response) => {
    response.send(`
        <h2>
            <a href='/contato'>Contato</a>
        </h2>
        <form action='/' method='POST'>
            <label for='name'>Nome</label>
            <input type='text' name='name' />
            <button type='submit'>Enviar</button>
        </form>
    `);
});

app.post('/', (request, response) => {
    response.send(`Recebi o fomulário`);
});

app.get('/contato',  (request, response) => {
    response.send(`
        <h1>Página de contato</h1>
        <h2>
            <a href='/'>Home</a>
        </h2>
    `);
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
    console.log(`Acessar http://localhost:${port}`);
});