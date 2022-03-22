'use strict';

const errorMessages = require('../services/errorMessages');

module.exports = (req, res, next) => {
  if (
    !req.body.type      ||
    !req.body.firstName ||
    !req.body.lastName  ||
    !req.body.email     ||
    !req.body.address   ||
    !req.body.country   ||
    !req.body.state     ||
    !req.body.zip 
  ) return res.status(400).json({ message: errorMessages.INVALID_BODY });
  next();
};
