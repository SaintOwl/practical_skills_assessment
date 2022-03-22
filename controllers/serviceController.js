'use strict';

const AppError = require('../services/AppError');
const {
  getServices: getServicesFromDB,
  getPricing: getPricingFromDB,
  placeOrder: placeOrderToDB
} = require('../db/dbWork');

async function getServices(req, res) {
  try {
    return res.status(200).json(await getServicesFromDB());
  } catch (err) {
    return (err instanceof AppError) ? res.status(err.status).json(err)
      : res.status(err.status || 500).json(new AppError({ err: err }));
  }
}

async function getPricing(req, res) {
  try {
    return res.status(200).json(await getPricingFromDB(req.params.slug));
  } catch (err) {
    return (err instanceof AppError) ? res.status(err.status).json(err)
      : res.status(err.status || 500).json(new AppError({ err: err }));
  }
}

async function placeOrder(req, res) {
  try {
    return res.status(200).json(await placeOrderToDB(req.body));
  } catch (err) {
    return (err instanceof AppError) ? res.status(err.status).json(err)
      : res.status(err.status || 500).json(new AppError({ err: err }));
  }
}

module.exports = {
  getServices,
  getPricing,
  placeOrder
};
