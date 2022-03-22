'use strict';

const { Schema, model } = require('mongoose');

const Service = new Schema(
  {
    name:         { type: String, required: true },
    slug:         { type: String, required: true },
    description:  { type: String, required: true },
    pricing:      [ { type: Schema.Types.ObjectId, ref: 'Pricing' } ]
  },
  { versionKey: false }
);

module.exports = model('Service', Service);
