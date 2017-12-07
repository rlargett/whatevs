const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Test Webpack and Pug'});
});

app.listen(8080, () => {
    console.log('We are up and running');
});