'use strict';

const { Schema, model } = require('mongoose');

const Pricing = new Schema(
  {
    service:      { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    type:         { type: String, required: true },
    description:  { type: String, required: true },
    price:        { type: Number, required: true }
  },
  { versionKey: false }
);

module.exports = model('Pricing', Pricing);
