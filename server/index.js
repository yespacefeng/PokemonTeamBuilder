const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes.js');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/API/v2', router);

app.use(express.static(path.join(__dirname, '../public')));

app.listen(app.get('port'));
console.log('Listening on ', app.get('port'));

module.exports.app = app;