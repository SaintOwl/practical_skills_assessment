'use strict';

const errorMessages = require('../services/errorMessages');

module.exports = (req, res, next) => {
  if (!req.params.slug) return res.status(400).json({ message: errorMessages.INVALID_SLUG });
  next();
};
