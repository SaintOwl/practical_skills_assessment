'use strict';

const Router = require('express');
const router = Router();

const checkSlug = require('../middlewares/checkSlug');
const validateCheckoutBody = require('../middlewares/validateCheckoutBody');

const {
  getServices,
  getPricing,
  placeOrder
} = require('../controllers/serviceController');

router.get('/home', getServices);
router.get('/service/:slug', checkSlug, getPricing);

router.post('/checkout', validateCheckoutBody, placeOrder);

module.exports = router;
