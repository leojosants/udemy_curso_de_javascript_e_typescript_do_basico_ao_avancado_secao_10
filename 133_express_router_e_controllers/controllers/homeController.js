exports.homePage = (request, response) => {
    response.send(`
        <form action='/' method='POST'>
            <label for='name'>Nome</label>
            <input type='text' name='name' id='name' />
            <button type='submit'>Enviar</button>
        </form>
    `);
}

exports.treatPost = (request, response) => {
    response.send('Rota de POST!');
};