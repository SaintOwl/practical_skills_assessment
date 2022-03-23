'use strict';

const errorMessages = require('../services/errorMessages');
const statuses = {
  ok: 'ok',
  error: 'error'
};

module.exports = (body) => {
  const { 
    pricingId, firstName, lastName, email,
    address, country, state, zip
  } = body;
  if (pricingId.length !== 12 && pricingId.length !== 24) return { status: statuses.error, error: errorMessages._ID_ERROR };
  if (
    !pricingId ||
    !firstName ||
    !lastName  ||
    !email     ||
    !address   ||
    !country   ||
    !state     ||
    !zip 
  ) return { status: statuses.error, error: errorMessages.INVALID_BODY };
  return { status: statuses.ok };
};
