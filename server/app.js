var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var trainersRouter = require('./routes/trainers');
var clientsRouter = require('./routes/clients');
var appointmentsRouter = require('./routes/appointments');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trainers', trainersRouter);
app.use('/clients', clientsRouter);
app.use('/appointments', appointmentsRouter);

app.listen(3001, err => {
  if(err) console.log('SERVER ERROR', err)
  console.log('SERVER RUNNING', process.env.PASSWORD)
});

module.exports = app;
