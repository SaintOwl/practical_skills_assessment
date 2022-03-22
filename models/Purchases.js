'use strict';

const { Schema, model } = require('mongoose');

const Purchases = new Schema(
  {
    service:    { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    type:       { type: Schema.Types.ObjectId, ref: 'Pricing', required: true },
    firstName:  { type: String, required: true },
    lastName:   { type: String, required: true },
    email:      { type: String, required: true },
    address:    { type: String, required: true },
    country:    { type: String, required: true },
    state:      { type: String, required: true },
    zip:        { type: Number, required: true }
  },
  { versionKey: false }
);

module.exports = model('Purchases', Purchases);
