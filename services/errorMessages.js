'use srtict';

module.exports = {
  SLUG_NOT_DEFINED:                   { code: 20, message: 'SLUG_NOT_DEFINED' },
  INVALID_BODY:                       { code: 30, message: 'INVALID_BODY' },
  CAN_NOT_FIND_PRICES_FOR_THIS_SLUG:  { code: 120, message: 'CAN_NOT_FIND_PRICES_FOR_THIS_SLUG' },
  PRICING_WITH_THIS_ID_NOT_FOUND:     { code: 121, message: 'PRICING_WITH_THIS_ID_NOT_FOUND' },
  _ID_ERROR: 
  { 
    code: 200, 
    message: '_id must be a string of 12 bytes or a string of 24 hex characters'
  },
  SERVER_ERROR:                       { code: 500, message: 'SERVER_ERROR' },
};
