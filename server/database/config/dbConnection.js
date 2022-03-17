const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

export const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'trainer_client_development'
});

export const dbConnection = ( SQLquery, result ) => {
  connection.connect();
  connection.query(SQLquery, (err, res) => {
    if(err) throw err
    result.send(res)
    console.log(res)
  });
  connection.end();
};