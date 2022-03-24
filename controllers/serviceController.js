'use strict';

const AppError = require('../services/AppError');
const checkSlug = require('../validation/checkSlug');
const validateCheckoutBody = require('../validation/validateCheckoutBody');
const {
  getServices: getServicesFromDB,
  getPricing: getPricingFromDB,
  placeOrder: placeOrderToDB
} = require('../db/dbWork');
const errorMessages = require('../services/errorMessages');

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
    const slug = req.params.slug;
    if (!checkSlug(slug)) return res.status(400).json(errorMessages.SLUG_NOT_DEFINED);
    const pricing = await getPricingFromDB(slug);
    if (!pricing) return res.status(404).json(errorMessages.CAN_NOT_FIND_PRICES_FOR_THIS_SLUG);
    return res.status(200).json(pricing);
  } catch (err) {
    return (err instanceof AppError) ? res.status(err.status).json(err)
      : res.status(err.status || 500).json(new AppError({ err: err }));
  }
}

async function placeOrder(req, res) {
  try {
    const validatorResponse = validateCheckoutBody(req.body);
    if (validatorResponse.status === 'error') return res.status(400).json(validatorResponse.error);
    const order = await placeOrderToDB(req.body);
    if (order?.status === 'error') return res.status(404).json(order.error);
    console.log(order);
    return res.status(200).json(order);
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
