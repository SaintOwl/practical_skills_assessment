/* eslint-disable no-undef */

'use strict';

const fs = require('fs');
const path = require('path');
let files = [];

fs.readdirSync(__dirname)
  .filter(file => (file.split('.').pop() === 'js') && (file !== 'index.js'))
  .forEach(file => files.push(path.join(__dirname, file)));

files.forEach(file => {
  console.log(file);
});

module.exports = files;
