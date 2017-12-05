const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'This a Page Title'});
});

app.listen(3000, () => {
    console.log('We are up and running');
});