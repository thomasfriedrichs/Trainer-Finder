const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const indexRouter = require('./routes/index');
const trainersRouter = require('./routes/trainers.routes');
const clientsRouter = require('./routes/clients.routes');
const appointmentsRouter = require('./routes/appointments.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', trainersRouter);
app.use('/', clientsRouter);
app.use('/', appointmentsRouter);

app.listen(3001, err => {
  if(err) console.log('SERVER ERROR', err)
  console.log('SERVER RUNNING')
});

module.exports = app;