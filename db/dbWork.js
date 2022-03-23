'use strict';

const mongoose = require('mongoose');
const models = require('./db').getModels();

async function getServices() {
  try {
    return (await models.Service.find({}));
  } catch (err) {
    console.log(err);
  }
}

async function getPricing(slug) {
  try {
    return (await models.Service.findOne({ slug }).populate('pricing'));
  } catch (err) {
    console.log(err);
  }
}

async function placeOrder(body) {
  try {
    const { 
      type, firstName, lastName, email,
      address, country, state, zip
    } = body;
    console.log(body);
    const pricing = await models.Pricing.findOne({ _id: mongoose.Types.ObjectId(type) });
    console.log(pricing);
    console.log('pricing');
    return (await models.Purchases.create(
      {
        service: pricing.service,
        type: pricing._id,
        firstName,
        lastName,
        email,
        address,
        country,
        state,
        zip
      }
    ));
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getServices,
  getPricing,
  placeOrder
};
