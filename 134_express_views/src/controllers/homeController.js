exports.homePage = (request, response) => {
    response.render('index');
}

exports.treatPost = (request, response) => {
    response.send('Rota de POST!');
};