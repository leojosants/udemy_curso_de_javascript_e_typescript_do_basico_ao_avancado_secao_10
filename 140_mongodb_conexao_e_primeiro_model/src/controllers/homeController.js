exports.homePage = (request, response) => {
    response.render('index');
    return;
}

exports.treatPost = (request, response) => {
    response.send(request.body);
    return;
};