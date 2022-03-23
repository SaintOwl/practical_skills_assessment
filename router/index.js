'use strict';

const Router = require('express');
const router = Router();

const {
  getServices,
  getPricing,
  placeOrder
} = require('../controllers/serviceController');

router.get('/home', getServices);
router.get('/service/:slug', getPricing);

router.post('/checkout', placeOrder);

module.exports = router;
