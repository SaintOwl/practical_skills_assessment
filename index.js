/* eslint-disable no-undef */

'use strict';

require('dotenv').config();
const express = require('express');
const router = require('./router/index.js');
const db = require('./db/db.js');

const PORT = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  next();
});

app.use(express.json());
app.use('/', router);

const start = async () => {
  try {
    console.log('App started');
    await db.connectToDb();
    console.log('Connected to DB');
    app.listen(PORT, () =>{ console.log(`Server started on port ${PORT}`); });
  } catch (err) {
    console.log(err.message);
  }
};
start();
