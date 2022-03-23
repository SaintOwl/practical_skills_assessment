'use strict';

const mongoose = require('mongoose');
const errorMessages = require('../services/errorMessages');
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
      pricingId, firstName, lastName, email,
      address, country, state, zip
    } = body;
    const pricing = await models.Pricing.findOne({ _id: mongoose.Types.ObjectId(pricingId) });
    if (!pricing) return { status: 'error', error: errorMessages.PRICING_WITH_THIS_ID_NOT_FOUND };
    return (await models.Purchases.create(
      {
        serviceId: pricing.service,
        pricingId: pricing._id,
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
