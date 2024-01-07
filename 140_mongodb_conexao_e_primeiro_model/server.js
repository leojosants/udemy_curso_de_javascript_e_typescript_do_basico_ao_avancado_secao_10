require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch((error) => {
        console.log(error);
    });

const port = Number(3000);
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(middlewareGlobal); // our own middleware
app.use(routes);

app.on('pronto', () => {
    app.listen(port, () => {
        console.log(`Acessar http://localhost:${port}`);
        console.log(`Servidor executando na porta ${port}`);
    });
});