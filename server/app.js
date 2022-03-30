const express = require('express');
const app = express();
const httpLogger = require('morgan'); 
const cors = require('cors');
const apiRouter = require('./routes/api.js');
const createError = require('http-errors');

require('dotenv').config();

app.set('port', (process.env.PORT || 8081));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('static'));
app.use(httpLogger('dev'));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



// MongoDB connection
const mongoose = require('mongoose');
// mongoose.connect(
//     'mongodb://localhost:27017/virtualstandups', { useNewUrlParser: true }
//     );
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(app.get('port'), () => {
        console.log(`API Server Listening on port ${app.get('port')}!`);
    });
});




