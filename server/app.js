const express = require('express');
const app = express();
const api = require('./api');  // these will be routes
const morgan = require('morgan'); // HTTP logger
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('port', (process.env.PORT || 8081));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use(function (req, res) {
    const err = new Error('Not Found');
    err.status = 404;
    res.json(err);
});


