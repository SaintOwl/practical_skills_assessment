/* eslint-disable no-undef */

'use strict';

const mongoose = require('mongoose');
const files = require('../models/index.js');

let models = {};

files.forEach(file => {
  const model = require(file);
  models[model.collection.modelName] = model;
});

function db() {}

db.connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_LINK);
  } catch (err) {
    console.log(err);
  }
};

db.getModels = () => {
  return models;
};

module.exports = db;
